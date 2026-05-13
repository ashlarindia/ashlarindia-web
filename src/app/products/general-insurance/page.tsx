// src/app/products/general-insurance/page.tsx
import type { Metadata } from "next";
import { Hero, Prose, Features, CTA, Disclaimer } from "@/components/parts";

export const metadata: Metadata = {
  title: "General Insurance | Ashlar Securities",
  description:
    "Cover your health, car, home and travel with the right general insurance plan. Compare policies from leading insurers through Ashlar.",
};

export default function GeneralInsurancePage() {
  return (
    <main>
      <Hero
        tag="Products / General Insurance"
        title="Protect what"
        highlight="you have built."
        text="General insurance protects you from the unexpected — a hospital bill, a car accident, damage to your home or a cancelled trip. Pay a small premium today and save yourself a big shock tomorrow."
      />

      <Prose>
        <h2>What is general insurance?</h2>
        <p>
          General insurance covers everything in your life that is <em>not</em> your life — your health,
          your car, your home, your business and your travel plans. Unlike life insurance, these policies
          are usually for one year and need to be renewed each time.
        </p>
        <p>
          The idea is simple. You pay a small amount as premium every year. If something goes wrong, the
          insurance company pays the bill instead of you. For most middle-class families, a hospital
          stay or a major car repair can wipe out years of savings. The right cover keeps that from
          happening.
        </p>

        <h2>Common types of general insurance</h2>
        <ul className="ml-6 list-disc space-y-2">
          <li><strong>Health insurance.</strong> Covers hospital bills, surgery, daycare procedures and pre/post hospitalisation costs. Every family should have at least one.</li>
          <li><strong>Motor insurance.</strong> Third-party cover is mandatory by law. Add own-damage cover to protect your car or two-wheeler.</li>
          <li><strong>Home insurance.</strong> Protects your house and what is inside it against fire, theft, floods and other natural disasters.</li>
          <li><strong>Travel insurance.</strong> Covers medical emergencies, lost baggage, trip cancellation and other risks during domestic and international travel.</li>
          <li><strong>Personal accident.</strong> Lump sum payout in case of accidental death or permanent disability.</li>
        </ul>

        <h2>What to look for in a policy</h2>
        <p>
          Premium is important, but it should never be the only factor. Check the <strong>sum insured</strong>
          — make sure it is enough for today&apos;s costs. Read the list of inclusions and exclusions
          carefully. Look at the insurer&apos;s claim settlement ratio — a higher number means a better
          chance of getting paid when you actually need it. And check the network of hospitals or garages
          where cashless service is available near your home.
        </p>
      </Prose>

      <Features
        heading="Buying general insurance through Ashlar"
        items={[
          { t: "Top insurers compared", d: "Quotes from leading IRDAI-registered companies, side by side." },
          { t: "Family floater plans", d: "One health plan to cover your spouse, children and parents." },
          { t: "Cashless network", d: "Find hospitals and garages near you with cashless service." },
          { t: "Easy renewals", d: "Auto-reminders so your policy never lapses." },
          { t: "Claim help", d: "Guidance through claim paperwork when you need it most." },
          { t: "Honest advice", d: "We pick what fits your need, not what pays the most." },
        ]}
      />

      <CTA title="Get covered. It costs less than you think." text="Talk to our insurance advisor for a free quote." />

      <Disclaimer text="Insurance is the subject matter of solicitation. Tax benefits are subject to changes in tax laws. Read the policy document and brochure carefully before concluding a sale. Ashlar Securities Pvt. Ltd. acts as a referrer / distributor of insurance products of its partner insurers." />
    </main>
  );
}