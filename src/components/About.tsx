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
    <section id="about" className="relative py-20 overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/est.jpg)', // Replace with your image path
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.7)', // Darken the background image
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white bg-opacity-80 rounded-lg shadow-lg p-8">
        <div className="mb-16">
          <h2 className="text-6xl font-bold text-gray-900 mb-4 relative inline-block">
            <span className="relative z-10">{language === 'en' ? 'About Me' : 'Sobre Mí'}</span>
            <div className="absolute -bottom-2 left-0 w-full h-3 bg-blue-500 opacity-30 transform -rotate-1"></div>
          </h2>
          <p className="text-2xl text-gray-600 mt-6">
            {language === 'en' ? 'Rising Star | Defensive Specialist | Future Champion' : 'Estrella Emergente | Especialista Defensivo | Futuro Campeón'}
          </p>
        </div>

        {/* Basic Info with Animated Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="relative overflow-hidden rounded-2xl group">
            <img
              src="/noah2.jpg"
              alt="Player in action"
              className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{playerData.name}</h3>
                <p className="text-lg">{playerData.position}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-white rounded-lg shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
                <h4 className="font-semibold text-gray-700 mb-2">
                  {language === 'en' ? 'Birth Date' : 'Fecha de Nacimiento'}
                </h4>
                <p className="text-lg">{playerData.basicInfo.birthDate}</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
                <h4 className="font-semibold text-gray-700 mb-2">
                  {language === 'en' ? 'Height' : 'Altura'}
                </h4>
                <p className="text-lg">{playerData.basicInfo.height}</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
                <h4 className="font-semibold text-gray-700 mb-2">
                  {language === 'en' ? 'Weight' : 'Peso'}
                </h4>
                <p className="text-lg">{playerData.basicInfo.weight}</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
                <h4 className="font-semibold text-gray-700 mb-2">
                  {language === 'en' ? 'Nationality' : 'Nacionalidad'}
                </h4>
                <p className="text-lg">{playerData.basicInfo.nationality}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Palmarés Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 relative">
            <span className="relative z-10">
              {language === 'en' ? 'Palmarés' : 'Palmarés'}
              <div className="absolute -bottom-2 left-0 w-full h-3 bg-yellow-500 opacity-30"></div>
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-300">
              <img 
                src="/uefa.jpg" 
                alt="U11 GPS Tournament Champion"
                className="w-24 h-24 object-cover mx-auto mb-4 rounded-full"
              />
              <h3 className="text-xl font-bold text-center mb-4">U11 GPS Tournament Champion</h3>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-300">
              <img 
                src="/uefa.jpg" 
                alt="U12 Copa Patrick Champion"
                className="w-24 h-24 object-cover mx-auto mb-4 rounded-full"
              />
              <h3 className="text-xl font-bold text-center mb-4">U12 Copa Patrick Champion</h3>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-300">
              <img 
                src="/uefa.jpg" 
                alt="U13 National Champion First Division, Unafut"
                className="w-24 h-24 object-cover mx-auto mb-4 rounded-full"
              />
              <h3 className="text-xl font-bold text-center mb-4">U13 National Champion First Division, Unafut</h3>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-300">
              <img 
                src="/uefa.jpg" 
                alt="U15 Second Place in First Division, Unafut"
                className="w-24 h-24 object-cover mx-auto mb-4 rounded-full"
              />
              <h3 className="text-xl font-bold text-center mb-4">U15 Second Place in First Division, Unafut</h3>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-300">
              <img 
                src="/uefa.jpg" 
                alt="U17 National Champion Second Division, LIASCE"
                className="w-24 h-24 object-cover mx-auto mb-4 rounded-full"
              />
              <h3 className="text-xl font-bold text-center mb-4">U17 National Champion Second Division, LIASCE</h3>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-300">
              <img 
                src="/uefa.jpg" 
                alt="U19 Super Cup National Champion, Unafut"
                className="w-24 h-24 object-cover mx-auto mb-4 rounded-full"
              />
              <h3 className="text-xl font-bold text-center mb-4">U19 Super Cup National Champion, Unafut</h3>
            </div>
          </div>
        </div>

        {/* Skills Sections */}
        <div className="space-y-16">
          {/* Technical Skills */}
          <div className="relative overflow-hidden rounded-2xl" data-aos="fade-up">
            <div className="relative h-[400px]">
              <img 
                src="/noaht.jpg"
                alt="Technical Skills"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-12">
                  <h3 className="text-4xl font-bold text-white mb-8">
                    {language === 'en' ? 'Technical Skills' : 'Habilidades Técnicas'}
                  </h3>
                  <div className="grid grid-cols-3 gap-6">
                    {playerData.strengths.technical[language].map((skill, index) => (
                      <div key={index} className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-white text-lg font-light transform hover:scale-105 transition-transform">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Physical Abilities */}
          <div className="relative overflow-hidden rounded-2xl" data-aos="fade-up">
            <div className="relative h-[400px]">
              <img 
                src="/noahl.jpg"
                alt="Physical Abilities"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-12">
                  <h3 className="text-4xl font-bold text-white mb-8">
                    {language === 'en' ? 'Physical Abilities' : 'Capacidades Físicas'}
                  </h3>
                  <div className="grid grid-cols-3 gap-6">
                    {playerData.strengths.physical[language].map((skill, index) => (
                      <div key={index} className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-white text-lg font-light transform hover:scale-105 transition-transform">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mental Strengths */}
          <div className="relative overflow-hidden rounded-2xl" data-aos="fade-up">
            <div className="relative h-[400px]">
              <img 
                src="/noahf.jpg"
                alt="Mental Strengths"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-12">
                  <h3 className="text-4xl font-bold text-white mb-8">
                    {language === 'en' ? 'Mental Strengths' : 'Fortalezas Mentales'}
                  </h3>
                  <div className="grid grid-cols-3 gap-6">
                    {playerData.strengths.mental[language].map((skill, index) => (
                      <div key={index} className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-white text-lg font-light transform hover:scale-105 transition-transform">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slider Section */}
        <div className="mt-20">
          <AboutMeSlider />
        </div>
      </div>
    </section>
  );
};