import React, { useMemo } from 'react';
import { testimonialsData } from '../testimonialsData';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLanguage } from './LanguageContext';

export const Testimonials: React.FC = () => {
  const { language } = useLanguage(); 

  React.useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const translatedTestimonials = useMemo(() => 
    testimonialsData.map(({ id, name, role, image }) => ({
      id,
      name,
      role: role[language],
      image,
    })), 
  [language]);

  return (
    <section 
      id="testimonials" 
      className="relative py-20 bg-cover bg-center"
      style={{ backgroundImage: 'url(/a.jpg)' }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-md"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="bg-white/90 p-6 rounded-md shadow-md inline-block">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {language === 'en' ? 'References (Previous coaches)' : 'Referencias de Entrenadores (Anteriores)'}
            </h2>
            <p className="text-xl text-gray-600">
              {language === 'en' ? '' : ''}
            </p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {translatedTestimonials.map(({ id, name, role, image }) => (
            <div
              key={id}
              className="bg-white/80 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={id * 100}
            >
              {/* Coach Image */}
              <div className="flex justify-center mb-6">
                <img
                  src={image}
                  alt={`${name} - ${role}`}
                  className="w-54 h-54 object-cover rounded-lg border-4 border-white shadow-lg"
                />
              </div>

              {/* Coach Name and Role */}
              <h3 className="text-xl font-semibold text-center text-gray-900 mb-2">{name}</h3>
              <p className="text-sm text-gray-600 text-center mb-4">{role}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
