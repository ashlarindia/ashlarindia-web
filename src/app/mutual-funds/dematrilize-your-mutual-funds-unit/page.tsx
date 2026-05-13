// src/app/mutual-funds/dematerialize-your-mutual-funds-unit/page.tsx
import type { Metadata } from "next";
import { Hero, Prose, Features, CTA, Disclaimer } from "@/components/parts";

export const metadata: Metadata = {
  title: "Dematerialize Your Mutual Fund Units | Ashlar Securities",
  description:
    "Convert your physical or statement-form mutual fund units into demat form through Ashlar. Track all your investments in one place with NSDL.",
};

export default function DematMfPage() {
  return (
    <main>
      <Hero
        tag="Mutual Funds / Dematerialize Units"
        title="Bring your mutual funds"
        highlight="into one demat."
        text="Convert your physical or Statement of Account (SoA) mutual fund units into demat form. See all your investments — stocks, bonds and mutual funds — in a single place."
      />

      <Prose>
        <h2>Why dematerialize your mutual fund units?</h2>
        <p>
          If you have bought mutual funds directly from AMCs over the years, you probably have units
          spread across many folios in Statement of Account (SoA) form. Dematerialising means moving
          those units into your demat account, where they sit alongside your shares and bonds.
        </p>
        <p>
          It is a simple, one-time process — but it makes life much easier going forward.
        </p>

        <h2>Benefits of holding mutual funds in demat</h2>
        <ul className="ml-6 list-disc space-y-2">
          <li><strong>Single view.</strong> All your investments — stocks, bonds, ETFs, mutual funds — in one place.</li>
          <li><strong>Easy nomination.</strong> One nominee covers all units, instead of one per folio.</li>
          <li><strong>Simpler transmission.</strong> If something happens to you, your family deals with one demat account, not a dozen folios.</li>
          <li><strong>No paperwork on redemption.</strong> Sell units directly through the exchange just like a stock.</li>
          <li><strong>Easy pledge.</strong> Use your mutual fund holdings as collateral for loans against securities.</li>
        </ul>

        <h2>How the process works</h2>
        <ol className="ml-6 list-decimal space-y-2">
          <li>Fill the Conversion Request Form (CRF) for the units you want to convert.</li>
          <li>Attach your latest Statement of Account from the AMC or registrar.</li>
          <li>Submit the form to Ashlar as your Depository Participant.</li>
          <li>Ashlar forwards your request to NSDL.</li>
          <li>Once verified, units are credited to your demat account — usually within 7 to 15 working days.</li>
        </ol>

        <h2>Documents you will need</h2>
        <p>
          Keep these ready: a filled and signed Conversion Request Form (one per AMC), your latest SoA
          showing the units, your PAN, and your demat client ID. Our team will help you with the
          paperwork at every step.
        </p>
      </Prose>

      <Features
        heading="Why use Ashlar for demat conversion"
        items={[
          { t: "NSDL-registered DP", d: "DP ID: IN303921 — direct connection to the depository." },
          { t: "Hand-held support", d: "We help you fill, verify and submit the forms." },
          { t: "All AMCs supported", d: "Convert units from any Indian mutual fund house." },
          { t: "Status tracking", d: "Updates as your conversion moves through the system." },
          { t: "Transparent charges", d: "Clear conversion fees, shared upfront." },
          { t: "One demat for all", d: "Hold equity, bonds and MFs in a single account." },
        ]}
      />

      <CTA title="Bring all your mutual funds under one roof." text="Get in touch and our team will guide you through demat conversion." />

      <Disclaimer text="Dematerialisation is governed by the rules of SEBI and NSDL. Conversion charges apply as per the tariff schedule. Ashlar Securities Pvt. Ltd. — NSDL DP ID: IN303921, SEBI Reg: IN-DP-2362016." />
    </main>
  );
}