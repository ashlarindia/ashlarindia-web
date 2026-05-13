// src/app/login-options/payment-gateway/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { Hero, Prose, Features, Disclaimer } from "@/components/parts";

export const metadata: Metadata = {
  title: "Payment Gateway | Ashlar Securities",
  description:
    "Transfer funds to your Ashlar trading account instantly using UPI, net banking or NEFT. Safe, fast and available 24x7.",
};

export default function PaymentGatewayPage() {
  return (
    <main>
      <Hero
        tag="Login Option / Payment Gateway"
        title="Add funds"
        highlight="in seconds."
        text="Top up your Ashlar trading account anytime using UPI, net banking or NEFT. Money reflects in your account quickly, so you never miss a market opportunity."
      />

      <section className="bg-white px-6 py-14 md:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-2xl font-bold text-[#0A1F44] md:text-3xl">
            Open the payment gateway
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600">
            Log in with your client ID to start a fund transfer.
          </p>
          <p className="mt-8">
            <Link
              href="https://www.ashlarindia.com/fund-transfer"
              className="rounded-full bg-[#1E5EFF] px-7 py-3 text-sm font-semibold text-white"
            >
              Transfer Funds →
            </Link>
          </p>
        </div>
      </section>

      <Prose alt>
        <h2>Ways to transfer funds</h2>
        <ul className="ml-6 list-disc space-y-2">
          <li><strong>UPI.</strong> Fastest method — money reflects almost instantly. Use any UPI app like Google Pay, PhonePe or BHIM.</li>
          <li><strong>Net banking.</strong> Direct transfer from your registered bank account. Reflects within minutes during banking hours.</li>
          <li><strong>NEFT / RTGS.</strong> Useful for larger amounts. May take a few hours depending on banking hours.</li>
          <li><strong>IMPS.</strong> Available 24x7 for smaller transfers.</li>
        </ul>

        <h2>Important things to remember</h2>
        <ul className="ml-6 list-disc space-y-2">
          <li>Always transfer funds <strong>only from your own registered bank account</strong>. Third-party transfers are not allowed under SEBI rules.</li>
          <li>Cheque deposits are not accepted for margin — they are processed on a delayed basis.</li>
          <li>For withdrawals, raise a payout request from the trading platform — funds will land in your registered bank account on the next working day.</li>
          <li>Never share your login credentials, OTP or UPI PIN with anyone — including someone claiming to be from Ashlar.</li>
        </ul>
      </Prose>

      <Features
        heading="What to check after every transfer"
        items={[
          { t: "Confirmation message", d: "You should get an SMS and email once funds are credited." },
          { t: "Ledger entry", d: "Check the Back Office ledger to see the credit reflected." },
          { t: "Available margin", d: "Trading platform shows updated margin after credit." },
          { t: "Bank statement", d: "Cross-check your bank for the debit entry." },
          { t: "Refund if any", d: "Failed transfers usually reverse to your bank within 24 hours." },
          { t: "Help", d: "Email fundsout@ashlarindia.com or call 0120-6633205." },
        ]}
      />

      <Disclaimer text="As per SEBI guidelines, funds must be transferred only from a bank account registered with Ashlar in your name. Third-party transfers will be returned and may attract a penalty. Ashlar Securities Pvt. Ltd. — SEBI Reg: INZ000203739." />
    </main>
  );
}