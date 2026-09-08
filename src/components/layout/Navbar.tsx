import React, { useEffect, useState } from 'react';
import { Link, NavLink as RouterNavLink, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon, Check } from 'lucide-react';
import { navigationLinks } from '../../data/navigation';
import { BRAND } from '../../config/site';
import { Button } from '../ui/Button';

interface NavbarProps {
  /** Hero pages start with a transparent navbar over the video */
  overHero?: boolean;
}

export function Navbar({ overHero = false }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const solid = true;
  const linkColor = 'text-forest';

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b bg-ivory/95 backdrop-blur-md">
      <nav aria-label="Primary" className="mx-auto flex h-[92px] w-full max-w-[88rem] items-center justify-between gap-6 px-5 sm:px-8">
          <Link to="/" className="flex shrink-0 items-center gap-3" aria-label={`${BRAND.name} — home`}>
          <img src={BRAND.logo} alt={`${BRAND.name} logo`} className="w-[120px] h-[80px] object-contain" style={{ filter: 'brightness(0.85) contrast(1.05) saturate(0.95)' }} />
          <span className="sr-only">{BRAND.name}</span>
        </Link>

        <ul className="hidden items-center gap-6 xl:flex">
          {navigationLinks.map((link) => (
            <li key={link.href}>
              <RouterNavLink to={link.href} className={({ isActive }) => `${linkColor} ${isActive ? 'opacity-100' : 'opacity-80 hover:opacity-100'}`}>
                {link.label}
              </RouterNavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Button to="/contact" variant={solid ? 'primary' : 'light'} className="hidden lg:inline-flex">
            Book Consultation
          </Button>
          <button type="button" onClick={() => setOpen((s) => !s)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} className="inline-flex h-10 w-10 items-center justify-center rounded-md border xl:hidden border-forest/15 text-forest hover:border-brass">
            {open ? <XIcon className="h-5 w-5" aria-hidden="true" /> : <MenuIcon className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu dialog */}
      {open && (
        <div className="fixed inset-0 z-[60] xl:hidden">
          <div className="absolute inset-0 bg-forest-deep/50" onClick={() => setOpen(false)} />
          <div className="absolute inset-0 flex flex-col bg-forest-deep text-ivory px-6 pb-8 pt-5 shadow-lift sm:px-8" role="dialog" aria-modal="true" aria-label="Site menu">
            <div className="flex items-center justify-between">
              <img src={BRAND.logo} alt="" className="h-20 w-auto object-contain" style={{ mixBlendMode: 'normal', filter: 'brightness(0.85) contrast(1.05) saturate(0.95)' }} />
              <button type="button" onClick={() => setOpen(false)} aria-label="Close menu" className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-forest/15 text-ivory transition-colors duration-200 ease-calm hover:border-brass">
                <XIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <ul className="mt-8 flex-1 space-y-2 overflow-y-auto">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                    <RouterNavLink to={link.href} className={({ isActive }) => (isActive ? 'text-brass-dark' : 'text-forest-deep') + ' flex items-center gap-3 block border-b border-forest/[0.07] py-4 font-serif text-2xl'}>
                      <Check className="h-5 w-5 text-brass-light" aria-hidden="true" />
                      <span className="text-ivory">{link.label}</span>
                    </RouterNavLink>
                </li>
              ))}
            </ul>

            <Button to="/contact" size="lg" className="mt-8 w-full">
              Book Consultation
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
