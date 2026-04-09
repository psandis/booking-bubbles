
import React, { useState } from 'react';
import type { StepProps, PetSize } from '../types';
import { ChevronLeftIcon, DogIcon } from './icons/Icons';

const Step1PetInfo: React.FC<StepProps> = ({ data, updateData, nextStep, prevStep, t }) => {
  const [errors, setErrors] = useState({ petName: false, petSize: false });

  const handleNext = () => {
    const newErrors = {
      petName: data.petName.trim() === '',
      petSize: data.petSize === null,
    };
    setErrors(newErrors);
    if (!newErrors.petName && !newErrors.petSize) {
      nextStep();
    }
  };

  const handleSizeSelection = (size: PetSize) => {
    updateData({ petSize: size });
    setErrors(prev => ({ ...prev, petSize: false }));
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg animate-fade-in">
      <div className="flex items-center mb-6">
        <DogIcon />
        <h2 className="text-2xl font-bold text-gray-800 ml-3">{t.step1Title}</h2>
      </div>

      <div className="space-y-6">
        <div>
          <label htmlFor="petName" className="block text-sm font-medium text-gray-700">{t.petNameLabel}</label>
          <input
            type="text"
            id="petName"
            value={data.petName}
            onChange={(e) => {
              updateData({ petName: e.target.value });
              if (e.target.value.trim() !== '') setErrors(prev => ({ ...prev, petName: false }));
            }}
            placeholder={t.petNamePlaceholder}
            className={`mt-1 block w-full px-4 py-3 border ${errors.petName ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm`}
          />
        </div>

        <div>
          <label htmlFor="petBreed" className="block text-sm font-medium text-gray-700">{t.petBreedLabel}</label>
          <input
            type="text"
            id="petBreed"
            value={data.petBreed}
            onChange={(e) => updateData({ petBreed: e.target.value })}
            placeholder={t.petBreedPlaceholder}
            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
          />
        </div>

        <div>
          <label className={`block text-sm font-medium ${errors.petSize ? 'text-red-500' : 'text-gray-700'}`}>{t.petSizeLabel}</label>
          <div className="grid grid-cols-3 gap-3 mt-2">
            {(['small', 'medium', 'large'] as PetSize[]).map((size) => (
              <button
                key={size}
                onClick={() => handleSizeSelection(size)}
                className={`text-center p-4 rounded-lg border-2 transition-all duration-200 ${
                  data.petSize === size
                    ? 'bg-cyan-500 border-cyan-500 text-white shadow-md'
                    : 'bg-white border-gray-200 text-gray-700 hover:border-cyan-400 hover:bg-cyan-50'
                }`}
              >
                <span className="capitalize">{t[size]}</span>
              </button>
            ))}
          </div>
        </div>
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

export default Step1PetInfo;
   