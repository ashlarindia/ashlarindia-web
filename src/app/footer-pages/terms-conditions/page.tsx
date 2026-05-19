"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  "General Terms",
  "Security & Password",
  "Online Trading",
  "Demat Account",
];

export default function TermsConditionsPage() {
  const [activeSection, setActiveSection] = useState(0);

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
            Terms &{" "}
            <span className="text-[#d63b34]">
              Conditions
            </span>
          </h1>

          <div className="w-40 h-[2px] bg-gray-300 mx-auto mt-5"></div>

          <p className="mt-5 text-gray-600 text-[15px]">
            Important terms governing the use of Ashlar
            Securities trading services.
          </p>
        </motion.div>
      </section>

      {/* Main Layout */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-[280px_1fr] gap-8">
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            {sections.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveSection(index)}
                className={`w-full px-5 py-4 text-left font-semibold text-[15px] transition-all duration-300 border ${
                  activeSection === index
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
                key={activeSection}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -25 }}
                transition={{ duration: 0.35 }}
                className="p-6 md:p-10"
              >
                {/* Heading */}
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-[#243b5a]">
                    {sections[activeSection]}
                  </h2>

                  <div className="w-full h-[1px] bg-gray-200 mt-5 mb-8"></div>
                </div>

                {/* GENERAL TERMS */}
                {activeSection === 0 && (
                  <div className="space-y-6 text-gray-700 leading-8 text-[15px]">
                    <p>
                      These terms apply to all users accessing
                      trading and investment services provided by
                      Ashlar Securities Pvt. Ltd.
                    </p>

                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        Clients are responsible for their own
                        investment decisions.
                      </li>

                      <li>
                        Market investments are subject to risk.
                      </li>

                      <li>
                        Information on the website is for
                        reference only.
                      </li>

                      <li>
                        Terms may change without prior notice.
                      </li>
                    </ul>

                    <a
                      href="/pdfs/Terms-and-Conditions.pdf"
                      target="_blank"
                      className="inline-block bg-[#d63b34] hover:bg-[#b92d27] text-white px-5 py-3 transition-all duration-300"
                    >
                      Download Full Terms
                    </a>
                  </div>
                )}

                {/* SECURITY */}
                {activeSection === 1 && (
                  <div className="space-y-6 text-gray-700 leading-8 text-[15px]">
                    <p>
                      Clients are responsible for maintaining
                      the confidentiality of login credentials
                      and passwords.
                    </p>

                    <ul className="list-disc pl-6 space-y-2">
                      <li>Change password after first login.</li>

                      <li>
                        Do not share passwords or OTPs.
                      </li>

                      <li>
                        Report unauthorized access immediately.
                      </li>

                      <li>
                        Logout after every session.
                      </li>
                    </ul>

                    <div className="bg-[#f9f9f9] border border-gray-200 p-5">
                      <p>
                        Ashlar is not liable for misuse caused
                        due to password sharing or negligence.
                      </p>
                    </div>
                  </div>
                )}

                {/* ONLINE TRADING */}
                {activeSection === 2 && (
                  <div className="space-y-6 text-gray-700 leading-8 text-[15px]">
                    <p>
                      Online trading services are available
                      through Ashlar authorized platforms and
                      applications.
                    </p>

                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        Orders placed using login credentials
                        are treated as valid.
                      </li>

                      <li>
                        Internet or technical failures may
                        impact execution.
                      </li>

                      <li>
                        Clients should monitor positions
                        regularly.
                      </li>

                      <li>
                        RMS rules apply to all trades.
                      </li>
                    </ul>
                  </div>
                )}

                {/* DEMAT ACCOUNT */}
                {activeSection === 3 && (
                  <div className="space-y-6 text-gray-700 leading-8 text-[15px]">
                    <p>
                      Clients must maintain a valid Demat
                      account linked with their trading account.
                    </p>

                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        Securities are credited/debited through
                        Demat accounts.
                      </li>

                      <li>
                        Depository guidelines apply to all
                        holdings and transfers.
                      </li>

                      <li>
                        Clients must keep account details
                        updated.
                      </li>
                    </ul>
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