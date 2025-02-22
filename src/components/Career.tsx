import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLanguage } from './LanguageContext';
import { ExternalLink } from 'lucide-react';

export const Career: React.FC = () => {
  const { language } = useLanguage();

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
    });

    // Cleanup AOS on component unmount
    return () => {
      AOS.refresh(); // Reset AOS animations
    };
  }, []);

  const teams = [
    {
      name: "Combine Academy Soccer",
      period: "All 2024",
      location: "North Carolina, United States",
      description: {
        en: "Played in UPSL tournament, Premier division",
        es: "Jugué en torneos UPSL, División Premier"
      },
      image: "/ca.jpeg",
      link: "/pages/combine-academy"
    },
    {
      name: "Club Sport Herediano",
      period: "2020-present",
      location: "Costa Rica",
      description: {
        en: "Currently playing in the actual champion of Costa Rica (UNAFUT), Primera División.",
        es: "Actualmente juega en la actual campeon de Costa Rica (UNAFUT), Primera División."
      },
      image: "/heredia.webp",
      link: "/herediano"
    },
    {
      name: "Universidad de Costa Rica",
      period: "2021-2022",
      location: "Costa Rica",
      description: {
        en: "Played in the U21 league at 14 years old, team of first division",
        es: "Jugué en la liga U21 a 14 años, equipo de primera división"
      },
      image: "/ucr2.png",
      link: "/ucr"
    }
  ];

  const handleLinkClick = (event: React.MouseEvent<HTMLElement>, link: string) => {
    event.preventDefault(); // Prevent default navigation
    // Use your router to navigate (e.g., React Router)
    window.location.href = link; // Fallback for non-SPA navigation
  };

  return (
    <section
      id="career"
      className="py-20 relative bg-gray-50"
      style={{ backgroundImage: 'url(/est.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      data-aos="fade-up"
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            {language === 'en' ? 'Career Journey' : 'Trayectoria Profesional'}
          </h2>
          <p className="text-xl text-gray-200">
            {language === 'en' ? 'Explore my professional journey through different teams' : 'Explora mi trayectoria profesional a través de diferentes equipos'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teams.map((team, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 cursor-pointer"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                onClick={(e) => handleLinkClick(e, team.link)}
                role="button"
                tabIndex={0}
              >

              <div className="h-64 overflow-hidden">
                <img
                  src={team.image}
                  alt={`${team.name} team`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-8 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/5 group-hover:to-black/10 transition-all duration-300"></div>
                <div className="relative">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{team.name}</h3>
                  <p className="text-blue-600 font-semibold mb-2">{team.period}</p>
                  <p className="text-gray-600 mb-4">{team.location}</p>
                  <p className="text-gray-700">{team.description[language]}</p>

                  <p className="mt-6 text-blue-600 font-semibold">
                    {language === 'en' ? 'View Gallery →' : 'Ver Galería →'}
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
