export interface Program {
  id: string;
  label: string;
  name: string;
  price: string;
  priceNote?: string;
  intro?: string;
  includesLabel: string;
  includes: string[];
  note?: string;
  cta: string;
  featured?: boolean;
}

export const programs: Program[] = [
{
  id: 'consultation',
  label: 'Package 1',
  name: 'Ayurvedic Wellness Consultation',
  price: '₹1,000',
  includesLabel: 'Includes',
  includes: [
  'Initial consultation',
  'Ayurvedic assessment',
  'Lifestyle discussion',
  'Wellness recommendations',
  'Personalised therapy suggestions'],

  cta: 'Book Consultation'
},
{
  id: 'three-day',
  label: 'Package 2',
  name: '3-Day Ayurvedic Rejuvenation Experience',
  price: 'Starting From ₹7,500',
  intro:
  'Designed for individuals looking for a short introduction to Ayurvedic wellness therapies.',
  includesLabel: 'May include',
  includes: [
  'Ayurvedic consultation',
  'Abhyanga',
  'Swedana',
  'Shirodhara',
  'Relaxation therapies',
  'Lifestyle guidance'],

  note: 'Final therapy selection depends on consultation.',
  cta: 'Enquire About This Program'
},
{
  id: 'seven-day',
  label: 'Package 3',
  name: '7-Day Ayurvedic Wellness Retreat',
  price: 'Starting From ₹18,000',
  intro:
  'A structured seven-day wellness experience designed around traditional Ayurvedic therapies, relaxation and supportive lifestyle practices.',
  includesLabel: 'May include',
  includes: [
  'Ayurvedic consultation',
  'Personalised therapy schedule',
  'Abhyanga',
  'Swedana',
  'Shirodhara',
  'Selected Ayurvedic procedures',
  'Dietary guidance',
  'Daily wellness routine',
  'Progress review'],

  cta: 'Enquire About This Program',
  featured: true
},
{
  id: 'fourteen-day',
  label: 'Package 4',
  name: '14-Day Panchakarma Wellness Program',
  price: 'Starting From ₹40,000',
  intro:
  'A deeper Ayurvedic wellness experience designed for individuals seeking a structured Panchakarma journey.',
  includesLabel: 'May include',
  includes: [
  'Consultation',
  'Preparation',
  'Selected Panchakarma procedures',
  'Rest',
  'Rejuvenation',
  'Follow-up'],

  note: 'The exact therapies and duration are determined individually.',
  cta: 'Enquire About This Program',
  featured: true
},
{
  id: 'twentyone-day',
  label: 'Package 5',
  name: '21-Day Complete Panchakarma Journey',
  price: 'Starting From ₹65,000',
  intro:
  'A comprehensive, consultation-led Ayurvedic program for individuals seeking a longer traditional Panchakarma and rejuvenation experience.',
  includesLabel: 'Program may include',
  includes: [
  'Detailed Ayurvedic consultation',
  'Individual therapy planning',
  'Preparatory therapies',
  'Selected Panchakarma procedures',
  'Daily Ayurvedic therapies',
  'Diet and lifestyle guidance',
  'Rest and recovery',
  'Rejuvenation therapies',
  'Follow-up consultation'],

  cta: 'Enquire About This Program'
}];


export const programsFootnote =
'Accommodation, medicines and additional procedures, if applicable, may be charged separately.';