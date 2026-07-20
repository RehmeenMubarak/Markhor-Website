import { motion } from 'framer-motion';

export default function FinalCTA() {
  return (
    <section style={{ background: '#FAFBFC', padding: '0 0 96px' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            background: 'linear-gradient(135deg, #111827 0%, #1F2937 100%)',
            borderRadius: 40, padding: '80px 64px',
            position: 'relative', overflow: 'hidden', textAlign: 'center',
          }}
        >
          {/* Background blobs */}
          <div className="float" style={{ position: 'absolute', top: '-30%', right: '-10%', width: '50%', height: '200%', background: 'radial-gradient(circle, rgba(15,95,255,0.2) 0%, transparent 70%)', filter: 'blur(40px)' }} />
          <div className="float-2" style={{ position: 'absolute', bottom: '-30%', left: '-10%', width: '40%', height: '150%', background: 'radial-gradient(circle, rgba(91,203,142,0.15) 0%, transparent 70%)', filter: 'blur(40px)' }} />

          {/* Stars floating */}
          <div className="float" style={{ position: 'absolute', top: '10%', left: '8%', fontSize: '1.5rem', opacity: 0.4 }}>⭐</div>
          <div className="float-3" style={{ position: 'absolute', top: '15%', right: '6%', fontSize: '1.2rem', opacity: 0.35 }}>✨</div>
          <div className="float-2" style={{ position: 'absolute', bottom: '15%', left: '10%', fontSize: '1.8rem', opacity: 0.3 }}>🌟</div>

          <div style={{ position: 'relative', zIndex: 2 }}>
            <span style={{ display: 'inline-block', background: 'rgba(255,200,87,0.15)', color: '#FFC857', padding: '7px 20px', borderRadius: 999, fontSize: '0.8rem', fontWeight: 700, letterSpacing: 1, marginBottom: 28 }}>
              LIMITED SEATS AVAILABLE
            </span>
            <h2 style={{ fontFamily: 'Poppins', fontWeight: 800, fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', color: 'white', lineHeight: 1.2, marginBottom: 20 }}>
              Give Your Child the Education <span style={{ color: '#FFC857' }}>They Deserve</span>
            </h2>
            <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.72)', maxWidth: 560, margin: '0 auto 48px', lineHeight: 1.75 }}>
              Join the families who trust Markhor School to shape their children's future with excellence, values, and innovation.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <motion.a href="#admissions" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
                className="btn btn-yellow" style={{ padding: '16px 40px', fontSize: '1.05rem' }}>
                Apply Now →
              </motion.a>
              <motion.a href="#admissions" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
                className="btn btn-outline-white" style={{ padding: '16px 40px', fontSize: '1.05rem' }}>
                Schedule a Campus Visit
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
