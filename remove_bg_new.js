const Jimp = require('jimp');

async function removeWhiteBg() {
  try {
    const image = await Jimp.read('C:/Users/IT Sales Industrad/.gemini/antigravity/brain/f08852c4-ca08-40c7-ba5a-be78fa7e31e8/media__1784278765303.png');
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

    await image.writeAsync('./public/markhor-logo-transparent.png');
    console.log('Successfully created ./public/markhor-logo-transparent.png');
  } catch (err) {
    console.error('Error:', err);
  }
}

removeWhiteBg();
