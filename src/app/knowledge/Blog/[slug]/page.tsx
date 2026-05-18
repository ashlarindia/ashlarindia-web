import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Calendar, Clock } from "lucide-react";
import {
  PageHero,
  Section,
  Container,
  Badge,
  Button,
} from "@/components/ui";

// In production: replace with CMS fetch (Sanity, Contentful, MDX, etc.)
const POSTS: Record<string, {
  title: string;
  excerpt: string;
  date: string;
  category: "Equity" | "IPO" | "Trading";
  readTime: string;
  content: string[];
}> = {
  "understanding-market-trends-2026": {
    title: "Understanding market trends in 2026",
    excerpt: "How market cycles, sector rotation, and macro signals shape long-term portfolio decisions.",
    date: "2026-04-12",
    category: "Equity",
    readTime: "6 min read",
    content: [
      "Markets rarely move in straight lines. They breathe in cycles — periods of expansion followed by contraction, leadership rotating between sectors, sentiment swinging from greed to fear and back again.",
      "Recognizing where we are in the cycle is one of the most valuable skills an investor can develop. It doesn't require predicting the future — only reading the present accurately.",
      "In this piece we'll walk through three lenses: macro conditions (rates, inflation, liquidity), market internals (breadth, leadership, volatility), and sentiment indicators (positioning, surveys, flow data).",
    ],
  },
  "ipo-investing-strategies": {
    title: "IPO investing strategies that work",
    excerpt: "Key valuation factors, allotment math, and listing-day discipline every investor should know.",
    date: "2026-04-05",
    category: "IPO",
    readTime: "8 min read",
    content: [
      "IPO investing is often treated as a lottery — apply, hope for allotment, sell on listing day. That approach works occasionally, but it isn't strategy. It's speculation.",
      "Real IPO investing starts with the red herring prospectus. Read the use of funds, promoter holding pattern, peer comparisons, and key risk factors.",
      "Anchor investor allocation often tells you more about an IPO than the brokerage reports do.",
    ],
  },
  "technical-analysis-basics": {
    title: "Technical analysis basics",
    excerpt: "Support and resistance, candlestick patterns, and volume signals explained without the jargon.",
    date: "2026-03-28",
    category: "Trading",
    readTime: "10 min read",
    content: [
      "Technical analysis is the study of price behavior — what the market has done, what it's doing now, and what it might do next based on observable patterns.",
      "The foundation is simple: support is where buyers consistently appear, resistance is where sellers consistently appear, and trend is the direction of higher highs and higher lows (or lower lows and lower highs).",
      "Volume is the conviction layer — it tells you whether a price move is being backed by real participation or just noise.",
    ],
  },
};

const toneMap = {
  Equity: "brand" as const,
  IPO: "success" as const,
  Trading: "ink" as const,
};

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric", month: "long", year: "numeric",
  });

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS[slug];
  if (!post) return { title: "Article not found — Ashlar India" };
  return {
    title: `${post.title} — Ashlar India`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = POSTS[slug];
  if (!post) notFound();

  return (
    <main>
      <PageHero
        eyebrow={post.category}
        title={post.title}
        description={post.excerpt}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Knowledge", href: "/knowledge" },
          { label: "Blog", href: "/knowledge/blog" },
          { label: post.title.slice(0, 40) + (post.title.length > 40 ? "…" : "") },
        ]}
      />

      <Section>
        <Container>
          <article className="mx-auto max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 border-b border-border-subtle pb-6">
              <Badge tone={toneMap[post.category]}>{post.category}</Badge>
              <div className="flex items-center gap-1.5 text-xs text-ink-500">
                <Calendar size={12} aria-hidden="true" />
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-ink-500">
                <Clock size={12} aria-hidden="true" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <div className="prose prose-ink mt-8 max-w-none">
              {post.content.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="mt-5 text-[17px] leading-relaxed text-ink-700 first:mt-0"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-12 flex flex-col gap-3 border-t border-border-subtle pt-8 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-ink-600">{"Found this useful? Open a free account."}</p>
              <Button href="/kyc" external variant="primary" size="md" withArrow>
                Open free account
              </Button>
            </div>
          </article>
        </Container>
      </Section>
    </main>
  );
}