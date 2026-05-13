// src/app/products/corporate-fds/page.tsx
import type { Metadata } from "next";
import { Hero, Prose, Features, CTA, Disclaimer } from "@/components/parts";

export const metadata: Metadata = {
  title: "Corporate Fixed Deposits | Ashlar Securities",
  description:
    "Invest in highly-rated Corporate FDs from leading Indian NBFCs and HFCs through Ashlar. Earn higher interest than bank FDs with curated AAA-rated options.",
};

export default function CorporateFdsPage() {
  return (
    <main>
      <Hero
        tag="Products / Corporate FDs"
        title="Higher returns,"
        highlight="same simplicity."
        text="Corporate Fixed Deposits from leading NBFCs and Housing Finance Companies typically offer better interest than bank FDs — with the same fixed-tenure simplicity you already understand."
      />

      <Prose>
        <h2>What is a Corporate FD?</h2>
        <p>
          A Corporate Fixed Deposit works just like a bank FD — you deposit a lump sum for a fixed tenure
          and earn a fixed interest rate. The difference is that the deposit is held by a company, usually
          an NBFC or a Housing Finance Company, instead of a bank.
        </p>
        <p>
          Because these companies have to compete with banks for your savings, they usually offer slightly
          higher interest rates. The trade-off is a little more credit risk than a bank FD — which is why
          <strong> credit rating matters</strong>. Stick to FDs rated AAA or AA by CRISIL, ICRA or CARE, and
          you get a strong yield with manageable risk.
        </p>

        <h2>Bank FD vs Corporate FD</h2>
        <ul className="ml-6 list-disc space-y-2">
          <li><strong>Interest rate.</strong> Corporate FDs usually pay 1% to 2% more than bank FDs.</li>
          <li><strong>Tenure.</strong> Both offer 1 to 5 year options, often with senior citizen benefits.</li>
          <li><strong>Safety net.</strong> Bank FDs are covered by DICGC up to ₹5 lakh; Corporate FDs are not, so credit rating becomes the main safeguard.</li>
          <li><strong>Premature withdrawal.</strong> Allowed in both, usually after a small lock-in period.</li>
        </ul>

        <h2>Who should consider Corporate FDs?</h2>
        <p>
          Corporate FDs suit investors who want predictable income, are comfortable holding the deposit for
          its full tenure, and prefer a yield better than what banks offer. Retirees, conservative savers
          and anyone parking funds for a 2 to 5 year goal can find them useful. Always spread your money
          across two or three good issuers instead of locking everything into one.
        </p>
      </Prose>

      <Features
        heading="Why book Corporate FDs through Ashlar"
        items={[
          { t: "AAA & AA-rated only", d: "We list FDs from highly-rated issuers to keep risk in check." },
          { t: "Best-in-market rates", d: "Compare live rates from leading NBFCs and HFCs." },
          { t: "Flexible tenures", d: "Choose from 12, 24, 36, 48 and 60-month options." },
          { t: "Income or cumulative", d: "Pick monthly, quarterly or annual payouts." },
          { t: "Senior citizen rates", d: "Extra interest for senior citizens on most FDs." },
          { t: "Paperless booking", d: "Online form, eKYC and digital signature — no branch visits." },
        ]}
      />

      <CTA title="Earn more on your safe money." text="Talk to our fixed-income desk for the best FD options today." />

      <Disclaimer text="Corporate Fixed Deposits are subject to credit risk and are not covered by DICGC insurance. Interest rates and credit ratings can change over time. Read the offer document and credit rating rationale carefully before investing." />
    </main>
  );
}