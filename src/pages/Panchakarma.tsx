import React from 'react';
import { Seo } from '../components/seo/Seo';
import { PageHeader } from '../components/layout/PageHeader';
import { PanchakarmaOverview } from '../components/sections/PanchakarmaOverview';
import { PanchakarmaJourney } from '../components/sections/PanchakarmaJourney';
import { SuitabilitySection } from '../components/sections/SuitabilitySection';
import { ProgramsSection } from '../components/sections/ProgramsSection';
import { WhatsAppSection } from '../components/sections/WhatsAppSection';
import { LeadGeneration } from '../components/sections/LeadGeneration';
import { IMAGES } from '../config/site';

export function Panchakarma() {
  return (
    <>
      <Seo
        title="What Is Panchakarma? | Ayurvedic Panchakarma Therapy in Nashik"
        description="Understand Panchakarma — a traditional Ayurvedic approach to cleansing and rejuvenation. Consultation-led programs at One Wellness Clinic & Research Center, Nashik." />
      
      <PageHeader
        eyebrow="Panchakarma"
        title="Panchakarma: A Traditional Ayurvedic Approach to Cleansing & Rejuvenation"
        intro="A consultation-led journey, planned around the individual rather than offered as a fixed package."
        crumbs={[{ label: 'Panchakarma' }]}
        image={IMAGES.heroPoster} />
      
      <PanchakarmaOverview />
      <PanchakarmaJourney />
      <SuitabilitySection />
      <ProgramsSection background="ivory" />
      <WhatsAppSection />
      <LeadGeneration />
    </>);

}