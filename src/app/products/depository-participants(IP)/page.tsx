// src/app/products/depository-participants/page.tsx
import type { Metadata } from "next";
import { Hero, Prose, Features, CTA, Disclaimer } from "@/components/parts";

export const metadata: Metadata = {
  title: "Depository Participant (DP) | Ashlar Securities",
  description:
    "Open a demat account with Ashlar — a SEBI-registered NSDL Depository Participant. Hold your shares, bonds and mutual fund units safely in electronic form.",
};

export default function DPPage() {
  return (
    <main>
      <Hero
        tag="Products / Depository Participant"
        title="Your securities,"
        highlight="held safely."
        text="A demat account is where your shares, bonds and mutual fund units live in electronic form. Ashlar is a registered Depository Participant with NSDL, offering a fully digital demat experience."
      />

      <Prose>
        <h2>What is a demat account?</h2>
        <p>
          A demat account — short for dematerialised account — holds your securities in electronic form,
          just like a bank account holds your money. When you buy shares, IPO allotments or bonds, they
          are credited to your demat. When you sell, they are debited. No paper certificates, no physical
          storage.
        </p>
        <p>
          In India, demat accounts are maintained by two depositories: <strong>NSDL</strong> and{" "}
          <strong>CDSL</strong>. Ashlar works as a Depository Participant (DP) with NSDL, connecting you
          to the depository and managing your demat account on your behalf.
        </p>

        <h2>Why every investor needs a demat</h2>
        <ul className="ml-6 list-disc space-y-2">
          <li><strong>Mandatory for trading.</strong> You cannot buy or sell shares without a demat account.</li>
          <li><strong>Safer than paper.</strong> No risk of loss, theft, forgery or damage.</li>
          <li><strong>One account, many assets.</strong> Hold equity, ETFs, mutual funds, bonds and sovereign gold bonds in one place.</li>
          <li><strong>Easy transfers.</strong> Move your holdings between accounts with simple online instructions.</li>
        </ul>

        <h2>Services we offer as your DP</h2>
        <ul className="ml-6 list-disc space-y-2">
          <li>Demat account opening with online Aadhaar-based eKYC</li>
          <li>Dematerialisation of physical share certificates</li>
          <li>Pledge and unpledge of securities for margin and loans</li>
          <li>Online nomination updates as per SEBI guidelines</li>
          <li>Account freezing and unfreezing for safety</li>
          <li>Holding statements, transaction statements and capital gain reports</li>
        </ul>

        <h2>Documents you will need</h2>
        <p>
          Keep these handy for a smooth, paperless onboarding: PAN Card, Aadhaar (linked to mobile),
          a cancelled cheque or bank statement, and a passport-size photo and signature.
        </p>
      </Prose>

      <Features
        heading="Why open your demat with Ashlar"
        items={[
          { t: "NSDL-registered DP", d: "DP ID: IN303921. SEBI Reg: IN-DP-2362016." },
          { t: "Online account opening", d: "Full Aadhaar eKYC, no branch visit needed." },
          { t: "Online nomination", d: "Add or update your nominee in a few clicks." },
          { t: "Pledge & unpledge", d: "Use holdings as margin with secure online pledge." },
          { t: "Transparent charges", d: "Clear AMC and transaction fees, shared upfront." },
          { t: "Trusted since 2001", d: "Two decades of safe depository services." },
        ]}
      />

      <CTA title="Open a free demat account today." text="Aadhaar-based eKYC. Zero paperwork. Ready to invest." />

      <Disclaimer text="Depository services are governed by the rules of SEBI and the respective depository. Annual maintenance, transaction and pledge charges apply as per our tariff schedule shared at account opening. Ashlar Securities Pvt. Ltd. — NSDL DP ID: IN303921, SEBI Reg: IN-DP-2362016." />
    </main>
  );
}