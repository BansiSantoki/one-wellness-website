import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRightIcon } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { Eyebrow } from '../ui/SectionHeading';

interface Crumb {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  intro?: string;
  crumbs?: Crumb[];
  image?: string;
}

export function PageHeader({ eyebrow, title, intro, crumbs = [], image }: PageHeaderProps) {
  return (
    <header className="relative overflow-hidden bg-forest-deep pb-16 pt-32 sm:pb-20 sm:pt-40">
      {image &&
      <>
          <img
          src={image}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-25" />
        
          <div className="absolute inset-0 bg-gradient-to-r from-forest-deep via-forest-deep/85 to-forest-deep/40" />
        </>
      }
      <div className="relative mx-auto w-full max-w-[88rem] px-5 sm:px-8">
        {crumbs.length > 0 &&
        <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 font-sans text-xs text-ivory/55">
              <li>
                <Link to="/" className="transition-colors duration-200 ease-calm hover:text-brass-light">
                  Home
                </Link>
              </li>
              {crumbs.map((c) =>
            <li key={c.label} className="flex items-center gap-1.5">
                  <ChevronRightIcon className="h-3 w-3" aria-hidden="true" />
                  {c.href ?
              <Link
                to={c.href}
                className="transition-colors duration-200 ease-calm hover:text-brass-light">
                
                      {c.label}
                    </Link> :

              <span className="text-ivory/85">{c.label}</span>
              }
                </li>
            )}
            </ol>
          </nav>
        }
        <Reveal className="mt-8 max-w-4xl">
          {eyebrow && <Eyebrow tone="light">{eyebrow}</Eyebrow>}
          <h1 className="mt-5 font-serif text-[2.4rem] font-light leading-[1.08] tracking-[-0.01em] text-ivory sm:text-5xl lg:text-[3.6rem]">
            {title}
          </h1>
          {intro &&
          <p className="mt-6 max-w-2xl font-sans text-[0.95rem] leading-[1.85] text-ivory/70">
              {intro}
            </p>
          }
        </Reveal>
      </div>
    </header>);

}