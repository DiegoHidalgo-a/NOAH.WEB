import React, { useEffect } from 'react';
import { useLanguage } from './LanguageContext';
import { Play } from 'lucide-react';
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles

export const Highlights: React.FC = () => {
  const { language } = useLanguage();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const highlights = [
    {
      title: { en: 'Full Game with Combine Academy', es: 'Partido Completo con Combine Academy' },
      video: 'https://www.youtube.com/live/x_BfF-lTeZM?si=vr-cx--JsFymLUe4', // YouTube video link
      thumbnail: '/noah4.webp', // Local thumbnail
      duration: '1:23:45', // Example duration
    },
    {
      title: { en: 'Skills & Assists', es: 'Habilidades y Asistencias' },
      video: 'https://www.youtube.com/live/x_BfF-lTeZM?si=vr-cx--JsFymLUe4', // YouTube video link
      thumbnail: '/Noah6.jpg', // Local thumbnail
      duration: '1:23:45', // Example duration
    },
    {
      title: { en: 'Season Highlights', es: 'Destacados de Temporada' },
      video: 'https://www.youtube.com/live/HDbW8TbAMt8', // YouTube video link
      thumbnail: '/Noah7.jpg', // Local thumbnail
      duration: '1:23:45', // Example duration
    },
  ];

  return (
    <section
      id="highlights"
      className="py-20 relative overflow-hidden"
      data-aos="fade-up"
    >
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/est.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          animation: 'fadeIn 2s ease-in-out', // Fade-in animation
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            {language === 'en' ? 'Career Highlights' : 'Momentos Destacados'}
          </h2>
          <p className="text-xl text-gray-200">
            {language === 'en'
              ? 'Watch some of my best moments on the field'
              : 'Mira algunos de mis mejores momentos en el campo'}
          </p>
        </div>

        {/* Featured Video */}
        <div className="mb-16">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.youtube.com/embed/x_BfF-lTeZM?si=vr-cx--JsFymLUe4" // YouTube embed URL
              className="w-full h-full object-cover"
              title="Featured highlight"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="absolute bottom-4 left-4 bg-black/75 text-white px-3 py-1 rounded-md text-sm">
              1:23:45
            </div>
          </div>
        </div>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105"
              data-aos="fade-up"
            >
              <div className="relative">
                <iframe
                  src={highlight.video.replace('live', 'embed')} // Convert YouTube live URL to embed URL
                  className="w-full h-48 object-cover"
                  title={highlight.title[language]}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="absolute bottom-2 right-2 bg-black/75 text-white px-2 py-1 rounded-md text-sm">
                  {highlight.duration}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{highlight.title[language]}</h3>
                <a
                  href={highlight.video}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Play size={20} className="mr-2" />
                  {language === 'en' ? 'Watch Now' : 'Ver Ahora'}
                </a>
              </div>
            </div>
          ))}
        </div>
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