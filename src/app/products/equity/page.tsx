// src/app/products/equity/page.tsx

import type { Metadata } from "next";
import {
  Hero,
  Prose,
  Features,
  CTA,
  Disclaimer,
} from "@/components/parts";

export const metadata: Metadata = {
  title: "Equity Trading | Ashlar Securities",
  description:
    "Trade equities online with Ashlar Securities. Open a secure trading and demat account for investing in NSE and BSE listed companies.",
};

export default function EquityPage() {
  return (
    <main>

      <Hero
        tag="Products / Equity"
        title="Own a piece of India's"
        highlight="growth story."
        text="Invest in India’s leading companies through secure, fast, and reliable equity trading services with Ashlar Securities."
      />

      <Prose>

        <h2>What is Equity Trading?</h2>

        <p>
          Equity trading means buying and selling shares of listed
          companies through stock exchanges such as NSE and BSE.
        </p>

        <p>
          When you purchase shares of a company, you become a partial
          owner of that business. As the company grows, the value of
          your investment may increase over time.
        </p>

        <p>
          Investors may also receive dividends, which are a share of
          the company’s profits distributed to shareholders.
        </p>

        <h2>Why Invest in Equities?</h2>

        <p>
          Equity investments are considered one of the most effective
          ways to build long-term wealth.
        </p>

        <ul className="ml-6 list-disc space-y-3">

          <li>
            <strong>Long-Term Growth:</strong> Benefit from potential
            capital appreciation as companies expand.
          </li>

          <li>
            <strong>Dividend Income:</strong> Earn regular dividends
            from profitable companies.
          </li>

          <li>
            <strong>Liquidity:</strong> Buy and sell shares easily
            during market hours.
          </li>

          <li>
            <strong>Flexibility:</strong> Choose from different sectors
            and investment opportunities.
          </li>

          <li>
            <strong>Transparency:</strong> Trade on regulated stock
            exchanges with secure systems.
          </li>

        </ul>

        <h2>Why Choose Ashlar?</h2>

        <p>
          Ashlar Securities provides reliable and technology-driven
          equity trading solutions designed for both beginners and
          experienced investors.
        </p>

        <p>
          Our advanced trading platforms, research support, and
          customer-focused services help clients trade with confidence.
        </p>

      </Prose>

      <Features
        heading="Your Ashlar Equity Account"
        items={[
          {
            t: "NSE & BSE Access",
            d: "Trade seamlessly across India’s major stock exchanges.",
          },

          {
            t: "Fast Order Execution",
            d: "Experience secure and smooth trading with advanced technology.",
          },

          {
            t: "Advanced Market Tools",
            d: "Access professional charts, research insights, and real-time market data.",
          },

          {
            t: "Secure Demat Services",
            d: "Safely hold and manage your investments electronically.",
          },

          {
            t: "Dedicated Support",
            d: "Get professional assistance from our experienced support team.",
          },

          {
            t: "Transparent Brokerage",
            d: "Enjoy fair and competitive brokerage services with complete transparency.",
          },
        ]}
      />

      <CTA
        title="Open Your Equity Account Today"
        text="Simple Aadhaar-based eKYC process. Secure, paperless, and ready in minutes."
      />

      <Disclaimer
        text="Investments in securities market are subject to market risks. Read all related documents carefully before investing. Ashlar Securities Pvt. Ltd. | SEBI Registration No.: INZ000203739 | NSE: 13718 | BSE: 3302."
      />

    </main>
  );
}