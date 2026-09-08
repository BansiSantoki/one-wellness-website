import React from 'react';
import { Seo } from '../components/seo/Seo';
import { Button } from '../components/ui/Button';
import { Reveal } from '../components/ui/Reveal';
import { navigationLinks } from '../data/navigation';
import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <>
      <Seo
        title="Page Not Found | One Wellness Clinic & Research Center"
        description="The page you are looking for could not be found."
        robots="noindex, follow" />
      
      <section className="flex min-h-[80vh] items-center bg-ivory pt-32">
        <div className="mx-auto w-full max-w-3xl px-5 pb-20 text-center sm:px-8">
          <Reveal>
            <p className="font-sans text-[0.62rem] uppercase tracking-eyebrow text-brass-dark">
              404
            </p>
            <h1 className="mt-5 font-serif text-[2.4rem] font-light leading-[1.1] text-forest-deep sm:text-5xl">
              This page could not be found.
            </h1>
            <p className="mx-auto mt-6 max-w-lg font-sans text-[0.95rem] leading-[1.85] text-earth">
              The page may have moved. You can return home, or continue exploring our
              Ayurvedic therapies and Panchakarma programs.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Button to="/" size="lg">
                Back to Home
              </Button>
              <Button to="/contact" variant="outline" size="lg">
                Book Ayurvedic Consultation
              </Button>
            </div>
            <ul className="mt-14 flex flex-wrap justify-center gap-x-6 gap-y-3">
              {navigationLinks.slice(1).map((link) =>
              <li key={link.href}>
                  <Link
                  to={link.href}
                  className="font-sans text-sm text-earth transition-colors duration-200 ease-calm hover:text-brass-dark">
                  
                    {link.label}
                  </Link>
                </li>
              )}
            </ul>
          </Reveal>
        </div>
      </section>
    </>);

}