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
  };
  backgroundImage?: string;
}

export const TeamPage: React.FC<TeamPageProps> = ({ team, backgroundImage }) => {
  const { language } = useLanguage();

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      mirror: false,
      easing: 'ease-out-quart',
    });
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Enhanced Background with Parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `url(${backgroundImage || '/3.jpg'})`,
          filter: 'brightness(0.7) saturate(1.2)',
          transform: 'translateZ(0)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-noise opacity-10" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Enhanced Back Button */}
        <a
          href="/career"
          className="group relative inline-flex items-center mb-16 overflow-visible transition-all duration-500"
          data-aos="fade-up"
        >
          {/* Glowing background effect */}
          <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-500/20 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300" />
          
          {/* Animated border gradient */}
          <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-30 transition-opacity duration-500" />

          {/* Main button content */}
          <div className="relative flex items-center backdrop-blur-lg bg-white/5 px-8 py-4 rounded-full border border-white/20 group-hover:border-cyan-300/40 transition-all duration-500 hover:bg-white/2">
            <ArrowLeft 
              className="w-7 h-7 mr-3 text-cyan-300 group-hover:text-cyan-400 transition-all duration-300 transform group-hover:-translate-x-1.5 group-hover:scale-110" 
            />
            <span className="text-xl font-semibold bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent bg-size-200 group-hover:bg-pos-100 transition-all duration-500">
              {language === 'en' ? 'Back to Career' : 'Volver a Carrera'}
            </span>
          </div>

          {/* Animated trailing particles */}
          <div className="absolute -right-6 opacity-0 group-hover:opacity-100 group-hover:right-2 transition-all duration-500 flex space-x-1">
            {[...Array(3)].map((_, i) => (
              <div 
                key={i}
                className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"
                style={{ animationDelay: `${i * 100}ms` }}
              />
            ))}
          </div>
        </a>

        {/* Header with Gradient Text */}
        <div className="text-center mb-20" data-aos="fade-up" data-aos-delay="100">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-6 tracking-tight">
            {team.name}
          </h1>
          <p className="text-xl text-cyan-200 font-light">
            {team.period}
          </p>
        </div>

        {/* Description Card with Glass Morphism */}
        <div 
          className="backdrop-blur-lg bg-white/5 rounded-2xl shadow-2xl p-8 mb-20 border border-white/10 hover:border-white/20 transition-all duration-500"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <p className="text-xl text-cyan-50 leading-relaxed font-light">
            {team.description[language]}
          </p>
        </div>

        {/* Achievements with Icon Animation */}
        {team.achievements[language].length > 0 && (
          <div 
            className="backdrop-blur-lg bg-white/5 rounded-2xl shadow-2xl p-8 mb-20 border border-white/10 hover:border-white/20 transition-all duration-500"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-8">
              {language === 'en' ? 'Achievements' : 'Logros'}
            </h2>
            <ul className="space-y-5">
              {team.achievements[language].map((achievement, index) => (
                <li 
                  key={index} 
                  className="flex items-center text-lg text-cyan-50 group"
                >
                  <span className="w-3 h-3 bg-cyan-400 rounded-full mr-4 transform group-hover:scale-125 transition-transform" />
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Enhanced Gallery Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          {team.gallery.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-2xl transform hover:-translate-y-2 transition-all duration-500"
            >
              <div className="aspect-w-16 aspect-h-10">
                <img
                  src={item.image}
                  alt={item.caption[language]}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-cyan-100 text-lg font-light opacity-0 transform translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    {item.caption[language]}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};