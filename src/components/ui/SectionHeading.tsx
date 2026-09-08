import React from 'react';
import { Reveal } from './Reveal';

interface EyebrowProps {
  children: React.ReactNode;
  tone?: 'dark' | 'light';
  className?: string;
}

export function Eyebrow({ children, tone = 'dark', className = '' }: EyebrowProps) {
  return (
    <p
      className={`font-sans text-[0.62rem] sm:text-[0.68rem] uppercase tracking-eyebrow ${
      tone === 'light' ? 'text-brass-light' : 'text-brass-dark'} ${
      className}`}>
      
      {children}
    </p>);

}

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: 'left' | 'center';
  tone?: 'dark' | 'light';
  as?: 'h1' | 'h2';
  className?: string;
  maxWidth?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
  tone = 'dark',
  as: Tag = 'h2',
  className = '',
  maxWidth = 'max-w-2xl'
}: SectionHeadingProps) {
  return (
    <Reveal
      className={`${align === 'center' ? 'mx-auto text-center' : ''} ${maxWidth} ${className}`}>
      
      {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
      <Tag
        className={`mt-4 font-serif font-light leading-[1.08] tracking-[-0.01em] ${
        Tag === 'h1' ?
        'text-[2.4rem] sm:text-5xl lg:text-[3.9rem]' :
        'text-[2rem] sm:text-4xl lg:text-[3.1rem]'} ${
        tone === 'light' ? 'text-ivory' : 'text-forest-deep'}`}>
        
        {title}
      </Tag>
      {intro &&
      <div
        className={`mt-6 space-y-4 font-sans text-[0.95rem] leading-[1.85] ${
        tone === 'light' ? 'text-ivory/75' : 'text-earth'}`
        }>
        
          {intro}
        </div>
      }
    </Reveal>);

}