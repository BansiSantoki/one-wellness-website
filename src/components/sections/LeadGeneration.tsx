import React from 'react';
import { LeadForm } from './LeadForm';
import { Reveal } from '../ui/Reveal';
import { Eyebrow } from '../ui/SectionHeading';

export function LeadGeneration() {
  return (
    <section className="bg-ivory-warm" aria-labelledby="lead-heading">
      <div className="mx-auto w-full max-w-[88rem] px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <Eyebrow>Book Your Ayurvedic Consultation</Eyebrow>
            <h2
              id="lead-heading"
              className="mt-5 font-serif text-[2rem] font-light leading-[1.1] tracking-[-0.01em] text-forest-deep sm:text-[2.6rem]">
              
              Not Sure Which Ayurvedic Program Is Right for You?
            </h2>
            <div className="mt-7 max-w-md space-y-4">
              <p className="font-sans text-lg leading-[1.85] text-forest-deep/80">
                Every Panchakarma journey is different.
              </p>
              <p className="font-sans text-[0.95rem] leading-[1.9] text-earth">
                Start with a consultation to understand which Ayurvedic therapies or
                wellness program may be appropriate for you.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7">
            <LeadForm />
          </Reveal>
        </div>
      </div>
    </section>);

}