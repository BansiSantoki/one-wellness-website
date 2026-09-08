import React, { useId, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronDownIcon, ClockIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Therapy } from '../../data/therapies';

interface TherapyCardProps {
  therapy: Therapy;
}

export function TherapyCard({ therapy }: TherapyCardProps) {
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();
  const panelId = useId();

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-sm border border-forest/10 bg-ivory transition-[border-color,box-shadow] duration-300 ease-calm hover:border-brass/45 hover:shadow-soft">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={therapy.image}
          alt={`${therapy.name} — ${therapy.subtitle}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 ease-calm group-hover:scale-[1.04]" />
        
        <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-sm bg-ivory/92 px-2.5 py-1 font-sans text-[0.66rem] tracking-wide text-forest backdrop-blur-sm">
          <ClockIcon className="h-3 w-3" aria-hidden="true" />
          {therapy.duration}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif text-2xl font-normal leading-tight text-forest-deep">
          {therapy.name}
        </h3>
        <p className="mt-1.5 font-sans text-[0.72rem] uppercase tracking-[0.14em] text-brass-dark">
          {therapy.subtitle}
        </p>

        <p className="mt-4 font-sans text-sm leading-[1.8] text-earth">
          {therapy.description[0]}
        </p>

        {therapy.description.length > 1 &&
        <>
            <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls={panelId}
            className="mt-3 inline-flex items-center gap-1.5 self-start font-sans text-xs font-medium tracking-wide text-forest transition-colors duration-200 ease-calm hover:text-brass-dark">
            
              {open ? 'Show less' : 'Read more'}
              <motion.span
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
              className="inline-flex">
              
                <ChevronDownIcon className="h-3.5 w-3.5" aria-hidden="true" />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {open &&
            <motion.div
              id={panelId}
              key="details"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: reduced ? 0 : 0.25, ease: [0.23, 1, 0.32, 1] }}
              className="overflow-hidden">
              
                  {therapy.description.slice(1).map((p) =>
              <p key={p} className="pt-3 font-sans text-sm leading-[1.8] text-earth">
                      {p}
                    </p>
              )}
                </motion.div>
            }
            </AnimatePresence>
          </>
        }

        <div className="mt-auto flex items-end justify-between gap-4 border-t border-forest/10 pt-5">
          <div>
            <span className="block font-sans text-[0.6rem] uppercase tracking-eyebrow text-earth-light">
              Starting from
            </span>
            <span className="mt-1 block font-serif text-2xl text-forest-deep">
              {therapy.price}
            </span>
          </div>
          <Link
            to="/contact"
            className="shrink-0 border-b border-brass/50 pb-0.5 font-sans text-xs font-medium tracking-wide text-forest transition-colors duration-200 ease-calm hover:border-brass hover:text-brass-dark">
            
            {therapy.cta}
          </Link>
        </div>
      </div>
    </article>);

}