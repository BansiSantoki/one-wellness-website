import React from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { introHeading, introParagraphs } from '../../data/content';
import { IMAGES } from '../../config/site';
import { Reveal } from '../ui/Reveal';
import { Eyebrow } from '../ui/SectionHeading';
import { Philosophy } from './Philosophy';

export function Introduction() {
  const ref = React.useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);

  return (
    <section className="bg-ivory-warm" aria-labelledby="introduction-heading">
      <div className="mx-auto w-full max-w-[88rem] px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <Eyebrow>Our Perspective</Eyebrow>
            <h2
              id="introduction-heading"
              className="mt-5 font-serif text-[2.1rem] font-light leading-[1.1] tracking-[-0.01em] text-forest-deep sm:text-[2.8rem] lg:text-[3.4rem]">
              
              {introHeading}
            </h2>
            <div ref={ref} className="mt-10 hidden overflow-hidden rounded-sm lg:block">
              <motion.img
                src={IMAGES.intro}
                alt="Brass bowl of warm herbal oil with fresh Ayurvedic herbs on linen"
                loading="lazy"
                style={reduced ? undefined : { scale }}
                className="h-[26rem] w-full object-cover" />
              
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
            <div className="space-y-6 border-l border-brass/30 pl-6 sm:pl-8">
              {introParagraphs.map((p, i) =>
              <p
                key={p}
                className={`font-sans leading-[1.95] text-earth ${
                i === 0 ? 'text-lg text-forest-deep/85' : 'text-[0.95rem]'}`
                }>
                
                  {p}
                </p>
              )}
            </div>
            <img
              src={IMAGES.intro}
              alt="Brass bowl of warm herbal oil with fresh Ayurvedic herbs on linen"
              loading="lazy"
              className="mt-10 h-64 w-full rounded-sm object-cover sm:h-80 lg:hidden" />
            
          </Reveal>
        </div>

        <div className="mt-20 lg:mt-28">
          <Reveal>
            <Eyebrow className="mb-8">The One Wellness Way</Eyebrow>
          </Reveal>
          <Philosophy />
        </div>
      </div>
    </section>);

}