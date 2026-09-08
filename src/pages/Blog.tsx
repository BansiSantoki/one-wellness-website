import React from 'react';
import { Seo } from '../components/seo/Seo';
import { PageHeader } from '../components/layout/PageHeader';
import { BlogSection } from '../components/sections/BlogSection';
import { LeadGeneration } from '../components/sections/LeadGeneration';
import { IMAGES } from '../config/site';

export function Blog() {
  return (
    <>
      <Seo
        title="Ayurveda & Wellness Insights | One Wellness Clinic & Research Center"
        description="Guides and insights on Panchakarma, Ayurvedic therapies, rejuvenation, diet and daily routine from One Wellness Clinic & Research Center in Nashik." />
      
      <PageHeader
        eyebrow="Insights"
        title="Ayurveda & Wellness Insights"
        intro="Guides on Panchakarma, Ayurvedic therapies, rejuvenation, diet and daily routine."
        crumbs={[{ label: 'Blog' }]}
        image={IMAGES.intro} />
      
      <BlogSection background="ivory" />
      <LeadGeneration />
    </>);

}