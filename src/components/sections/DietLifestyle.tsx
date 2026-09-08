import React from 'react';
import {
  ActivityIcon,
  ClockIcon,
  DropletsIcon,
  LeafIcon,
  MoonIcon,
  SoupIcon,
  SunIcon,
  WindIcon } from
'lucide-react';
import { dietHeading, dietIntro, dietItems, dietNote } from '../../data/content';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

const icons = [
ClockIcon,
SoupIcon,
DropletsIcon,
LeafIcon,
SunIcon,
MoonIcon,
ActivityIcon,
WindIcon];


export function DietLifestyle() {
  return (
    <section className="bg-ivory" aria-labelledby="diet-heading">
      <div className="mx-auto w-full max-w-[88rem] px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Diet & Lifestyle"
              title={dietHeading}
              intro={dietIntro.map((p) =>
              <p key={p}>{p}</p>
              )}
              maxWidth="max-w-xl" />
            
            <Reveal delay={0.15} className="mt-8">
              <p className="border-l-2 border-brass pl-5 font-sans text-sm italic leading-[1.85] text-earth">
                {dietNote}
              </p>
            </Reveal>
          </div>

          <ul className="grid gap-y-7 sm:grid-cols-2 sm:gap-x-10 lg:col-span-6 lg:col-start-7">
            {dietItems.map((item, i) => {
              const Icon = icons[i];
              return (
                <Reveal
                  as="li"
                  key={item}
                  delay={i % 2 * 0.06}
                  className="flex items-center gap-4 border-b border-forest/10 pb-5">
                  
                  <Icon
                    className="h-5 w-5 shrink-0 text-brass"
                    strokeWidth={1.25}
                    aria-hidden="true" />
                  
                  <span className="font-serif text-xl text-forest-deep">{item}</span>
                </Reveal>);

            })}
          </ul>
        </div>
      </div>
    </section>);

}