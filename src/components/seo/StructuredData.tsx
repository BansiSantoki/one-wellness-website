import { useEffect } from 'react';
import { BRAND } from '../../config/site';
import { faqs } from '../../data/faqs';
import { gmb } from '../../data/content';

function useJsonLd(id: string, data: unknown) {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = id;
    script.text = JSON.stringify(data);
    document.head.appendChild(script);
    return () => {
      document.getElementById(id)?.remove();
    };
  }, [id, data]);
}

/** FAQ structured data, generated from the same FAQ source used on the page. */
export function FaqStructuredData() {
  useJsonLd('faq-jsonld', {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer }
    }))
  });
  return null;
}

/**
 * LocalBusiness structured data.
 * Address, telephone and geo are intentionally omitted — add real values
 * in config/site.ts before publishing.
 */
export function LocalBusinessStructuredData() {
  useJsonLd('localbusiness-jsonld', {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: BRAND.name,
    description: gmb.description,
    url: BRAND.siteUrl,
    logo: BRAND.logo,
    image: BRAND.logo,
    areaServed: BRAND.city,
    slogan: BRAND.tagline,
    makesOffer: gmb.services.map((s) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: s }
    }))
  });
  return null;
}