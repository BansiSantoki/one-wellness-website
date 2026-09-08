import React from 'react';
import { FlowerIcon, LeafIcon, ScaleIcon, UserRoundIcon } from 'lucide-react';
import { trustItems } from '../../data/content';
import { Reveal } from '../ui/Reveal';

const icons = {
  flower: FlowerIcon,
  user: UserRoundIcon,
  bowl: LeafIcon,
  balance: ScaleIcon
};

export function TrustStrip() {
  return (
    <section aria-label="Our approach" className="bg-ivory">
      <div className="mx-auto w-full max-w-[88rem] px-5 py-16 sm:px-8 lg:py-20">
        <ul className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item, i) => {
            const Icon = icons[item.icon];
            return (
              <Reveal
                as="li"
                key={item.title}
                delay={i * 0.08}
                className="flex h-full flex-col border-t border-forest/12 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 lg:first:border-l-0 lg:first:pl-0">
                
                <Icon
                  className="h-6 w-6 text-brass"
                  strokeWidth={1.25}
                  aria-hidden="true" />
                
                <h3 className="mt-5 font-serif text-2xl font-normal text-forest-deep">
                  {item.title}
                </h3>
                <p className="mt-3 font-sans text-sm leading-[1.8] text-earth">
                  {item.description}
                </p>
              </Reveal>);

          })}
        </ul>
      </div>
    </section>);

}