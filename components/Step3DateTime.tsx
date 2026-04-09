
import React, { useState, useMemo, useEffect } from 'react';
import type { StepProps } from '../types';
import { TIME_SLOTS } from '../constants';
import { ChevronLeftIcon } from './icons/Icons';

const Calendar: React.FC<{
  selectedDate: Date | null;
  onDateSelect: (date: Date) => void;
  language: string;
}> = ({ selectedDate, onDateSelect, language }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [today, setToday] = useState<Date | null>(null);

  useEffect(() => {
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    setToday(now);
  }, []);

  const daysOfWeek = useMemo(() => {
    const formatter = new Intl.DateTimeFormat(language, { weekday: 'short' });
    return Array.from({ length: 7 }, (_, i) => {
      const date = new Date(2023, 0, i + 1); // A week in Jan 2023
      return formatter.format(date).slice(0, 2);
    });
  }, [language]);

  const monthName = new Intl.DateTimeFormat(language, { month: 'long', year: 'numeric' }).format(currentDate);
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

  const changeMonth = (offset: number) => {
    setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() + offset, 1));
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-4">
        <button onClick={() => changeMonth(-1)}>&lt;</button>
        <h3 className="font-semibold text-lg capitalize">{monthName}</h3>
        <button onClick={() => changeMonth(1)}>&gt;</button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-sm text-gray-500">
        {daysOfWeek.map(day => <div key={day} className="font-medium">{day}</div>)}
      </div>
      <div className="grid grid-cols-7 gap-1 mt-2">
        {Array.from({ length: firstDayOfMonth }).map((_, i) => <div key={`empty-${i}`}></div>)}
        {Array.from({ length: daysInMonth }).map((_, day) => {
          const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day + 1);
          const isSelected = selectedDate?.getTime() === date.getTime();
          const isPast = today ? date < today : false;
          return (
            <button
              key={day}
              disabled={isPast}
              onClick={() => onDateSelect(date)}
              className={`p-2 rounded-full aspect-square transition-colors ${
                isPast ? 'text-gray-300 cursor-not-allowed' :
                isSelected ? 'bg-cyan-500 text-white' :
                'hover:bg-cyan-100'
              }`}
            >
              {day + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
};


const Step3DateTime: React.FC<StepProps> = ({ data, updateData, nextStep, prevStep, t, language }) => {
    const [errors, setErrors] = useState({ date: false, time: false });
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const handleNext = () => {
        const newErrors = {
            date: data.date === null,
            time: data.time === null,
        };
        setErrors(newErrors);
        if (!newErrors.date && !newErrors.time) {
            nextStep();
        }
    };
    
    const handleDateSelect = (date: Date) => {
      updateData({ date });
      setErrors(p => ({ ...p, date: false }));
    };

    const handleTimeSelect = (time: string) => {
      updateData({ time });
      setErrors(p => ({...p, time: false}));
    }

    return (
        <div className="bg-white p-8 rounded-2xl shadow-lg animate-fade-in">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">{t.step3Title}</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className={`font-semibold mb-2 ${errors.date ? 'text-red-500' : ''}`}>{t.date}</h3>
                    {isMounted ? (
                        <Calendar selectedDate={data.date} onDateSelect={handleDateSelect} language={language} />
                    ) : (
                        <div className="h-64 w-full rounded-2xl bg-slate-100 animate-pulse" aria-hidden />
                    )}
                </div>
                <div>
                    <h3 className={`font-semibold mb-2 ${errors.time ? 'text-red-500' : ''}`}>{t.time}</h3>
                    <div className="grid grid-cols-2 gap-3">
                        {TIME_SLOTS.map(time => (
                            <button
                                key={time}
                                onClick={() => handleTimeSelect(time)}
                                className={`p-3 rounded-lg border-2 transition-all ${
                                    data.time === time
                                    ? 'bg-cyan-500 text-white border-cyan-500'
                                    : 'bg-white hover:border-cyan-400'
                                }`}
                            >
                                {time}
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

export default Step3DateTime;
   
