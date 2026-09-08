import React from 'react';
import { programs, programsFootnote } from '../../data/programs';
import { ProgramCard } from './ProgramCard';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';

interface ProgramsSectionProps {
  background?: 'ivory' | 'warm';
}

export function ProgramsSection({ background = 'warm' }: ProgramsSectionProps) {
  const [consultation, ...rest] = programs;

  return (
    <section
      className={background === 'warm' ? 'bg-ivory-warm' : 'bg-ivory'}
      aria-labelledby="programs-heading">
      
      <div className="mx-auto w-full max-w-[88rem] px-5 py-20 sm:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Programs"
          title="Personalised Panchakarma & Wellness Programs"
          intro={
          <p>
              Every program below begins with a consultation. The therapies, duration and
              suitability are determined individually rather than sold as a fixed set of
              procedures.
            </p>
          }
          maxWidth="max-w-2xl" />
        

        {/* Consultation is the entry point — given its own full-width treatment */}
        <Reveal className="mt-14">
          <div className="grid gap-8 rounded-sm border border-forest/12 bg-ivory p-7 sm:p-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <span className="font-sans text-[0.6rem] uppercase tracking-eyebrow text-brass-dark">
                {consultation.label} — Start Here
              </span>
              <h3 className="mt-4 font-serif text-3xl font-light leading-tight text-forest-deep sm:text-[2.4rem]">
                {consultation.name}
              </h3>
              <p className="mt-4 font-serif text-4xl font-light text-forest">
                {consultation.price}
              </p>
            </div>
            <div className="lg:col-span-4">
              <p className="font-sans text-[0.6rem] uppercase tracking-eyebrow text-earth-light">
                {consultation.includesLabel}
              </p>
              <ul className="mt-4 space-y-2">
                {consultation.includes.map((item) =>
                <li
                  key={item}
                  className="font-sans text-sm leading-relaxed text-forest-deep/85">
                  
                    {item}
                  </li>
                )}
              </ul>
            </div>
            <div className="lg:col-span-3">
              <Button to="/contact" size="lg" className="w-full">
                {consultation.cta}
              </Button>
            </div>
          </div>
        </Reveal>

        <ul className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {rest.map((program, i) =>
          <Reveal as="li" key={program.id} delay={i * 0.07} className="h-full">
              <ProgramCard program={program} />
            </Reveal>
          )}
        </ul>

        <Reveal className="mt-10">
          <p className="font-sans text-xs leading-relaxed text-earth-light">
            {programsFootnote}
          </p>
        </Reveal>
      </div>
    </section>);

}