import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { LanguageProvider } from './components/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Career } from './components/Career';
import { Contact } from './components/Contact';
import { Highlights } from './components/Highlights';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { CombineAcademy } from './pages/CombineAcademy';
import { Herediano } from './pages/Herediano';
import { UCR } from './pages/UCR';
import { AboutMeSlider } from './components/AboutMeSlider';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const MainContent = () => (
    <>
      <Hero />
      <About />
      <Highlights />
      <Testimonials />
      <Contact />
    </>
  );

  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/career" element={<Career />} />
            <Route path="/combine-academy" element={<CombineAcademy />} />
            <Route path="/herediano" element={<Herediano />} />
            <Route path="/ucr" element={<UCR />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
