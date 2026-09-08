import React from 'react';
import { legalDisclaimer } from '../../data/content';

interface DisclaimerProps {
  tone?: 'light' | 'dark';
}

export function Disclaimer({ tone = 'dark' }: DisclaimerProps) {
  const light = tone === 'light';
  return (
    <aside
      aria-label="Wellness disclaimer"
      className={`border-l-2 pl-5 ${light ? 'border-brass/50' : 'border-brass/40'}`}>
      
      <h3
        className={`font-sans text-[0.62rem] uppercase tracking-eyebrow ${
        light ? 'text-brass-light' : 'text-brass-dark'}`
        }>
        
        Disclaimer
      </h3>
      <p
        className={`mt-3 max-w-4xl font-sans text-xs leading-[1.9] ${
        light ? 'text-ivory/55' : 'text-earth'}`
        }>
        
        {legalDisclaimer}
      </p>
    </aside>);

}