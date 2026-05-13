// src/app/login-options/trading-api/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { Hero, Prose, Features, Disclaimer } from "@/components/parts";

export const metadata: Metadata = {
  title: "Trading API | Ashlar Securities",
  description:
    "Build your own trading systems with the Ashlar Trading API. Live market data, order placement, portfolio access — all through clean, well-documented endpoints.",
};

export default function TradingApiPage() {
  return (
    <main>
      <Hero
        tag="Login Option / Trading API"
        title="Code your own"
        highlight="trading edge."
        text="The Ashlar Trading API lets developers and quant traders build their own systems — live market data, order placement, portfolio access — through simple, well-documented endpoints."
      />

      <section className="bg-white px-6 py-14 md:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-2xl font-bold text-[#0A1F44] md:text-3xl">
            Get started with the Trading API
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600">
            Reach out to our API team to get your developer keys and onboarding pack.
          </p>
          <p className="mt-8">
            <Link
              href="/contact-us"
              className="rounded-full bg-[#1E5EFF] px-7 py-3 text-sm font-semibold text-white"
            >
              Request API Access →
            </Link>
          </p>
        </div>
      </section>

      <Prose alt>
        <h2>What you can build with the API</h2>
        <ul className="ml-6 list-disc space-y-2">
          <li><strong>Algorithmic trading systems</strong> that place orders based on your own rules and signals.</li>
          <li><strong>Live dashboards</strong> showing real-time prices, P&L and risk across your portfolio.</li>
          <li><strong>Backtesting tools</strong> that pull historical data and test your strategy on past markets.</li>
          <li><strong>Custom reports</strong> tailored to your trading style — beyond standard back-office reports.</li>
          <li><strong>Smart alerts</strong> that ping you on Telegram, Slack or email when conditions are met.</li>
        </ul>

        <h2>Who is the API for?</h2>
        <p>
          The Trading API is built for users who are comfortable with code. If you are an active trader who
          wants to automate, a developer who runs a quant strategy, or a small firm building tools for your
          clients — the API gives you direct, programmatic access to the markets.
        </p>
        <p>
          You should be familiar with at least one programming language (Python is most common), basic API
          concepts and the rules of algorithmic trading set by SEBI and the exchanges.
        </p>

        <h2>Important rules to follow</h2>
        <ul className="ml-6 list-disc space-y-2">
          <li>Algorithmic orders must follow exchange rate-limits and risk checks.</li>
          <li>Each user gets their own API keys — do not share them, ever.</li>
          <li>All trades placed through the API are your responsibility — test thoroughly before going live.</li>
          <li>Strategy approval may be required for certain order types, as per exchange norms.</li>
        </ul>
      </Prose>

      <Features
        heading="Trading API features"
        items={[
          { t: "Live market data", d: "Real-time quotes across NSE, BSE, MCX and NCDEX." },
          { t: "Order placement", d: "Place, modify and cancel orders programmatically." },
          { t: "Portfolio access", d: "Read holdings, positions and margin in your code." },
          { t: "Historical data", d: "Intraday and end-of-day data for backtesting." },
          { t: "Webhooks & streams", d: "Get instant updates on order status and price ticks." },
          { t: "Developer support", d: "Documentation, sample code and a real human to help." },
        ]}
      />

      <Disclaimer text="Algorithmic and API-based trading carry market and execution risks. Strategies must comply with SEBI and exchange regulations. Past performance of any strategy is not indicative of future results. Ashlar Securities Pvt. Ltd. — SEBI Reg: INZ000203739." />
    </main>
  );
}