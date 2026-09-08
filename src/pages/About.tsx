import React from 'react';
import { Seo } from '../components/seo/Seo';
import { PageHeader } from '../components/layout/PageHeader';
import { AboutSection } from '../components/sections/AboutSection';
import { FounderSection } from '../components/sections/FounderSection';
import { WhyOneWellness } from '../components/sections/WhyOneWellness';
import { GmbSection } from '../components/sections/GmbSection';
import { LeadGeneration } from '../components/sections/LeadGeneration';
import { BRAND, IMAGES } from '../config/site';
import { aboutSubheading } from '../data/content';

export function About() {
  return (
    <>
      <Seo
        title="About One Wellness Clinic & Research Center | Ayurveda & Panchakarma Nashik"
        description="One Wellness Clinic & Research Center is an Ayurvedic wellness centre in Nashik offering Panchakarma, traditional therapies, rejuvenation and personalised consultations." />
      
      <PageHeader
        eyebrow={BRAND.division}
        title={BRAND.name}
        intro={aboutSubheading}
        crumbs={[{ label: 'About' }]}
        image={IMAGES.clinic} />
      
      <AboutSection />
      <FounderSection />
      <WhyOneWellness />
      <GmbSection />
      <LeadGeneration />
    </>);

}