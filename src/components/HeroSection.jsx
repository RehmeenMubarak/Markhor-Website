import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const trustBadges = [
  { icon: '🏆', label: '20+ Years' },
  { icon: '📜', label: 'Cambridge Curriculum' },
  { icon: '🔬', label: 'STEM Education' },
  { icon: '⭐', label: 'Character Building' },
];

const statCards = [
  { number: '50+',    label: 'Certified Teachers',   icon: '🎓',   color: '#FFF8E7', border: '#F5A500' },
  { number: 'Intl.',  label: 'Curriculum',           icon: '🌍',   color: '#EEF0FB', border: '#2B3BAE' },
];

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y       = useTransform(scrollYProgress, [0, 1], ['0%',  '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      style={{
        minHeight: '100vh',
        /* Logo-faithful gradient: Royal Blue ➜ Crimson */
        background: 'linear-gradient(135deg, #1E2B8A 0%, #2B3BAE 40%, #7A1010 100%)',
        position: 'relative', overflow: 'hidden',
        display: 'flex', alignItems: 'center',
        paddingTop: 80,
      }}
    >
      {/* ── Background Decorations ── */}
      <motion.div style={{ y, position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        {/* Soft color blobs */}
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '50vw', height: '50vw', borderRadius: '50%', background: 'radial-gradient(circle, rgba(245,165,0,0.18) 0%, transparent 70%)', filter: 'blur(70px)' }} />
        <div style={{ position: 'absolute', bottom: '-15%', left: '-8%', width: '55vw', height: '55vw', borderRadius: '50%', background: 'radial-gradient(circle, rgba(43,59,174,0.30) 0%, transparent 70%)', filter: 'blur(90px)' }} />
        <div style={{ position: 'absolute', top: '30%', left: '20%', width: '25vw', height: '25vw', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)', filter: 'blur(40px)' }} />

        {/* Floating shapes in brand colors */}
        <div className="float"  style={{ position: 'absolute', top: '15%', right: '12%', width: 90,  height: 90,  borderRadius: '40% 60% 60% 40% / 60% 40% 60% 40%', background: 'rgba(245,165,0,0.28)', filter: 'blur(2px)' }} />
        <div className="float-2" style={{ position: 'absolute', bottom: '25%', right: '8%', width: 55, height: 55, borderRadius: '50%', background: 'rgba(139,26,26,0.35)' }} />
        <div className="float-3" style={{ position: 'absolute', top: '60%', left: '5%', width: 40, height: 40, borderRadius: 8, background: 'rgba(245,165,0,0.30)', transform: 'rotate(15deg)' }} />
        <div className="float"  style={{ position: 'absolute', top: '35%', right: '27%', width: 22, height: 22, borderRadius: '50%', background: 'rgba(255,255,255,0.35)' }} />

        {/* Dot grid */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.6 }} />
      </motion.div>

      <motion.div style={{ opacity, position: 'relative', zIndex: 10, width: '100%' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center', padding: '64px 0' }}>

            {/* ── Left Column ── */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {/* Admissions badge */}
              <motion.span
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  background: 'rgba(245,165,0,0.18)', border: '1px solid rgba(245,165,0,0.4)',
                  color: '#F5D060', padding: '7px 18px', borderRadius: 999,
                  fontSize: '0.8rem', fontWeight: 700, letterSpacing: 1,
                  backdropFilter: 'blur(8px)', marginBottom: 28,
                }}
              >
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#F5A500', display: 'inline-block' }} />
                Admissions Open 2026–2027
              </motion.span>

              <motion.h1
                className="display-xl"
                style={{ color: 'white', marginBottom: 24 }}
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }}
              >
                Shaping Tomorrow's{' '}
                <span style={{ color: '#F5A500' }}>Leaders</span>{' '}
                Through Inspired Learning
              </motion.h1>

              <motion.p
                style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.80)', marginBottom: 40, lineHeight: 1.75, maxWidth: 520 }}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
              >
                Markhor School System delivers a world-class Cambridge curriculum from Preschool to Grade 10, building character, confidence, and academic excellence.
              </motion.p>

              {/* CTA */}
              <motion.div
                style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 56 }}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
              >
                <a href="#admissions" className="btn btn-gold">Apply Now →</a>
                <a href="#academics"  className="btn btn-outline-white">Explore Programs</a>
              </motion.div>

              {/* Trust Badges */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
                <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.45)', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16 }}>Trusted by Families Worldwide</div>
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  {trustBadges.map((b, i) => (
                    <motion.div
                      key={b.label}
                      initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8 + i * 0.1 }}
                      style={{
                        display: 'flex', alignItems: 'center', gap: 7,
                        background: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.18)',
                        padding: '7px 14px', borderRadius: 999, backdropFilter: 'blur(8px)',
                      }}
                    >
                      <span>{b.icon}</span>
                      <span style={{ color: 'white', fontSize: '0.8rem', fontWeight: 600 }}>{b.label}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* ── Right Column ── */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{ position: 'relative' }}
            >
              {/* Logo featured prominently in hero */}
              <motion.div
                className="float"
                style={{
                  display: 'flex', justifyContent: 'center', alignItems: 'center',
                  marginBottom: 32,
                }}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, type: 'spring', stiffness: 120 }}
              >
                <div style={{
                  display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 12,
                }}>
                  <motion.img
                    initial={{ rotate: -180, scale: 0 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.6 }}
                    src="/markhor-logo-transparent.png"
                    alt="Markhor School System"
                    style={{ height: 200, width: 'auto', objectFit: 'contain', filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.8))' }}
                  />
                </div>
              </motion.div>

              {/* Main school image below logo */}
              <div style={{ borderRadius: 28, overflow: 'hidden', boxShadow: '0 24px 64px rgba(0,0,0,0.32)', border: '3px solid rgba(255,255,255,0.12)' }}>
                <img
                  src="/hero_students.png"
                  alt="Markhor School students"
                  style={{ width: '100%', height: 300, objectFit: 'cover', display: 'block' }}
                  onError={e => {
                    e.target.src = 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80';
                  }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(30,43,138,0.35) 0%, transparent 50%)' }} />
              </div>

              {/* Floating Stat Cards */}
              {statCards.map((card, i) => {
                const positions = [
                  { top: -16, left: -24  },
                  { bottom: 10, right: -16 },
                ];
                const pos = positions[i];
                return (
                  <motion.div
                    key={card.label}
                    className="float"
                    style={{
                      ...pos, position: 'absolute',
                      background: 'rgba(255,255,255,0.96)',
                      borderRadius: 16, padding: '12px 16px',
                      boxShadow: '0 12px 32px rgba(0,0,0,0.14)',
                      backdropFilter: 'blur(10px)',
                      border: `2px solid ${card.border}25`,
                      minWidth: 140, animationDelay: `${i * 0.8}s`,
                    }}
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9 + i * 0.15, type: 'spring' }}
                  >
                    <div style={{ fontSize: '1.4rem', marginBottom: 4 }}>{card.icon}</div>
                    <div style={{ fontFamily: 'Poppins', fontWeight: 800, fontSize: '1.2rem', color: '#111827' }}>{card.number}</div>
                    <div style={{ fontSize: '0.72rem', color: '#6B7280', fontWeight: 500 }}>{card.label}</div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Curved Bottom Divider */}
      <div style={{ position: 'absolute', bottom: -1, left: 0, right: 0 }}>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ width: '100%', height: 80, display: 'block' }}>
          <path d="M0,80 C480,0 960,0 1440,80 L1440,80 L0,80 Z" fill="#F9FAFB" />
        </svg>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          #home > div > div > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
