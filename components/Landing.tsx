import React from 'react';
import type { Language, Translations } from '../types';
import LanguageSwitcher from './LanguageSwitcher';
import { BubblesIcon } from './icons/Icons';
import { BUSINESS_EMAIL } from '../constants';

interface LandingProps {
  onBookNow: () => void;
  setLanguage: (lang: Language) => void;
  language: Language;
  t: Translations;
}

const Landing: React.FC<LandingProps> = ({ onBookNow, setLanguage, language, t }) => {
  return (
    <div
      className="relative w-full max-w-md mx-auto h-[80vh] min-h-[500px] max-h-[700px] rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between p-8 text-white bg-cover bg-center"
      style={{ backgroundImage: 'url(/assets/landing-hero.jpg)' }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/80 via-black/40 to-transparent -z-10"></div>
      
      <header className="flex justify-between items-center">
        <div className="flex items-center">
          <BubblesIcon />
          <h1 className="text-2xl font-bold tracking-wider ml-2">{t.appName}</h1>
        </div>
        <LanguageSwitcher language={language} setLanguage={setLanguage} />
      </header>
      
      <main className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight drop-shadow-lg">{t.tagline}</h2>
        <button 
          onClick={onBookNow}
          className="mt-8 bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
        >
          {t.bookAppointment}
        </button>
      </main>
      
      <footer className="text-sm text-white/90">
        <p className="font-medium">{t.contactUsLabel}</p>
        <a
          href={`mailto:${BUSINESS_EMAIL}`}
          className="underline decoration-cyan-300 decoration-2 underline-offset-4 hover:text-cyan-200 transition-colors inline-flex flex-col"
        >
          <span>{t.contactUsCta}</span>
          <span className="font-semibold">{BUSINESS_EMAIL}</span>
        </a>
      </footer>
    </div>
  );
};

export default Landing;
