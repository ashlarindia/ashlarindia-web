import type { Metadata } from "next";
import {
  PageHero,
  Section,
  SectionHeader,
  StaggerGrid,
  StaggerItem,
  Button,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Learn Stock Market — Ashlar India",
  description: "A structured beginner-to-advanced course covering markets, trading, accounts, analysis, and risk.",
};

const modules = [
  {
    title: "Introduction to the stock market",
    description: "Markets, exchanges, indices, and how participants interact — your foundation.",
    duration: "25 min",
  },
  {
    title: "How trading works",
    description: "Order types, market hours, settlement cycles, and the mechanics of a real trade.",
    duration: "30 min",
  },
  {
    title: "Demat & trading accounts",
    description: "Account types, KYC, depositories, custody — what your broker actually does.",
    duration: "20 min",
  },
  {
    title: "Technical vs fundamental analysis",
    description: "Two schools of decision-making — when each works and how to combine them.",
    duration: "45 min",
  },
  {
    title: "Risk management",
    description: "Position sizing, stop losses, diversification, and the math of preserving capital.",
    duration: "35 min",
  },
];

export default function LearnStockMarketPage() {
  return (
    <main>
      <PageHero
        eyebrow="Course"
        title="Learn the stock market from basics"
        description="A structured five-module course. Each section builds on the last. Take it at your own pace — start anywhere."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Knowledge", href: "/knowledge" },
          { label: "Learn Stock Market" },
        ]}
      />

      <Section>
        <SectionHeader
          eyebrow="Curriculum"
          title="Five modules. Roughly 2.5 hours."
          description="Built for beginners. Useful as a refresher even for experienced traders."
          className="mb-12"
        />

        <StaggerGrid className="grid gap-4 lg:gap-5">
          {modules.map((module, idx) => (
            <StaggerItem key={module.title}>
              <div className="group flex items-start gap-5 rounded-xl border border-border bg-surface p-5 sm:p-6 transition-[transform,border-color,box-shadow] duration-300 ease-out-expo hover:-translate-y-0.5 hover:border-border-strong hover:shadow-md">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-50 font-display text-lg font-medium text-brand-700 ring-1 ring-inset ring-brand-600/10 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white group-hover:ring-brand-600">
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <h3 className="font-display text-lg font-medium leading-snug tracking-tight text-ink-900">
                      {module.title}
                    </h3>
                    <span className="text-[11px] font-medium uppercase tracking-wider text-ink-400">
                      {module.duration}
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-600">
                    {module.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>

        <div className="mt-12 flex justify-center">
          <Button href="/kyc" external variant="primary" size="lg" withArrow>
            Start with module 01
          </Button>
        </div>
      </Section>
    </main>
  );
}