import { BUSINESS_EMAIL, SERVICES, translations } from '../constants';
import type { BookingData, Language, PaymentMethod } from '../types';

const formatServices = (serviceIds: string[], language: Language) => {
  if (!serviceIds.length) {
    return 'No services selected';
  }

  return serviceIds
    .map(id => {
      const match = SERVICES.find(service => service.id === id);
      if (!match) return id;
      return match.title[language] ?? match.title.en;
    })
    .join(', ');
};

export const sendBookingEmail = (data: BookingData, language: Language) => {
  if (typeof window === 'undefined') return;

  const formattedDate = data.date
    ? new Intl.DateTimeFormat(language, { dateStyle: 'full' }).format(data.date)
    : 'Date not selected';
  const formattedTime = data.time ?? 'Time not selected';
  const services = formatServices(data.services, language);
  const paymentCopy = (() => {
    if (!data.paymentMethod) return 'Payment preference not provided';
    const labelMap: Record<PaymentMethod, string> = {
      stripe: 'Online card (Stripe)',
      paypal: 'PayPal',
      store: 'Pay in store',
    };
    return labelMap[data.paymentMethod];
  })();

  const subject = encodeURIComponent(
    `New grooming request - ${data.petName || 'Paws & Bubbles'}`
  );

  const bodyLines = [
    'A new booking request just arrived through the Paws & Bubbles app.',
    '',
    `Pet: ${data.petName || 'Not provided'} (${data.petBreed || 'Breed not specified'})`,
    `Size: ${data.petSize ?? 'Not specified'}`,
    `Services: ${services}`,
    `Preferred date: ${formattedDate}`,
    `Preferred time: ${formattedTime}`,
    `Payment method: ${paymentCopy}`,
    '',
    'Owner details:',
    `Name: ${data.ownerName || 'Not provided'}`,
    `Phone: ${data.ownerPhone || 'Not provided'}`,
    `Email: ${data.ownerEmail || 'Not provided'}`,
    '',
    'Please confirm the appointment with the client as soon as possible.',
  ];

  const body = encodeURIComponent(bodyLines.join('\n'));
  window.location.href = `mailto:${BUSINESS_EMAIL}?subject=${subject}&body=${body}`;
};
