"use client";

import { useId, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import {
  PageHero,
  Section,
} from "@/components/ui";

const faqs = [
  {
    q: "How long does account opening take?",
    a: "Most accounts are activated within 24 to 48 business hours after document verification is complete. If your KYC is already verified through another SEBI-registered intermediary, activation is often same-day.",
  },
  {
    q: "Can I trade using the mobile app?",
    a: "Yes. The Ashlar mobile app supports equity, derivatives, commodities, and currency trading, along with mutual fund investments. Available on both iOS and Android.",
  },
  {
    q: "Is KYC mandatory?",
    a: "Yes, KYC verification is mandatory before trading. This is a SEBI requirement and applies to all stock brokers in India. KYC is a one-time exercise — once completed through a SEBI-registered intermediary, you don't need to repeat it.",
  },
  {
    q: "What are the brokerage charges?",
    a: "We charge a flat fee per executed order across equity, F&O, and commodities. Delivery trades are free. Visit our calculators page for a detailed breakdown of charges including STT, GST, and exchange transaction fees.",
  },
  {
    q: "How do I withdraw funds from my trading account?",
    a: "Funds can be withdrawn through the web platform or mobile app under 'Funds & Banking'. Withdrawals are processed within one business day to your registered bank account, subject to SEBI's payout cycle rules.",
  },
  {
    q: "Can NRIs open an account with Ashlar?",
    a: "Yes, we support NRI account opening with PIS (Portfolio Investment Scheme) integration. The documentation is more extensive than a resident account and includes PAN, passport, visa, and overseas address proof.",
  },
];

interface FAQItemProps {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

function FAQItem({ question, answer, defaultOpen = false }: FAQItemProps) {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId();

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface transition-colors duration-300 hover:border-border-strong">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={`${id}-panel`}
        className="flex w-full items-center justify-between gap-4 p-5 text-left transition-colors hover:bg-surface-subtle focus-visible:outline-none focus-visible:bg-surface-subtle sm:p-6"
      >
        <h3 className="font-display text-base font-medium leading-snug tracking-tight text-ink-900 sm:text-lg">
          {question}
        </h3>
        <ChevronDown
          size={18}
          className={`shrink-0 text-ink-500 transition-transform duration-300 ease-out-expo ${
            open ? "-rotate-180" : ""
          }`}
          aria-hidden="true"
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`${id}-panel`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
              opacity: { duration: 0.2 },
            }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 sm:px-6 sm:pb-6">
              <div className="border-t border-border-subtle pt-4">
                <p className="text-[15px] leading-relaxed text-ink-600">{answer}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Help & Support"
        title="Frequently asked questions"
        description="Quick answers about accounts, KYC, charges, platforms, and the most common things investors ask."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Knowledge", href: "/knowledge" },
          { label: "FAQs" },
        ]}
      />

      <Section>
        <div className="mx-auto max-w-3xl space-y-3">
          {faqs.map((faq, idx) => (
            <FAQItem
              key={faq.q}
              question={faq.q}
              answer={faq.a}
              defaultOpen={idx === 0}
            />
          ))}
        </div>
      </Section>
    </main>
  );
}