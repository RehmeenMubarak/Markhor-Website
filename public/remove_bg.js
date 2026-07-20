import Jimp from 'jimp';

async function removeWhiteBg() {
  try {
    const image = await Jimp.read('markhor-logo.jpeg');
    const targetColor = { r: 255, g: 255, b: 255, a: 255 }; // White
    const colorDistance = (c1, c2) => {
      return Math.sqrt(
        Math.pow(c1.r - c2.r, 2) +
        Math.pow(c1.g - c2.g, 2) +
        Math.pow(c1.b - c2.b, 2)
      );
    };

    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
      const red = this.bitmap.data[idx + 0];
      const green = this.bitmap.data[idx + 1];
      const blue = this.bitmap.data[idx + 2];
      
      const distance = colorDistance({ r: red, g: green, b: blue }, targetColor);
      
      // If the pixel is close to white (distance < 50), make it transparent
      if (distance < 50) {
        this.bitmap.data[idx + 3] = 0; // Alpha channel
      }
    });

    await image.writeAsync('markhor-logo-transparent.png');
    console.log('Successfully created markhor-logo-transparent.png');
  } catch (err) {
    console.error('Error:', err);
  }
}

removeWhiteBg();
