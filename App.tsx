
'use client';

import React, { useState, useCallback } from 'react';
import type { BookingData, Language } from './types';
import { translations } from './constants';
import Landing from './components/Landing';
import Step1PetInfo from './components/Step1PetInfo';
import Step2Services from './components/Step2Services';
import Step3DateTime from './components/Step3DateTime';
import Step4Contact from './components/Step4Contact';
import Step5Confirmation from './components/Step5Confirmation';
import BookingSuccess from './components/BookingSuccess';
import ProgressBar from './components/ProgressBar';

const initialBookingData: BookingData = {
  petName: '',
  petBreed: '',
  petSize: null,
  services: [],
  date: null,
  time: null,
  ownerName: '',
  ownerPhone: '',
  ownerEmail: '',
  paymentMethod: null,
};

type Step = 'landing' | 1 | 2 | 3 | 4 | 5 | 'success';

function App() {
  const [language, setLanguage] = useState<Language>('es');
  const [bookingStep, setBookingStep] = useState<Step>('landing');
  const [bookingData, setBookingData] = useState<BookingData>(initialBookingData);

  const t = translations[language];

  const updateData = useCallback((update: Partial<BookingData>) => {
    setBookingData((prev) => ({ ...prev, ...update }));
  }, []);

  const nextStep = () => {
    if (bookingStep === 'landing') setBookingStep(1);
    // FIX: Add type guard to ensure bookingStep is a number before comparison.
    else if (typeof bookingStep === 'number' && bookingStep < 5) setBookingStep(prev => (prev as number) + 1 as Step);
    else if (bookingStep === 5) setBookingStep('success');
  };

  const prevStep = () => {
    // FIX: Add type guard to ensure bookingStep is a number before comparison.
    if (typeof bookingStep === 'number' && bookingStep > 1) setBookingStep(prev => (prev as number) - 1 as Step);
    else if (bookingStep === 1) setBookingStep('landing');
  };
  
  const resetBooking = () => {
    setBookingData(initialBookingData);
    setBookingStep('landing');
  }

  const renderStep = () => {
    const stepProps = { data: bookingData, updateData, nextStep, prevStep, t, language };

    switch (bookingStep) {
      case 'landing':
        return <Landing onBookNow={() => setBookingStep(1)} setLanguage={setLanguage} language={language} t={t} />;
      case 1:
        return <Step1PetInfo {...stepProps} />;
      case 2:
        return <Step2Services {...stepProps} />;
      case 3:
        return <Step3DateTime {...stepProps} />;
      case 4:
        return <Step4Contact {...stepProps} />;
      case 5:
        return <Step5Confirmation {...stepProps} />;
      case 'success':
        return <BookingSuccess data={bookingData} t={t} language={language} onReset={resetBooking} />;
      default:
        return <Landing onBookNow={() => setBookingStep(1)} setLanguage={setLanguage} language={language} t={t} />;
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen w-full flex items-center justify-center p-4 antialiased">
      <div className="w-full max-w-2xl mx-auto">
        {bookingStep !== 'landing' && bookingStep !== 'success' && (
          <ProgressBar currentStep={bookingStep as number} totalSteps={5} t={t} />
        )}
        <div className="transition-all duration-500">
           {renderStep()}
        </div>
      </div>
    </div>
  );
}

export default App;
