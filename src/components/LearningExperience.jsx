import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const facilities = [
  { icon: '🤖', title: 'Robotics & AI Lab', desc: 'State-of-the-art robotics kits and coding workstations for hands-on technology learning.', img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=500&q=75', tag: 'STEM' },
  { icon: '🔬', title: 'Science Laboratories', desc: 'Fully equipped chemistry, physics, and biology labs with modern instruments.', img: 'https://images.unsplash.com/photo-1532094349884-543559c2f54a?w=500&q=75', tag: 'Science' },
  { icon: '🌐', title: 'Digital Classrooms', desc: 'Interactive smart boards, high-speed internet, and individual tablet stations.', img: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=500&q=75', tag: 'Technology' },
  { icon: '🎨', title: 'Art Studios', desc: 'Dedicated studios for painting, sculpture, digital art, and creative expression.', img: 'https://images.unsplash.com/photo-1607453998774-d533f65dac99?w=500&q=75', tag: 'Arts' },
  { icon: '📚', title: 'Premium Library', desc: 'Over 15,000 books, digital archives, quiet reading zones, and research centers.', img: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&q=75', tag: 'Library' },
  { icon: '⚽', title: 'Sports Complex', desc: 'Olympic-standard fields, indoor gym, swimming pool, and dedicated coaching staff.', img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&q=75', tag: 'Sports' },
];

export default function LearningExperience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="facilities" className="section" style={{ background: '#FAFBFC' }}>
      <div className="container">
        <motion.div ref={ref} className="section-header" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
          <span className="badge badge-green">Campus Facilities</span>
          <h2 className="display-lg">World-Class <span style={{ color: '#0F5FFF' }}>Learning Spaces</span></h2>
          <p className="body-lg">Every facility at Markhor is designed to inspire curiosity, support discovery, and enable excellence.</p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 28 }}>
          {facilities.map((fac, i) => (
            <motion.div
              key={fac.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, boxShadow: '0 28px 64px rgba(0,0,0,0.10)' }}
              style={{
                background: 'white', borderRadius: 24, overflow: 'hidden',
                boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
                border: '1px solid rgba(229,231,235,0.5)',
                cursor: 'default', transition: 'all 0.3s ease',
              }}
            >
              <div style={{ height: 200, position: 'relative', overflow: 'hidden' }}>
                <img src={fac.img} alt={fac.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  onMouseEnter={e => e.target.style.transform = 'scale(1.08)'}
                  onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                />
                <div style={{ position: 'absolute', top: 16, left: 16, background: 'rgba(255,255,255,0.95)', borderRadius: 8, padding: '4px 12px', fontSize: '0.72rem', fontWeight: 700, color: '#0F5FFF' }}>
                  {fac.tag}
                </div>
              </div>
              <div style={{ padding: '24px' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: 10 }}>{fac.icon}</div>
                <h3 style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '1.1rem', color: '#111827', marginBottom: 8 }}>{fac.title}</h3>
                <p style={{ fontSize: '0.88rem', color: '#6B7280', lineHeight: 1.65 }}>{fac.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
