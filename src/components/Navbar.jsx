import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home',       href: '#home'        },
  { name: 'About',      href: '#about'       },
  {
    name: 'Academics',  href: '#academics',
    mega: [
      { label: 'Preschool',    sub: 'Ages 2.5–5',   icon: '🎨' },
      { label: 'Primary',      sub: 'Grades 1–5',   icon: '📚' },
      { label: 'Middle School',sub: 'Grades 6–8',   icon: '🔬' },
      { label: 'Secondary',    sub: 'Grades 9–10',  icon: '🎓' },
    ]
  },
  { name: 'Preschool',  href: '#preschool'   },
  { name: 'Admissions', href: '#admissions'  },
  { name: 'News',       href: '#news'        },
  { name: 'Contact',    href: '#contact'     },
];

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false);
  const [mobileOpen,  setMobileOpen]  = useState(false);
  const [megaOpen,    setMegaOpen]    = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  /* colors driven by scroll state */
  const textCol  = scrolled ? '#111827'                : 'rgba(255,255,255,0.92)';
  const hoverBg  = scrolled ? 'rgba(43,59,174,0.06)'  : 'rgba(255,255,255,0.12)';
  const hoverCol = scrolled ? '#2B3BAE'                : '#FFFFFF';

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
          backgroundColor: scrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
          backdropFilter:  scrolled ? 'blur(20px)'             : 'none',
          borderBottom:    scrolled ? '1px solid rgba(43,59,174,0.10)' : 'none',
          boxShadow:       scrolled ? '0 4px 24px rgba(43,59,174,0.08)' : 'none',
          transition: 'all 0.4s ease',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 80 }}>

          {/* ── Logo ── */}
          <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <motion.img
              initial={{ scale: 0.5, opacity: 0, rotate: -15 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
              src="/markhor-logo-transparent.png"
              alt="Markhor School System Logo"
              style={{
                height: 56, width: 'auto',
                objectFit: 'contain',
                filter: scrolled ? 'none' : 'drop-shadow(0 0 10px rgba(255,255,255,0.8))',
                transition: 'all 0.4s ease',
              }}
            />
            <div>
              <div style={{
                fontFamily: 'Poppins', fontWeight: 800, fontSize: '1.15rem',
                color: scrolled ? '#2B3BAE' : 'white',
                lineHeight: 1.1, transition: 'color 0.4s',
              }}>
                Markhor
              </div>
              <div style={{
                fontSize: '0.6rem',
                color: scrolled ? '#8B1A1A' : 'rgba(255,255,255,0.65)',
                fontWeight: 700, letterSpacing: 1.5,
                transition: 'color 0.4s',
              }}>
                SCHOOL SYSTEM
              </div>
            </div>
          </a>

          {/* ── Desktop Nav ── */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: 2 }} className="desktop-nav">
            {navLinks.map(link => (
              <div
                key={link.name}
                style={{ position: 'relative' }}
                onMouseEnter={() => link.mega && setMegaOpen(true)}
                onMouseLeave={() => link.mega && setMegaOpen(false)}
              >
                <a
                  href={link.href}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 4,
                    padding: '8px 13px', borderRadius: 10,
                    fontSize: '0.86rem', fontWeight: 600,
                    color: textCol, transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = hoverBg;
                    e.currentTarget.style.color      = hoverCol;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color      = textCol;
                  }}
                >
                  {link.name}
                  {link.mega && <span style={{ fontSize: '0.6rem', marginTop: 1 }}>▾</span>}
                </a>

                {/* Mega Menu */}
                {link.mega && (
                  <AnimatePresence>
                    {megaOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{    opacity: 0, y: 8, scale: 0.97 }}
                        transition={{ duration: 0.18 }}
                        style={{
                          position: 'absolute', top: '100%', left: -20,
                          background: 'white', borderRadius: 20, padding: 20,
                          boxShadow: '0 24px 64px rgba(43,59,174,0.14)',
                          width: 380, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10,
                          border: '1px solid rgba(43,59,174,0.08)',
                        }}
                      >
                        {link.mega.map(item => (
                          <a
                            key={item.label} href="#academics"
                            style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 14px', borderRadius: 12, transition: 'all 0.2s' }}
                            onMouseEnter={e => e.currentTarget.style.background = '#EEF0FB'}
                            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                          >
                            <span style={{ fontSize: '1.5rem' }}>{item.icon}</span>
                            <div>
                              <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#111827' }}>{item.label}</div>
                              <div style={{ fontSize: '0.75rem', color: '#9CA3AF' }}>{item.sub}</div>
                            </div>
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* ── CTA Buttons ── */}
          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }} className="desktop-nav">
            <a href="#admissions" className="btn btn-secondary" style={{ padding: '9px 20px', fontSize: '0.85rem' }}>Book Tour</a>
            <a href="#admissions" className="btn btn-primary"   style={{ padding: '9px 20px', fontSize: '0.85rem' }}>Apply Now</a>
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ background: 'none', color: scrolled ? '#2B3BAE' : 'white', display: 'none', padding: 8 }}
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5">
              {mobileOpen
                ? <><line x1="18" y1="6"  x2="6"  y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
                : <><line x1="3" y1="6"  x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
              }
            </svg>
          </button>
        </div>
      </motion.header>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{    opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed', top: 80, right: 0, bottom: 0, width: '80%', maxWidth: 340,
              background: 'white', zIndex: 999, padding: '32px 24px',
              boxShadow: '-8px 0 32px rgba(43,59,174,0.12)', overflowY: 'auto',
            }}
          >
            {/* Logo in drawer */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 32, paddingBottom: 24, borderBottom: '1px solid #EEF0FB' }}>
              <motion.img 
                initial={{ scale: 0, rotate: -90 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                src="/markhor-logo-transparent.png" alt="Markhor" style={{ height: 44, borderRadius: 8 }} 
              />
              <div>
                <div style={{ fontFamily: 'Poppins', fontWeight: 800, color: '#2B3BAE', fontSize: '1rem' }}>Markhor</div>
                <div style={{ fontSize: '0.6rem', color: '#8B1A1A', fontWeight: 700, letterSpacing: 1 }}>SCHOOL SYSTEM</div>
              </div>
            </div>

            {navLinks.map(link => (
              <a
                key={link.name} href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{ display: 'block', padding: '14px 0', fontSize: '1.1rem', fontWeight: 600, color: '#111827', borderBottom: '1px solid #F3F4F6' }}
              >
                {link.name}
              </a>
            ))}
            <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 12 }}>
              <a href="#admissions" className="btn btn-secondary" style={{ justifyContent: 'center' }}>Book Tour</a>
              <a href="#admissions" className="btn btn-primary"   style={{ justifyContent: 'center' }}>Apply Now</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 1024px) { .desktop-nav  { display: none   !important; } }
        @media (max-width: 1024px) { .mobile-toggle{ display: flex   !important; } }
      `}</style>
    </>
  );
}
