import React from 'react';
import { Seo } from '../components/seo/Seo';
import { PageHeader } from '../components/layout/PageHeader';
import { TherapiesGrid } from '../components/sections/TherapiesGrid';
import { WhatsAppSection } from '../components/sections/WhatsAppSection';
import { LeadGeneration } from '../components/sections/LeadGeneration';
import { IMAGES } from '../config/site';

export function Therapies() {
  return (
    <>
      <Seo
        title="Ayurvedic Therapies in Nashik | Abhyanga, Shirodhara & More"
        description="Experience traditional Ayurvedic therapies at One Wellness Clinic & Research Center." />
      
      <PageHeader
        eyebrow="Therapies"
        title="Traditional Ayurvedic Therapies"
        intro="At One Wellness, Ayurvedic therapies are selected according to the individual's consultation and wellness plan."
        crumbs={[{ label: 'Therapies' }]}
        image={IMAGES.abhyanga} />
      
      <TherapiesGrid showHeading={false} />
      <WhatsAppSection />
      <LeadGeneration />
    </>);

}