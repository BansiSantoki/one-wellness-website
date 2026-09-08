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
        <div className="fixed inset-0 z-[99999] xl:hidden" role="presentation">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />

          <div className="fixed left-0 right-0 top-[92px] z-[100000] mx-auto w-full max-w-full h-[60vh] max-h-[calc(100vh-92px)] flex flex-col bg-forest-deep text-ivory overflow-y-auto" role="dialog" aria-modal="true" aria-label="Site menu">
            <div className="h-[92px] w-full flex items-center justify-between px-6 sm:px-8 border-b border-forest/[0.06]">
              <img src={BRAND.logo} alt="" className="h-16 w-auto object-contain" style={{ mixBlendMode: 'normal', filter: 'brightness(0.85) contrast(1.05) saturate(0.95)' }} />
              <button type="button" onClick={() => setOpen(false)} aria-label="Close menu" className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-forest/15 text-ivory transition-colors duration-200 ease-calm hover:border-brass">
                <XIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <div className="px-6 sm:px-8 py-6">
              <ul className="flex-1 space-y-4 pb-6">
                {navigationLinks.map((link) => (
                  <li key={link.href}>
                    <RouterNavLink to={link.href} onClick={() => setOpen(false)} className="flex items-center gap-3 block border-b border-forest/[0.07] py-4 font-serif text-2xl">
                      <span className="h-5 w-5 flex items-center justify-center text-brass-light">•</span>
                      <span className="text-ivory">{link.label}</span>
                    </RouterNavLink>
                  </li>
                ))}
              </ul>

              <Button to="/contact" size="lg" className="w-full">
                Book Consultation
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
