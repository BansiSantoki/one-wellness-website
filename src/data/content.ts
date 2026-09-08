export interface TrustItem {
  title: string;
  description: string;
  icon: 'flower' | 'user' | 'bowl' | 'balance';
}

export const trustItems: TrustItem[] = [
{
  title: 'Traditional Ayurveda',
  description: 'Authentic Ayurvedic principles with an individualised approach.',
  icon: 'flower'
},
{
  title: 'Personalised Care',
  description: 'Your wellness journey begins with understanding your individual needs.',
  icon: 'user'
},
{
  title: 'Panchakarma Therapies',
  description:
  'Structured Ayurvedic therapy programs planned according to your consultation.',
  icon: 'bowl'
},
{
  title: 'Holistic Wellness',
  description:
  'A broader approach incorporating lifestyle, nutrition, relaxation and rejuvenation.',
  icon: 'balance'
}];


export const introHeading =
'Ayurveda Is Not Just a Treatment. It Is a Way of Living.';

export const introParagraphs = [
'Ayurveda is a traditional system of Indian wellness that views health through the balance of the individual, lifestyle, nutrition, daily routines and the environment.',
'At One Wellness Clinic & Research Center, we bring this traditional perspective into a calm, structured and personalised wellness experience.',
"Our Panchakarma programs are planned after an individual consultation and may include selected Ayurvedic therapies, supportive routines, dietary guidance and rejuvenation practices according to the person's requirements."];


export const philosophySteps = [
'Understand',
'Personalise',
'Experience',
'Rejuvenate',
'Maintain'];


/* ── Panchakarma overview ─────────────────────────────────────────── */
export const panchakarmaHeading =
'Panchakarma: A Traditional Ayurvedic Approach to Cleansing & Rejuvenation';

export const panchakarmaIntro = [
'Panchakarma is a traditional Ayurvedic approach that views cleansing and rejuvenation as a planned, personalised process rather than a single procedure.',
'At One Wellness Clinic & Research Center, a Panchakarma journey is shaped around the individual — their consultation, their routine and their wellness goals — and combines preparatory care, selected Ayurvedic therapies, supportive nutrition, rest and follow-up guidance.'];


export const panchakarmaJourneyCards = [
'Ayurvedic consultation',
'Individual assessment',
'Preparatory procedures',
'Selected Ayurvedic therapies',
'Diet and lifestyle guidance',
'Rest and recovery',
'Rejuvenation practices',
'Follow-up guidance'];


export const panchakarmaDisclaimer = [
'Panchakarma is not a one-size-fits-all package.',
'The therapies, duration and suitability should be determined after an appropriate Ayurvedic consultation.'];


export interface JourneyStep {
  number: string;
  title: string;
  description: string;
}

export const journeySteps: JourneyStep[] = [
{
  number: '01',
  title: 'Ayurvedic Consultation',
  description:
  'We begin by understanding your concerns, lifestyle, dietary habits, daily routine and overall wellness goals.'
},
{
  number: '02',
  title: 'Individual Assessment',
  description:
  'The Ayurvedic practitioner determines an appropriate wellness and therapy plan based on the consultation.'
},
{
  number: '03',
  title: 'Preparation',
  description:
  'Depending on the selected program, preparatory Ayurvedic procedures may be recommended before the main therapies.'
},
{
  number: '04',
  title: 'Panchakarma Therapies',
  description:
  "Selected therapies are provided according to the individual's requirements and suitability."
},
{
  number: '05',
  title: 'Rest & Rejuvenation',
  description:
  'Adequate rest, supportive nutrition and appropriate post-therapy routines form an important part of the wellness journey.'
},
{
  number: '06',
  title: 'Follow-Up',
  description:
  'Your journey does not end when the therapy ends. We provide guidance for maintaining supportive lifestyle practices.'
}];


/* ── Rejuvenation ─────────────────────────────────────────────────── */
export const rejuvenationExperiences = [
'Weekend Rejuvenation',
'7-Day Rejuvenation',
'Stress & Relaxation Wellness Program',
'Ayurvedic Body Care Program',
'Post-Panchakarma Rejuvenation',
'Seasonal Wellness Program'];


export const rejuvenationDescription =
'Ayurvedic rejuvenation is traditionally associated with practices that support nourishment, restoration and maintenance of wellbeing.';

/* ── Modern lifestyle ─────────────────────────────────────────────── */
export const modernLifestyleIntro = [
'Modern routines rarely leave room for rest, regular meals or recovery. Traditional Ayurveda approaches this by looking at the day as a whole — how you wake, eat, move, work, relax and sleep.',
'At One Wellness, Ayurvedic guidance is offered alongside therapy so that the wellness experience continues beyond the treatment room and fits realistically into everyday life.'];


export const lifestyleCards = [
'Daily routine',
'Food habits',
'Sleep routine',
'Physical activity',
'Relaxation',
'Mindfulness',
'Seasonal wellness',
'Self-care'];


export const lifestyleQuote = [
'Not to change your entire life overnight.',
'To help you create healthier routines that you can realistically maintain.'];


/* ── Diet & lifestyle ─────────────────────────────────────────────── */
export const dietHeading = 'Food Is Part of the Ayurvedic Journey.';

export const dietIntro = [
'In Ayurveda, food is not separate from the therapy — meal timing, food choices and daily routine are considered part of the same wellness plan.',
'During a Panchakarma or wellness program at One Wellness, dietary guidance is offered alongside the therapies to support rest, recovery and rejuvenation.'];


export const dietItems = [
'Meal timing',
'Food choices',
'Hydration',
'Seasonal eating',
'Daily routine',
'Sleep',
'Activity',
'Relaxation'];


export const dietNote =
'Individual dietary recommendations should be discussed with the qualified practitioner.';

/* ── Suitability ──────────────────────────────────────────────────── */
export const suitabilityIntro = [
'People come to Ayurveda for many different reasons. Panchakarma and Ayurvedic wellness programs at One Wellness are most often chosen by individuals exploring traditional wellness practices, rejuvenation or a calmer, more structured routine.',
'Whether a particular program suits you is a decision made together, after consultation.'];


export const suitabilityItems = [
'General wellness',
'Rejuvenation',
'Relaxation',
'Lifestyle reset',
'Ayurvedic preventive wellness',
'Seasonal wellness routines',
'Post-stress recovery',
'Traditional Ayurvedic care'];


export const suitabilityHighlight = [
'Panchakarma is not suitable for everyone or at every stage of life.',
'A qualified practitioner should determine whether a particular procedure or program is appropriate.'];


/* ── Why One Wellness ─────────────────────────────────────────────── */
export const whyOneWellness = [
{
  title: 'Personalised Approach',
  description: "We don't believe every individual needs the same therapy."
},
{
  title: 'Traditional Foundation',
  description: 'Our programs are inspired by traditional Ayurvedic principles.'
},
{
  title: 'Structured Programs',
  description:
  'From consultation to follow-up, your wellness journey follows a planned process.'
},
{
  title: 'Comfortable Environment',
  description: 'A calm environment designed to support relaxation and wellbeing.'
},
{
  title: 'Holistic Perspective',
  description:
  'We consider therapies alongside lifestyle, nutrition, rest and daily routines.'
},
{
  title: 'Long-Term Wellness',
  description:
  'The aim is to encourage sustainable wellness practices—not just a one-time experience.'
}];


/* ── About ────────────────────────────────────────────────────────── */
export const aboutSubheading =
'A Contemporary Space Inspired by Traditional Wellness Wisdom.';

export const aboutParagraphs = [
'One Wellness Clinic & Research Center is a wellness destination in Nashik with a dedicated Panchakarma & Ayurvedic Wellness Division.',
'Our approach combines traditional Ayurvedic principles with individual assessment, structured therapies and lifestyle guidance, delivered in a calm and comfortable environment.',
'Every program begins with a consultation, because we believe an Ayurvedic journey should be planned around the individual rather than offered as a fixed package.'];


export const philosophyCards = [
'Understand the individual.',
'Respect traditional wisdom.',
'Personalise the journey.',
'Support sustainable wellness.'];


/* ── Founder ──────────────────────────────────────────────────────── */
export const founder = {
  heading: 'Our Founding Vision',
  name: 'Dr. Sohan S. Chouhan',
  role: 'Founder / Director',
  description: [
  'One Wellness Clinic & Research Center was founded with the intention of creating a calm, structured and personalised space for traditional wellness in Nashik.',
  'The founding vision is simple: bring traditional Ayurvedic principles into a contemporary setting, keep every journey consultation-led, and support wellness practices that people can realistically maintain.']

};

export const clinicalTeam = {
  heading: 'Ayurvedic Clinical Team',
  placeholder:
  "Add the actual BAMS/MD Ayurveda practitioner's name, qualification and registration details here."
};

/* ── Lead form ────────────────────────────────────────────────────── */
export const wellnessGoals = [
'Panchakarma',
'Rejuvenation',
'Ayurvedic Massage',
'Stress & Relaxation',
'General Wellness',
'Other'];


/* ── WhatsApp ─────────────────────────────────────────────────────── */
export const whatsappTopics = [
'Available programs',
'Therapy duration',
'Pricing',
'Consultation process',
'What to expect',
'Appointment availability'];


/* ── GMB ──────────────────────────────────────────────────────────── */
export const gmb = {
  description:
  'One Wellness Clinic & Research Center is an Ayurvedic wellness centre in Nashik offering Panchakarma, traditional Ayurvedic therapies, rejuvenation programs, Abhyanga, Shirodhara and personalised wellness consultations. Our approach combines traditional Ayurvedic principles with individual assessment, structured therapies and lifestyle guidance. Whether you are exploring Panchakarma, Ayurvedic rejuvenation or traditional wellness practices, our team can help you understand the appropriate options for your needs. Book a consultation or contact us on WhatsApp to begin your Ayurvedic wellness journey.',
  services: [
  'Panchakarma Therapy',
  'Ayurvedic Consultation',
  'Ayurvedic Treatment',
  'Abhyanga Massage',
  'Shirodhara',
  'Swedana Therapy',
  'Pizhichil',
  'Udwarthana',
  'Kati Basti',
  'Janu Basti',
  'Nasya',
  'Ayurvedic Rejuvenation',
  'Ayurvedic Wellness Program',
  'Panchakarma Wellness Program',
  'Ayurvedic Lifestyle Consultation']

};

export const legalDisclaimer =
'The information provided on this website is intended for general educational and wellness purposes and should not be considered a substitute for professional medical advice, diagnosis or treatment. Panchakarma and Ayurvedic therapies are traditional practices and may not be appropriate for everyone. Individual therapy selection, duration and suitability are determined following consultation with a qualified practitioner. Results and experiences may vary.';