import { IMAGES } from '../config/site';

export interface Therapy {
  slug: string;
  name: string;
  subtitle: string;
  description: string[];
  duration: string;
  price: string;
  cta: string;
  image: string;
}

export const therapies: Therapy[] = [
{
  slug: 'abhyanga',
  name: 'Abhyanga',
  subtitle: 'Traditional Ayurvedic Oil Massage',
  description: [
  'Abhyanga is a traditional Ayurvedic oil massage involving rhythmic application of warm herbal oils.',
  'It is traditionally used as a relaxing and nourishing therapy and is commonly incorporated into Ayurvedic wellness and Panchakarma preparation programs.'],

  duration: '45–60 minutes',
  price: '₹1,500',
  cta: 'Enquire About Abhyanga',
  image: IMAGES.abhyanga
},
{
  slug: 'shirodhara',
  name: 'Shirodhara',
  subtitle: 'A Traditional Ayurvedic Relaxation Therapy',
  description: [
  'Shirodhara involves the gentle, continuous flow of selected liquid over the forehead as part of a traditional Ayurvedic therapy.',
  'It is often chosen as a deeply relaxing wellness experience.'],

  duration: '45–60 minutes',
  price: '₹1,800',
  cta: 'Enquire About Shirodhara',
  image: IMAGES.shirodhara
},
{
  slug: 'swedana',
  name: 'Swedana',
  subtitle: 'Ayurvedic Herbal Steam Therapy',
  description: [
  'Swedana is a traditional Ayurvedic sweating therapy often used as part of selected Ayurvedic treatment protocols.'],

  duration: '15–20 minutes',
  price: '₹500',
  cta: 'Enquire About Swedana',
  image: IMAGES.swedana
},
{
  slug: 'pindasweda',
  name: 'Pindasweda / Patra Pinda Sweda',
  subtitle: 'Herbal Poultice Therapy',
  description: [
  'A traditional Ayurvedic therapy involving warmed herbal preparations applied to selected areas of the body.'],

  duration: '45–60 minutes',
  price: '₹2,000',
  cta: 'Enquire About Pindasweda',
  image: IMAGES.pinda
},
{
  slug: 'pizhichil',
  name: 'Pizhichil',
  subtitle: 'Traditional Ayurvedic Oil Therapy',
  description: [
  'Pizhichil is a traditional Ayurvedic therapy in which warm medicated oil is gently poured over the body while being accompanied by therapeutic massage techniques.'],

  duration: '60–75 minutes',
  price: '₹2,500',
  cta: 'Enquire About Pizhichil',
  image: IMAGES.shirodhara
},
{
  slug: 'kati-basti',
  name: 'Kati Basti',
  subtitle: 'Localised Ayurvedic Oil Therapy',
  description: [
  'Kati Basti is a traditional Ayurvedic procedure involving retention of warm herbal oil over the lower back region using a specially prepared herbal dough ring.'],

  duration: '30–45 minutes',
  price: '₹1,200',
  cta: 'Enquire About Kati Basti',
  image: IMAGES.pinda
},
{
  slug: 'janu-basti',
  name: 'Janu Basti',
  subtitle: 'Traditional Knee-Focused Ayurvedic Therapy',
  description: [
  'Janu Basti is a localised Ayurvedic procedure involving the retention of warm herbal oil around the knee region.'],

  duration: '30–45 minutes',
  price: '₹1,200',
  cta: 'Enquire About Janu Basti',
  image: IMAGES.abhyanga
},
{
  slug: 'nasya',
  name: 'Nasya',
  subtitle: 'Traditional Nasal Ayurvedic Procedure',
  description: [
  'Nasya is a classical Ayurvedic procedure involving administration of selected substances through the nasal route under appropriate supervision.'],

  duration: '20–30 minutes',
  price: '₹800',
  cta: 'Enquire About Nasya',
  image: IMAGES.intro
},
{
  slug: 'udwartana',
  name: 'Udwartana',
  subtitle: 'Ayurvedic Herbal Powder Massage',
  description: [
  'Udwarthana is a traditional Ayurvedic massage using herbal powders.',
  'It is commonly incorporated into wellness and body-care programs.'],

  duration: '45–60 minutes',
  price: '₹1,800',
  cta: 'Enquire About Udwartana',
  image: IMAGES.udwartana
}];