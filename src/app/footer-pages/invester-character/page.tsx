'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Download } from 'lucide-react';
import { useState } from 'react';
import Button from '@/components/ui/Button';

const investorTabs = [
  {
    id: 'depository',
    label: 'Investor Charter (Depository)',
    title: 'INVESTOR CHARTER',
    subtitle: 'Annexure A1',
    pdf: '/pdf/investor-charter-depository.pdf',
    content: (
      <>
        <h3 className="mb-4 text-xl font-semibold text-[#1A2B4B] underline">
          1. Vision
        </h3>

        <p className="mb-8 leading-8 text-gray-700">
          Towards making Indian Securities Market transparent, efficient and
          investor friendly by providing safe, reliable and trusted record
          keeping platform for investors to hold and transfer securities in
          dematerialized form.
        </p>

        <h3 className="mb-4 text-xl font-semibold text-[#1A2B4B] underline">
          2. Mission
        </h3>

        <ul className="space-y-4 leading-8 text-gray-700">
          <li>
            • To hold securities of investors in dematerialised form and
            facilitate its transfer while ensuring safekeeping of securities.
          </li>

          <li>
            • To provide timely and accurate information regarding holdings and
            transfer of securities.
          </li>

          <li>
            • To provide highest standards of investor education and awareness.
          </li>
        </ul>
      </>
    ),
  },

  {
    id: 'broker',
    label: 'Investor Charter (Stock Broker)',
    title: 'Investor Charter – Stock Brokers',
    subtitle: '',
    pdf: '/pdf/investor-charter-stock-broker.pdf',
    content: (
      <>
        <h3 className="mb-4 text-xl font-semibold text-[#1A2B4B] underline">
          VISION
        </h3>

        <p className="mb-8 leading-8 text-gray-700">
          To follow highest standards of ethics and compliances while
          facilitating trading by clients in securities in a fair and transparent
          manner.
        </p>

        <h3 className="mb-4 text-xl font-semibold text-[#1A2B4B] underline">
          MISSION
        </h3>

        <ul className="space-y-3 leading-8 text-gray-700">
          <li>
            • To provide high quality and dependable service through innovation
            and technology.
          </li>

          <li>
            • To establish and maintain relationship of trust and ethics with
            investors.
          </li>

          <li>
            • To observe highest standards of compliances and transparency.
          </li>

          <li>
            • To always keep protection of investors interest as goal while
            providing service.
          </li>

          <li>
            • To ensure confidentiality of investor information.
          </li>
        </ul>
      </>
    ),
  },

  {
    id: 'report',
    label: 'Annexure-B IG Report',
    title: 'Investor Grievance Report',
    subtitle: '',
    pdf: '/pdf/annexure-b-ig-report.pdf',
    content: (
      <>
        <h3 className="mb-4 text-xl font-semibold text-[#1A2B4B] underline">
          Investor Grievance Report
        </h3>

        <p className="leading-8 text-gray-700">
          Download the latest Annexure-B Investor Grievance report in PDF
          format.
        </p>
      </>
    ),
  },
];

export default function InvestorCharterPage() {
  const [activeTab, setActiveTab] = useState(investorTabs[0]);

  return (
    <div className="min-h-screen bg-[#f7f4ef] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid gap-10 lg:grid-cols-[320px_1fr]"
        >
          {/* LEFT SIDEBAR */}
          <div className="space-y-6">
            {investorTabs.map((tab) => {
              const active = activeTab.id === tab.id;

              return (
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  key={tab.id}
                  onClick={() => setActiveTab(tab)}
                  className={`w-full rounded-sm border px-6 py-6 text-left text-lg font-semibold transition-all duration-300 ${
                    active
                      ? 'border-[#b3261e] bg-[#f3e5df] text-[#b3261e]'
                      : 'border-[#e5d6cf] bg-[#eef3f6] text-[#1A2B4B] hover:bg-[#f5ece7]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <FileText size={22} />
                    <span>{tab.label}</span>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* RIGHT CONTENT */}
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
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <h1 className="text-4xl font-bold text-[#1A2B4B]">
                      {activeTab.title}
                    </h1>

                    {activeTab.subtitle && (
                      <span className="text-lg font-semibold text-[#1A2B4B]">
                        {activeTab.subtitle}
                      </span>
                    )}
                  </div>
                </div>

                <div>{activeTab.content}</div>

                {/* READ MORE BUTTON */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mt-12 flex justify-center"
                >
                  <a
                    href={activeTab.pdf}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      className="bg-[#c0392b] px-8 py-3 text-base font-semibold text-white hover:bg-[#a93226]"
                    >
                      <span className="flex items-center gap-2">
                        <Download size={18} />
                        Read More
                      </span>
                    </Button>
                  </a>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
}