import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const features = [
  { icon: '🌍', title: 'International Curriculum', desc: 'Cambridge-aligned learning framework preparing students for global education.', color: '#EEF0FB', iconBg: 'linear-gradient(135deg,#2B3BAE,#1E2B8A)' },
  { icon: '🖥️', title: 'Smart Classrooms', desc: 'State-of-the-art digital infrastructure enabling interactive, modern learning.', color: '#EEF0FB', iconBg: 'linear-gradient(135deg,#3547C8,#2B3BAE)' },
  { icon: '🔬', title: 'STEM Learning', desc: 'Dedicated labs for science, technology, engineering, robotics, and mathematics.', color: '#FFF8E7', iconBg: 'linear-gradient(135deg,#F5A500,#C47E00)' },
  { icon: '⚽', title: 'Sports Excellence', desc: 'Comprehensive sports facilities and coaching for physical development.', color: '#FDF0F0', iconBg: 'linear-gradient(135deg,#8B1A1A,#6A1212)' },
  { icon: '🎨', title: 'Arts & Creativity', desc: 'Music, visual arts, drama and creative expression embedded in the curriculum.', color: '#FFF8E7', iconBg: 'linear-gradient(135deg,#F5A500,#8B1A1A)' },
  { icon: '🌱', title: 'Character Education', desc: 'Values-based development building leadership, integrity, and empathy.', color: '#EEF0FB', iconBg: 'linear-gradient(135deg,#2B3BAE,#8B1A1A)' },
];

function FeatureCard({ icon, title, desc, color, iconBg, delay }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -8, boxShadow: '0 24px 56px rgba(0,0,0,0.10)' }}
      style={{
        background: 'white', borderRadius: 24, padding: '28px 24px',
        boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
        border: '1px solid rgba(229,231,235,0.5)',
        transition: 'all 0.3s ease', cursor: 'default',
      }}
    >
      <div style={{
        width: 54, height: 54, borderRadius: 16,
        background: iconBg, display: 'flex', alignItems: 'center',
        justifyContent: 'center', fontSize: '1.5rem', marginBottom: 18,
        boxShadow: '0 6px 16px rgba(0,0,0,0.15)',
      }}>
        {icon}
      </div>
      <h3 style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '1.1rem', color: '#111827', marginBottom: 10 }}>{title}</h3>
      <p style={{ fontSize: '0.9rem', color: '#6B7280', lineHeight: 1.65 }}>{desc}</p>
    </motion.div>
  );
}

export default function WhyMarkhor() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="section" style={{ background: '#FAFBFC' }}>
      <div className="container">
        {/* Header */}
        <motion.div
          ref={ref}
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="badge badge-blue">Why Markhor School</span>
          <h2 className="display-lg" style={{ color: '#111827' }}>An Education That <span style={{ color: '#2B3BAE' }}>Goes Beyond</span> the Classroom</h2>
          <p className="body-lg">We combine Cambridge academic rigour with 21st-century skills, character education, and holistic development.</p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid-3" style={{ marginBottom: 80 }}>
          {features.map((f, i) => (
            <FeatureCard key={f.title} {...f} delay={i * 0.1} />
          ))}
        </div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            background: 'linear-gradient(135deg, #2B3BAE 0%, #8B1A1A 100%)',
            borderRadius: 28, padding: '48px 56px',
            display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 32,
          }}
        >
          {[
            { num: '50+', label: 'Faculty Members' },
            { num: '98%', label: 'Parent Satisfaction' },
            { num: '25+', label: 'Activities' },
          ].map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'Poppins', fontWeight: 800, fontSize: '2.5rem', color: 'white', lineHeight: 1 }}>{s.num}</div>
              <div style={{ color: 'rgba(255,255,255,0.7)', marginTop: 8, fontSize: '0.9rem' }}>{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
