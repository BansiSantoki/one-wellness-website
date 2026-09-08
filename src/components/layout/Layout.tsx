import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { FloatingActions } from './FloatingActions';
import { LocalBusinessStructuredData } from '../seo/StructuredData';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);
  return null;
}

export function Layout() {
  const { pathname } = useLocation();
  const reduced = useReducedMotion();
  const overHero = pathname === '/';

  return (
    <div className="flex min-h-screen w-full flex-col bg-ivory">
      <ScrollToTop />
      <LocalBusinessStructuredData />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-md focus:bg-forest focus:px-4 focus:py-2 focus:text-sm focus:text-ivory">
        
        Skip to content
      </a>
      <Navbar overHero={overHero} />
      <motion.main
        id="main"
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: reduced ? 0 : 0.3, ease: [0.23, 1, 0.32, 1] }}
        className="flex-1"
        style={{ paddingTop: 92 }}>
        
        <Outlet />
      </motion.main>
      <Footer />
      <FloatingActions />
      {/* Spacer so the mobile sticky CTA never covers footer content */}
      <div className="h-16 bg-forest-deep sm:hidden" aria-hidden="true" />
    </div>);

}