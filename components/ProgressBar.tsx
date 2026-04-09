
import React from 'react';
import type { Translations } from '../types';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  t: Translations;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps, t }) => {
  const percentage = (currentStep / totalSteps) * 100;

  return (
    <div className="mb-8">
      <div className="relative h-2 bg-gray-200 rounded-full">
        <div
          className="absolute top-0 left-0 h-2 bg-cyan-500 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
       <p className="text-center text-sm text-gray-500 mt-2">
        {t.progressStep} {currentStep} {t.progressOf} {totalSteps}
      </p>
    </div>
  );
};

export default ProgressBar;
   