import React, { useEffect, useState } from 'react';
import { useLanguage } from './LanguageContext';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const AboutMeSlider: React.FC = () => {
  const { language } = useLanguage();
  const [activeSlide, setActiveSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [showText, setShowText] = useState(false); // Controls text visibility
  const [showTitle, setShowTitle] = useState(false); // Controls title visibility

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: true,
      easing: 'ease-in-out',
    });
  }, []);

  const portfolioItems = [
    {
      title: "CLUB SPORT HEREDIANO",
      description: {
        en: "Played in the minor leagues of first division Costa Rica soccer (UNAFUT) with Club Sport Herediano, one of the best teams in the country.",
        es: "Jugué en las ligas menores del fútbol de primera división de Costa Rica (UNAFUT) con el Club Sport Herediano, uno de los mejores equipos del país."
      },
      image: "/h3.jpg" // Replace with the correct image path
    },
    {
      title: "UNIVERSIDAD DE COSTA RICA",
      description: {
        en: "Played in the minor leagues of first division team at that time, Universidad de Costa Rica.",
        es: "Jugué en las ligas menores del equipo de primera división en ese momento, Universidad de Costa Rica."
      },
      image: "/ucr.jpg" // Replace with the correct image path
    },
    {
      title: "YOUNG TALENT",
      description: {
        en: "Played in older teams at a young age (U15 and U20 at 13/14 years old).",
        es: "Jugué en equipos mayores a una edad temprana (U15 y U20 a los 13/14 años)."
      },
      image: "/7.jpg" // Replace with the correct image path
    },
    {
      title: "NATIONAL TEAM U15",
      description: {
        en: "Trained with the national team U15 in 2020.",
        es: "Entrené con la selección nacional U15 en 2020."
      },
      image: "/cr.jpg" // Replace with the correct image path
    },
    {
      title: "INTERNATIONAL TOURNAMENTS",
      description: {
        en: "Participated in international tournaments: GPS tournament in Puerto Rico 2017, Copa Patrick in Panama 2018, and Ibercup Brasil 2019.",
        es: "Participé en torneos internacionales: Torneo GPS en Puerto Rico 2017, Copa Patrick en Panamá 2018 e Ibercup Brasil 2019."
      },
      image: "/3.jpg" // Replace with the correct image path
      },
    {
      title: "GPS tournament in Puerto Rico 2017",
      description: {
        en: "Played in a professional tournament in Puerto Rico.",
        es: "Jugué en un torneo profesional en Puerto Rico."
      },
      image: "/6.jpg" // Replace with the correct image path
    },
    {
      title: "PRE-SEASON PREPARATION",
      description: {
        en: "Pre-season preparation with U20 Universidad de Costa Rica in Guatemala.",
        es: "Preparación de pretemporada con la U20 de la Universidad de Costa Rica en Guatemala."
      },
      image: "/5.jpg" // Replace with the correct image path
    },
    {
      title: "COMBINE ACADEMY",
      description: {
        en: "Currently playing in Combine Academy soccer in North Carolina, United States. Playing UPSL tournament, Premier division.",
        es: "Actualmente jugando en Combine Academy en Carolina del Norte, Estados Unidos. Jugando en el torneo UPSL, división Premier."
      },
      image: "/8.jpg" // Replace with the correct image path
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [activeSlide]);

  const handleNext = () => {
    if (isTransitioning) return;
    setDirection('right');
    setIsTransitioning(true);
    setShowText(false); // Hide text during transition
    setShowTitle(false); // Hide title during transition

    setTimeout(() => {
      setActiveSlide((prev) => (prev + 1) % portfolioItems.length);
      setIsTransitioning(false);
      setTimeout(() => {
        setShowText(true); // Show text after slide transition
        setTimeout(() => setShowTitle(true), 500); // Show title after text appears
      }, 500);
    }, 500);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setDirection('left');
    setIsTransitioning(true);
    setShowText(false); // Hide text during transition
    setShowTitle(false); // Hide title during transition

    setTimeout(() => {
      setActiveSlide((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);
      setIsTransitioning(false);
      setTimeout(() => {
        setShowText(true); // Show text after slide transition
        setTimeout(() => setShowTitle(true), 500); // Show title after text appears
      }, 500);
    }, 500);
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Background Image with Parallax Effect */}
      <div 
        className={`absolute inset-0 transition-transform duration-[1.5s] ease-out ${
          isTransitioning 
            ? direction === 'right' 
              ? '-translate-x-full opacity-0 scale-110' 
              : 'translate-x-full opacity-0 scale-110'
            : 'translate-x-0 opacity-100 scale-100'
        }`}
        style={{
          backgroundImage: `url(${portfolioItems[activeSlide].image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.7)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center min-h-screen px-4">
        <div 
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            showText ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
          }`}
        >
          <h2 
            className={`text-6xl md:text-8xl font-bold text-white mb-8 tracking-wider transition-all duration-1000 ${
              showTitle ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
            }`}
          >
            {portfolioItems[activeSlide].title}
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-2xl mx-auto font-light">
            {portfolioItems[activeSlide].description[language]}
          </p>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-12 left-0 right-0 z-20 flex justify-center items-center gap-8">
        <button
          onClick={handlePrev}
          className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 group"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-8 h-8 text-white transform group-hover:-translate-x-1 transition-transform" />
        </button>
        
        <div className="flex gap-4">
          {portfolioItems.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveSlide(index);
                setShowText(false); // Hide text during manual slide change
                setShowTitle(false); // Hide title during manual slide change
                setTimeout(() => {
                  setShowText(true); // Show text after slide transition
                  setTimeout(() => setShowTitle(true), 500); // Show title after text appears
                }, 500);
              }}
              className={`transition-all duration-500 ${
                index === activeSlide
                  ? 'w-12 h-1 bg-white'
                  : 'w-6 h-1 bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 group"
          aria-label="Next slide"
        >
          <ChevronRight className="w-8 h-8 text-white transform group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Overlay for Elegance */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none"></div>
    </section>
  );
};