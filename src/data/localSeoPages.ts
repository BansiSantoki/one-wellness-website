import { IMAGES } from '../config/site';

export interface LocalSeoBlock {
  heading: string;
  body: string[];
  list?: string[];
}

export interface LocalSeoPage {
  slug: string;
  crumb: string;
  seoTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  intro: string;
  image: string;
  blocks: LocalSeoBlock[];
  /** Which shared section to append below the unique content */
  feature: 'therapies' | 'programs' | 'journey' | 'rejuvenation';
}

export const localSeoPages: LocalSeoPage[] = [
{
  slug: 'ayurvedic-consultation-nashik',
  crumb: 'Ayurvedic Consultation in Nashik',
  seoTitle: 'Ayurvedic Consultation in Nashik | One Wellness Clinic & Research Center',
  metaDescription:
  'Book an Ayurvedic consultation in Nashik at One Wellness Clinic & Research Center. Individual assessment, lifestyle discussion and personalised therapy suggestions.',
  eyebrow: 'Nashik',
  h1: 'Ayurvedic Consultation in Nashik',
  intro:
  'Every Ayurvedic journey at One Wellness begins with a consultation, because the therapies that suit one person may not suit another.',
  image: IMAGES.consultation,
  feature: 'programs',
  blocks: [
  {
    heading: 'What the consultation covers',
    body: [
    'We begin by understanding your concerns, lifestyle, dietary habits, daily routine and overall wellness goals.',
    'The Ayurvedic practitioner then determines an appropriate wellness and therapy plan based on that consultation.'],

    list: [
    'Initial consultation',
    'Ayurvedic assessment',
    'Lifestyle discussion',
    'Wellness recommendations',
    'Personalised therapy suggestions']

  },
  {
    heading: 'Why we do not sell fixed packages first',
    body: [
    'Panchakarma is not a one-size-fits-all package. The therapies, duration and suitability should be determined after an appropriate Ayurvedic consultation.',
    'A consultation is ₹1,000 and is the recommended starting point for anyone exploring Panchakarma, Ayurvedic therapies or a rejuvenation program in Nashik.']

  }]

},
{
  slug: 'panchakarma-therapy-nashik',
  crumb: 'Panchakarma Therapy in Nashik',
  seoTitle: 'Panchakarma Therapy in Nashik | One Wellness Clinic & Research Center',
  metaDescription:
  'Personalised Panchakarma therapy in Nashik — consultation-led programs combining traditional Ayurvedic procedures, rest, diet guidance and follow-up.',
  eyebrow: 'Nashik',
  h1: 'Panchakarma Therapy in Nashik',
  intro:
  'A structured, consultation-led Panchakarma journey — from preparation through selected procedures, rest and follow-up guidance.',
  image: IMAGES.heroPoster,
  feature: 'journey',
  blocks: [
  {
    heading: 'A planned process, not a single procedure',
    body: [
    'Panchakarma is a traditional Ayurvedic approach associated with cleansing and rejuvenation. At One Wellness, it is planned after an individual consultation.',
    'Depending on the selected program, preparatory Ayurvedic procedures may be recommended before the main therapies, followed by adequate rest, supportive nutrition and appropriate post-therapy routines.'],

    list: [
    'Ayurvedic consultation',
    'Individual assessment',
    'Preparatory procedures',
    'Selected Ayurvedic therapies',
    'Diet and lifestyle guidance',
    'Rest and recovery',
    'Rejuvenation practices',
    'Follow-up guidance']

  },
  {
    heading: 'Choosing a duration',
    body: [
    'Our programs range from a 3-day rejuvenation experience to a 21-day complete Panchakarma journey, with 7-day and 14-day options in between.',
    'The exact therapies and duration are determined individually. A qualified practitioner should determine whether a particular procedure or program is appropriate.']

  }]

},
{
  slug: 'shirodhara-nashik',
  crumb: 'Shirodhara Therapy in Nashik',
  seoTitle: 'Shirodhara Therapy in Nashik | One Wellness Clinic & Research Center',
  metaDescription:
  'Shirodhara therapy in Nashik at One Wellness Clinic & Research Center. A traditional Ayurvedic relaxation therapy, 45–60 minutes, starting from ₹1,800.',
  eyebrow: 'Nashik',
  h1: 'Shirodhara Therapy in Nashik',
  intro:
  'A traditional Ayurvedic relaxation therapy, offered as part of a personalised wellness plan.',
  image: IMAGES.shirodhara,
  feature: 'therapies',
  blocks: [
  {
    heading: 'About Shirodhara',
    body: [
    'Shirodhara involves the gentle, continuous flow of selected liquid over the forehead as part of a traditional Ayurvedic therapy.',
    'It is often chosen as a deeply relaxing wellness experience, and is commonly included in our 3-day, 7-day and longer Ayurvedic programs.'],

    list: ['Duration: 45–60 minutes', 'Starting from ₹1,800']
  },
  {
    heading: 'How it fits into a program',
    body: [
    'Shirodhara can be booked as an individual therapy following consultation, or scheduled within a structured wellness program alongside Abhyanga, Swedana and other selected Ayurvedic procedures.']

  }]

},
{
  slug: 'abhyanga-massage-nashik',
  crumb: 'Abhyanga Ayurvedic Massage in Nashik',
  seoTitle: 'Abhyanga Ayurvedic Massage in Nashik | One Wellness Clinic & Research Center',
  metaDescription:
  'Abhyanga Ayurvedic oil massage in Nashik at One Wellness Clinic & Research Center. Traditional warm herbal oil therapy, 45–60 minutes, from ₹1,500.',
  eyebrow: 'Nashik',
  h1: 'Abhyanga Ayurvedic Massage in Nashik',
  intro:
  'A traditional Ayurvedic oil massage using rhythmic application of warm herbal oils.',
  image: IMAGES.abhyanga,
  feature: 'therapies',
  blocks: [
  {
    heading: 'About Abhyanga',
    body: [
    'Abhyanga is a traditional Ayurvedic oil massage involving rhythmic application of warm herbal oils.',
    'It is traditionally used as a relaxing and nourishing therapy and is commonly incorporated into Ayurvedic wellness and Panchakarma preparation programs.'],

    list: ['Duration: 45–60 minutes', 'Starting from ₹1,500']
  },
  {
    heading: 'Abhyanga and Panchakarma preparation',
    body: [
    'Depending on the selected program, preparatory Ayurvedic procedures such as Abhyanga and Swedana may be recommended before the main Panchakarma therapies.',
    'Whether this applies to you is determined during your Ayurvedic consultation.']

  }]

},
{
  slug: 'ayurvedic-rejuvenation-nashik',
  crumb: 'Ayurvedic Rejuvenation Programs in Nashik',
  seoTitle: 'Ayurvedic Rejuvenation Programs in Nashik | One Wellness Clinic & Research Center',
  metaDescription:
  'Ayurvedic rejuvenation programs in Nashik — weekend, 7-day, seasonal and post-Panchakarma rejuvenation experiences at One Wellness Clinic & Research Center.',
  eyebrow: 'Nashik',
  h1: 'Ayurvedic Rejuvenation Programs in Nashik',
  intro:
  'Ayurvedic rejuvenation is traditionally associated with practices that support nourishment, restoration and maintenance of wellbeing.',
  image: IMAGES.retreat,
  feature: 'rejuvenation',
  blocks: [
  {
    heading: 'Rejuvenation as a routine, not an event',
    body: [
    'Rejuvenation at One Wellness is offered alongside lifestyle, nutrition and rest guidance so the experience continues beyond the treatment room.',
    'The aim is to encourage sustainable wellness practices—not just a one-time experience.']

  },
  {
    heading: 'Short and structured options',
    body: [
    'A 3-Day Ayurvedic Rejuvenation Experience starts from ₹7,500 and is designed for individuals looking for a short introduction to Ayurvedic wellness therapies.',
    'A 7-Day Ayurvedic Wellness Retreat starts from ₹18,000 and adds a personalised therapy schedule, dietary guidance, a daily wellness routine and a progress review.']

  }]

},
{
  slug: 'ayurvedic-wellness-centre-nashik',
  crumb: 'Ayurvedic Wellness Centre in Nashik',
  seoTitle: 'Ayurvedic Wellness Centre in Nashik | One Wellness Clinic & Research Center',
  metaDescription:
  'One Wellness Clinic & Research Center is an Ayurvedic wellness centre in Nashik offering Panchakarma, traditional therapies, rejuvenation and consultations.',
  eyebrow: 'Nashik',
  h1: 'Ayurvedic Wellness Centre in Nashik',
  intro:
  'A contemporary space inspired by traditional wellness wisdom, with a dedicated Panchakarma & Ayurvedic Wellness Division.',
  image: IMAGES.clinic,
  feature: 'programs',
  blocks: [
  {
    heading: 'What we offer',
    body: [
    'Our approach combines traditional Ayurvedic principles with individual assessment, structured therapies and lifestyle guidance.',
    'From consultation to follow-up, your wellness journey follows a planned process in a calm environment designed to support relaxation and wellbeing.'],

    list: [
    'Panchakarma therapy',
    'Ayurvedic consultation',
    'Abhyanga and Udwartana',
    'Shirodhara and Pizhichil',
    'Swedana and Pindasweda',
    'Kati Basti, Janu Basti and Nasya',
    'Ayurvedic rejuvenation programs',
    'Ayurvedic lifestyle consultation']

  },
  {
    heading: 'A holistic perspective',
    body: [
    'We consider therapies alongside lifestyle, nutrition, rest and daily routines, so that the wellness practices you begin here can realistically be maintained afterwards.']

  }]

}];