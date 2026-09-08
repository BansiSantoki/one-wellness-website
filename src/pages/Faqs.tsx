import React from 'react';
import { Seo } from '../components/seo/Seo';
import { PageHeader } from '../components/layout/PageHeader';
import { FAQAccordion } from '../components/sections/FAQAccordion';
import { WhatsAppSection } from '../components/sections/WhatsAppSection';
import { LeadGeneration } from '../components/sections/LeadGeneration';
import { IMAGES } from '../config/site';

export function Faqs() {
  return (
    <>
      <Seo
        title="Panchakarma FAQs | Ayurvedic Wellness in Nashik | One Wellness"
        description="Frequently asked questions about Panchakarma, Ayurvedic therapies, duration, suitability and pricing at One Wellness Clinic & Research Center in Nashik." />
      
      <PageHeader
        eyebrow="FAQs"
        title="Frequently Asked Questions About Panchakarma"
        intro="Common questions about consultation, therapies, duration, suitability and pricing."
        crumbs={[{ label: 'FAQs' }]}
        image={IMAGES.swedana} />
      
      <FAQAccordion allowMultiple />
      <WhatsAppSection />
      <LeadGeneration />
    </>);

}