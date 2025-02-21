import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Globe, Menu, X } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { navItems } from '../data';

export const Navbar: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'es' : 'en';
    setLanguage(newLanguage);
    setIsMenuOpen(false);
  };

  const handleNavigation = (href: string) => {
    if (href.startsWith('#')) {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const targetId = href.replace('#', '');
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const targetId = href.replace('#', '');
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      navigate(href);
    }
    setIsMenuOpen(false);
  };

  const renderNavItem = (item: typeof navItems[0]) => {
    if (item.href.startsWith('#')) {
      return (
        <a
          key={item.href}
          href={item.href}
          className="text-gray-700 hover:text-blue-600 transition-colors duration-300 ease-in-out transform hover:scale-105"
          onClick={(e) => {
            e.preventDefault();
            handleNavigation(item.href);
          }}
          aria-label={item.label[language]}
        >
          {item.label[language]}
        </a>
      );
    }
    return (
      <Link
        key={item.href}
        to={item.href}
        className="text-gray-700 hover:text-blue-600 transition-colors duration-300 ease-in-out transform hover:scale-105"
      >
        {item.label[language]}
      </Link>
    );
  };

  const renderMobileNavItem = (item: typeof navItems[0]) => {
    if (item.href.startsWith('#')) {
      return (
        <a
          key={item.href}
          href={item.href}
          className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
          onClick={(e) => {
            e.preventDefault();
            handleNavigation(item.href);
          }}
          aria-label={item.label[language]}
        >
          {item.label[language]}
        </a>
      );
    }
    return (
      <Link
        key={item.href}
        to={item.href}
        className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
        onClick={() => setIsMenuOpen(false)}
      >
        {item.label[language]}
      </Link>
    );
  };

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50" aria-label="Main Navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link
              to="/"
              aria-label="Go to main section"
              className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
            >
              Noah
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8" role="navigation">
            {navItems.map(renderNavItem)}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-600"
              aria-label="Toggle language"
            >
              <Globe size={20} />
              <span className="uppercase">{language}</span>
            </button>
          </div>

          <div className="md:hidden flex items-center" aria-label="Mobile menu">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden bg-white shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1" role="menu">
          {navItems.map(renderMobileNavItem)}
          <button
            onClick={toggleLanguage}
            className="flex items-center space-x-1 px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
            aria-label="Toggle language"
          >
            <Globe size={20} />
            <span className="uppercase">{language}</span>
          </button>
        </div>
      </div>
    </nav>
  );
};
