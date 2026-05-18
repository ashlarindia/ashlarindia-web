import type { Metadata } from "next";
import {
  BarChart3, TrendingUp, Shield, Activity, Calendar, Zap,
} from "lucide-react";
import {
  PageHero,
  Section,
  FeatureCard,
  StaggerGrid,
  StaggerItem,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Trading Guides — Ashlar India",
  description: "Practical guides for intraday, swing, options, and equity trading strategies.",
};

const guides = [
  {
    slug: "candlestick-charts",
    icon: BarChart3,
    title: "How to read candlestick charts",
    description: "The visual language of price action — bodies, wicks, and what the patterns mean.",
  },
  {
    slug: "support-resistance",
    icon: TrendingUp,
    title: "Support & resistance basics",
    description: "How to identify the price levels where buyers and sellers consistently appear.",
  },
  {
    slug: "risk-management",
    icon: Shield,
    title: "Risk management for traders",
    description: "Position sizing, stop placement, and the discipline that separates winners from gamblers.",
  },
  {
    slug: "option-greeks",
    icon: Activity,
    title: "Option Greeks explained",
    description: "Delta, gamma, theta, and vega — what they measure and how they move your P&L.",
  },
  {
    slug: "swing-trading",
    icon: Calendar,
    title: "Swing trading strategies",
    description: "Multi-day setups, entry triggers, and managing positions across overnight gaps.",
  },
  {
    slug: "intraday-trading",
    icon: Zap,
    title: "Intraday trading guide",
    description: "Pre-market preparation, breakout setups, and the rules that protect your capital.",
  },
];

export default function TradingGuidesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Trading Education"
        title="Trading guides and strategies"
        description="Practical playbooks for equity, intraday, futures, and options trading — written by traders who actually trade."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Knowledge", href: "/knowledge" },
          { label: "Trading Guides" },
        ]}
      />

      <Section>
        <StaggerGrid className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {guides.map((guide) => (
            <StaggerItem key={guide.slug} className="h-full">
              <FeatureCard
                icon={guide.icon}
                title={guide.title}
                description={guide.description}
                href={`/knowledge/guides/${guide.slug}`}
                cta="Read guide"
              />
            </StaggerItem>
          ))}
        </StaggerGrid>
      </Section>
    </main>
  );
}