import React from 'react';
import { CheckIcon } from 'lucide-react';
import { Seo } from '../components/seo/Seo';
import { PageHeader } from '../components/layout/PageHeader';
import { Reveal } from '../components/ui/Reveal';
import { TherapiesGrid } from '../components/sections/TherapiesGrid';
import { ProgramsSection } from '../components/sections/ProgramsSection';
import { PanchakarmaJourney } from '../components/sections/PanchakarmaJourney';
import { RejuvenationSection } from '../components/sections/RejuvenationSection';
import { WhatsAppSection } from '../components/sections/WhatsAppSection';
import { LeadGeneration } from '../components/sections/LeadGeneration';
import type { LocalSeoPage as LocalSeoPageData } from '../data/localSeoPages';

const features = {
  therapies: () => <TherapiesGrid background="warm" />,
  programs: () => <ProgramsSection background="warm" />,
  journey: () => <PanchakarmaJourney />,
  rejuvenation: () => <RejuvenationSection />
};

export function LocalSeoPage({ page }: {page: LocalSeoPageData;}) {
  const Feature = features[page.feature];

  return (
    <>
      <Seo title={page.seoTitle} description={page.metaDescription} />
      <PageHeader
        eyebrow={page.eyebrow}
        title={page.h1}
        intro={page.intro}
        crumbs={[{ label: page.crumb }]}
        image={page.image} />
      

      <section className="bg-ivory" aria-label={page.crumb}>
        <div className="mx-auto w-full max-w-[88rem] px-5 py-20 sm:px-8 lg:py-24">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            {page.blocks.map((block, i) =>
            <Reveal key={block.heading} delay={i * 0.08}>
                <h2 className="font-serif text-[1.8rem] font-light leading-[1.15] text-forest-deep sm:text-[2.2rem]">
                  {block.heading}
                </h2>
                <div className="mt-6 space-y-4">
                  {block.body.map((p) =>
                <p key={p} className="font-sans text-[0.95rem] leading-[1.9] text-earth">
                      {p}
                    </p>
                )}
                </div>
                {block.list &&
              <ul className="mt-7 space-y-2.5 border-t border-forest/10 pt-6">
                    {block.list.map((item) =>
                <li key={item} className="flex gap-3">
                        <CheckIcon
                    className="mt-1 h-3.5 w-3.5 shrink-0 text-brass"
                    strokeWidth={2}
                    aria-hidden="true" />
                  
                        <span className="font-sans text-sm text-forest-deep/85">{item}</span>
                      </li>
                )}
                  </ul>
              }
              </Reveal>
            )}
          </div>
        </div>
      </section>

      <Feature />
      <WhatsAppSection />
      <LeadGeneration />
    </>);

}