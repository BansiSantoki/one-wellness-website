import React from 'react';
import { CheckIcon, MessageCircleIcon } from 'lucide-react';
import { WHATSAPP_LINK, WHATSAPP_NOTE } from '../../config/site';
import { whatsappTopics } from '../../data/content';
import { Reveal } from '../ui/Reveal';
import { Eyebrow } from '../ui/SectionHeading';
import { Button } from '../ui/Button';

export function WhatsAppSection() {
  return (
    <section className="bg-forest" aria-labelledby="whatsapp-heading">
      <div className="mx-auto w-full max-w-[88rem] px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
          <Reveal className="lg:col-span-6">
            <Eyebrow tone="light">Quick Answers</Eyebrow>
            <h2
              id="whatsapp-heading"
              className="mt-5 font-serif text-[2rem] font-light leading-[1.1] text-ivory sm:text-[2.7rem]">
              
              Have Questions About Panchakarma?
            </h2>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer noopener"
                size="lg"
                variant="light">
                
                <MessageCircleIcon className="h-4 w-4" aria-hidden="true" />
                Chat on WhatsApp
              </Button>
              <p className="font-sans text-xs text-ivory/60">{WHATSAPP_NOTE}</p>
            </div>
          </Reveal>

          <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:col-span-5 lg:col-start-8">
            {whatsappTopics.map((topic, i) =>
            <Reveal as="li" key={topic} delay={i * 0.05} className="flex items-center gap-3">
                <CheckIcon
                className="h-4 w-4 shrink-0 text-brass-light"
                strokeWidth={2}
                aria-hidden="true" />
              
                <span className="font-sans text-sm text-ivory/85">{topic}</span>
              </Reveal>
            )}
          </ul>
        </div>
      </div>
    </section>);

}