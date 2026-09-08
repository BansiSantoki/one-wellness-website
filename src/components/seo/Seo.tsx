import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { BRAND } from '../../config/site';

interface SeoProps {
  title: string;
  description: string;
  /** Optional explicit canonical path, defaults to the current route */
  canonicalPath?: string;
  image?: string;
  robots?: string;
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

/**
 * Canonical / robots / OpenGraph / Twitter metadata.
 * Structured so it can be swapped for a server-rendered head later.
 */
export function Seo({
  title,
  description,
  canonicalPath,
  image = BRAND.logo,
  robots = 'index, follow'
}: SeoProps) {
  const { pathname } = useLocation();
  const path = canonicalPath ?? pathname;
  const url = `${BRAND.siteUrl}${path === '/' ? '' : path}`;

  useEffect(() => {
    document.title = title;
    upsertMeta('name', 'description', description);
    upsertMeta('name', 'robots', robots);
    upsertLink('canonical', url);

    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:site_name', BRAND.name);
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', url);
    upsertMeta('property', 'og:image', image);

    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', image);
  }, [title, description, url, image, robots]);

  return null;
}