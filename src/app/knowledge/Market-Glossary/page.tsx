import type { Metadata } from "next";
import {
  PageHero,
  Section,
  StaggerGrid,
  StaggerItem,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Market Glossary — Ashlar India",
  description: "Clear definitions of essential stock market, trading, and investing terms.",
};

const terms = [
  {
    title: "Demat Account",
    desc: "An electronic account used to hold shares and securities in dematerialized form, eliminating the need for physical certificates.",
  },
  {
    title: "IPO (Initial Public Offering)",
    desc: "The first time a private company offers its shares to the public for purchase on a stock exchange.",
  },
  {
    title: "Margin",
    desc: "Borrowed funds from a broker that allow traders to take larger positions than their available capital would otherwise permit.",
  },
  {
    title: "F&O (Futures & Options)",
    desc: "Derivative contracts whose value is derived from an underlying asset like stocks, indices, or commodities.",
  },
  {
    title: "Stop Loss",
    desc: "A pre-set order to automatically exit a position when the price moves against you by a defined amount, limiting downside risk.",
  },
  {
    title: "Lot Size",
    desc: "The minimum quantity of an asset that can be traded in a single contract, especially in derivatives and IPO applications.",
  },
];

export default function GlossaryPage() {
  return (
    <main>
      <PageHero
        eyebrow="Market Terms"
        title="Stock market glossary"
        description="Quick, clear definitions of the trading and investing vocabulary you'll encounter in news, research, and on the trading floor."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Knowledge", href: "/knowledge" },
          { label: "Glossary" },
        ]}
      />

      <Section>
        <StaggerGrid className="grid gap-4 md:grid-cols-2 md:gap-5">
          {terms.map((term) => (
            <StaggerItem key={term.title} className="h-full">
              <div className="h-full rounded-xl border border-border bg-surface p-6 transition-[transform,border-color,box-shadow] duration-300 ease-out-expo hover:-translate-y-0.5 hover:border-border-strong hover:shadow-md">
                <h3 className="font-display text-lg font-medium leading-snug tracking-tight text-ink-900">
                  {term.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{term.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </Section>
    </main>
  );
}