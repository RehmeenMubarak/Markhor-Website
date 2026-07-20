import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const quickLinks = ['About Us', 'Academics', 'Preschool', 'Admissions', 'News & Events', 'Careers'];
const programs = ['Early Years (Preschool)', 'Primary (Grades 1–5)', 'Middle School (6–8)', 'Secondary (9–10)', 'STEM Programme', 'Arts & Sports'];

export default function Footer() {
  return (
    <footer id="contact" style={{ background: '#111827', color: 'white' }}>
      {/* Main Footer */}
      <div className="container" style={{ padding: '72px 2rem 48px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1.5fr', gap: 48 }}>

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <motion.img 
                src="/markhor-logo-transparent.png" 
                alt="Markhor School System" 
                style={{ height: 50, width: 'auto', filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.5))' }} 
              />
              <div>
                <div style={{ fontFamily: 'Poppins', fontWeight: 800, fontSize: '1.2rem' }}>Markhor</div>
                <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.6)', fontWeight: 700, letterSpacing: 1 }}>SCHOOL SYSTEM</div>
              </div>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginBottom: 28, maxWidth: 300 }}>
              Delivering world-class Cambridge education from Preschool to Grade 10, built on excellence, character, and innovation.
            </p>

            {/* Social */}
            <div style={{ display: 'flex', gap: 10 }}>
              {['📘', '📸', '🐦', '▶️'].map((icon, i) => (
                <motion.a key={i} href="#" whileHover={{ scale: 1.15, y: -2 }}
                  style={{ width: 40, height: 40, borderRadius: 12, background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', cursor: 'pointer', transition: 'background 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(15,95,255,0.4)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '0.95rem', color: '#FFC857', marginBottom: 20, letterSpacing: 0.5 }}>Quick Links</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {quickLinks.map(link => (
                <li key={link}>
                  <a href="#" style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.6)', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.target.style.color = 'white'}
                    onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.6)'}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '0.95rem', color: '#F5A500', marginBottom: 20, letterSpacing: 0.5 }}>Programs</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {programs.map(prog => (
                <li key={prog}>
                  <a href="#" style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.6)', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.target.style.color = 'white'}
                    onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.6)'}
                  >
                    {prog}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div>
            <h4 style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '0.95rem', color: '#FF6B6B', marginBottom: 20, letterSpacing: 0.5 }}>Contact Us</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 32 }}>
              <div style={{ display: 'flex', gap: 10, color: 'rgba(255,255,255,0.7)', fontSize: '0.88rem' }}>
                <MapPin size={16} style={{ flexShrink: 0, marginTop: 2, color: '#FF6B6B' }} />
                <span>18-C civic centre faisal town lahore</span>
              </div>
              <div style={{ display: 'flex', gap: 10, color: 'rgba(255,255,255,0.7)', fontSize: '0.88rem' }}>
                <Phone size={16} style={{ flexShrink: 0, color: '#F5A500' }} />
                <span>(042) 35162426</span>
              </div>
              <div style={{ display: 'flex', gap: 10, color: 'rgba(255,255,255,0.7)', fontSize: '0.88rem' }}>
                <Mail size={16} style={{ flexShrink: 0, color: '#FFC857' }} />
                <span>admissions@markhorschool.edu.pk</span>
              </div>
            </div>

            {/* Newsletter */}
            <h5 style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', marginBottom: 12, letterSpacing: 0.5 }}>NEWSLETTER</h5>
            <div style={{ display: 'flex', gap: 8 }}>
              <input
                type="email"
                placeholder="Your email"
                style={{
                  flex: 1, background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)',
                  borderRadius: 12, padding: '10px 14px', color: 'white', fontSize: '0.85rem', outline: 'none',
                  fontFamily: 'Inter',
                }}
              />
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
                className="btn btn-primary" style={{ padding: '10px 18px', borderRadius: 12, fontSize: '0.85rem' }}>
                →
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', padding: '20px 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.4)' }}>
            © {new Date().getFullYear()} Markhor School. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: 24, fontSize: '0.82rem', color: 'rgba(255,255,255,0.4)' }}>
            <a href="#" style={{ color: 'inherit' }}>Privacy Policy</a>
            <a href="#" style={{ color: 'inherit' }}>Terms of Use</a>
            <a href="#" style={{ color: 'inherit' }}>Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
