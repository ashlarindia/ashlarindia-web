// src/app/mutual-funds/mutual-fund/page.tsx
import type { Metadata } from "next";
import { Hero, Prose, Features, CTA, Disclaimer } from "@/components/parts";

export const metadata: Metadata = {
  title: "Mutual Funds | Ashlar Securities",
  description:
    "Invest in mutual funds through Ashlar. Equity, debt, hybrid and tax-saving schemes from India's leading fund houses. Start an SIP from ₹500.",
};

export default function MutualFundPage() {
  return (
    <main>
      <Hero
        tag="Mutual Funds"
        title="Smart investing,"
        highlight="made simple."
        text="A mutual fund lets your money join thousands of other investors and grow under the care of a professional fund manager. Start a SIP from ₹500 and build wealth one month at a time."
      />

      <Prose>
        <h2>What is a mutual fund?</h2>
        <p>
          A mutual fund pools money from many investors and invests it across stocks, bonds or other
          assets — all managed by a qualified fund manager. You get the benefit of diversification,
          professional management and easy access, even if you are starting with a small amount.
        </p>
        <p>
          For most Indians, mutual funds are the simplest way to enter the markets without having to pick
          individual stocks or time the market. Whether your goal is a home, your child&apos;s education
          or retirement — there is a fund designed for it.
        </p>

        <h2>Types of mutual funds</h2>
        <ul className="ml-6 list-disc space-y-2">
          <li><strong>Equity funds.</strong> Invest mainly in stocks. Higher return potential, suited for long-term goals of 5+ years.</li>
          <li><strong>Debt funds.</strong> Invest in bonds and money-market instruments. Stable returns with lower risk than equity.</li>
          <li><strong>Hybrid funds.</strong> A mix of equity and debt. Balanced growth and stability — great for first-time investors.</li>
          <li><strong>ELSS (Tax saver).</strong> Equity funds with a 3-year lock-in. Eligible for tax deduction under Section 80C.</li>
          <li><strong>Index funds.</strong> Track an index like Nifty 50 at a very low cost.</li>
        </ul>

        <h2>The power of SIP</h2>
        <p>
          A Systematic Investment Plan (SIP) lets you invest a fixed amount every month — automatically.
          You buy more units when prices are low and fewer when prices are high. Over years, this
          rupee-cost averaging combined with compounding can build serious wealth from modest savings.
        </p>
        <p>
          A simple example: a <strong>₹5,000 monthly SIP</strong> at 12% expected annual return can grow
          to nearly <strong>₹50 lakh in 20 years</strong> — without you ever trying to time the market.
          Actual returns will vary, but the principle is steady and proven.
        </p>

        <h2>How to choose the right fund</h2>
        <p>
          Start with your goal. Are you saving for 3 years, 10 years or 25 years? Match the fund type to
          the time horizon. Look at the fund&apos;s long-term performance, the experience of the fund
          manager, the expense ratio and the size of the fund. And once you start a SIP, do not stop it
          when the market falls — that is when you actually buy the most units.
        </p>
      </Prose>

      <Features
        heading="Why invest in mutual funds with Ashlar"
        items={[
          { t: "Curated recommendations", d: "Our analysts shortlist the best schemes in each category." },
          { t: "Easy SIP setup", d: "Start, pause or stop SIPs anytime — fully online." },
          { t: "Direct & Regular plans", d: "Choose direct for lower cost or regular for advisory." },
          { t: "One portfolio view", d: "Track all funds, returns and capital gains in one place." },
          { t: "Tax reports", d: "Auto-generated capital gain statements at year-end." },
          { t: "Goal-based planning", d: "Tell us your goal — we suggest the right portfolio." },
        ]}
      />

      <CTA title="Your first SIP is the hardest. After that, it&apos;s habit." text="Start investing in mutual funds today with as little as ₹500 a month." />

      <Disclaimer text="Mutual fund investments are subject to market risks. Read all scheme-related documents carefully before investing. Past performance is not indicative of future results. Returns are illustrative only and not guaranteed." />
    </main>
  );
}