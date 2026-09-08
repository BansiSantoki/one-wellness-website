import React from 'react';
import {
  lifestyleCards,
  lifestyleQuote,
  modernLifestyleIntro } from
'../../data/content';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

export function ModernLifestyle() {
  return (
    <section className="bg-ivory-warm" aria-labelledby="modern-lifestyle-heading">
      <div className="mx-auto w-full max-w-[88rem] px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Wellness"
              title="Traditional Ayurveda for Modern Life"
              maxWidth="max-w-xl" />
            
          </div>
          <Reveal delay={0.1} className="space-y-5 lg:col-span-6 lg:col-start-7 lg:pt-16">
            {modernLifestyleIntro.map((p) =>
            <p key={p} className="font-sans text-[0.95rem] leading-[1.9] text-earth">
                {p}
              </p>
            )}
          </Reveal>
        </div>

        <ul className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-sm bg-forest/10 sm:grid-cols-4">
          {lifestyleCards.map((card, i) =>
          <Reveal
            as="li"
            key={card}
            delay={i % 4 * 0.06}
            className="flex min-h-[7rem] items-end bg-ivory p-5 sm:min-h-[8.5rem] sm:p-6">
            
              <span className="font-serif text-lg leading-snug text-forest-deep sm:text-xl">
                {card}
              </span>
            </Reveal>
          )}
        </ul>

        <Reveal className="mt-16">
          <blockquote className="mx-auto max-w-3xl border-t border-brass/40 pt-10 text-center">
            <p className="font-serif text-[1.6rem] font-light italic leading-[1.4] text-forest-deep sm:text-[2.1rem]">
              {lifestyleQuote[0]}
            </p>
            <p className="mt-3 font-serif text-[1.6rem] font-light italic leading-[1.4] text-brass-dark sm:text-[2.1rem]">
              {lifestyleQuote[1]}
            </p>
          </blockquote>
        </Reveal>
      </div>
    </section>);

}