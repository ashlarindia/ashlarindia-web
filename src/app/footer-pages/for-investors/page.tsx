"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  ShieldAlert,
  Landmark,
  BadgeAlert,
  Building2,
  AlertTriangle,
  FileWarning,
  ArrowUpRight,
} from "lucide-react";

import Button from "@/components/ui/Button";

const investorSections = [
  {
    id: "attention",
    title: "Attention Investors",
    icon: ShieldAlert,

    content: (
      <div className="space-y-5 text-[15px] leading-8 text-gray-700">
        <ul className="space-y-3">
          <li>
            • Beware of fixed / guaranteed return schemes and fake advisors.
          </li>

          <li>
            • Verify contract notes and exchange alerts regularly.
          </li>

          <li>
            • Keep your mobile number and email updated with your broker.
          </li>

          <li>
            • Trade only through SEBI registered intermediaries.
          </li>

          <li>
            • Never share OTP or login credentials with anyone.
          </li>
        </ul>
      </div>
    ),
  },

  {
    id: "arbitration",
    title: "Arbitration",
    icon: Landmark,

    content: (
      <div className="space-y-6 text-[15px] leading-8 text-gray-700">
        <p>
          Investor disputes with trading members are resolved through
          exchange arbitration mechanisms under SEBI regulations.
        </p>

        <div className="overflow-hidden rounded-sm border border-[#eadfd8]">
          <table className="w-full text-left">
            <thead className="bg-[#f5ece7] text-[#7d4b42]">
              <tr>
                <th className="px-5 py-3 text-sm font-semibold">
                  Regional Centre
                </th>

                <th className="px-5 py-3 text-sm font-semibold">
                  States Covered
                </th>
              </tr>
            </thead>

            <tbody className="bg-white text-sm">
              <tr className="border-t border-[#f1e6e0]">
                <td className="px-5 py-4 font-medium text-[#1A2B4B]">
                  Delhi
                </td>

                <td className="px-5 py-4">
                  Delhi, UP, Rajasthan & Haryana
                </td>
              </tr>

              <tr className="border-t border-[#f1e6e0]">
                <td className="px-5 py-4 font-medium text-[#1A2B4B]">
                  Mumbai
                </td>

                <td className="px-5 py-4">
                  Maharashtra & Gujarat
                </td>
              </tr>

              <tr className="border-t border-[#f1e6e0]">
                <td className="px-5 py-4 font-medium text-[#1A2B4B]">
                  Chennai
                </td>

                <td className="px-5 py-4">
                  Tamil Nadu & Karnataka
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
  },

  {
    id: "grievance",
    title: "Investor Grievance",
    icon: BadgeAlert,

    content: (
      <div className="space-y-6 text-[15px] leading-8 text-gray-700">
        <div className="rounded-sm border border-[#eadfd8] bg-[#faf7f4] p-6">
          <h3 className="mb-4 text-lg font-semibold text-[#1A2B4B]">
            Compliance Officer
          </h3>

          <div className="space-y-2">
            <p>
              <span className="font-medium text-[#1A2B4B]">
                Name:
              </span>{" "}
              Mr. Deepak Khandelwal
            </p>

            <p>
              <span className="font-medium text-[#1A2B4B]">
                Email:
              </span>{" "}
              compliance@ashlarindia.com
            </p>

            <p>
              <span className="font-medium text-[#1A2B4B]">
                Contact:
              </span>{" "}
              +91-120-6633200
            </p>
          </div>
        </div>

        <p>
          Complaints can also be escalated through NSE, BSE, MCX or
          SEBI SCORES platform.
        </p>
      </div>
    ),
  },

  {
    id: "bank",
    title: "Bank Details",
    icon: Building2,

    content: (
      <div className="overflow-hidden rounded-sm border border-[#eadfd8]">
        <table className="w-full text-left">
          <thead className="bg-[#f5ece7] text-[#7d4b42]">
            <tr>
              <th className="px-5 py-3 text-sm font-semibold">
                Field
              </th>

              <th className="px-5 py-3 text-sm font-semibold">
                Details
              </th>
            </tr>
          </thead>

          <tbody className="bg-white text-sm text-gray-700">
            <tr className="border-t border-[#f1e6e0]">
              <td className="px-5 py-4 font-medium text-[#1A2B4B]">
                Bank Name
              </td>

              <td className="px-5 py-4">
                HDFC Bank Ltd.
              </td>
            </tr>

            <tr className="border-t border-[#f1e6e0]">
              <td className="px-5 py-4 font-medium text-[#1A2B4B]">
                Branch
              </td>

              <td className="px-5 py-4">
                K.G Marg, New Delhi
              </td>
            </tr>

            <tr className="border-t border-[#f1e6e0]">
              <td className="px-5 py-4 font-medium text-[#1A2B4B]">
                Account Name
              </td>

              <td className="px-5 py-4">
                ASHLAR SECURITIES PVT. LTD
              </td>
            </tr>

            <tr className="border-t border-[#f1e6e0]">
              <td className="px-5 py-4 font-medium text-[#1A2B4B]">
                IFSC Code
              </td>

              <td className="px-5 py-4">
                HDFC0000003
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },

  {
    id: "risk",
    title: "Risk Disclosure",
    icon: AlertTriangle,

    content: (
      <div className="rounded-sm border border-amber-100 bg-amber-50 p-6">
        <h3 className="mb-4 text-lg font-semibold text-amber-700">
          Derivatives Risk Disclosure
        </h3>

        <ul className="space-y-3 text-[15px] leading-7 text-gray-700">
          <li>
            • Trading in derivatives involves substantial risk of loss.
          </li>

          <li>
            • Market volatility can significantly impact capital.
          </li>

          <li>
            • Transaction costs reduce overall profitability.
          </li>

          <li>
            • Understand all product risks before trading.
          </li>
        </ul>
      </div>
    ),
  },

  {
    id: "advisory",
    title: "Advisory",
    icon: FileWarning,

    content: (
      <div className="space-y-5 text-[15px] leading-8 text-gray-700">
        <p>
          Investors are advised not to trust fake advisors, unauthorised
          trading calls or guaranteed return schemes.
        </p>

        <div className="rounded-sm border border-[#eadfd8] bg-[#faf7f4] p-5">
          <p className="font-medium text-[#b3261e]">
            Always verify SEBI registration before investing.
          </p>
        </div>

        <Button
          href="/pdf/advisory-for-investor.pdf"
          variant="secondary"
          size="md"
          className="border-[#d8cac2] bg-white text-[#1A2B4B] hover:border-[#b3261e] hover:bg-[#faf4f1]"
        >
          <span className="flex items-center gap-2">
            Download PDF
            <ArrowUpRight size={15} />
          </span>
        </Button>
      </div>
    ),
  },
];

export default function InvestorsInformationPage() {
  const [activeTab, setActiveTab] = useState(
    investorSections[0]
  );

  return (
    <div className="min-h-screen bg-[#f7f4ef] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* HERO */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-14 text-center"
        >
          <div className="mb-4 inline-flex items-center rounded-full border border-[#eadfd8] bg-white px-5 py-2 text-sm font-medium text-[#b3261e] shadow-sm">
            Investor Protection & Awareness
          </div>

          <h1 className="text-4xl font-bold text-[#1A2B4B] md:text-5xl">
            Investors Information
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-gray-500">
            Important investor guidelines, disclosures, grievance
            mechanisms and compliance information.
          </p>
        </motion.div>

        {/* MAIN GRID */}

        <div className="grid gap-10 lg:grid-cols-[320px_1fr]">

          {/* SIDEBAR */}

          <div className="space-y-5">

            {investorSections.map((tab) => {
              const Icon = tab.icon;

              const active = activeTab.id === tab.id;

              return (
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  key={tab.id}
                  onClick={() => setActiveTab(tab)}
                  className={`w-full rounded-sm border px-6 py-6 text-left text-lg font-semibold transition-all duration-300 ${
                    active
                      ? "border-[#b3261e] bg-[#f3e5df] text-[#b3261e]"
                      : "border-[#e5d6cf] bg-[#eef3f6] text-[#1A2B4B] hover:bg-[#f5ece7]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon size={22} />
                    <span>{tab.title}</span>
                  </div>
                </motion.button>
              );
            })}

          </div>

          {/* CONTENT */}

          <div className="rounded-sm border border-[#eadfd8] bg-white p-8 shadow-sm">

            <AnimatePresence mode="wait">

              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -25 }}
                transition={{ duration: 0.35 }}
              >

                <div className="mb-10 border-b border-[#e8d9d1] pb-5">
                  <div className="flex items-center gap-4">

                    <div className="flex h-14 w-14 items-center justify-center rounded-sm bg-[#f5ece7]">
                      <activeTab.icon
                        size={24}
                        className="text-[#b3261e]"
                      />
                    </div>

                    <div>
                      <h2 className="text-3xl font-bold text-[#1A2B4B]">
                        {activeTab.title}
                      </h2>

                      <p className="mt-1 text-sm text-gray-500">
                        Investor awareness & compliance information
                      </p>
                    </div>

                  </div>
                </div>

                {activeTab.content}

              </motion.div>

            </AnimatePresence>

          </div>

        </div>
      </div>
    </div>
  );
}