import React, { useEffect } from 'react';
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles
import { useLanguage } from './LanguageContext';
import { playerData } from '../data';

export const Hero: React.FC = () => {
  const { language } = useLanguage();

  // Initialize AOS library
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  // Define localized text based on language
  const localizedText = {
    title: 'Noah Castro',
    position: language === 'en' ? 'Right Back and Center Back' : 'Lateral Derecho y Central',
    description: language === 'en'
      ? 'Dedicated Footballer | Committed to Excellence | Ready for New Challenges'
      : 'Futbolista Dedicado | Comprometido con la Excelencia | Listo para Nuevos Desafíos',
    cta: language === 'en' ? 'Watch Highlights' : 'Ver Destacados',
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero Section"
      data-aos="fade-up"
    >
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/Noah3.png)', // Update to use local image from public directory
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          animation: 'fadeIn 2s ease-in-out', // Add a fade-in animation
        }}
      >
        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4" role="heading" aria-level={1}>
          {localizedText.title}
        </h1>
        <p className="text-xl md:text-2xl mb-6">{localizedText.position}</p>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto" role="heading" aria-level={2}>
          {localizedText.description}
        </p>
        <a
          href="#highlights"
          className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors"
        >
          {localizedText.cta}
        </a>
      </div>

      {/* Add custom CSS for fadeIn animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};
