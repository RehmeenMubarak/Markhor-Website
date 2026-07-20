import './index.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import WhyMarkhor from './components/WhyMarkhor';
import AcademicPrograms from './components/AcademicPrograms';
import PreschoolSection from './components/PreschoolSection';
import AdmissionsProcess from './components/AdmissionsProcess';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import { motion } from 'framer-motion';


// News section (inline, simple)
const newsItems = [
  { tag: 'Event', title: 'Annual Science Fair 2025 — A Showcase of Young Innovation', date: 'July 10, 2025', img: 'https://images.unsplash.com/photo-1532094349884-543559c2f54a?w=400&q=70' },
  { tag: 'Achievement', title: 'Markhor Robotics Team Wins National Championship', date: 'June 28, 2025', img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&q=70' },
  { tag: 'Admissions', title: 'Admissions Now Open for Academic Year 2025–26', date: 'June 15, 2025', img: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&q=70' },
];

function NewsEvents() {
  return (
    <section id="news" className="section" style={{ background: '#FAFBFC' }}>
      <div className="container">
        <div className="section-header">
          <span className="badge badge-blue">News & Events</span>
          <h2 className="display-lg">What's Happening at <span style={{ color: '#0F5FFF' }}>Markhor</span></h2>
          <p className="body-lg">Stay updated with the latest news, events, and achievements from our school community.</p>
        </div>
        <div className="grid-3" style={{ gap: 28 }}>
          {newsItems.map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }} whileHover={{ y: -8, boxShadow: '0 24px 56px rgba(0,0,0,0.1)' }} style={{ background: 'white', borderRadius: 24, overflow: 'hidden', boxShadow: '0 8px 24px rgba(0,0,0,0.06)', cursor: 'pointer', border: '1px solid #F3F4F6', transition: 'all 0.3s' }}>
              <div style={{ height: 200, overflow: 'hidden' }}>
                <img src={item.img} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} />
              </div>
              <div style={{ padding: 24 }}>
                <span style={{ display: 'inline-block', background: '#EEF3FF', color: '#0F5FFF', padding: '4px 12px', borderRadius: 999, fontSize: '0.72rem', fontWeight: 700, marginBottom: 12 }}>{item.tag}</span>
                <h3 style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '1rem', color: '#111827', marginBottom: 12, lineHeight: 1.5 }}>{item.title}</h3>
                <div style={{ fontSize: '0.8rem', color: '#9CA3AF' }}>{item.date}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <Navbar />
      <HeroSection />
      <WhyMarkhor />
      <AcademicPrograms />
      <PreschoolSection />
      <NewsEvents />
      <AdmissionsProcess />
      <FinalCTA />
      <Footer />
    </div>
  );
}
