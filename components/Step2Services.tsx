
import React, { useState } from 'react';
import type { StepProps } from '../types';
import { SERVICES } from '../constants';
import { ChevronLeftIcon, CheckIcon } from './icons/Icons';

const Step2Services: React.FC<StepProps> = ({ data, updateData, nextStep, prevStep, t, language }) => {
  const [error, setError] = useState(false);

  const toggleService = (serviceId: string) => {
    const currentServices = data.services;
    const newServices = currentServices.includes(serviceId)
      ? currentServices.filter((id) => id !== serviceId)
      : [...currentServices, serviceId];
    updateData({ services: newServices });
    if (newServices.length > 0) setError(false);
  };

  const handleNext = () => {
    if (data.services.length === 0) {
      setError(true);
    } else {
      nextStep();
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg animate-fade-in">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{t.step2Title}</h2>
      {error && <p className="text-red-500 text-sm mb-4">{t.step2Error}</p>}

      <div className="space-y-4">
        {SERVICES.map((service) => (
          <div
            key={service.id}
            onClick={() => toggleService(service.id)}
            className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
              data.services.includes(service.id)
                ? 'bg-cyan-50 border-cyan-500 shadow-md'
                : 'bg-white border-gray-200 hover:border-cyan-400'
            }`}
          >
            <div className="flex-shrink-0">{service.icon}</div>
            <div className="ml-4 flex-grow">
              <h3 className="font-semibold text-gray-800">{service.title[language]}</h3>
              <p className="text-sm text-gray-500">{service.description[language]}</p>
            </div>
            <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200 ${
                data.services.includes(service.id) ? 'bg-cyan-500' : 'bg-gray-200'
            }`}>
              {data.services.includes(service.id) && <CheckIcon />}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-between">
        <button
          onClick={prevStep}
          className="flex items-center text-gray-600 font-medium py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <ChevronLeftIcon />
          {t.back}
        </button>
        <button
          onClick={handleNext}
          className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md"
        >
          {t.next}
        </button>
      </div>
    </div>
  );
};

export default Step2Services;
   