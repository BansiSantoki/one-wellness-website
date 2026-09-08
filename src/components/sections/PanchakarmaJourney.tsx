import React, { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { journeySteps } from '../../data/content';
import { Reveal } from '../ui/Reveal';
import { Eyebrow } from '../ui/SectionHeading';

export function PanchakarmaJourney() {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();
  const step = journeySteps[active];

  return (
    <section className="bg-forest-deep" aria-labelledby="journey-heading">
      <div className="mx-auto w-full max-w-[88rem] px-5 py-20 sm:px-8 lg:py-28">
        <Reveal>
          <Eyebrow tone="light">Consultation-Led</Eyebrow>
          <h2
            id="journey-heading"
            className="mt-5 max-w-3xl font-serif text-[2.1rem] font-light leading-[1.1] tracking-[-0.01em] text-ivory sm:text-[2.7rem] lg:text-[3.3rem]">
            
            Your Panchakarma Journey, Personalised
          </h2>
        </Reveal>

        {/* Desktop: interactive timeline */}
        <div className="mt-14 hidden lg:block">
          <div className="relative">
            <div className="absolute left-0 right-0 top-[13px] h-px bg-ivory/15" aria-hidden="true" />
            <motion.div
              className="absolute left-0 top-[13px] h-px bg-brass"
              initial={false}
              animate={{
                width: `${active / (journeySteps.length - 1) * 100}%`
              }}
              transition={{ duration: reduced ? 0 : 0.3, ease: [0.23, 1, 0.32, 1] }}
              aria-hidden="true" />
            
            <ol className="relative grid grid-cols-6">
              {journeySteps.map((s, i) => {
                const isActive = i === active;
                return (
                  <li key={s.number} className="flex flex-col items-start">
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      aria-current={isActive ? 'step' : undefined}
                      className="group flex flex-col items-start text-left">
                      
                      <span
                        className={`block h-[26px] w-[26px] rounded-full border p-[7px] transition-colors duration-200 ease-calm ${
                        i <= active ?
                        'border-brass bg-forest-deep' :
                        'border-ivory/25 bg-forest-deep'}`
                        }>
                        
                        <span
                          className={`block h-full w-full rounded-full transition-colors duration-200 ease-calm ${
                          i <= active ? 'bg-brass' : 'bg-ivory/25 group-hover:bg-ivory/60'}`
                          } />
                        
                      </span>
                      <span
                        className={`mt-5 font-sans text-[0.62rem] uppercase tracking-eyebrow transition-colors duration-200 ease-calm ${
                        isActive ? 'text-brass-light' : 'text-ivory/40'}`
                        }>
                        
                        {s.number}
                      </span>
                      <span
                        className={`mt-2 max-w-[9.5rem] font-serif text-lg leading-snug transition-colors duration-200 ease-calm ${
                        isActive ? 'text-ivory' : 'text-ivory/55 group-hover:text-ivory/85'}`
                        }>
                        
                        {s.title}
                      </span>
                    </button>
                  </li>);

              })}
            </ol>
          </div>

          <div className="mt-14 min-h-[8rem] border-t border-ivory/12 pt-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: reduced ? 0 : 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: reduced ? 0 : -8 }}
                transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
                className="grid gap-8 lg:grid-cols-12">
                
                <h3 className="font-serif text-3xl font-light text-ivory lg:col-span-4">
                  {step.title}
                </h3>
                <p className="max-w-2xl font-sans text-lg leading-[1.85] text-ivory/70 lg:col-span-8">
                  {step.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile / tablet: vertical timeline */}
        <ol className="mt-12 lg:hidden">
          {journeySteps.map((s, i) =>
          <Reveal as="li" key={s.number} delay={i * 0.05} className="relative flex gap-5 pb-10 last:pb-0">
              <div className="flex flex-col items-center">
                <span className="mt-1 block h-[18px] w-[18px] shrink-0 rounded-full border border-brass p-[4px]">
                  <span className="block h-full w-full rounded-full bg-brass" />
                </span>
                {i < journeySteps.length - 1 &&
              <span className="mt-2 w-px flex-1 bg-ivory/15" aria-hidden="true" />
              }
              </div>
              <div className="pb-2">
                <span className="font-sans text-[0.6rem] uppercase tracking-eyebrow text-brass-light">
                  {s.number}
                </span>
                <h3 className="mt-2 font-serif text-2xl font-light text-ivory">{s.title}</h3>
                <p className="mt-3 font-sans text-sm leading-[1.85] text-ivory/65">
                  {s.description}
                </p>
              </div>
            </Reveal>
          )}
        </ol>
      </div>
    </section>);

}