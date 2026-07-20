import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// =====================
// DATA
// =====================
const floatingCards = [
  { icon: '🎂', label: 'Ages 2.5–5 Years', color: '#0D6EFD', bg: '#EEF3FF' },
  { icon: '🧩', label: 'Play-Based Learning', color: '#56C596', bg: '#EAFAF4' },
  { icon: '🛡️', label: 'Safe & Caring Environment', color: '#FFC857', bg: '#FFF8E7' },
  { icon: '👩‍🏫', label: 'Qualified ECE Teachers', color: '#FF6B6B', bg: '#FFF4EC' },
];

const featureCards = [
  { icon: '🧱', title: 'Learning Through Play', desc: 'Structured play activities that develop cognitive, social, and motor skills naturally.', gradient: 'linear-gradient(135deg, #0D6EFD, #56C596)', bg: '#EEF3FF' },
  { icon: '🎵', title: 'Creative Arts & Music', desc: 'Daily music, painting, and craft sessions to nurture creativity and self-expression.', gradient: 'linear-gradient(135deg, #FFC857, #FF8C42)', bg: '#FFF8E7' },
  { icon: '🌿', title: 'Outdoor Discovery', desc: 'Dedicated outdoor play, nature exploration, and gross motor development every day.', gradient: 'linear-gradient(135deg, #56C596, #3DB570)', bg: '#EAFAF4' },
  { icon: '💬', title: 'Language & Communication', desc: 'Bilingual story time, phonics, vocabulary building, and communication confidence.', gradient: 'linear-gradient(135deg, #FF6B6B, #EE5A24)', bg: '#FFF4EC' },
];

const timeline = [
  { time: '8:00', label: 'Circle Time', icon: '🔵', desc: 'Morning greetings, calendar, and songs' },
  { time: '8:45', label: 'Creative Learning', icon: '🎨', desc: 'Art, crafts, or building activities' },
  { time: '10:00', label: 'Outdoor Play', icon: '⛅', desc: 'Physical play & nature discovery' },
  { time: '10:45', label: 'Storytelling', icon: '📖', desc: 'Interactive story time & phonics' },
  { time: '12:00', label: 'Lunch', icon: '🥗', desc: 'Nutritious balanced meal' },
  { time: '12:45', label: 'Nap Time', icon: '😴', desc: 'Rest & quiet calm time' },
  { time: '13:45', label: 'STEM Fun', icon: '🔬', desc: 'Simple science & counting games' },
  { time: '14:30', label: 'Home Time', icon: '🏠', desc: 'Recap, songs & goodbye circle' },
];

const trustPoints = [
  { icon: '🛡️', title: 'Secure Campus', desc: 'CCTV, gated entry, trained security staff 24/7.' },
  { icon: '💞', title: 'Caring Teachers', desc: 'Warm, experienced ECE specialists who know every child by name.' },
  { icon: '👥', title: 'Low Pupil Ratio', desc: '1:8 teacher-to-child ratio for personalized attention.' },
  { icon: '🎮', title: 'Interactive Learning', desc: 'Hands-on materials and digital tools for every learning style.' },
  { icon: '📲', title: 'Parent Portal', desc: 'Real-time updates, photos, and daily reports via our app.' },
];

const learningAreas = [
  { icon: '📝', label: 'Literacy', color: '#0D6EFD', bg: '#EEF3FF', sub: 'Reading & Writing' },
  { icon: '🔢', label: 'Numeracy', color: '#56C596', bg: '#EAFAF4', sub: 'Numbers & Patterns' },
  { icon: '🔭', label: 'Science Discovery', color: '#FFC857', bg: '#FFF8E7', sub: 'Explore & Experiment' },
  { icon: '🖌️', label: 'Creative Arts', color: '#FF6B6B', bg: '#FFF4EC', sub: 'Express & Create' },
  { icon: '🏃', label: 'Physical Dev.', color: '#6C5CE7', bg: '#F6F3FF', sub: 'Move & Grow' },
  { icon: '🤝', label: 'Social & Emotional', color: '#00B894', bg: '#EAFAF4', sub: 'Connect & Thrive' },
];


const testimonials = [
  {
    name: 'Fatima Javed', child: 'Parent of Zara, Age 4',
    quote: 'Markhor Preschool transformed our shy daughter into a confident, curious learner. The teachers truly love what they do and it shows every single day.',
    stars: 5, avatar: 'https://i.pravatar.cc/80?img=47',
  },
  {
    name: 'Ali Rehman', child: 'Parent of Omar, Age 3',
    quote: 'The daily updates on the parent app give me peace of mind. Omar comes home every day excited to share what he learned. Best decision we ever made.',
    stars: 5, avatar: 'https://i.pravatar.cc/80?img=32',
  },
  {
    name: 'Sana Malik', child: 'Parent of Hana, Age 5',
    quote: 'The balance of play and structured learning is perfect. Hana is thriving — her language, social skills, and love of reading have grown exponentially.',
    stars: 5, avatar: 'https://i.pravatar.cc/80?img=44',
  },
];

// =====================
// SUBCOMPONENTS
// =====================

function StarRating({ count }) {
  return (
    <div style={{ display: 'flex', gap: 3 }}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} style={{ color: '#FFC857', fontSize: '1rem' }}>★</span>
      ))}
    </div>
  );
}

function SectionHeader({ badge, badgeColor = '#0D6EFD', badgeBg = '#EEF3FF', title, highlight, desc }) {
  return (
    <div style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 64px' }}>
      <span style={{ display: 'inline-block', background: badgeBg, color: badgeColor, padding: '6px 18px', borderRadius: 999, fontSize: '0.78rem', fontWeight: 700, letterSpacing: 1, marginBottom: 20 }}>
        {badge}
      </span>
      <h2 style={{ fontFamily: 'Poppins', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#111827', lineHeight: 1.2, marginBottom: 16 }}>
        {title} {highlight && <span style={{ color: badgeColor }}>{highlight}</span>}
      </h2>
      {desc && <p style={{ fontSize: '1.1rem', color: '#6B7280', lineHeight: 1.75 }}>{desc}</p>}
    </div>
  );
}

// =====================
// PRESCHOOL HERO
// =====================
function PreschoolHero() {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #F6F3FF 0%, #FFF4EC 50%, #EAFAF4 100%)',
      borderRadius: '0 0 40px 40px',
      position: 'relative', overflow: 'hidden', paddingBottom: 80,
    }}>
      {/* Background Blobs */}
      <div className="float" style={{ position: 'absolute', top: '5%', left: '-5%', width: '40vw', height: '40vw', borderRadius: '50%', background: 'radial-gradient(circle, rgba(13,110,253,0.08) 0%, transparent 70%)', filter: 'blur(40px)' }} />
      <div className="float-2" style={{ position: 'absolute', bottom: '0', right: '-5%', width: '35vw', height: '35vw', borderRadius: '50%', background: 'radial-gradient(circle, rgba(86,197,150,0.1) 0%, transparent 70%)', filter: 'blur(40px)' }} />

      {/* Floating Stars, Clouds, Leaves */}
      <div className="float" style={{ position: 'absolute', top: '10%', right: '8%', fontSize: '2rem', opacity: 0.4 }}>⭐</div>
      <div className="float-2" style={{ position: 'absolute', top: '30%', left: '4%', fontSize: '1.5rem', opacity: 0.3 }}>🌿</div>
      <div className="float-3" style={{ position: 'absolute', bottom: '30%', right: '5%', fontSize: '1.8rem', opacity: 0.35 }}>☁️</div>
      <div className="float" style={{ position: 'absolute', bottom: '20%', left: '10%', fontSize: '1.2rem', opacity: 0.3 }}>✨</div>

      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center', padding: '80px 0 0' }}>
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#EEF3FF', color: '#0D6EFD', padding: '7px 18px', borderRadius: 999, fontSize: '0.8rem', fontWeight: 700, letterSpacing: 0.5, marginBottom: 24 }}>
              🎓 Early Years Programme
            </span>

            <h2 style={{ fontFamily: 'Poppins', fontWeight: 800, fontSize: 'clamp(2.5rem, 5vw, 3.75rem)', color: '#111827', lineHeight: 1.1, letterSpacing: -1, marginBottom: 24 }}>
              Where Little Minds Begin{' '}
              <span style={{ color: '#0D6EFD' }}>Big Adventures</span>
            </h2>

            <p style={{ fontSize: '1.1rem', color: '#6B7280', lineHeight: 1.8, marginBottom: 40, maxWidth: 500 }}>
              Our Preschool is designed as a warm, stimulating home away from home — where every child's natural curiosity is celebrated and guided into a lifelong love of learning.
            </p>

            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <motion.a href="#preschool-features" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                className="btn btn-primary" style={{ fontSize: '0.95rem', padding: '14px 28px' }}>
                Explore Preschool
              </motion.a>
              <motion.a href="#admissions" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                className="btn btn-secondary" style={{ fontSize: '0.95rem', padding: '14px 28px' }}>
                Book a Campus Tour
              </motion.a>
            </div>
          </motion.div>

          {/* Right — Image + Floating Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ position: 'relative' }}
          >
            {/* Main image */}
            <div style={{ borderRadius: 32, overflow: 'hidden', boxShadow: '0 24px 64px rgba(0,0,0,0.14)', border: '4px solid white' }}>
              <img
                src="/preschool_hero.png"
                alt="Happy preschool children"
                style={{ width: '100%', height: 460, objectFit: 'cover' }}
                onError={e => {
                  e.target.src = 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&q=80';
                }}
              />
            </div>

            {/* Floating Info Cards */}
            {floatingCards.map((card, i) => {
              const positions = [
                { top: 20, left: -24, animClass: 'float' },
                { top: 100, right: -28, animClass: 'float-2' },
                { bottom: 120, left: -28, animClass: 'float-3' },
                { bottom: 30, right: -20, animClass: 'float' },
              ];
              const pos = positions[i];
              const { animClass, ...posStyle } = pos;
              return (
                <motion.div
                  key={card.label}
                  className={animClass}
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.15, type: 'spring', stiffness: 200 }}
                  style={{
                    position: 'absolute', ...posStyle,
                    background: 'rgba(255,255,255,0.95)',
                    backdropFilter: 'blur(16px)',
                    borderRadius: 16, padding: '10px 16px',
                    boxShadow: '0 12px 32px rgba(0,0,0,0.1)',
                    border: `2px solid ${card.color}20`,
                    display: 'flex', alignItems: 'center', gap: 10,
                    minWidth: 160, whiteSpace: 'nowrap',
                  }}
                >
                  <span style={{ fontSize: '1.3rem' }}>{card.icon}</span>
                  <span style={{ fontWeight: 700, fontSize: '0.82rem', color: card.color }}>{card.label}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .preschool-hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

// =====================
// FEATURE CARDS
// =====================
function PreschoolFeatures() {
  return (
    <div id="preschool-features" style={{ background: 'white', padding: '96px 0' }}>
      <div className="container">
        <SectionHeader
          badge="What We Offer"
          title="Premium Early Years"
          highlight="Learning Experiences"
          desc="Four pillars of holistic development that shape confident, curious, and creative young minds."
        />
        <div className="grid-4" style={{ gap: 24 }}>
          {featureCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              whileHover={{ y: -10, boxShadow: '0 24px 56px rgba(0,0,0,0.10)' }}
              style={{
                background: card.bg, borderRadius: 24, padding: '32px 24px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
                border: '1px solid rgba(229,231,235,0.4)',
                cursor: 'default', transition: 'all 0.3s ease',
              }}
            >
              <div style={{
                width: 60, height: 60, borderRadius: 18,
                background: card.gradient,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.6rem', marginBottom: 20,
                boxShadow: '0 6px 18px rgba(0,0,0,0.15)',
              }}>
                {card.icon}
              </div>
              <h3 style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '1.05rem', color: '#111827', marginBottom: 10 }}>{card.title}</h3>
              <p style={{ fontSize: '0.88rem', color: '#6B7280', lineHeight: 1.65 }}>{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// =====================
// DAILY TIMELINE
// =====================
function DailyTimeline() {
  return (
    <div style={{ background: 'linear-gradient(135deg, #F6F3FF 0%, #EEF3FF 100%)', padding: '96px 0', overflow: 'hidden' }}>
      <div className="container">
        <SectionHeader
          badge="A Day at Markhor Preschool"
          badgeColor="#6C5CE7"
          badgeBg="#F6F3FF"
          title="Structure, Play &"
          highlight="Joy Every Day"
          desc="Every day is thoughtfully planned to balance structured learning, creative play, rest, and discovery."
        />

        {/* Desktop timeline */}
        <div style={{ position: 'relative' }}>
          {/* Connecting Line */}
          <div style={{ position: 'absolute', top: 36, left: 0, right: 0, height: 3, background: 'linear-gradient(to right, #0D6EFD, #56C596)', borderRadius: 999 }} />

          <div style={{ display: 'grid', gridTemplateColumns: `repeat(${timeline.length}, 1fr)`, gap: 8, position: 'relative' }}>
            {timeline.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
              >
                {/* Dot */}
                <motion.div
                  whileHover={{ scale: 1.3 }}
                  style={{
                    width: 72, height: 72, borderRadius: '50%',
                    background: `linear-gradient(135deg, #0D6EFD${Math.floor(200 - i * 15).toString(16)}, #56C596)`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.5rem', marginBottom: 20,
                    boxShadow: '0 6px 20px rgba(13,110,253,0.25)',
                    border: '3px solid white',
                    cursor: 'default', transition: 'all 0.25s',
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </motion.div>
                <div style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '0.8rem', color: '#0D6EFD', marginBottom: 6 }}>{item.time}</div>
                <div style={{ fontWeight: 700, fontSize: '0.85rem', color: '#111827', marginBottom: 6 }}>{item.label}</div>
                <div style={{ fontSize: '0.75rem', color: '#9CA3AF', lineHeight: 1.4 }}>{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// =====================
// WHY PARENTS CHOOSE
// =====================
function WhyParentsChoose() {
  return (
    <div style={{ background: 'white', padding: '96px 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }}>
          {/* Left — Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ position: 'relative' }}
          >
            <div style={{ borderRadius: 32, overflow: 'hidden', boxShadow: '0 24px 56px rgba(0,0,0,0.12)' }}>
              <img
                src="/preschool_classroom.png"
                alt="Preschool classroom"
                style={{ width: '100%', height: 520, objectFit: 'cover' }}
                onError={e => { e.target.src = 'https://images.unsplash.com/photo-1567227002_a_01be5b1?w=700&q=80'; }}
              />
            </div>
            {/* Floating accent card */}
            <motion.div
              className="float"
              style={{
                position: 'absolute', bottom: 40, right: -32,
                background: 'white', borderRadius: 20, padding: '20px 24px',
                boxShadow: '0 16px 40px rgba(0,0,0,0.12)',
                border: '2px solid #EEF3FF',
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: 'spring' }}
            >
              <div style={{ fontFamily: 'Poppins', fontWeight: 800, fontSize: '2rem', color: '#0D6EFD' }}>98%</div>
              <div style={{ fontSize: '0.82rem', color: '#6B7280', fontWeight: 600 }}>Parent satisfaction rate</div>
            </motion.div>
          </motion.div>

          {/* Right — Trust Points */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span style={{ display: 'inline-block', background: '#EAFAF4', color: '#27AE60', padding: '6px 18px', borderRadius: 999, fontSize: '0.78rem', fontWeight: 700, letterSpacing: 1, marginBottom: 20 }}>
              Why Parents Choose Us
            </span>
            <h2 style={{ fontFamily: 'Poppins', fontWeight: 800, fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', color: '#111827', lineHeight: 1.2, marginBottom: 20 }}>
              A School Parents <span style={{ color: '#0D6EFD' }}>Truly Trust</span>
            </h2>
            <p style={{ fontSize: '1rem', color: '#6B7280', lineHeight: 1.8, marginBottom: 40 }}>
              Our Preschool is built on three pillars: safety, expertise, and joy. Every detail is designed to give parents complete peace of mind.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {trustPoints.map((point, i) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}
                >
                  <div style={{
                    width: 48, height: 48, borderRadius: 14,
                    background: '#EEF3FF', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', fontSize: '1.3rem', flexShrink: 0,
                  }}>
                    {point.icon}
                  </div>
                  <div>
                    <div style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '0.95rem', color: '#111827', marginBottom: 4 }}>{point.title}</div>
                    <div style={{ fontSize: '0.88rem', color: '#6B7280', lineHeight: 1.6 }}>{point.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// =====================
// LEARNING AREAS
// =====================
function LearningAreas() {
  return (
    <div style={{ background: '#FAFBFC', padding: '96px 0' }}>
      <div className="container">
        <SectionHeader
          badge="Curriculum Focus"
          title="Six Core"
          highlight="Learning Areas"
          desc="Our EYFS-aligned curriculum covers all domains of early childhood development in an integrated, playful approach."
        />
        <div className="grid-3" style={{ gap: 24 }}>
          {learningAreas.map((area, i) => (
            <motion.div
              key={area.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, boxShadow: `0 20px 48px ${area.color}25` }}
              style={{
                background: area.bg, borderRadius: 24, padding: '32px 28px',
                border: `2px solid ${area.color}20`,
                cursor: 'default', transition: 'all 0.3s ease',
                display: 'flex', alignItems: 'center', gap: 20,
              }}
            >
              <div style={{
                width: 64, height: 64, borderRadius: 18, flexShrink: 0,
                background: area.color, display: 'flex', alignItems: 'center',
                justifyContent: 'center', fontSize: '1.8rem',
                boxShadow: `0 6px 16px ${area.color}40`,
              }}>
                {area.icon}
              </div>
              <div>
                <div style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '1.05rem', color: '#111827' }}>{area.label}</div>
                <div style={{ fontSize: '0.83rem', color: area.color, fontWeight: 600, marginTop: 4 }}>{area.sub}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}


// =====================
// TESTIMONIALS
// =====================
function Testimonials() {
  const [active, setActive] = useState(0);
  return (
    <div style={{ background: 'linear-gradient(135deg, #F6F3FF 0%, #FFF4EC 100%)', padding: '96px 0' }}>
      <div className="container">
        <SectionHeader
          badge="Parent Stories"
          badgeColor="#6C5CE7"
          badgeBg="#F6F3FF"
          title="What Parents"
          highlight="Are Saying"
          desc="Real words from real families who chose Markhor Preschool for their children."
        />

        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.4 }}
              style={{
                background: 'white', borderRadius: 32,
                padding: '48px 56px',
                boxShadow: '0 24px 64px rgba(0,0,0,0.08)',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '4rem', color: '#0D6EFD', lineHeight: 1, marginBottom: 24, opacity: 0.3, fontFamily: 'Georgia, serif' }}>"</div>
              <p style={{ fontSize: '1.15rem', color: '#374151', lineHeight: 1.85, marginBottom: 36, fontStyle: 'italic' }}>
                {testimonials[active].quote}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
                <img src={testimonials[active].avatar} alt={testimonials[active].name}
                  style={{ width: 56, height: 56, borderRadius: '50%', objectFit: 'cover', border: '3px solid #EEF3FF' }}
                  onError={e => { e.target.src = 'https://i.pravatar.cc/56?img=50'; }}
                />
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '1rem', color: '#111827' }}>{testimonials[active].name}</div>
                  <div style={{ fontSize: '0.82rem', color: '#9CA3AF' }}>{testimonials[active].child}</div>
                  <StarRating count={testimonials[active].stars} />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginTop: 32 }}>
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setActive(i)} style={{
                width: i === active ? 28 : 10, height: 10,
                borderRadius: 999, border: 'none',
                background: i === active ? '#0D6EFD' : '#D1D5DB',
                cursor: 'pointer', transition: 'all 0.3s ease',
              }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// =====================
// CTA SECTION
// =====================
function PreschoolCTA() {
  return (
    <div style={{ background: 'white', padding: '80px 0 96px' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            background: 'linear-gradient(135deg, #0D6EFD 0%, #0842CC 50%, #0F5FFF 100%)',
            borderRadius: 36, padding: '72px 56px',
            textAlign: 'center', position: 'relative', overflow: 'hidden',
          }}
        >
          {/* Background decorations */}
          <div className="float" style={{ position: 'absolute', top: '-20%', right: '-5%', width: '40%', height: '150%', background: 'rgba(255,255,255,0.04)', borderRadius: '50%' }} />
          <div className="float-2" style={{ position: 'absolute', bottom: '-30%', left: '-5%', width: '35%', height: '120%', background: 'rgba(86,197,150,0.08)', borderRadius: '50%' }} />

          {/* Floating emojis */}
          <div className="float" style={{ position: 'absolute', top: '15%', left: '8%', fontSize: '2rem', opacity: 0.5 }}>⭐</div>
          <div className="float-3" style={{ position: 'absolute', top: '20%', right: '10%', fontSize: '1.8rem', opacity: 0.4 }}>☁️</div>
          <div className="float-2" style={{ position: 'absolute', bottom: '20%', left: '12%', fontSize: '1.5rem', opacity: 0.4 }}>🌿</div>
          <div className="float" style={{ position: 'absolute', bottom: '15%', right: '8%', fontSize: '1.6rem', opacity: 0.45 }}>✨</div>

          <div style={{ position: 'relative', zIndex: 2 }}>
            <h2 style={{ fontFamily: 'Poppins', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3.25rem)', color: 'white', marginBottom: 20, lineHeight: 1.2 }}>
              Give Your Child the <span style={{ color: '#FFC857' }}>Best Start</span> in Life
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.82)', marginBottom: 40, maxWidth: 580, margin: '0 auto 40px' }}>
              Limited seats available for 2025–26. Join the Markhor family and watch your child flourish from day one.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <motion.a href="#admissions" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
                className="btn btn-yellow" style={{ padding: '16px 36px', fontSize: '1rem' }}>
                Schedule a Visit
              </motion.a>
              <motion.a href="#admissions" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
                className="btn btn-outline-white" style={{ padding: '16px 36px', fontSize: '1rem' }}>
                Apply Now →
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// =====================
// MAIN EXPORT
// =====================
export default function PreschoolSection() {
  return (
    <section id="preschool">
      <PreschoolHero />
      <PreschoolFeatures />
      <DailyTimeline />
      <WhyParentsChoose />
      <LearningAreas />
      <Testimonials />
      <PreschoolCTA />
    </section>
  );
}
