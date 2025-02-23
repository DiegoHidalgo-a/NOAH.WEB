import React from 'react';
import { useLanguage } from './LanguageContext';
import { Instagram, Twitter, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white mt-auto" aria-label="Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8" role="contentinfo">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Noah</h3>
            <p className="text-gray-400">
              {language === 'en' 
                ? 'Professional football player with a passion for excellence and continuous improvement.' 
                : 'Jugador profesional de fútbol con pasión por la excelencia y la mejora continua.'}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4" role="heading" aria-level={4}>
              {language === 'en' ? 'Quick Links' : 'Enlaces Rápidos'}
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">
                  {language === 'en' ? 'Home' : 'Inicio'}
                </a>
              </li>
              <li>
                <a href="#highlights" className="text-gray-400 hover:text-white transition-colors">
                  {language === 'en' ? 'Highlights' : 'Destacados'}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  {language === 'en' ? 'Contact' : 'Contacto'}
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {language === 'en' ? 'Follow Me' : 'Sígueme'}
            </h4>
            <div className="flex space-x-4" role="navigation">
              <a href="https://www.instagram.com/noah_castro_/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={24} />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:contact@carlosrodriguez.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {currentYear} Diego Hidalgo. {language === 'en' ? 'All rights reserved.' : 'Todos los derechos reservados.'}</p>
        </div>
      </div>
    </footer>
  );
};
