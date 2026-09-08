import React from 'react';
import { Seo } from '../components/seo/Seo';
import { PageHeader } from '../components/layout/PageHeader';
import { RejuvenationSection } from '../components/sections/RejuvenationSection';
import { ProgramsSection } from '../components/sections/ProgramsSection';
import { WhatsAppSection } from '../components/sections/WhatsAppSection';
import { LeadGeneration } from '../components/sections/LeadGeneration';
import { IMAGES } from '../config/site';
import { rejuvenationDescription } from '../data/content';

export function Rejuvenation() {
  return (
    <>
      <Seo
        title="Ayurvedic Rejuvenation in Nashik | One Wellness Clinic & Research Center"
        description="Ayurvedic rejuvenation experiences in Nashik — weekend, seasonal, post-Panchakarma and stress & relaxation wellness programs at One Wellness Clinic & Research Center." />
      
      <PageHeader
        eyebrow="Rejuvenation"
        title="Rejuvenate Your Body. Refresh Your Routine."
        intro={rejuvenationDescription}
        crumbs={[{ label: 'Rejuvenation' }]}
        image={IMAGES.retreat} />
      
      <RejuvenationSection />
      <ProgramsSection background="warm" />
      <WhatsAppSection />
      <LeadGeneration />
    </>);

}