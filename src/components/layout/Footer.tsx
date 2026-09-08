import { Link } from 'react-router-dom';
import { MessageCircleIcon } from 'lucide-react';
import { BRAND, WHATSAPP_LINK } from '../../config/site';
import { footerLinks, seoPageLinks } from '../../data/navigation';
import { Disclaimer } from '../sections/Disclaimer';

export function Footer() {
  return (
    <footer className="bg-forest-soft text-ivory">
      <div className="mx-auto w-full max-w-[88rem] px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-md">
            <img
              src={BRAND.logo}
              alt={`${BRAND.name} logo`}
              className="h-28 w-auto object-contain"
              style={{ mixBlendMode: 'normal', filter: 'brightness(0.85) contrast(1.05) saturate(0.95)' }}
              loading="lazy" />
            <h2 className="mt-6 font-serif text-2xl font-light leading-snug">
              {BRAND.name}
            </h2>
            <p className="mt-2 font-sans text-sm text-ivory/70">{BRAND.division}</p>
            <p className="mt-4 font-sans text-[0.68rem] uppercase tracking-eyebrow text-brass-light">
              Ayurveda • Panchakarma • Rejuvenation • Traditional Wellness
            </p>
            <p className="mt-5 font-sans text-sm leading-[1.85] text-ivory/70">
              A personalised Ayurvedic wellness experience inspired by traditional
              principles and designed for modern lifestyles.
            </p>
          </div>

          <nav aria-label="Footer">
            <h3 className="font-sans text-[0.68rem] uppercase tracking-eyebrow text-brass-light">
              Explore
            </h3>
            <ul className="mt-6 space-y-3">
              <li>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 font-sans text-sm text-ivory/80 transition-colors duration-200 ease-calm hover:text-brass-light">
                  
                  <MessageCircleIcon className="h-4 w-4" aria-hidden="true" />
                  WhatsApp
                </a>
              </li>
              {footerLinks.map((link) =>
              <li key={link.href + link.label}>
                  <Link
                  to={link.href}
                  className="font-sans text-sm text-ivory/80 transition-colors duration-200 ease-calm hover:text-brass-light">
                  
                    {link.label}
                  </Link>
                </li>
              )}
            </ul>
          </nav>

          <nav aria-label="Ayurveda in Nashik">
            <h3 className="font-sans text-[0.68rem] uppercase tracking-eyebrow text-brass-light">
              Ayurveda in Nashik
            </h3>
            <ul className="mt-6 space-y-3">
              {seoPageLinks.map((link) =>
              <li key={link.href}>
                  <Link
                  to={link.href}
                  className="font-sans text-sm text-ivory/80 transition-colors duration-200 ease-calm hover:text-brass-light">
                  
                    {link.label}
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </div>

        <div className="mt-14 border-t border-ivory/12 pt-10">
          <Disclaimer tone="light" />
          <div className="mt-8 flex items-center gap-4">
            <img
              src={BRAND.logo}
              alt={`${BRAND.name} logo small`}
              className="h-6 w-auto object-contain"
              style={{ mixBlendMode: 'normal', filter: 'brightness(0.85) contrast(1.05) saturate(0.95)' }}
              loading="lazy" />

            <p className="font-sans text-xs text-ivory/45">
              © {new Date().getFullYear()} {BRAND.name}. {BRAND.tagline}
            </p>
          </div>
        </div>
      </div>
    </footer>);

}