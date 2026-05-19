"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  "Overview",
  "Personal Information",
  "Third-Party Advertisement",
  "Cookies Policy",
];

export default function PrivacyPolicyPage() {
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
            Privacy{" "}
            <span className="text-[#d63b34]">
              Policy
            </span>
          </h1>

          <div className="w-40 h-[2px] bg-gray-300 mx-auto mt-5"></div>

          <p className="mt-5 text-gray-600 text-[15px]">
            Your privacy and data protection are important to us.
          </p>
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

                {/* OVERVIEW */}
                {activeSection === 0 && (
                  <div className="space-y-6 text-gray-700 leading-8 text-[15px]">
                    <p>
                      Ashlar Securities respects your privacy and is
                      committed to protecting your personal information
                      against unauthorized access or disclosure.
                    </p>

                    <p>
                      This privacy policy applies to all services and
                      information collected through the Ashlar website.
                    </p>

                    <div className="bg-[#f9f9f9] border border-gray-200 p-5">
                      <p>
                        We may update this policy from time to time to
                        comply with legal or operational requirements.
                      </p>
                    </div>
                  </div>
                )}

                {/* PERSONAL INFORMATION */}
                {activeSection === 1 && (
                  <div className="space-y-6 text-gray-700 leading-8 text-[15px]">
                    <p>
                      Personal information is collected only when users
                      voluntarily provide details through forms,
                      registrations or service requests.
                    </p>

                    <ul className="list-disc pl-6 space-y-2">
                      <li>Registration and account opening details.</li>

                      <li>Subscription and service requests.</li>

                      <li>Customer support communications.</li>

                      <li>Feedback, surveys and suggestions.</li>
                    </ul>

                    <p>
                      Ashlar does not sell personal information to
                      unaffiliated third parties without user consent.
                    </p>
                  </div>
                )}

                {/* THIRD PARTY */}
                {activeSection === 2 && (
                  <div className="space-y-6 text-gray-700 leading-8 text-[15px]">
                    <p>
                      Statistical analysis may be performed to understand
                      website usage and improve user experience.
                    </p>

                    <p>
                      Only aggregated and non-personal data may be shared
                      with advertisers or service providers.
                    </p>

                    <div className="bg-[#f9f9f9] border border-gray-200 p-5">
                      <p>
                        Third-party services linked on the website may
                        have separate privacy policies.
                      </p>
                    </div>
                  </div>
                )}

                {/* COOKIES */}
                {activeSection === 3 && (
                  <div className="space-y-6 text-gray-700 leading-8 text-[15px]">
                    <p>
                      Ashlar website may use cookies to improve website
                      functionality and user experience.
                    </p>

                    <ul className="list-disc pl-6 space-y-2">
                      <li>Recognize repeat visitors.</li>

                      <li>Store user preferences.</li>

                      <li>Analyze website traffic and usage.</li>

                      <li>Improve content delivery.</li>
                    </ul>

                    <p>
                      Users may disable cookies through browser settings,
                      though some website features may not function
                      properly.
                    </p>
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