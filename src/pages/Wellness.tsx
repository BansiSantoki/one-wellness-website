import React from 'react';
import { Seo } from '../components/seo/Seo';
import { PageHeader } from '../components/layout/PageHeader';
import { ModernLifestyle } from '../components/sections/ModernLifestyle';
import { DietLifestyle } from '../components/sections/DietLifestyle';
import { SuitabilitySection } from '../components/sections/SuitabilitySection';
import { WhyOneWellness } from '../components/sections/WhyOneWellness';
import { LeadGeneration } from '../components/sections/LeadGeneration';
import { IMAGES } from '../config/site';

export function Wellness() {
  return (
    <>
      <Seo
        title="Traditional Ayurveda for Modern Life | Wellness in Nashik | One Wellness"
        description="Ayurvedic lifestyle, diet and daily routine guidance in Nashik — offered alongside therapy so wellness practices continue beyond the treatment room." />
      
      <PageHeader
        eyebrow="Wellness"
        title="Traditional Ayurveda for Modern Life"
        intro="Ayurvedic guidance offered alongside therapy, so the wellness experience fits realistically into everyday life."
        crumbs={[{ label: 'Wellness' }]}
        image={IMAGES.intro} />
      
      <ModernLifestyle />
      <DietLifestyle />
      <SuitabilitySection />
      <WhyOneWellness />
      <LeadGeneration />
    </>);

}