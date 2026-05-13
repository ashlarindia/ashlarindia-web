// src/app/login-options/back-office/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { Hero, Prose, Features, Disclaimer } from "@/components/parts";

export const metadata: Metadata = {
  title: "Back Office Login | Ashlar Securities",
  description:
    "Log in to the Ashlar Back Office to access contract notes, ledger, holdings, margin reports and tax statements.",
};

export default function BackOfficePage() {
  return (
    <main>
      <Hero
        tag="Login Option / Back Office"
        title="All your records,"
        highlight="in one place."
        text="The Ashlar Back Office is where every trade you place, every fund you transfer and every report you need lives — neatly organised and available anytime."
      />

      <section className="bg-white px-6 py-14 md:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-2xl font-bold text-[#0A1F44] md:text-3xl">
            Access the Back Office
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600">
            Log in with your client ID and password to pull up any report you need.
          </p>
          <p className="mt-8">
            <Link
              href="https://bo.ashlarindia.com/Account/Login"
              className="rounded-full bg-[#1E5EFF] px-7 py-3 text-sm font-semibold text-white"
            >
              Open Back Office Login →
            </Link>
          </p>
        </div>
      </section>

      <Prose alt>
        <h2>What you can do in the Back Office</h2>
        <ul className="ml-6 list-disc space-y-2">
          <li><strong>Contract notes</strong> for every trading day, available as PDF.</li>
          <li><strong>Ledger statement</strong> showing all debits, credits and brokerage charges.</li>
          <li><strong>Holdings report</strong> with current value of every stock you own.</li>
          <li><strong>Margin reports</strong> for SPAN, exposure and peak margin requirements.</li>
          <li><strong>Capital gain statements</strong> ready for filing income tax returns.</li>
          <li><strong>Fund history</strong> showing every deposit and withdrawal.</li>
        </ul>

        <h2>When to use the Back Office</h2>
        <p>
          The trading platform is for placing orders and tracking the market. The Back Office is for
          everything else — checking what you traded last month, downloading reports for your CA, sorting
          out a ledger mismatch, or simply keeping a clean record of your investments.
        </p>
      </Prose>

      <Features
        heading="Helpful tips"
        items={[
          { t: "First-time login", d: "Use the client ID and temporary password sent in your welcome email." },
          { t: "Forgot password", d: "Click 'Forgot Password' on the login page or contact support." },
          { t: "Reports not opening", d: "Allow PDF pop-ups in your browser settings." },
          { t: "Date range", d: "Most reports let you pick any date range — useful for tax season." },
          { t: "Email statements", d: "You can also email any report directly to your CA from within Back Office." },
          { t: "Help", d: "Call 0120-6633205 / 231 for any back-office query." },
        ]}
      />

      <Disclaimer text="Reports in the Back Office are issued by Ashlar Securities Pvt. Ltd. in accordance with SEBI and exchange guidelines. Please raise any discrepancy with our team within 7 working days of issue. Ashlar Securities Pvt. Ltd. — SEBI Reg: INZ000203739." />
    </main>
  );
}