import React, { useEffect } from 'react';
import { useLanguage } from './LanguageContext';
import { playerData } from '../data';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AboutMeSlider } from './AboutMeSlider';

export const About: React.FC = () => {
  const { language } = useLanguage();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section id="about" className="relative py-12 md:py-20 overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/est.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.7)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white bg-opacity-80 rounded-lg shadow-lg p-4 md:p-8">
        
        {/* Title Section */}
        <div className="mb-8 md:mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-2 md:mb-4 relative inline-block">
            <span className="relative z-10">{language === 'en' ? 'About Me' : 'Sobre Mí'}</span>
            <div className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-2 md:h-3 bg-blue-500 opacity-30 transform -rotate-1"></div>
          </h2>
          <p className="text-lg md:text-2xl text-gray-600 mt-4 md:mt-6">
            {language === 'en' ? 'Rising Star | Defensive Specialist | Future Champion' : 'Estrella Emergente | Especialista Defensivo | Futuro Campeón'}
          </p>
        </div>

        {/* Basic Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-16">
          <div className="relative overflow-hidden rounded-xl md:rounded-2xl group">
            <img
              src="/noah2.jpg"
              alt="Player in action"
              className="w-full h-[300px] md:h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                <h3 className="text-xl md:text-2xl font-bold mb-2">{playerData.name}</h3>
                <p className="text-base md:text-lg">{playerData.position}</p>
              </div>
            </div>
          </div>
          
          {/* Info Cards - Mobile optimized grid */}
          <div className="flex flex-col justify-center space-y-4 md:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
              {[
                { title: language === 'en' ? 'Birth Date' : 'Fecha de Nacimiento', value: playerData.basicInfo.birthDate },
                { title: language === 'en' ? 'Height' : 'Altura', value: playerData.basicInfo.height },
                { title: language === 'en' ? 'Weight' : 'Peso', value: playerData.basicInfo.weight },
                { title: language === 'en' ? 'Nationality' : 'Nacionalidad', value: playerData.basicInfo.nationality },
              ].map((card, index) => (
                <div key={index} className="p-4 md:p-6 bg-white rounded-lg shadow-md md:shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
                  <h4 className="text-sm md:text-base font-semibold text-gray-700 mb-1 md:mb-2">
                    {card.title}
                  </h4>
                  <p className="text-base md:text-lg">{card.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Palmarés Section - Mobile responsive grid */}
        <div className="mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-12 relative">
            <span className="relative z-10">
              {language === 'en' ? 'Palmarés' : 'Palmarés'}
              <div className="absolute -bottom-2 left-0 w-full h-3 bg-yellow-500 opacity-30"></div>
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {[
              { title: 'U11 GPS Tournament Champion', image: '/uefa.jpg' },
              { title: 'U12 Copa Patrick Champion', image: '/uefa.jpg' },
              { title: 'U13 National Champion First Division, Unafut', image: '/uefa.jpg' },
              { title: 'U15 Second Place in First Division, Unafut', image: '/uefa.jpg' },
              { title: 'U17 National Champion Second Division, LIASCE', image: '/uefa.jpg' },
              { title: 'U19 Super Cup National Champion, Unafut', image: '/uefa.jpg' },
            ].map((item, index) => (
              <div key={index} className="bg-white p-4 md:p-8 rounded-lg md:rounded-xl shadow-md md:shadow-lg transform hover:-translate-y-1 md:hover:-translate-y-2 transition-all duration-300">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-16 h-16 md:w-24 md:h-24 object-cover mx-auto mb-2 md:mb-4 rounded-full"
                />
                <h3 className="text-lg md:text-xl font-bold text-center">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Sections - Responsive adjustments */}
        <div className="space-y-8 md:space-y-16">
          {[
            { 
              type: 'technical',
              image: '/noaht.jpg',
              title: language === 'en' ? 'Technical Skills' : 'Habilidades Técnicas',
              skills: playerData.strengths.technical[language]
            },
            { 
              type: 'physical',
              image: '/noahl.jpg',
              title: language === 'en' ? 'Physical Abilities' : 'Capacidades Físicas',
              skills: playerData.strengths.physical[language]
            },
            { 
              type: 'mental',
              image: '/noahf.jpg',
              title: language === 'en' ? 'Mental Strengths' : 'Fortalezas Mentales',
              skills: playerData.strengths.mental[language]
            }
          ].map((category, index) => (
            <div key={index} className="relative overflow-hidden rounded-xl md:rounded-2xl" data-aos="fade-up">
              <div className="relative h-[400px] md:h-[700px]">
                <img 
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-8">
                      {category.title}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
                      {category.skills.map((skill, idx) => (
                        <div key={idx} className="bg-white/10 backdrop-blur-sm p-3 md:p-4 rounded-md md:rounded-lg text-white text-base md:text-lg font-light transform hover:scale-105 transition-transform">
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full-width Slider Section */}
      <div className="w-full mt-8 md:mt-20">
        <AboutMeSlider />
      </div>
    </section>
  );
};