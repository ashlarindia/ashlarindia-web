// src/app/products/life-insurance/page.tsx
import type { Metadata } from "next";
import { Hero, Prose, Features, CTA, Disclaimer } from "@/components/parts";

export const metadata: Metadata = {
  title: "Life Insurance | Ashlar Securities",
  description:
    "Protect your family's financial future with the right life insurance. Compare term plans, ULIPs and endowment policies from India's top insurers through Ashlar.",
};

export default function LifeInsurancePage() {
  return (
    <main>
      <Hero
        tag="Products / Life Insurance"
        title="Peace of mind for"
        highlight="the people you love."
        text="Life insurance is a simple promise — that if something happens to you, your family will not have to worry about money on top of everything else."
      />

      <Prose>
        <h2>Why life insurance matters</h2>
        <p>
          Life insurance pays a lump sum to your nominee if you are not around. That money helps your
          family pay off loans, cover daily expenses and continue with goals you had planned together — a
          home, your child&apos;s education, your spouse&apos;s comfort.
        </p>
        <p>
          Many people delay buying insurance, thinking they are too young or too healthy. But that is
          exactly when premiums are at their lowest. The right time to buy life insurance is when you do
          not feel you need it.
        </p>

        <h2>Types of life insurance</h2>
        <ul className="ml-6 list-disc space-y-2">
          <li><strong>Term insurance.</strong> Pure protection at a low premium. Pays only on death. Best for income earners with dependants.</li>
          <li><strong>Endowment plans.</strong> Insurance plus guaranteed savings. Pays a maturity amount if you survive the term.</li>
          <li><strong>ULIPs.</strong> Life cover plus market-linked investment. Useful for long-term wealth creation alongside protection.</li>
          <li><strong>Money-back plans.</strong> Periodic payouts during the policy term plus a final maturity benefit.</li>
        </ul>

        <h2>How much cover do you need?</h2>
        <p>
          A simple rule used by financial planners: aim for a cover that is <strong>10 to 15 times your
          annual income</strong>, plus all your outstanding loans, plus a buffer for your children&apos;s
          big goals like education and marriage. This way, your family can replace your income for many
          years and meet major life expenses without stress.
        </p>
      </Prose>

      <Features
        heading="Buying life insurance through Ashlar"
        items={[
          { t: "Top insurers in one place", d: "Compare plans from leading IRDAI-registered insurers." },
          { t: "Honest advice", d: "We suggest what fits your need, not what pays the highest commission." },
          { t: "Paperless application", d: "Apply online with digital KYC and medicals." },
          { t: "Premium calculator", d: "Quick estimate based on your age, cover and term." },
          { t: "Claim assistance", d: "We support your nominees with claim paperwork." },
          { t: "Yearly review", d: "We check if your cover still matches your life stage." },
        ]}
      />

      <CTA title="Protect your family in 10 minutes." text="Get a free quote from our insurance advisor today." />

      <Disclaimer text="Insurance is the subject matter of solicitation. Tax benefits are subject to changes in tax laws. Read the policy document and brochure carefully before concluding a sale. Ashlar Securities Pvt. Ltd. acts as a referrer / distributor of insurance products of its partner insurers." />
    </main>
  );
}