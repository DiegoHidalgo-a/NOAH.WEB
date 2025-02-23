import React, { useEffect } from 'react';
import { useLanguage } from './LanguageContext';
import { Play, Award, Star } from 'lucide-react';
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
      title: { en: 'Full Games', es: 'Partido Completo' },
      video: '/https://www.youtube.com/live/0kt7w6TEjp8', // Local video file
      thumbnail: '/noah4.webp', // Local thumbnail
      duration: '3:45',
    },
    {
      title: { en: 'Skills & Assists', es: 'Habilidades y Asistencias' },
      video: '/Noah.mp4', // Local video file
      thumbnail: '/Noah6.jpg', // Local thumbnail
      duration: '4:20',
    },
    {
      title: { en: 'Season Highlights', es: 'Destacados de Temporada' },
      video: '/Noah.mp4', // Local video file
      thumbnail: '/Noah7.jpg', // Local thumbnail
      duration: '5:15',
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
            <div className="absolute inset-0 bg-white/5 z-0"></div>
            <video
              controls
              className="w-full h-full object-cover"
              poster="/images/featured-video-thumbnail.jpg" // Thumbnail for the featured video
              aria-label="Featured highlight"
            >
              <source src="/Noah.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute bottom-4 left-4 bg-black/75 text-white px-3 py-1 rounded-md text-sm">
              5:00
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
                <div className="absolute inset-0 bg-white/5 z-0"></div>
                <video
                  controls
                  className="w-full h-48 object-cover"
                  poster={highlight.thumbnail} // Thumbnail for the video
                  aria-label={highlight.title[language]}
                >
                  <source src={highlight.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
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