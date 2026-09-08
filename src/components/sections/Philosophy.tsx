import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { philosophySteps } from '../../data/content';

export function Philosophy() {
  const reduced = useReducedMotion();

  return (
    <div className="relative">
      <div className="relative hidden lg:block">
        <div className="absolute left-0 right-0 top-[11px] h-px bg-forest/12" aria-hidden="true" />
        <motion.div
          className="absolute left-0 top-[11px] h-px origin-left bg-brass"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: reduced ? 0.2 : 1.4, ease: [0.23, 1, 0.32, 1] }}
          style={{ width: '100%' }}
          aria-hidden="true" />
        
        <ol className="relative grid grid-cols-5">
          {philosophySteps.map((step, i) =>
          <motion.li
            key={step}
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{
              delay: reduced ? 0 : 0.2 + i * 0.18,
              duration: 0.5,
              ease: [0.23, 1, 0.32, 1]
            }}>
            
              <span className="block h-[22px] w-[22px] rounded-full border border-brass bg-ivory p-[6px]">
                <span className="block h-full w-full rounded-full bg-brass" />
              </span>
              <span className="mt-4 font-serif text-xl text-forest-deep">{step}</span>
            </motion.li>
          )}
        </ol>
      </div>

      <ol className="space-y-0 lg:hidden">
        {philosophySteps.map((step, i) =>
        <motion.li
          key={step}
          className="relative flex gap-4 pb-6 last:pb-0"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ delay: reduced ? 0 : i * 0.1, duration: 0.5, ease: [0.23, 1, 0.32, 1] }}>
          
            <div className="flex flex-col items-center">
              <span className="mt-1.5 block h-[14px] w-[14px] shrink-0 rounded-full border border-brass bg-ivory p-[3px]">
                <span className="block h-full w-full rounded-full bg-brass" />
              </span>
              {i < philosophySteps.length - 1 &&
            <span className="mt-1 w-px flex-1 bg-forest/12" aria-hidden="true" />
            }
            </div>
            <span className="font-serif text-xl text-forest-deep">{step}</span>
          </motion.li>
        )}
      </ol>
    </div>);

}