import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpIcon, MessageCircleIcon } from 'lucide-react';
import { WHATSAPP_LINK } from '../../config/site';

export function FloatingActions() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Floating WhatsApp + back to top */}
      <div className="fixed bottom-20 right-4 z-40 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
        <AnimatePresence>
          {visible &&
          <motion.button
            key="top"
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-forest/12 bg-ivory/95 text-forest shadow-soft backdrop-blur transition-colors duration-200 ease-calm hover:border-brass hover:text-brass-dark">
            
              <ArrowUpIcon className="h-4 w-4" aria-hidden="true" />
            </motion.button>
          }
        </AnimatePresence>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Chat with One Wellness on WhatsApp"
          className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-forest text-ivory shadow-lift transition-[background-color,transform] duration-200 ease-calm hover:bg-forest-soft active:translate-y-px">
          
          <MessageCircleIcon className="h-6 w-6" aria-hidden="true" />
        </a>
      </div>

      {/* Sticky consultation CTA — mobile only */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-forest/10 bg-ivory/95 px-4 py-3 backdrop-blur-md sm:hidden">
        <Link
          to="/contact"
          className="flex w-full items-center justify-center rounded-md bg-forest px-5 py-3 font-sans text-[0.8rem] font-medium tracking-wide text-ivory transition-colors duration-200 ease-calm hover:bg-forest-soft">
          
          Book Ayurvedic Consultation
        </Link>
      </div>
    </>);

}