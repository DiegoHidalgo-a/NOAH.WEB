import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLanguage } from './LanguageContext';
import { ArrowLeft } from 'lucide-react';

interface TeamPageProps {
  team: {
    name: string;
    period: string;
    description: {
      en: string;
      es: string;
    };
    gallery: {
      image: string;
      caption: {
        en: string;
        es: string;
      };
    }[];
    achievements: {
      en: string[];
      es: string[];
    };
    // Removed stats and highlights from the interface
  };
  backgroundImage?: string;
}

export const TeamPage: React.FC<TeamPageProps> = ({ team, backgroundImage }) => {
  const { language } = useLanguage();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Background Image with Parallax Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage || 'https://images.unsplash.com/photo-1552667466-07770ae110d0?auto=format&fit=crop&q=80&w=2070'})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(0.5)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Back Button */}
        <a
          href="/career"
          className="inline-flex items-center text-gray-300 hover:text-blue-500 mb-8 group"
          data-aos="fade-up"
        >
          <ArrowLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
          <span>{language === 'en' ? 'Back to Career' : 'Volver a Carrera'}</span>
        </a>

        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">
            {team.name}
          </h1>
          <p className="text-2xl text-blue-500">
            {team.period}
          </p>
        </div>

        {/* Description */}
        <div className="bg-white/90 rounded-lg shadow-2xl p-8 mb-16" data-aos="fade-up">
          <p className="text-xl text-gray-800 leading-relaxed">
            {team.description[language]}
          </p>
        </div>

        {/* Achievements */}
        {team.achievements[language].length > 0 && (
          <div className="bg-white/90 rounded-lg shadow-2xl p-8 mb-16" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {language === 'en' ? 'Achievements' : 'Logros'}
            </h2>
            <ul className="space-y-4">
              {team.achievements[language].map((achievement, index) => (
                <li key={index} className="text-lg text-gray-700">
                  <span className="text-blue-500 mr-2">•</span>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.gallery.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={item.image}
                  alt={item.caption[language]}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-sm">{item.caption[language]}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};