import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { MessageCircleIcon } from 'lucide-react';
import { HERO_POSTER, HERO_VIDEO, WHATSAPP_LINK } from '../../config/site';
import { Button } from '../ui/Button';

const ease = [0.23, 1, 0.32, 1] as const;

export function Hero() {
  const reduced = useReducedMotion();

  const rise = (delay: number) => ({
    initial: reduced ? { opacity: 0 } : { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduced ? 0.3 : 0.9, delay: reduced ? 0 : delay, ease }
  });

  return (
    <section
      className="relative flex min-h-[100svh] w-full items-center overflow-hidden"
      aria-label="Panchakarma and Ayurvedic wellness in Nashik">
      
      {/* Background video — replace HERO_VIDEO in config/site.ts */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={HERO_VIDEO}
        poster={HERO_POSTER}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        tabIndex={-1} />
      
      <div className="absolute inset-0 hero-overlay" aria-hidden="true" />
      <div
        className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-b from-transparent via-forest-deep/30 to-ivory"
        aria-hidden="true" />
      

      <div className="relative mx-auto w-full max-w-[88rem] px-5 pb-28 pt-36 sm:px-8 sm:pb-32 sm:pt-40">
        <div className="max-w-3xl text-center sm:text-left">
          <motion.p
            initial={reduced ? { opacity: 0 } : { opacity: 0, letterSpacing: '0.16em' }}
            animate={{ opacity: 1, letterSpacing: '0.28em' }}
            transition={{ duration: reduced ? 0.3 : 1.1, ease }}
            className="font-sans text-[0.58rem] uppercase text-brass-light sm:text-[0.66rem]">
            
            Ayurveda • Panchakarma • Rejuvenation • Wellness
          </motion.p>

          <motion.h1
            {...rise(0.15)}
            className="mt-6 font-serif text-[2.6rem] font-light leading-[1.05] tracking-[-0.015em] text-white sm:text-6xl lg:text-[4.4rem]">
            
            Panchakarma &amp; Ayurvedic Wellness in Nashik
          </motion.h1>

          <motion.div {...rise(0.3)} className="mt-7 max-w-2xl space-y-4">
            <p className="font-sans text-[0.95rem] leading-[1.85] text-white/85 sm:text-base">
              Discover a personalised approach to traditional Ayurvedic wellness at One
              Wellness Clinic &amp; Research Center.
            </p>
            <p className="font-sans text-[0.9rem] leading-[1.85] text-white/70">
              Our Panchakarma and Ayurvedic wellness programs combine traditional
              principles, individual assessment and carefully selected therapies to support
              balance, relaxation, rejuvenation and healthier lifestyle practices.
            </p>
          </motion.div>

          <motion.div
            {...rise(0.5)}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            
            <Button to="/contact" size="lg" variant="primary">
              Book Ayurvedic Consultation
            </Button>
            <Button
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer noopener"
              size="lg"
              variant="light">
              
              <MessageCircleIcon className="h-4 w-4" aria-hidden="true" />
              WhatsApp Us
            </Button>
          </motion.div>

          <motion.p
            {...rise(0.65)}
            className="mt-7 font-sans text-[0.72rem] tracking-[0.12em] text-white/60">
            
            Personalised Ayurvedic Wellness • Traditional Principles • Structured Care
          </motion.p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: reduced ? 0 : 1.1, duration: 0.6, ease }}
        className="absolute inset-x-0 bottom-6 hidden flex-col items-center gap-3 sm:flex"
        aria-hidden="true">
        
        <span className="font-sans text-[0.55rem] uppercase tracking-eyebrow text-white/55">
          Scroll to explore
        </span>
        <span className="relative block h-12 w-px overflow-hidden bg-white/25">
          {!reduced &&
          <motion.span
            className="absolute inset-x-0 top-0 block h-4 bg-brass-light"
            animate={{ y: ['-100%', '300%'] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'linear' }} />

          }
        </span>
      </motion.div>
    </section>);

}