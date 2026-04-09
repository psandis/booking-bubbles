# Paws & Bubbles - Pet Grooming Booking

A multi-step pet grooming appointment booking app with service selection, calendar scheduling, and payment options. Warm, friendly design with bubble accents and a guided wizard flow.

**Live demo:** https://psandis.github.io/booking-bubbles/

## Features

| Section | Description |
|---------|-------------|
| Landing | Hero page with call to action and brand imagery |
| Pet Details | Name, breed, and size input |
| Service Selection | Bath & Haircut, Bath Only, Nail Clipping |
| Date & Time | Interactive calendar with available time slots |
| Contact & Payment | Contact form with card, PayPal, or in-store payment |
| Confirmation | Booking summary with automatic email generation |
| Language Toggle | Full Spanish and English translations |

## Booking Flow

```
Landing → Pet Details → Services → Date & Time → Contact & Payment → Confirmation
```

Each step animates in with transitions. The back button returns to the previous step without losing state.

## Tech Stack

| Component | Technology | Version |
|-----------|-----------|---------|
| Framework | Next.js | 16 |
| UI | React | 19 |
| Language | TypeScript | 6 |
| Styling | Tailwind CSS | 4 |

## Quick Start

```bash
git clone https://github.com/psandis/booking-bubbles.git
cd booking-bubbles
npm install
npm run dev
```

Open http://localhost:3134.

## Build

```bash
npm run build
npm start
```

## Project Structure

```
booking-bubbles/
├── app/
│   ├── layout.tsx              Root layout, fonts, global styles
│   └── page.tsx                Entry point rendering main App
├── components/
│   ├── Landing.tsx             Hero landing page with CTA
│   ├── Step1PetInfo.tsx        Pet name, breed, and size form
│   ├── Step2Services.tsx       Grooming service selection
│   ├── Step3DateTime.tsx       Calendar and time slot picker
│   ├── Step4Contact.tsx        Contact details and payment method
│   ├── Step5Confirmation.tsx   Booking review and confirm
│   ├── BookingSuccess.tsx      Success screen
│   ├── ProgressBar.tsx         Step progress indicator
│   └── LanguageSwitcher.tsx    ES/EN language toggle
└── public/assets/              Hero imagery
```

## License

[MIT](LICENSE)
