import React from 'react';
import { aboutParagraphs, aboutSubheading, philosophyCards } from '../../data/content';
import { BRAND, IMAGES } from '../../config/site';
import { Reveal } from '../ui/Reveal';
import { Eyebrow } from '../ui/SectionHeading';

export function AboutSection() {
  return (
    <section className="bg-ivory" aria-labelledby="about-heading">
      <div className="mx-auto w-full max-w-[88rem] px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-6">
            <img
              src={IMAGES.clinic}
              alt="Calm contemporary Ayurvedic wellness centre interior with teak wood and warm ivory walls"
              loading="lazy"
              className="h-[22rem] w-full rounded-sm object-cover sm:h-[30rem] lg:h-[36rem]" />
            
          </Reveal>

          <div className="lg:col-span-6 lg:pt-6">
            <Reveal>
              <Eyebrow>About</Eyebrow>
              <h2
                id="about-heading"
                className="mt-5 font-serif text-[2rem] font-light leading-[1.1] tracking-[-0.01em] text-forest-deep sm:text-[2.6rem]">
                
                {BRAND.name}
              </h2>
              <p className="mt-5 font-serif text-xl font-light italic text-brass-dark sm:text-2xl">
                {aboutSubheading}
              </p>
              <div className="mt-8 space-y-5">
                {aboutParagraphs.map((p) =>
                <p key={p} className="font-sans text-[0.95rem] leading-[1.9] text-earth">
                    {p}
                  </p>
                )}
              </div>
            </Reveal>

            <ul className="mt-12 grid gap-px overflow-hidden rounded-sm bg-forest/10 sm:grid-cols-2">
              {philosophyCards.map((card, i) =>
              <Reveal
                as="li"
                key={card}
                delay={i * 0.06}
                className="flex min-h-[7rem] items-end bg-ivory p-6">
                
                  <span className="font-serif text-xl leading-snug text-forest-deep">
                    {card}
                  </span>
                </Reveal>
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>);

}