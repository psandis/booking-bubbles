
import type React from 'react';

export type Language = 'es' | 'en';
export type PetSize = 'small' | 'medium' | 'large';
export type PaymentMethod = 'stripe' | 'paypal' | 'store';

export interface Service {
  id: string;
  icon: React.ReactNode;
  title: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
}

export interface BookingData {
  petName: string;
  petBreed: string;
  petSize: PetSize | null;
  services: string[];
  date: Date | null;
  time: string | null;
  ownerName: string;
  ownerPhone: string;
  ownerEmail: string;
  paymentMethod: PaymentMethod | null;
}

export interface Translations {
  [key: string]: any;
}

export interface StepProps {
  data: BookingData;
  updateData: (update: Partial<BookingData>) => void;
  nextStep: () => void;
  prevStep: () => void;
  t: Translations;
  language: Language;
}
   
