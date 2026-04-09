
import React from 'react';
import type { BookingData, Language, Translations } from '../types';

interface BookingSuccessProps {
    data: BookingData;
    t: Translations;
    language: Language;
    onReset: () => void;
}

const BookingSuccess: React.FC<BookingSuccessProps> = ({ data, t, language, onReset }) => {
    const formatDate = (date: Date | null) => {
        if (!date) return '';
        return new Intl.DateTimeFormat(language, {
            dateStyle: 'full',
        }).format(date);
    };

    return (
        <div className="bg-white p-8 rounded-2xl shadow-lg text-center animate-fade-in">
            <div className="mx-auto bg-green-100 rounded-full h-16 w-16 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800">{t.bookingSuccessTitle}</h2>
            <p className="text-gray-600 mt-2 mb-6">{t.bookingSuccessMessage}</p>

            <div className="text-left bg-gray-50 p-4 rounded-lg border">
                <h3 className="font-semibold text-lg text-gray-700 mb-3">{t.yourBookingDetails}</h3>
                <div className="text-sm space-y-2 text-gray-600">
                    <p><strong>{t.petNameLabel}:</strong> {data.petName}</p>
                    <p><strong>{t.dateTime}:</strong> {formatDate(data.date)} @ {data.time}</p>
                </div>
            </div>

            <button
                onClick={onReset}
                className="mt-8 w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md"
            >
                {t.bookAnother}
            </button>
        </div>
    );
};

export default BookingSuccess;
   