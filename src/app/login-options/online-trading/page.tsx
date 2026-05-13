// src/app/login-options/online-trading/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { Hero, Prose, Features, Disclaimer } from "@/components/parts";

export const metadata: Metadata = {
  title: "Online Trading Login | Ashlar Securities",
  description:
    "Log in to Ashlar's online trading platform. Trade stocks, F&O, commodities and currency from your browser or mobile.",
};

export default function OnlineTradingPage() {
  return (
    <main>
      <Hero
        tag="Login Option / Online Trading"
        title="Your markets,"
        highlight="one login away."
        text="Log in to the Ashlar online trading platform to place orders, track positions and manage your portfolio across stocks, F&O, commodities and currency."
      />

      <section className="bg-white px-6 py-14 md:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-2xl font-bold text-[#0A1F44] md:text-3xl">
            Launch the trading platform
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600">
            Trade on the web platform from any browser, or download Wisdom Neo on your phone.
          </p>
          <p className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="https://trade.wisdomcapital.in/#/app"
              className="rounded-full bg-[#1E5EFF] px-7 py-3 text-sm font-semibold text-white"
            >
              Open Web Platform →
            </Link>
            <Link
              href="https://play.google.com/store/search?q=wisdom+neo&c=apps&hl=en-IN"
              className="rounded-full border border-slate-300 bg-white px-7 py-3 text-sm font-semibold text-[#0A1F44]"
            >
              Get the Android App
            </Link>
            <Link
              href="https://apps.apple.com/us/app/wisdom-neo/id1592955751"
              className="rounded-full border border-slate-300 bg-white px-7 py-3 text-sm font-semibold text-[#0A1F44]"
            >
              Get the iOS App
            </Link>
          </p>
        </div>
      </section>

      <Prose alt>
        <h2>What you can do on the platform</h2>
        <ul className="ml-6 list-disc space-y-2">
          <li>Place market, limit, stop-loss and bracket orders across segments</li>
          <li>Track live prices, charts and indicators in real time</li>
          <li>View your positions, holdings and order book in one screen</li>
          <li>Manage funds — add money or request payouts in a few clicks</li>
          <li>See your margin, MTM and risk in real time</li>
        </ul>

        <h2>Tips for safe login</h2>
        <ul className="ml-6 list-disc space-y-2">
          <li>Always log in only through the official URLs above.</li>
          <li>Never share your password, PIN or OTP with anyone — Ashlar will never ask for them.</li>
          <li>Use a strong password and enable two-factor authentication.</li>
          <li>Log out properly after every session, especially on shared devices.</li>
        </ul>
      </Prose>

      <Features
        heading="Trouble logging in?"
        items={[
          { t: "Forgot password", d: "Use the 'Forgot Password' link on the login screen to reset." },
          { t: "Account locked", d: "Call our support team or email care@ashlarindia.com." },
          { t: "OTP not received", d: "Check your registered mobile and email; try resending." },
          { t: "Browser issues", d: "Clear cache or try a different browser like Chrome or Edge." },
          { t: "Mobile app issues", d: "Update to the latest version of Wisdom Neo from your app store." },
          { t: "Still stuck", d: "Call toll-free 1800 123 9343 — we are here to help." },
        ]}
      />

      <Disclaimer text="Trading platforms are operated under the brand Wisdom Capital — an online brand of Ashlar Securities Pvt. Ltd. Always verify the URL before logging in. Ashlar Securities Pvt. Ltd. — SEBI Reg: INZ000203739." />
    </main>
  );
}