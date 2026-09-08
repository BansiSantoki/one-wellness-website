import React from 'react';
import {
  suitabilityHighlight,
  suitabilityIntro,
  suitabilityItems } from
'../../data/content';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

export function SuitabilitySection() {
  return (
    <section className="bg-ivory-warm" aria-labelledby="suitability-heading">
      <div className="mx-auto w-full max-w-[88rem] px-5 py-20 sm:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Before You Begin"
          title="Is Panchakarma Right for You?"
          intro={suitabilityIntro.map((p) =>
          <p key={p}>{p}</p>
          )}
          align="center"
          maxWidth="max-w-3xl" />
        

        <ul className="mx-auto mt-14 flex max-w-4xl flex-wrap justify-center gap-3">
          {suitabilityItems.map((item, i) =>
          <Reveal as="li" key={item} delay={i * 0.04}>
              <span className="inline-flex rounded-sm border border-forest/12 bg-ivory px-5 py-3 font-sans text-sm text-forest-deep/85 transition-colors duration-200 ease-calm hover:border-brass/50">
                {item}
              </span>
            </Reveal>
          )}
        </ul>

        <Reveal className="mx-auto mt-14 max-w-3xl">
          <div className="border-l-2 border-brass bg-ivory px-6 py-7 sm:px-9 sm:py-9">
            <h3 className="font-serif text-xl leading-snug text-forest-deep sm:text-2xl">
              {suitabilityHighlight[0]}
            </h3>
            <p className="mt-3 font-sans text-sm leading-[1.85] text-earth">
              {suitabilityHighlight[1]}
            </p>
          </div>
        </Reveal>
      </div>
    </section>);

}