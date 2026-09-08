import React from 'react';
import { clinicalTeam, founder } from '../../data/content';
import { IMAGES } from '../../config/site';
import { Reveal } from '../ui/Reveal';
import { Eyebrow } from '../ui/SectionHeading';

export function FounderSection() {
  return (
    <section className="bg-ivory-warm" aria-labelledby="founder-heading">
      <div className="mx-auto w-full max-w-[88rem] px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow>Leadership</Eyebrow>
              <h2
                id="founder-heading"
                className="mt-5 font-serif text-[2rem] font-light leading-[1.1] text-forest-deep sm:text-[2.6rem]">
                
                {founder.heading}
              </h2>
              <p className="mt-8 font-serif text-2xl text-forest-deep">{founder.name}</p>
              <p className="mt-1 font-sans text-[0.7rem] uppercase tracking-eyebrow text-brass-dark">
                {founder.role}
              </p>
              <div className="mt-6 max-w-2xl space-y-5">
                {founder.description.map((p) =>
                <p key={p} className="font-sans text-[0.95rem] leading-[1.9] text-earth">
                    {p}
                  </p>
                )}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="lg:col-span-5">
            <img
              src={IMAGES.consultation}
              alt="Wooden consultation desk with a notebook, brass pen and fresh green leaves in morning light"
              loading="lazy"
              className="h-72 w-full rounded-sm object-cover sm:h-96" />
            
          </Reveal>
        </div>

        <Reveal className="mt-16 lg:mt-20">
          <div className="rounded-sm border border-dashed border-brass/60 bg-ivory p-7 sm:p-10">
            <h2 className="font-serif text-2xl font-light text-forest-deep sm:text-3xl">
              {clinicalTeam.heading}
            </h2>
            <p className="mt-4 max-w-3xl font-sans text-sm leading-[1.85] text-earth">
              <span className="font-medium text-brass-dark">Placeholder — </span>
              {clinicalTeam.placeholder}
            </p>
          </div>
        </Reveal>
      </div>
    </section>);

}