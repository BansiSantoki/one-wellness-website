import React from 'react';
import {
  panchakarmaDisclaimer,
  panchakarmaHeading,
  panchakarmaIntro,
  panchakarmaJourneyCards } from
'../../data/content';
import { Reveal } from '../ui/Reveal';
import { Eyebrow } from '../ui/SectionHeading';

interface PanchakarmaOverviewProps {
  /** Use h1 when this section is the page's primary heading */
  headingLevel?: 'h1' | 'h2';
}

export function PanchakarmaOverview({ headingLevel = 'h2' }: PanchakarmaOverviewProps) {
  const Heading = headingLevel;

  return (
    <section className="bg-ivory" aria-labelledby="panchakarma-heading">
      <div className="mx-auto w-full max-w-[88rem] px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <Eyebrow>What Is Panchakarma?</Eyebrow>
            <Heading
              id="panchakarma-heading"
              className="mt-5 max-w-3xl font-serif text-[2.1rem] font-light leading-[1.1] tracking-[-0.01em] text-forest-deep sm:text-[2.7rem] lg:text-[3.3rem]">
              
              {panchakarmaHeading}
            </Heading>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5 lg:pt-4">
            <div className="space-y-5">
              {panchakarmaIntro.map((p) =>
              <p key={p} className="font-sans text-[0.95rem] leading-[1.9] text-earth">
                  {p}
                </p>
              )}
            </div>
          </Reveal>
        </div>

        {/* Editorial callout */}
        <Reveal className="mt-16 lg:mt-20">
          <figure className="relative overflow-hidden rounded-sm bg-forest-deep px-7 py-12 sm:px-14 sm:py-16">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 -top-16 font-serif text-[16rem] leading-none text-ivory/[0.04]">
              
              ॐ
            </span>
            <blockquote className="relative max-w-3xl">
              <p className="font-serif text-[1.75rem] font-light italic leading-[1.35] text-ivory sm:text-[2.4rem]">
                <span className="text-brass-light">Panchakarma</span> is not a treatment
                you buy. It is a journey planned around one person at a time.
              </p>
            </blockquote>
          </figure>
        </Reveal>

        {/* Journey cards */}
        <div className="mt-16 lg:mt-20">
          <Reveal>
            <h3 className="font-serif text-2xl font-light text-forest-deep sm:text-3xl">
              What a Panchakarma journey may involve
            </h3>
          </Reveal>
          <ul className="mt-8 grid gap-px overflow-hidden rounded-sm bg-forest/10 sm:grid-cols-2 lg:grid-cols-4">
            {panchakarmaJourneyCards.map((card, i) =>
            <Reveal
              as="li"
              key={card}
              delay={i * 0.05}
              className="flex min-h-[9.5rem] flex-col justify-between bg-ivory p-6 transition-colors duration-200 ease-calm hover:bg-ivory-warm">
              
                <span className="font-sans text-[0.62rem] uppercase tracking-eyebrow text-brass">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="mt-6 font-serif text-xl leading-snug text-forest-deep">
                  {card}
                </span>
              </Reveal>
            )}
          </ul>
        </div>

        <Reveal className="mt-14">
          <div className="border-l-2 border-brass bg-ivory-warm px-6 py-7 sm:px-9 sm:py-9">
            <h3 className="font-serif text-xl text-forest-deep sm:text-2xl">
              {panchakarmaDisclaimer[0]}
            </h3>
            <p className="mt-3 max-w-3xl font-sans text-sm leading-[1.85] text-earth">
              {panchakarmaDisclaimer[1]}
            </p>
          </div>
        </Reveal>
      </div>
    </section>);

}