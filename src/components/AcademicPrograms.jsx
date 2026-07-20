import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const programs = [
  {
    title: 'Preschool', age: 'Ages 2.5–5', icon: '🎨',
    desc: 'Play-based learning, creative arts, early literacy, and social development in a warm, nurturing environment.',
    bg: 'linear-gradient(135deg, #FFF8E7 0%, #FFEFC8 100%)', border: '#F5A500',
    badge: 'Early Years', badgeColor: '#C47E00', badgeBg: '#FFF8E7',
    href: '#preschool',
  },
  {
    title: 'Primary School', age: 'Grades 1–5', icon: '📚',
    desc: 'Building strong foundations in literacy, numeracy, science, and creative thinking through Cambridge Primary.',
    bg: 'linear-gradient(135deg, #EEF0FB 0%, #DCE0F8 100%)', border: '#2B3BAE',
    badge: 'Cambridge', badgeColor: '#2B3BAE', badgeBg: '#EEF0FB',
    href: '#academics',
  },
  {
    title: 'Middle School', age: 'Grades 6–8', icon: '🔬',
    desc: 'Deepening understanding across subjects with STEM focus, languages, and extracurricular leadership.',
    bg: 'linear-gradient(135deg, #FDF0F0 0%, #F8DCDC 100%)', border: '#8B1A1A',
    badge: 'STEM Focus', badgeColor: '#8B1A1A', badgeBg: '#FDF0F0',
    href: '#academics',
  },
  {
    title: 'Secondary', age: 'Grades 9–10', icon: '🎓',
    desc: 'Advanced academic preparation with critical thinking, research skills, and university readiness pathways.',
    bg: 'linear-gradient(135deg, #1E2B8A 0%, #2B3BAE 100%)', border: '#F5A500',
    badge: 'University Prep', badgeColor: '#F5A500', badgeBg: 'rgba(245,165,0,0.15)',
    href: '#academics',
  },
];

export default function AcademicPrograms() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="academics" className="section" style={{ background: 'white' }}>
      <div className="container">
        <motion.div
          ref={ref}
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="badge badge-crimson">Academic Programs</span>
          <h2 className="display-lg">Nurturing Excellence at <span style={{ color: '#2B3BAE' }}>Every Stage</span></h2>
          <p className="body-lg">From your child's first classroom to preparing them for the world — a continuum of quality education.</p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 28 }}>
          {programs.map((prog, i) => (
            <motion.a
              key={prog.title}
              href={prog.href}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -10, boxShadow: `0 28px 64px ${prog.border}25` }}
              style={{
                background: prog.bg, borderRadius: 28, padding: 36,
                border: `1px solid ${prog.border}30`,
                display: 'block', transition: 'all 0.35s ease',
                boxShadow: '0 8px 24px rgba(0,0,0,0.05)',
                cursor: 'pointer',
              }}
            >
              {/* Icon */}
              <div style={{ fontSize: '3rem', marginBottom: 20 }}>{prog.icon}</div>

              {/* Badge */}
              <span style={{ display: 'inline-block', background: prog.badgeBg, color: prog.badgeColor, border: `1px solid ${prog.badgeColor}40`, padding: '4px 12px', borderRadius: 999, fontSize: '0.72rem', fontWeight: 700, letterSpacing: 0.5, marginBottom: 16 }}>
                {prog.badge}
              </span>

              <h3 style={{ fontFamily: 'Poppins', fontWeight: 800, fontSize: '1.4rem', color: '#111827', marginBottom: 6 }}>{prog.title}</h3>
              <div style={{ fontWeight: 600, fontSize: '0.85rem', color: prog.badgeColor, marginBottom: 14 }}>{prog.age}</div>
              <p style={{ fontSize: '0.9rem', color: '#6B7280', lineHeight: 1.65, marginBottom: 24 }}>{prog.desc}</p>

              <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: prog.border, fontWeight: 700, fontSize: '0.9rem' }}>
                Learn More <span>→</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
