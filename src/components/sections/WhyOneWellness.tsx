import React from 'react';
import { whyOneWellness } from '../../data/content';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

export function WhyOneWellness() {
  return (
    <section className="bg-ivory" aria-labelledby="why-heading">
      <div className="mx-auto w-full max-w-[88rem] px-5 py-20 sm:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Why One Wellness"
          title="Why Choose One Wellness for Your Ayurvedic Journey?"
          maxWidth="max-w-3xl" />
        

        <ul className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {whyOneWellness.map((item, i) =>
          <Reveal
            as="li"
            key={item.title}
            delay={i % 3 * 0.07}
            className="border-t border-forest/12 pt-6">
            
              <span className="font-sans text-[0.6rem] uppercase tracking-eyebrow text-brass">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-4 font-serif text-2xl font-normal text-forest-deep">
                {item.title}
              </h3>
              <p className="mt-3 font-sans text-sm leading-[1.8] text-earth">
                {item.description}
              </p>
            </Reveal>
          )}
        </ul>
      </div>
    </section>);

}