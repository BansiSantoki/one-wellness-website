import React from 'react';
import { therapies } from '../../data/therapies';
import { TherapyCard } from './TherapyCard';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';

interface TherapiesGridProps {
  limit?: number;
  showHeading?: boolean;
  background?: 'ivory' | 'warm';
}

export function TherapiesGrid({
  limit,
  showHeading = true,
  background = 'ivory'
}: TherapiesGridProps) {
  const list = limit ? therapies.slice(0, limit) : therapies;

  return (
    <section
      className={background === 'warm' ? 'bg-ivory-warm' : 'bg-ivory'}
      aria-labelledby="therapies-heading">
      
      <div className="mx-auto w-full max-w-[88rem] px-5 py-20 sm:px-8 lg:py-28">
        {showHeading &&
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
            eyebrow="Ayurvedic Therapies in Nashik"
            title="Traditional Ayurvedic Therapies"
            intro={
            <p>
                  At One Wellness, Ayurvedic therapies are selected according to the
                  individual&apos;s consultation and wellness plan.
                </p>
            }
            maxWidth="max-w-xl" />
          
            {limit &&
          <Reveal delay={0.1}>
                <Button to="/therapies" variant="outline">
                  View All Therapies
                </Button>
              </Reveal>
          }
          </div>
        }

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((therapy, i) =>
          <Reveal as="li" key={therapy.slug} delay={i % 3 * 0.08} className="h-full">
              <TherapyCard therapy={therapy} />
            </Reveal>
          )}
        </ul>
      </div>
    </section>);

}