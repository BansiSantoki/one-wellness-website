import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { FileTextIcon } from 'lucide-react';
import { Seo } from '../components/seo/Seo';
import { PageHeader } from '../components/layout/PageHeader';
import { BlogSection } from '../components/sections/BlogSection';
import { LeadGeneration } from '../components/sections/LeadGeneration';
import { Reveal } from '../components/ui/Reveal';
import { Button } from '../components/ui/Button';
import { blogPosts } from '../data/blog';

export function BlogPost() {
  const { slug } = useParams<{slug: string;}>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <>
        <Seo
          title="Article Not Found | One Wellness Clinic & Research Center"
          description="This Ayurveda insights article could not be found."
          robots="noindex, follow" />
        
        <PageHeader
          eyebrow="Insights"
          title="This article could not be found"
          crumbs={[{ label: 'Blog', href: '/blog' }, { label: 'Not found' }]} />
        
        <section className="bg-ivory">
          <div className="mx-auto w-full max-w-[88rem] px-5 py-20 sm:px-8">
            <Button to="/blog" variant="outline">
              Back to all insights
            </Button>
          </div>
        </section>
      </>);

  }

  return (
    <>
      <Seo
        title={`${post.title} | One Wellness Clinic & Research Center`}
        description={`${post.title} — an upcoming article from One Wellness Clinic & Research Center, Nashik.`}
        robots="noindex, follow" />
      
      <PageHeader
        eyebrow={post.category}
        title={post.title}
        crumbs={[{ label: 'Blog', href: '/blog' }, { label: post.category }]} />
      
      <section className="bg-ivory" aria-label="Article">
        <div className="mx-auto w-full max-w-3xl px-5 py-20 sm:px-8 lg:py-24">
          <Reveal>
            <div className="rounded-sm border border-dashed border-brass/60 bg-ivory-warm p-8 text-center sm:p-12">
              <FileTextIcon
                className="mx-auto h-8 w-8 text-brass"
                strokeWidth={1.25}
                aria-hidden="true" />
              
              <h2 className="mt-6 font-serif text-2xl font-light text-forest-deep sm:text-3xl">
                This article is being prepared
              </h2>
              <p className="mx-auto mt-4 max-w-lg font-sans text-sm leading-[1.85] text-earth">
                The page structure is ready — the written content for this insight will be
                published here. In the meantime, a consultation is the best way to
                understand which Ayurvedic therapies may be appropriate for you.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button to="/contact">Book Ayurvedic Consultation</Button>
                <Button to="/blog" variant="outline">
                  Back to Insights
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="mt-14">
            <h2 className="font-sans text-[0.6rem] uppercase tracking-eyebrow text-brass-dark">
              Related insights
            </h2>
            <ul className="mt-5 space-y-2">
              {blogPosts.
              filter((p) => p.category === post.category && p.slug !== post.slug).
              slice(0, 4).
              map((p) =>
              <li key={p.slug}>
                    <Link
                  to={`/blog/${p.slug}`}
                  className="font-serif text-lg text-forest-deep transition-colors duration-200 ease-calm hover:text-brass-dark">
                  
                      {p.title}
                    </Link>
                  </li>
              )}
            </ul>
          </Reveal>
        </div>
      </section>
      <BlogSection limit={4} />
      <LeadGeneration />
    </>);

}