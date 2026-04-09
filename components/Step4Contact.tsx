
import React, { useMemo, useState } from 'react';
import type { PaymentMethod, StepProps } from '../types';
import { ChevronLeftIcon } from './icons/Icons';
import { CreditCardIcon, PaypalIcon, StoreIcon } from './icons/PaymentIcons';

const Step4Contact: React.FC<StepProps> = ({ data, updateData, nextStep, prevStep, t }) => {
    const [errors, setErrors] = useState({ ownerName: false, ownerPhone: false, ownerEmail: false, paymentMethod: false });
    
    const validateEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const paymentOptions = useMemo(() => ([
        {
            id: 'stripe' as PaymentMethod,
            title: t.paymentStripeTitle,
            description: t.paymentStripeDescription,
            icon: <CreditCardIcon />,
            accent: 'from-cyan-50/80 to-white border-cyan-100',
        },
        {
            id: 'paypal' as PaymentMethod,
            title: t.paymentPayPalTitle,
            description: t.paymentPayPalDescription,
            icon: <PaypalIcon />,
            accent: 'from-blue-50/80 to-white border-blue-100',
        },
        {
            id: 'store' as PaymentMethod,
            title: t.paymentStoreTitle,
            description: t.paymentStoreDescription,
            icon: <StoreIcon />,
            accent: 'from-amber-50/70 to-white border-amber-100',
        },
    ]), [t]);

    const handleNext = () => {
        const newErrors = {
            ownerName: data.ownerName.trim() === '',
            ownerPhone: data.ownerPhone.trim() === '',
            ownerEmail: !validateEmail(data.ownerEmail),
            paymentMethod: !data.paymentMethod,
        };
        setErrors(newErrors);
        if (!newErrors.ownerName && !newErrors.ownerPhone && !newErrors.ownerEmail && !newErrors.paymentMethod) {
            nextStep();
        }
    };

    return (
        <div className="bg-white p-8 rounded-2xl shadow-lg animate-fade-in">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">{t.step4Title}</h2>
            
            <div className="space-y-6">
                <div>
                    <label htmlFor="ownerName" className="block text-sm font-medium text-gray-700">{t.ownerNameLabel}</label>
                    <input
                        type="text"
                        id="ownerName"
                        value={data.ownerName}
                        onChange={(e) => updateData({ ownerName: e.target.value })}
                        placeholder={t.ownerNamePlaceholder}
                        className={`mt-1 block w-full px-4 py-3 border ${errors.ownerName ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500`}
                    />
                </div>
                <div>
                    <label htmlFor="ownerPhone" className="block text-sm font-medium text-gray-700">{t.ownerPhoneLabel}</label>
                    <input
                        type="tel"
                        id="ownerPhone"
                        value={data.ownerPhone}
                        onChange={(e) => updateData({ ownerPhone: e.target.value })}
                        placeholder={t.ownerPhonePlaceholder}
                        className={`mt-1 block w-full px-4 py-3 border ${errors.ownerPhone ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500`}
                    />
                </div>
                <div>
                    <label htmlFor="ownerEmail" className="block text-sm font-medium text-gray-700">{t.ownerEmailLabel}</label>
                    <input
                        type="email"
                        id="ownerEmail"
                        value={data.ownerEmail}
                        onChange={(e) => updateData({ ownerEmail: e.target.value })}
                        placeholder={t.ownerEmailPlaceholder}
                        className={`mt-1 block w-full px-4 py-3 border ${errors.ownerEmail ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500`}
                    />
                </div>
            </div>

            <div className="mt-10">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <p className="text-lg font-semibold text-gray-800">{t.paymentSectionTitle}</p>
                        <p className="text-sm text-gray-500 mt-1">{t.paymentHint}</p>
                    </div>
                    {errors.paymentMethod && (
                        <span className="text-sm font-medium text-red-600">{t.paymentError}</span>
                    )}
                </div>
                <div className="mt-4 grid gap-4">
                    {paymentOptions.map(option => {
                        const isActive = data.paymentMethod === option.id;
                        return (
                            <button
                                type="button"
                                key={option.id}
                                onClick={() => {
                                    updateData({ paymentMethod: option.id });
                                    setErrors(prev => ({ ...prev, paymentMethod: false }));
                                }}
                                className={`w-full text-left border rounded-xl p-4 transition-all duration-200 bg-gradient-to-r ${option.accent} ${isActive ? 'border-cyan-400 shadow-lg ring-2 ring-cyan-100' : 'hover:border-cyan-200 hover:shadow-md'}`}
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`rounded-xl bg-white/80 p-3 ${isActive ? 'shadow-md' : ''}`}>
                                        {option.icon}
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-base font-semibold text-gray-800">{option.title}</p>
                                        <p className="text-sm text-gray-600 mt-1">{option.description}</p>
                                    </div>
                                    <span className={`text-xs font-semibold uppercase tracking-wide rounded-full px-3 py-1 ${isActive ? 'bg-cyan-600 text-white' : 'bg-white text-gray-500 border border-gray-200'}`}>
                                        {isActive ? t.paymentSelected : t.paymentSelect}
                                    </span>
                                </div>
                            </button>
                        );
                    })}
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

export default Step4Contact;
   
