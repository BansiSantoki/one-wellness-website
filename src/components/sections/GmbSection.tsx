import React from 'react';
import { gmb } from '../../data/content';
import { Reveal } from '../ui/Reveal';
import { Eyebrow } from '../ui/SectionHeading';

export function GmbSection() {
  return (
    <section className="bg-ivory" aria-labelledby="gmb-heading">
      <div className="mx-auto w-full max-w-[88rem] px-5 py-20 sm:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-6">
            <Eyebrow>Ayurvedic Wellness Centre in Nashik</Eyebrow>
            <h2
              id="gmb-heading"
              className="mt-5 font-serif text-[1.9rem] font-light leading-[1.15] text-forest-deep sm:text-[2.4rem]">
              
              About Our Centre
            </h2>
            <p className="mt-6 max-w-2xl font-sans text-[0.95rem] leading-[1.95] text-earth">
              {gmb.description}
            </p>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5 lg:col-start-8">
            <h3 className="font-sans text-[0.6rem] uppercase tracking-eyebrow text-brass-dark">
              Services
            </h3>
            <ul className="mt-6 flex flex-wrap gap-2">
              {gmb.services.map((service) =>
              <li
                key={service}
                className="rounded-sm border border-forest/12 px-3.5 py-2 font-sans text-[0.8rem] text-forest-deep/80">
                
                  {service}
                </li>
              )}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>);

}