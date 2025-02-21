import React from 'react';
import { useLanguage } from './LanguageContext';
import { socialLinks } from '../data';
import { Instagram, MessageCircle, Mail, Linkedin } from 'lucide-react';

const iconComponents = {
  Instagram,
  MessageCircle,
  Mail,
  Linkedin,
};

export const Contact: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {language === 'en' ? 'Get in Touch' : 'Contacto'}
          </h2>
          <p className="text-xl text-gray-600">
            {language === 'en' 
              ? 'Ready to discuss opportunities? Reach out through any of these channels' 
              : '¿Listo para discutir oportunidades? Contáctame por cualquiera de estos canales'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {socialLinks.map((link, index) => {
            const IconComponent = iconComponents[link.icon as keyof typeof iconComponents];
            return (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="bg-gray-50 p-8 rounded-xl text-center transition-all duration-300 group-hover:bg-blue-600 group-hover:shadow-lg">
                  <IconComponent className="w-12 h-12 mx-auto mb-4 text-blue-600 group-hover:text-white" />
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-white">
                    {link.platform}
                  </h3>
                </div>
              </a>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            {language === 'en' 
              ? 'Prefer email? Send me a message directly:' 
              : '¿Prefieres email? Envíame un mensaje directamente:'}
          </p>
          <a
            href="mailto:noahcastropastor@gmail.com"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
          >
            <Mail className="w-5 h-5 mr-2" />
            noahcastropastor@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};