import React, { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { MinusIcon, PlusIcon } from 'lucide-react';
import { faqs } from '../../data/faqs';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';
import { FaqStructuredData } from '../seo/StructuredData';

interface FAQAccordionProps {
  /** Allow several answers to stay open at once */
  allowMultiple?: boolean;
  background?: 'ivory' | 'warm';
  includeStructuredData?: boolean;
}

export function FAQAccordion({
  allowMultiple = false,
  background = 'ivory',
  includeStructuredData = true
}: FAQAccordionProps) {
  const [open, setOpen] = useState<number[]>([0]);
  const reduced = useReducedMotion();

  const toggle = (i: number) => {
    setOpen((prev) => {
      if (prev.includes(i)) return prev.filter((x) => x !== i);
      return allowMultiple ? [...prev, i] : [i];
    });
  };

  return (
    <section
      className={background === 'warm' ? 'bg-ivory-warm' : 'bg-ivory'}
      aria-labelledby="faq-heading">
      
      {includeStructuredData && <FaqStructuredData />}
      <div className="mx-auto w-full max-w-[88rem] px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="FAQs"
              title="Questions About Panchakarma"
              intro={
              <p>
                  Answers to the questions we are asked most often about Ayurvedic
                  consultation, therapies and programs.
                </p>
              }
              maxWidth="max-w-md" />
            
          </div>

          <div className="lg:col-span-8">
            <ul className="border-t border-forest/12">
              {faqs.map((faq, i) => {
                const isOpen = open.includes(i);
                return (
                  <li key={faq.question} className="border-b border-forest/12">
                    <h3>
                      <button
                        type="button"
                        onClick={() => toggle(i)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-panel-${i}`}
                        id={`faq-button-${i}`}
                        className="flex w-full items-start justify-between gap-6 py-6 text-left transition-colors duration-200 ease-calm hover:text-brass-dark">
                        
                        <span className="font-serif text-xl leading-snug text-forest-deep sm:text-2xl">
                          {faq.question}
                        </span>
                        <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center text-brass">
                          {isOpen ?
                          <MinusIcon className="h-4 w-4" aria-hidden="true" /> :

                          <PlusIcon className="h-4 w-4" aria-hidden="true" />
                          }
                        </span>
                      </button>
                    </h3>
                    <AnimatePresence initial={false}>
                      {isOpen &&
                      <motion.div
                        key="panel"
                        id={`faq-panel-${i}`}
                        role="region"
                        aria-labelledby={`faq-button-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: reduced ? 0 : 0.28,
                          ease: [0.23, 1, 0.32, 1]
                        }}
                        className="overflow-hidden">
                        
                          <p className="max-w-3xl pb-7 pr-10 font-sans text-[0.95rem] leading-[1.9] text-earth">
                            {faq.answer}
                          </p>
                        </motion.div>
                      }
                    </AnimatePresence>
                  </li>);

              })}
            </ul>
          </div>
        </div>
      </div>
    </section>);

}