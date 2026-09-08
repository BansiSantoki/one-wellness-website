import { Seo } from '../components/seo/Seo';
import { Hero } from '../components/sections/Hero';
import { TrustStrip } from '../components/sections/TrustStrip';
import { Introduction } from '../components/sections/Introduction';
import { PanchakarmaOverview } from '../components/sections/PanchakarmaOverview';
import { PanchakarmaJourney } from '../components/sections/PanchakarmaJourney';
import { TherapiesGrid } from '../components/sections/TherapiesGrid';
import { ProgramsSection } from '../components/sections/ProgramsSection';
import { RejuvenationSection } from '../components/sections/RejuvenationSection';
import { ModernLifestyle } from '../components/sections/ModernLifestyle';
import { DietLifestyle } from '../components/sections/DietLifestyle';
import { SuitabilitySection } from '../components/sections/SuitabilitySection';
import { WhyOneWellness } from '../components/sections/WhyOneWellness';
import { LeadGeneration } from '../components/sections/LeadGeneration';
import { WhatsAppSection } from '../components/sections/WhatsAppSection';
import { FAQAccordion } from '../components/sections/FAQAccordion';
import { BlogSection } from '../components/sections/BlogSection';

export function Home() {
  return (
    <>
      <Seo
        title="Panchakarma & Ayurvedic Wellness Clinic in Nashik | One Wellness"
        description="Experience personalised Panchakarma, Ayurvedic therapies, rejuvenation and holistic wellness at One Wellness Clinic & Research Center in Nashik. Book an Ayurvedic consultation today."
        canonicalPath="/" />
      
      <Hero />
      <TrustStrip />
      <Introduction />
      <PanchakarmaOverview />
      <PanchakarmaJourney />
      <TherapiesGrid limit={6} background="warm" />
      <ProgramsSection background="ivory" />
      <RejuvenationSection />
      <ModernLifestyle />
      <DietLifestyle />
      <SuitabilitySection />
      <WhyOneWellness />
      <LeadGeneration />
      <WhatsAppSection />
      <FAQAccordion />
      <BlogSection limit={8} />
    </>);

}