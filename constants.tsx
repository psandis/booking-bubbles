
import React from 'react';
import type { Service, Translations } from './types';

const ScissorIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.121 7.629A6 6 0 103.88 17.88M19.536 8.464l-4.95-4.95m0 0a2.25 2.25 0 013.182 0l2.121 2.121a2.25 2.25 0 010 3.182L13.414 16m-2.121-2.121l4.95 4.95m-4.95-4.95l-2.121 2.121a2.25 2.25 0 01-3.182 0l-2.121-2.121a2.25 2.25 0 010-3.182l4.95-4.95" />
    </svg>
);

const ShowerIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.5l3 3m0 0l3-3m-3 3v-6a3 3 0 013-3h3.75a3 3 0 013 3v6m-9 0h9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const PawIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.793V5.418a2 2 0 00-2.355-1.95l-3.26.815a2 2 0 01-1.63 0l-3.5-1.75a2 2 0 00-1.51 0l-3.5 1.75a2 2 0 01-1.63 0l-3.26-.815A2 2 0 002 5.418v7.375a2 2 0 001.004 1.732l6.5 3.75a2 2 0 001.992 0l6.5-3.75A2 2 0 0021 12.793zM15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);


export const SERVICES: Service[] = [
  {
    id: 'full_groom',
    icon: <ScissorIcon />,
    title: { es: 'Baño y Corte', en: 'Bath & Haircut' },
    description: { es: 'Baño completo, secado, corte de pelo y cepillado.', en: 'Full bath, drying, haircut, and brushing.' },
  },
  {
    id: 'bath_only',
    icon: <ShowerIcon />,
    title: { es: 'Solo Baño', en: 'Bath Only' },
    description: { es: 'Un baño refrescante con champú especial y secado.', en: 'A refreshing bath with special shampoo and drying.' },
  },
  {
    id: 'nail_trim',
    icon: <PawIcon />,
    title: { es: 'Corte de Uñas', en: 'Nail Clipping' },
    description: { es: 'Recorte y limado de uñas seguro y profesional.', en: 'Safe and professional nail trimming and filing.' },
  },
];

export const TIME_SLOTS: string[] = ['09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00'];
export const BUSINESS_EMAIL = 'hello@pawsandbubbles.com';

export const translations: { [key: string]: Translations } = {
  es: {
    appName: "Paws & Bubbles",
    tagline: "El mejor cuidado para tu mejor amigo.",
    bookAppointment: "Reservar Cita",
    language: "Idioma",
    next: "Siguiente",
    back: "Atrás",
    confirmBooking: "Confirmar Reserva",
    bookingSuccessTitle: "¡Cita Confirmada!",
    bookingSuccessMessage: "Hemos recibido tu reserva. ¡Te esperamos a ti y a tu amigo peludo!",
    bookAnother: "Reservar Otra Cita",
    yourBookingDetails: "Detalles de tu Reserva",
    contactUsLabel: "¿Necesitas ayuda rápida?",
    contactUsCta: "Escríbenos:",
    // Steps
    step1Title: "Cuéntanos sobre tu mascota",
    petNameLabel: "Nombre de la mascota",
    petNamePlaceholder: "Ej: Rocky",
    petBreedLabel: "Raza",
    petBreedPlaceholder: "Ej: Golden Retriever",
    petSizeLabel: "Tamaño",
    small: "Pequeño",
    medium: "Mediano",
    large: "Grande",
    step2Title: "Elige los servicios",
    step2Error: "Por favor, selecciona al menos un servicio.",
    step3Title: "Selecciona fecha y hora",
    step4Title: "Tus datos de contacto",
    ownerNameLabel: "Tu nombre",
    ownerNamePlaceholder: "Ej: Maria López",
    ownerPhoneLabel: "Teléfono",
    ownerPhonePlaceholder: "+34 600 123 456",
    ownerEmailLabel: "Correo electrónico",
    ownerEmailPlaceholder: "maria@ejemplo.com",
    step5Title: "Confirma tu reserva",
    petInfo: "Información de la Mascota",
    services: "Servicios",
    dateTime: "Fecha y Hora",
    contactInfo: "Datos de Contacto",
    name: "Nombre",
    breed: "Raza",
    size: "Tamaño",
    date: "Fecha",
    time: "Hora",
    phone: "Teléfono",
    email: "Email",
    progressStep: "Paso",
    progressOf: "de",
    paymentSectionTitle: "Método de pago",
    paymentHint: "Elige cómo prefieres pagar esta sesión.",
    paymentStripeTitle: "Tarjeta bancaria (Stripe)",
    paymentStripeDescription: "Te enviaremos un enlace seguro para pagar en línea tras confirmar la reserva.",
    paymentPayPalTitle: "PayPal",
    paymentPayPalDescription: "Recibirás una solicitud en tu cuenta PayPal para completar el pago.",
    paymentStoreTitle: "Pagar en la tienda",
    paymentStoreDescription: "Cancela en recepción el día de la cita, sin cargos por adelantado.",
    paymentSelect: "Elegir",
    paymentSelected: "Seleccionado",
    paymentError: "Selecciona un método de pago para continuar.",
    paymentSummaryLabel: "Método de pago",
    paymentOnlineTitle: "Pago online seguro",
    paymentOnlineStripe: "En cuanto confirmes, recibirás un enlace de Stripe para completar el pago sin compartir datos sensibles.",
    paymentOnlinePayPal: "Tras confirmar enviaremos una solicitud desde nuestra cuenta PayPal para que finalices el pago.",
    paymentOnlineCtaNote: "Te enviaremos el enlace de cobro en unos minutos.",
    confirmBookingOnline: "Confirmar y enviar enlace",
  },
  en: {
    appName: "Paws & Bubbles",
    tagline: "The best care for your best friend.",
    bookAppointment: "Book Appointment",
    language: "Language",
    next: "Next",
    back: "Back",
    confirmBooking: "Confirm Booking",
    bookingSuccessTitle: "Appointment Confirmed!",
    bookingSuccessMessage: "We've received your booking. We look forward to seeing you and your furry friend!",
    bookAnother: "Book Another Appointment",
    yourBookingDetails: "Your Booking Details",
    contactUsLabel: "Need to get in touch?",
    contactUsCta: "Email us at:",
    // Steps
    step1Title: "Tell us about your pet",
    petNameLabel: "Pet's Name",
    petNamePlaceholder: "e.g., Rocky",
    petBreedLabel: "Breed",
    petBreedPlaceholder: "e.g., Golden Retriever",
    petSizeLabel: "Size",
    small: "Small",
    medium: "Medium",
    large: "Large",
    step2Title: "Choose services",
    step2Error: "Please select at least one service.",
    step3Title: "Select a date and time",
    step4Title: "Your contact details",
    ownerNameLabel: "Your name",
    ownerNamePlaceholder: "e.g., Jane Doe",
    ownerPhoneLabel: "Phone",
    ownerPhonePlaceholder: "+1 555 123 4567",
    ownerEmailLabel: "Email",
    ownerEmailPlaceholder: "jane@example.com",
    step5Title: "Confirm your booking",
    petInfo: "Pet Information",
    services: "Services",
    dateTime: "Date & Time",
    contactInfo: "Contact Info",
    name: "Name",
    breed: "Breed",
    size: "Size",
    date: "Date",
    time: "Time",
    phone: "Phone",
    email: "Email",
    progressStep: "Step",
    progressOf: "of",
    paymentSectionTitle: "Payment method",
    paymentHint: "Choose how you'd like to settle this visit.",
    paymentStripeTitle: "Card payment (Stripe)",
    paymentStripeDescription: "We’ll send you a secure Stripe link right after confirming the booking.",
    paymentPayPalTitle: "PayPal",
    paymentPayPalDescription: "A PayPal request will arrive in your inbox to finalize payment.",
    paymentStoreTitle: "Pay at the salon",
    paymentStoreDescription: "Settle in person on the appointment day—no upfront charge.",
    paymentSelect: "Select",
    paymentSelected: "Selected",
    paymentError: "Please choose a payment option to continue.",
    paymentSummaryLabel: "Payment",
    paymentOnlineTitle: "Secure online payment",
    paymentOnlineStripe: "As soon as you confirm we'll email a Stripe checkout link—no charges happen until you complete it.",
    paymentOnlinePayPal: "Once you confirm we’ll send a request from our PayPal account so you can finalize the payment.",
    paymentOnlineCtaNote: "We’ll send the payment link right after this step.",
    confirmBookingOnline: "Confirm & send payment link",
  },
};
   
