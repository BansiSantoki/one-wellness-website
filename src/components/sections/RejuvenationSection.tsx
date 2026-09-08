import React from 'react';
import { rejuvenationDescription, rejuvenationExperiences } from '../../data/content';
import { IMAGES } from '../../config/site';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

export function RejuvenationSection() {
  return (
    <section className="bg-ivory" aria-labelledby="rejuvenation-heading">
      <Reveal className="relative h-[22rem] w-full overflow-hidden sm:h-[30rem]">
        <img
          src={IMAGES.retreat}
          alt="Open-air meditation pavilion surrounded by tropical greenery in morning light"
          loading="lazy"
          className="h-full w-full object-cover" />
        
        <div className="absolute inset-0 bg-forest-deep/35" aria-hidden="true" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-[88rem] px-5 pb-10 sm:px-8 sm:pb-14">
            <h2
              id="rejuvenation-heading"
              className="max-w-3xl font-serif text-[2.1rem] font-light leading-[1.1] text-ivory sm:text-[2.8rem] lg:text-[3.4rem]">
              
              Rejuvenate Your Body. Refresh Your Routine.
            </h2>
          </div>
        </div>
      </Reveal>

      <div className="mx-auto w-full max-w-[88rem] px-5 py-16 sm:px-8 lg:py-24">
        <SectionHeading
          title={<span className="sr-only">Rejuvenation experiences</span>}
          intro={<p className="text-lg text-forest-deep/80">{rejuvenationDescription}</p>}
          maxWidth="max-w-3xl" />
        

        <ul className="mt-12 grid gap-px overflow-hidden rounded-sm bg-forest/10 sm:grid-cols-2 lg:grid-cols-3">
          {rejuvenationExperiences.map((exp, i) =>
          <Reveal
            as="li"
            key={exp}
            delay={i % 3 * 0.07}
            className="group flex min-h-[11rem] flex-col justify-between bg-ivory p-7 transition-colors duration-300 ease-calm hover:bg-ivory-warm">
            
              <span className="font-sans text-[0.6rem] uppercase tracking-eyebrow text-brass">
                Experience {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-8 font-serif text-2xl font-light leading-snug text-forest-deep">
                {exp}
              </h3>
            </Reveal>
          )}
        </ul>
      </div>
    </section>);

}