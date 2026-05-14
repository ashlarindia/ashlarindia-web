"use client";

import type { FC } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

type Category = "Beginners" | "Research" | "Advanced";

interface BlogPost {
  slug: string;
  title: string;
  date: string;        // ISO — formatted at render
  excerpt: string;
  category: Category;
  readTime: string;
}

const blogs: BlogPost[] = [
  {
    slug: "how-to-start-trading-2024",
    title: "How to start trading in 2024",
    date: "2024-01-15",
    excerpt:
      "A step-by-step beginner guide to opening a demat account, understanding market orders, and placing your first trade confidently.",
    category: "Beginners",
    readTime: "5 min read",
  },
  {
    slug: "top-10-stocks-to-watch",
    title: "Top 10 stocks to watch in 2024",
    date: "2024-01-10",
    excerpt:
      "Our research team's picks across banking, IT, and pharma sectors — with valuations, targets, and risk levels explained clearly.",
    category: "Research",
    readTime: "7 min read",
  },
  {
    slug: "understanding-fno-trading",
    title: "Understanding F&O trading",
    date: "2024-01-05",
    excerpt:
      "A complete guide to futures and options — how they work, key strategies for hedging and speculation, and common mistakes to avoid.",
    category: "Advanced",
    readTime: "9 min read",
  },
];

// Restrained, semantic tone mapping — three distinct but quiet treatments
const categoryTone: Record<Category, string> = {
  Beginners: "text-success border-success/20 bg-success/5",
  Research:  "text-brand-600 border-brand-600/20 bg-brand-50",
  Advanced:  "text-ink-800 border-ink-200 bg-ink-50",
};

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric", month: "short", year: "numeric",
  });

// Framer Motion: GPU-only properties, single stagger orchestrator
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1, y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

const ArrowIcon = () => (
  <svg
    aria-hidden="true" width="14" height="14" viewBox="0 0 14 14" fill="none"
    className="transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5"
  >
    <path d="M1 7h12m0 0L7.5 1.5M13 7l-5.5 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArticleCard: FC<{ post: BlogPost; featured?: boolean }> = ({ post, featured }) => (
  <motion.article variants={item} className="h-full">
    <Link
      href={`/blog/${post.slug}`}
      className={[
        "group relative flex h-full flex-col rounded-xl border border-border bg-surface",
        "transition-[transform,border-color,box-shadow] duration-300 ease-out-expo",
        "hover:-translate-y-0.5 hover:border-border-strong hover:shadow-md",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2",
        featured ? "p-7 lg:p-8" : "p-6",
      ].join(" ")}
    >
      {/* Meta row */}
      <div className="mb-5 flex items-center gap-3">
        <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${categoryTone[post.category]}`}>
          {post.category}
        </span>
        <span className="h-1 w-1 rounded-full bg-ink-200" aria-hidden="true" />
        <time dateTime={post.date} className="text-xs text-ink-400">
          {formatDate(post.date)}
        </time>
      </div>

      {/* Title */}
      <h3
        className={[
          "font-display font-medium tracking-tight text-ink-900 text-balance",
          "transition-colors duration-200 group-hover:text-brand-700",
          featured ? "text-2xl lg:text-[28px] leading-[1.2]" : "text-lg leading-snug",
        ].join(" ")}
      >
        {post.title}
      </h3>

      {/* Excerpt */}
      <p className={`mt-3 flex-1 text-ink-600 leading-relaxed ${featured ? "text-[15px]" : "text-sm"}`}>
        {post.excerpt}
      </p>

      {/* Footer */}
      <div className="mt-6 flex items-center justify-between border-t border-border-subtle pt-4">
        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-600">
          Read article <ArrowIcon />
        </span>
        <span className="text-xs text-ink-400">{post.readTime}</span>
      </div>
    </Link>
  </motion.article>
);

const Blog: FC = () => {
  const [featured, ...rest] = blogs;

  return (
    <section className="relative bg-surface py-22 sm:py-30">
      <div className="container">

        {/* Header */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="text-eyebrow uppercase text-brand-600">Market Insights</span>
          <h2 className="mt-4 font-display text-display-lg text-ink-900 text-balance">
            Latest from our editorial desk
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-600 text-balance">
            Expert analysis, trading guides, and market updates — written for
            investors at every level.
          </p>
        </div>

        {/* Editorial grid: featured + stacked secondary */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-5 lg:grid-cols-2 lg:gap-6"
        >
          {/* Featured */}
          <ArticleCard post={featured} featured />

          {/* Secondary stack */}
          <div className="grid gap-5 lg:gap-6">
            {rest.map((post) => (
              <ArticleCard key={post.slug} post={post} />
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <div className="mt-14 flex justify-center">
          <Link
            href="/blog"
            className={[
              "group inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5",
              "text-sm font-medium text-ink-800 bg-surface",
              "transition-all duration-300 ease-out-expo",
              "hover:border-brand-600 hover:text-brand-700 hover:shadow-sm",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2",
            ].join(" ")}
          >
            View all articles
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;