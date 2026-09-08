import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRightIcon } from 'lucide-react';
import type { BlogPost } from '../../data/blog';

export function BlogCard({ post }: {post: BlogPost;}) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group flex h-full flex-col justify-between rounded-sm border border-forest/12 bg-ivory p-6 transition-[border-color,box-shadow] duration-300 ease-calm hover:border-brass/50 hover:shadow-soft">
      
      <div>
        <span className="font-sans text-[0.6rem] uppercase tracking-eyebrow text-brass">
          {post.category}
        </span>
        <h3 className="mt-4 font-serif text-xl leading-snug text-forest-deep sm:text-[1.4rem]">
          {post.title}
        </h3>
      </div>
      <span className="mt-8 inline-flex items-center gap-1.5 font-sans text-xs tracking-wide text-earth transition-colors duration-200 ease-calm group-hover:text-brass-dark">
        Read article
        <ArrowUpRightIcon className="h-3.5 w-3.5" aria-hidden="true" />
      </span>
    </Link>);

}