import React, { createContext, useContext, useState, useMemo } from 'react';
import { Language } from '../types';

// Define the shape of the context
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

// Create the context with a default value of `undefined`
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// LanguageProvider component
export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  // Memoize the context value to prevent unnecessary re-renders
  const contextValue = useMemo(() => ({ language, setLanguage }), [language]);

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the LanguageContext
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};