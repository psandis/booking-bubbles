
import React from 'react';
import type { Language } from '../types';

interface LanguageSwitcherProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ language, setLanguage }) => {
  return (
    <div className="flex items-center space-x-1 bg-white/20 backdrop-blur-sm p-1 rounded-full">
      <button
        onClick={() => setLanguage('es')}
        className={`px-4 py-1 text-sm rounded-full transition-colors duration-300 ${
          language === 'es' ? 'bg-white text-cyan-700 shadow' : 'text-white hover:bg-white/20'
        }`}
      >
        ES
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-4 py-1 text-sm rounded-full transition-colors duration-300 ${
          language === 'en' ? 'bg-white text-cyan-700 shadow' : 'text-white hover:bg-white/20'
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
   