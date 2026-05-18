import type { Metadata } from "next";
import {
  PageHero,
  Section,
  ArticleCard,
  StaggerGrid,
  StaggerItem,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Blog & Market Insights — Ashlar India",
  description: "Expert market analysis, IPO breakdowns, and trading strategies from Ashlar India's research desk.",
};

const posts = [
  {
    slug: "understanding-market-trends-2026",
    title: "Understanding market trends in 2026",
    excerpt: "How market cycles, sector rotation, and macro signals shape long-term portfolio decisions.",
    date: "2026-04-12",
    category: "Equity",
    categoryTone: "brand" as const,
    readTime: "6 min read",
  },
  {
    slug: "ipo-investing-strategies",
    title: "IPO investing strategies that work",
    excerpt: "Key valuation factors, allotment math, and listing-day discipline every investor should know.",
    date: "2026-04-05",
    category: "IPO",
    categoryTone: "success" as const,
    readTime: "8 min read",
  },
  {
    slug: "technical-analysis-basics",
    title: "Technical analysis basics",
    excerpt: "Support and resistance, candlestick patterns, and volume signals explained without the jargon.",
    date: "2026-03-28",
    category: "Trading",
    categoryTone: "ink" as const,
    readTime: "10 min read",
  },
];

export default function BlogPage() {
  return (
    <main>
      <PageHero
        eyebrow="Blog & Insights"
        title="Market insights and investment knowledge"
        description="Stay updated with expert analysis, trading strategies, IPO breakdowns, and investor education from Ashlar's research desk."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Knowledge", href: "/knowledge" },
          { label: "Blog" },
        ]}
      />

      <Section>
        <StaggerGrid className="grid gap-5 md:grid-cols-2 xl:grid-cols-3 xl:gap-6">
          {posts.map((post) => (
            <StaggerItem key={post.slug} className="h-full">
              <ArticleCard
                slug={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                category={post.category}
                categoryTone={post.categoryTone}
                readTime={post.readTime}
              />
            </StaggerItem>
          ))}
        </StaggerGrid>
      </Section>
    </main>
  );
}