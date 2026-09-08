import React from 'react';
import { blogPosts } from '../../data/blog';
import { BlogCard } from './BlogCard';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';

interface BlogSectionProps {
  limit?: number;
  background?: 'ivory' | 'warm';
}

export function BlogSection({ limit, background = 'warm' }: BlogSectionProps) {
  const posts = limit ? blogPosts.slice(0, limit) : blogPosts;

  return (
    <section
      className={background === 'warm' ? 'bg-ivory-warm' : 'bg-ivory'}
      aria-labelledby="insights-heading">
      
      <div className="mx-auto w-full max-w-[88rem] px-5 py-20 sm:px-8 lg:py-28">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Insights"
            title="Ayurveda & Wellness Insights"
            maxWidth="max-w-xl" />
          
          {limit &&
          <Reveal delay={0.1}>
              <Button to="/blog" variant="outline">
                View All Insights
              </Button>
            </Reveal>
          }
        </div>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {posts.map((post, i) =>
          <Reveal as="li" key={post.slug} delay={i % 4 * 0.06} className="h-full">
              <BlogCard post={post} />
            </Reveal>
          )}
        </ul>
      </div>
    </section>);

}