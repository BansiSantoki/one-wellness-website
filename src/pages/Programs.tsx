import React from 'react';
import { Seo } from '../components/seo/Seo';
import { PageHeader } from '../components/layout/PageHeader';
import { ProgramsSection } from '../components/sections/ProgramsSection';
import { PanchakarmaJourney } from '../components/sections/PanchakarmaJourney';
import { SuitabilitySection } from '../components/sections/SuitabilitySection';
import { LeadGeneration } from '../components/sections/LeadGeneration';
import { IMAGES } from '../config/site';

export function Programs() {
  return (
    <>
      <Seo
        title="Personalised Panchakarma & Wellness Programs in Nashik | One Wellness"
        description="Consultation-led Ayurvedic programs in Nashik — from a 3-day rejuvenation experience to a 21-day complete Panchakarma journey at One Wellness Clinic & Research Center." />
      
      <PageHeader
        eyebrow="Programs"
        title="Personalised Panchakarma & Wellness Programs"
        intro="Panchakarma is not sold here as a fixed set of procedures. Each program begins with a consultation, and the therapies and duration are determined individually."
        crumbs={[{ label: 'Programs' }]}
        image={IMAGES.retreat} />
      
      <ProgramsSection background="ivory" />
      <PanchakarmaJourney />
      <SuitabilitySection />
      <LeadGeneration />
    </>);

}