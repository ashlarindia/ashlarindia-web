// src/app/products/bonds/page.tsx
import type { Metadata } from "next";
import { Hero, Prose, Features, CTA, Disclaimer } from "@/components/parts";

export const metadata: Metadata = {
  title: "Bonds | Ashlar Securities",
  description:
    "Invest in government bonds, corporate bonds, tax-free bonds and NCDs through Ashlar. Earn steady, predictable income from a wide range of fixed-income options.",
};

export default function BondsPage() {
  return (
    <main>
      <Hero
        tag="Products / Bonds"
        title="Steady income,"
        highlight="predictable returns."
        text="Bonds give your portfolio the calm that equity alone cannot. Pick from government bonds, corporate bonds, tax-free bonds and NCDs — all through your Ashlar account."
      />

      <Prose>
        <h2>What is a bond?</h2>
        <p>
          A bond is simply a loan you give to a government or a company. In return, the issuer pays you
          regular interest, called the coupon, and returns your full principal on the maturity date. Bonds
          are the calm, predictable cousin of stocks — they do not shoot up overnight, but they do not
          crash overnight either.
        </p>
        <p>
          For most investors, bonds play three roles. They generate steady income. They protect your
          capital when stock markets are weak. And they balance the ups and downs of an equity-heavy
          portfolio. Retirees, conservative investors and anyone planning for a near-term goal will find
          bonds useful.
        </p>

        <h2>Types of bonds you can invest in</h2>
        <ul className="ml-6 list-disc space-y-2">
          <li><strong>Government Securities (G-Secs).</strong> Backed by the Government of India. The safest fixed income you can buy.</li>
          <li><strong>State Development Loans.</strong> Issued by state governments — sovereign-grade safety with slightly better yields.</li>
          <li><strong>Corporate Bonds.</strong> Issued by Indian companies. Higher yields than G-Secs, with credit ratings to guide you.</li>
          <li><strong>Tax-Free Bonds.</strong> Issued by select PSUs. Interest is fully exempt from income tax — ideal for higher tax brackets.</li>
          <li><strong>NCDs (Non-Convertible Debentures).</strong> Fixed-tenure debentures from companies, offering attractive coupon rates.</li>
        </ul>

        <h2>Things to check before you invest</h2>
        <p>
          Always look at the <strong>credit rating</strong> first — AAA and AA are considered safe; lower
          ratings carry more risk for higher returns. Check the <strong>tenure</strong> and make sure it
          matches your goal. Look at <strong>interest payment frequency</strong> — annual, half-yearly or
          cumulative. And remember that bond prices move with interest rates, so if you sell before
          maturity, you may get more or less than what you paid.
        </p>
      </Prose>

      <Features
        heading="Why invest in bonds with Ashlar"
        items={[
          { t: "Predictable income", d: "Fixed coupons paid on schedule — plan your cash flows easily." },
          { t: "Capital protection", d: "Principal returned at maturity by the issuer." },
          { t: "Portfolio balance", d: "Reduces risk by adding an asset class that behaves differently from stocks." },
          { t: "Curated offerings", d: "Rated, exchange-traded bonds from reputed issuers only." },
          { t: "All tenures", d: "Short-term to 10-year-plus — match a bond to every goal." },
          { t: "Expert guidance", d: "Our team helps you balance safety, yield and tenure." },
        ]}
      />

      <CTA title="Build the stable side of your portfolio." text="Talk to our fixed-income team and explore bond options today." />

      <Disclaimer text="Bond prices are subject to interest rate and credit risk. Returns are not guaranteed except on hold-to-maturity. Read the offer document carefully before investing." />
    </main>
  );
}