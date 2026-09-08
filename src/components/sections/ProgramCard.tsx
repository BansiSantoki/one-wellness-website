import React from 'react';
import { CheckIcon } from 'lucide-react';
import type { Program } from '../../data/programs';
import { Button } from '../ui/Button';

interface ProgramCardProps {
  program: Program;
}

export function ProgramCard({ program }: ProgramCardProps) {
  const featured = program.featured;

  return (
    <article
      className={`flex h-full flex-col rounded-sm p-7 transition-[border-color,box-shadow] duration-300 ease-calm sm:p-8 ${
      featured ?
      'border border-brass/55 bg-ivory shadow-soft hover:shadow-lift' :
      'border border-forest/12 bg-ivory hover:border-brass/40'}`
      }>
      
      <span className="font-sans text-[0.6rem] uppercase tracking-eyebrow text-brass-dark">
        {program.label}
      </span>
      <h3 className="mt-4 font-serif text-[1.6rem] font-normal leading-tight text-forest-deep">
        {program.name}
      </h3>
      <p className="mt-4 font-serif text-3xl font-light text-forest">{program.price}</p>

      {program.intro &&
      <p className="mt-4 font-sans text-sm leading-[1.8] text-earth">{program.intro}</p>
      }

      <p className="mt-7 font-sans text-[0.6rem] uppercase tracking-eyebrow text-earth-light">
        {program.includesLabel}
      </p>
      <ul className="mt-4 space-y-2.5">
        {program.includes.map((item) =>
        <li key={item} className="flex gap-2.5">
            <CheckIcon
            className="mt-1 h-3.5 w-3.5 shrink-0 text-brass"
            strokeWidth={2}
            aria-hidden="true" />
          
            <span className="font-sans text-sm leading-relaxed text-forest-deep/85">
              {item}
            </span>
          </li>
        )}
      </ul>

      {program.note &&
      <p className="mt-6 font-sans text-xs italic leading-relaxed text-earth-light">
          {program.note}
        </p>
      }

      <div className="mt-auto pt-8">
        <Button
          to="/contact"
          variant={featured ? 'primary' : 'outline'}
          className="w-full">
          
          {program.cta}
        </Button>
      </div>
    </article>);

}