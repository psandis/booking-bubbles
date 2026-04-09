
import React, { useMemo } from 'react';
import type { StepProps } from '../types';
import { SERVICES } from '../constants';
import { ChevronLeftIcon } from './icons/Icons';
import { sendBookingEmail } from '../utils/email';
import { CreditCardIcon, PaypalIcon } from './icons/PaymentIcons';

const Step5Confirmation: React.FC<StepProps> = ({ data, nextStep, prevStep, t, language }) => {
    const selectedServices = SERVICES.filter(s => data.services.includes(s.id));
    const isOnlinePayment = data.paymentMethod === 'stripe' || data.paymentMethod === 'paypal';
    const confirmLabel = isOnlinePayment ? t.confirmBookingOnline : t.confirmBooking;

    const paymentCallout = useMemo(() => {
        if (!isOnlinePayment || !data.paymentMethod) return null;

        if (data.paymentMethod === 'stripe') {
            return (
                <div className="flex items-center gap-4 border border-cyan-200 rounded-2xl p-4 mb-6 bg-cyan-50">
                    <div className="bg-white rounded-2xl p-3 shadow-sm">
                        <CreditCardIcon />
                    </div>
                    <div>
                        <p className="text-base font-semibold text-gray-900">{t.paymentOnlineTitle}</p>
                        <p className="text-sm text-gray-600 mt-1">{t.paymentOnlineStripe}</p>
                    </div>
                </div>
            );
        }

        if (data.paymentMethod === 'paypal') {
            return (
                <div className="flex items-center gap-4 border border-blue-200 rounded-2xl p-4 mb-6 bg-blue-50">
                    <div className="bg-white rounded-2xl p-3 shadow-sm">
                        <PaypalIcon />
                    </div>
                    <div>
                        <p className="text-base font-semibold text-gray-900">{t.paymentOnlineTitle}</p>
                        <p className="text-sm text-gray-600 mt-1">{t.paymentOnlinePayPal}</p>
                    </div>
                </div>
            );
        }

        return null;
    }, [data.paymentMethod, isOnlinePayment, t]);

    const formatDate = (date: Date | null) => {
        if (!date) return '';
        return new Intl.DateTimeFormat(language, {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        }).format(date);
    };

    const handleConfirm = () => {
        sendBookingEmail(data, language);
        nextStep();
    };

    return (
        <div className="bg-white p-8 rounded-2xl shadow-lg animate-fade-in">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">{t.step5Title}</h2>

            {paymentCallout}

            <div className="space-y-6">
                {/* Pet Info */}
                <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold text-lg text-gray-700 mb-2">{t.petInfo}</h3>
                    <div className="text-sm space-y-1 text-gray-600">
                        <p><span className="font-medium">{t.name}:</span> {data.petName}</p>
                        <p><span className="font-medium">{t.breed}:</span> {data.petBreed || 'N/A'}</p>
                        <p><span className="font-medium">{t.size}:</span> <span className="capitalize">{data.petSize ? t[data.petSize] : ''}</span></p>
                    </div>
                </div>

                {/* Services */}
                <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold text-lg text-gray-700 mb-2">{t.services}</h3>
                    <ul className="text-sm space-y-1 list-disc list-inside text-gray-600">
                        {selectedServices.map(s => <li key={s.id}>{s.title[language]}</li>)}
                    </ul>
                </div>

                {/* Date & Time */}
                <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold text-lg text-gray-700 mb-2">{t.dateTime}</h3>
                    <div className="text-sm space-y-1 text-gray-600">
                        <p><span className="font-medium">{t.date}:</span> {formatDate(data.date)}</p>
                        <p><span className="font-medium">{t.time}:</span> {data.time}</p>
                    </div>
                </div>
                
                {/* Contact Info */}
                <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold text-lg text-gray-700 mb-2">{t.contactInfo}</h3>
                    <div className="text-sm space-y-1 text-gray-600">
                        <p><span className="font-medium">{t.name}:</span> {data.ownerName}</p>
                        <p><span className="font-medium">{t.phone}:</span> {data.ownerPhone}</p>
                        <p><span className="font-medium">{t.email}:</span> {data.ownerEmail}</p>
                    </div>
                </div>

                {/* Payment */}
                <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold text-lg text-gray-700 mb-2">{t.paymentSummaryLabel}</h3>
                    <p className="text-sm text-gray-600 capitalize">
                        {data.paymentMethod
                            ? {
                                stripe: t.paymentStripeTitle,
                                paypal: t.paymentPayPalTitle,
                                store: t.paymentStoreTitle,
                              }[data.paymentMethod]
                            : '--'}
                    </p>
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
                <div className="flex flex-col items-end text-right">
                    {isOnlinePayment && (
                        <p className="text-xs text-gray-500 mb-2">{t.paymentOnlineCtaNote}</p>
                    )}
                    <button
                        onClick={handleConfirm}
                        className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md"
                    >
                        {confirmLabel}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Step5Confirmation;
   
