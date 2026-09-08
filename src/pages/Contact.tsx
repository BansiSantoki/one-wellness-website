import React from 'react';
import { Seo } from '../components/seo/Seo';
import { PageHeader } from '../components/layout/PageHeader';
import { LeadGeneration } from '../components/sections/LeadGeneration';
import { WhatsAppSection } from '../components/sections/WhatsAppSection';
import { GmbSection } from '../components/sections/GmbSection';
import { Disclaimer } from '../components/sections/Disclaimer';
import { Reveal } from '../components/ui/Reveal';
import { IMAGES } from '../config/site';

export function Contact() {
  return (
    <>
      <Seo
        title="Book an Ayurvedic Consultation in Nashik | One Wellness Clinic & Research Center"
        description="Book an Ayurvedic consultation at One Wellness Clinic & Research Center in Nashik, or reach us on WhatsApp to discuss Panchakarma programs and therapies." />
      
      <PageHeader
        eyebrow="Contact"
        title="Book Your Ayurvedic Consultation"
        intro="Every Panchakarma journey is different. Start with a consultation to understand which Ayurvedic therapies or wellness program may be appropriate for you."
        crumbs={[{ label: 'Contact' }]}
        image={IMAGES.consultation} />
      
      <LeadGeneration />
      <WhatsAppSection />

      <section className="bg-ivory" aria-label="Clinic details">
        <div className="mx-auto w-full max-w-[88rem] px-5 py-16 sm:px-8">
          <Reveal>
            <div className="rounded-sm border border-dashed border-brass/60 bg-ivory-warm p-7 sm:p-9">
              <h2 className="font-serif text-2xl font-light text-forest-deep">
                Clinic Address &amp; Contact Details
              </h2>
              <p className="mt-4 max-w-2xl font-sans text-sm leading-[1.85] text-earth">
                <span className="font-medium text-brass-dark">Placeholder — </span>
                Add the clinic address, phone number, email and working hours here. These
                details have intentionally been left blank rather than invented.
              </p>
            </div>
          </Reveal>
          <div className="mt-12">
            <Disclaimer />
          </div>
        </div>
      </section>

      <GmbSection />
    </>);

}