import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const steps = [
  { num: '01', title: 'Inquiry', icon: '📋', desc: 'Submit an online inquiry form or visit our admissions office to learn more about our programs and availability.' },
  { num: '02', title: 'Campus Tour', icon: '🏫', desc: 'Schedule a personalized campus tour to experience our facilities, meet our faculty, and see our learning environment.' },
  { num: '03', title: 'Assessment', icon: '📝', desc: 'An age-appropriate, informal interaction session to understand your child\'s current learning stage and interests.' },
  { num: '04', title: 'Admission', icon: '✅', desc: 'Receive your admission offer, complete required documentation, and pay the enrollment fee to secure your seat.' },
  { num: '05', title: 'Enrollment', icon: '🎓', desc: 'Welcome to Markhor! Attend orientation, meet your class teacher, and begin your child\'s learning journey with us.' },
];

const faqs = [
  { q: 'What is the school\'s student-to-teacher ratio?', a: 'For Preschool, we maintain a 1:8 ratio. For Grades 1–10, our classes have no more than 22 students per certified teacher, ensuring personalized attention.' },
  { q: 'What curriculum does Markhor School follow?', a: 'We follow the Cambridge International Curriculum (CAIE) from Grades 1–10, supplemented with STEM programs, local studies, and character education.' },
  { q: 'Are school buses available?', a: 'Yes, we offer a comprehensive, GPS-tracked school bus service covering major residential areas. Full transport schedules are available at our admissions office.' },
  { q: 'What extracurricular activities are offered?', a: 'We offer 25+ activities including robotics, coding, football, swimming, cricket, music, drama, debate, art, and community service clubs.' },
  { q: 'Is there a sibling discount?', a: 'Yes, we offer a 10% discount on tuition fees for second and subsequent siblings enrolled at Markhor School at the same time.' },
];

export default function AdmissionsProcess() {
  const [activeStep, setActiveStep] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <section id="admissions" style={{ background: 'white', padding: '96px 0' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="badge badge-blue">Admissions 2026–2027</span>
          <h2 className="display-lg">Your Journey Starts <span style={{ color: '#0F5FFF' }}>Here</span></h2>
          <p className="body-lg">A simple, transparent, and welcoming admissions process designed around your family's needs.</p>
        </div>

        {/* Step Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 16, marginBottom: 80 }}>
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              onClick={() => setActiveStep(i)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              style={{
                background: activeStep === i ? '#2B3BAE' : '#F7F9FC',
                borderRadius: 24, padding: '28px 20px',
                boxShadow: activeStep === i ? '0 16px 40px rgba(43,59,174,0.28)' : '0 4px 12px rgba(0,0,0,0.05)',
                cursor: 'pointer', transition: 'all 0.3s ease',
                border: activeStep === i ? '2px solid #2B3BAE' : '2px solid transparent',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '2rem', marginBottom: 12 }}>{step.icon}</div>
              <div style={{ fontFamily: 'Poppins', fontWeight: 800, fontSize: '0.75rem', color: activeStep === i ? 'rgba(255,255,255,0.6)' : '#9CA3AF', marginBottom: 6, letterSpacing: 1 }}>STEP {step.num}</div>
              <div style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '0.95rem', color: activeStep === i ? 'white' : '#111827' }}>{step.title}</div>
            </motion.div>
          ))}
        </div>

        {/* Active Step Detail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            style={{
              background: '#EEF0FB', borderRadius: 24, padding: '32px 40px',
              marginBottom: 80, display: 'flex', alignItems: 'center', gap: 24,
            }}
          >
            <span style={{ fontSize: '3rem' }}>{steps[activeStep].icon}</span>
            <div>
              <h3 style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '1.25rem', color: '#2B3BAE', marginBottom: 8 }}>
                Step {steps[activeStep].num}: {steps[activeStep].title}
              </h3>
              <p style={{ fontSize: '1rem', color: '#374151', lineHeight: 1.7 }}>{steps[activeStep].desc}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* FAQ */}
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <h3 style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '1.75rem', color: '#111827', textAlign: 'center', marginBottom: 40 }}>
            Frequently Asked <span style={{ color: '#8B1A1A' }}>Questions</span>
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                style={{
                  background: 'white', borderRadius: 18, overflow: 'hidden',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.05)',
                  border: openFaq === i ? '2px solid #2B3BAE' : '2px solid #F3F4F6',
                  transition: 'border-color 0.25s',
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '20px 24px', background: 'none', cursor: 'pointer',
                    fontFamily: 'Poppins', fontWeight: 600, fontSize: '0.95rem',
                    color: openFaq === i ? '#2B3BAE' : '#111827', textAlign: 'left',
                  }}
                >
                  {faq.q}
                  <motion.span animate={{ rotate: openFaq === i ? 180 : 0 }} transition={{ duration: 0.25 }} style={{ flexShrink: 0, marginLeft: 16, color: '#2B3BAE', fontSize: '1.2rem' }}>
                    ↓
                  </motion.span>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div style={{ padding: '0 24px 20px', fontSize: '0.92rem', color: '#6B7280', lineHeight: 1.75 }}>
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
