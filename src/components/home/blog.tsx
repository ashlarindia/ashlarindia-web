"use client";

import type { FC } from "react";
import {
  Section,
  SectionHeader,
  ArticleCard,
  Button,
  StaggerGrid,
  StaggerItem,
} from "@/components/ui";

/* ---------------- types & data ---------------- */
type Category = "Beginners" | "Research" | "Advanced";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
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

// Map our category strings to ArticleCard's tone prop
const categoryToneMap: Record<Category, "success" | "brand" | "ink"> = {
  Beginners: "success",
  Research: "brand",
  Advanced: "ink",
};

/* ---------------- component ---------------- */
const Blog: FC = () => {
  const [featured, ...rest] = blogs;

  return (
    <Section>
      <SectionHeader
        eyebrow="Market Insights"
        title="Latest from our editorial desk"
        description="Expert analysis, trading guides, and market updates — written for investors at every level."
        className="mb-14"
      />

      {/* Editorial grid: featured + stacked secondary */}
      <StaggerGrid className="grid gap-5 lg:grid-cols-2 lg:gap-6">
        {/* Featured */}
        <StaggerItem>
          <ArticleCard
            slug={featured.slug}
            title={featured.title}
            excerpt={featured.excerpt}
            date={featured.date}
            category={featured.category}
            categoryTone={categoryToneMap[featured.category]}
            readTime={featured.readTime}
            featured
          />
        </StaggerItem>

        {/* Secondary stack */}
        <div className="grid gap-5 lg:gap-6">
          {rest.map((post) => (
            <StaggerItem key={post.slug}>
              <ArticleCard
                slug={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                category={post.category}
                categoryTone={categoryToneMap[post.category]}
                readTime={post.readTime}
              />
            </StaggerItem>
          ))}
        </div>
      </StaggerGrid>

      {/* CTA */}
      <div className="mt-14 flex justify-center">
        <Button href="/blog" variant="secondary" size="md" withArrow>
          View all articles
        </Button>
      </div>
    </Section>
  );
};

export default Blog;