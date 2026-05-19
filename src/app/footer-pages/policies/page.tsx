"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const policyTabs = [
  "RMS & Margin Policy",
  "Surveillance Policy",
  "Investor Grievance Policy",
  "Account Freeze Policy",
];

export default function PoliciesPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <main className="min-h-screen bg-[#f5f5f5] pb-20">
      {/* Hero */}
      <section className="pt-28 pb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#243b5a]">
            Company <span className="text-[#d63b34]">Policies</span>
          </h1>

          <div className="w-40 h-[2px] bg-gray-300 mx-auto mt-5"></div>
        </motion.div>
      </section>

      {/* Layout */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-[280px_1fr] gap-8">
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            {policyTabs.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`w-full px-5 py-4 text-left font-semibold text-[15px] transition-all duration-300 border ${
                  activeTab === index
                    ? "bg-[#ff8d8d] text-white border-[#ff8d8d]"
                    : "bg-[#dff1fb] border-transparent hover:bg-[#ffd4d4]"
                }`}
              >
                {item}
              </button>
            ))}
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white border border-gray-200 shadow-sm"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -25 }}
                transition={{ duration: 0.35 }}
                className="p-6 md:p-10"
              >
                {/* Heading */}
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-[#243b5a]">
                    {policyTabs[activeTab]}
                  </h2>

                  <div className="w-full h-[1px] bg-gray-200 mt-5 mb-8"></div>
                </div>

                {/* RMS POLICY */}
                {activeTab === 0 && (
                  <div className="space-y-6 text-gray-700 leading-8 text-[15px]">
                    <p>
                      Ashlar follows a strong Risk Management System (RMS)
                      to monitor trading exposure, margins and client
                      positions.
                    </p>

                    <ul className="list-disc pl-6 space-y-2">
                      <li>Monitoring of margin and MTM losses.</li>
                      <li>Auto square-off in case of shortfall.</li>
                      <li>Trading limits based on available balance.</li>
                      <li>Higher risk stocks may have restrictions.</li>
                    </ul>

                    <p>
                      RMS rules may change during volatile market
                      conditions without prior notice.
                    </p>

                    <a
                      href="/pdfs/RMS-Margin-Policy.pdf"
                      target="_blank"
                      className="inline-block bg-[#d63b34] hover:bg-[#b92d27] text-white px-5 py-3 transition-all duration-300"
                    >
                      Download Full Policy
                    </a>
                  </div>
                )}

                {/* SURVEILLANCE POLICY */}
                {activeTab === 1 && (
                  <div className="space-y-6 text-gray-700 leading-8 text-[15px]">
                    <p>
                      The surveillance mechanism helps identify unusual
                      trading activities and protects market integrity.
                    </p>

                    <ul className="list-disc pl-6 space-y-2">
                      <li>Circular Trading Monitoring</li>
                      <li>Pump & Dump Detection</li>
                      <li>Wash Trade Monitoring</li>
                      <li>Front Running Checks</li>
                    </ul>

                    <p>
                      Suspicious activities may lead to temporary
                      restrictions or regulatory reporting.
                    </p>

                    <a
                      href="/pdfs/Surveillance-Policy.pdf"
                      target="_blank"
                      className="inline-block bg-[#d63b34] hover:bg-[#b92d27] text-white px-5 py-3 transition-all duration-300"
                    >
                      Download Full Policy
                    </a>
                  </div>
                )}

                {/* INVESTOR GRIEVANCE */}
                {activeTab === 2 && (
                  <div className="space-y-6 text-gray-700 leading-8 text-[15px]">
                    <p>
                      Ashlar Securities is committed to resolving investor
                      complaints quickly and transparently.
                    </p>

                    <ul className="list-disc pl-6 space-y-2">
                      <li>Dedicated grievance support team.</li>
                      <li>Complaint tracking and escalation process.</li>
                      <li>Resolution within regulatory timelines.</li>
                      <li>SEBI SCORES escalation support available.</li>
                    </ul>

                    <div className="bg-[#f9f9f9] border border-gray-200 p-5">
                      <p>
                        <strong>Email:</strong>{" "}
                        investorcell@ashlarindia.com
                      </p>

                      <p>
                        <strong>Phone:</strong> 0120-6633229
                      </p>
                    </div>

                    <a
                      href="/pdfs/Investor-Grievance-Policy.pdf"
                      target="_blank"
                      className="inline-block bg-[#d63b34] hover:bg-[#b92d27] text-white px-5 py-3 transition-all duration-300"
                    >
                      Download Full Policy
                    </a>
                  </div>
                )}

                {/* ACCOUNT FREEZE */}
                {activeTab === 3 && (
                  <div className="space-y-6 text-gray-700 leading-8 text-[15px]">
                    <p>
                      Clients can request temporary blocking or freezing
                      of their trading account in case of suspicious
                      activity.
                    </p>

                    <ul className="list-disc pl-6 space-y-2">
                      <li>Request through email or support call.</li>
                      <li>Quick action during trading hours.</li>
                      <li>Protection against unauthorized access.</li>
                    </ul>

                    <div className="bg-[#f9f9f9] border border-gray-200 p-5">
                      <p>
                        <strong>Email:</strong> care@ashlarindia.com
                      </p>

                      <p>
                        <strong>Support:</strong> 0120-6633205
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </main>
  );
}