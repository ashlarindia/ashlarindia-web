"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  "Key Managerial Personnel",
  "Membership Details",
  "Authorised Person Details",
  "MGT - 9",
];

export default function RegulatoryInformationPage() {
  const [activeSection, setActiveSection] = useState(0);

  return (
    <main className="min-h-screen bg-[#f5f5f5] pb-20">
      {/* Hero Section */}
      <section className="pt-28 pb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#243b5a]">
            Regulatory & Other{" "}
            <span className="text-[#d63b34]">
              Information
            </span>
          </h1>

          <div className="w-44 h-[2px] bg-gray-300 mx-auto mt-5"></div>
        </motion.div>
      </section>

      {/* Layout */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-[280px_1fr] gap-8">
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            {sections.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveSection(index)}
                className={`w-full px-6 py-5 text-left font-semibold text-[15px]
                transition-all duration-300 border
                ${
                  activeSection === index
                    ? "bg-[#ff8d8d] text-white border-[#ff8d8d]"
                    : "bg-[#dff1fb] text-black border-transparent hover:bg-[#ffd4d4]"
                }`}
              >
                {item}
              </button>
            ))}
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white border border-gray-200 shadow-sm"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35 }}
                className="p-6 md:p-10"
              >
                {/* Title */}
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-[#243b5a]">
                    {sections[activeSection]}
                  </h2>

                  <div className="w-full h-[1px] bg-gray-200 mt-5 mb-8"></div>
                </div>

                {/* KEY MANAGERIAL PERSONNEL */}
                {activeSection === 0 && (
                  <div className="overflow-x-auto">
                    <table className="w-full border border-gray-200">
                      <thead className="bg-[#f8f8f8]">
                        <tr>
                          <th className="border p-4 text-left">
                            SR. NO.
                          </th>
                          <th className="border p-4 text-left">
                            NAME
                          </th>
                          <th className="border p-4 text-left">
                            DESIGNATION
                          </th>
                          <th className="border p-4 text-left">
                            MOBILE NUMBER
                          </th>
                          <th className="border p-4 text-left">
                            EMAIL ID
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        {[
                          [
                            "1",
                            "Ankit Garg",
                            "Director/Principal Officer",
                            "+91 8010934852",
                            "ankit.garg@ashlarindia.com",
                          ],
                          [
                            "2",
                            "Ritu Bansal",
                            "Director",
                            "+91 8929439127",
                            "ritu.bansal@ashlarindia.com",
                          ],
                          [
                            "3",
                            "Deepak Khandelwal",
                            "Chief Operating Officer",
                            "+91 9810713921",
                            "deepak@ashlarindia.com",
                          ],
                          [
                            "4",
                            "Deepak Khandelwal",
                            "Compliance Officer",
                            "+91 8010934852",
                            "compliance@ashlarindia.com",
                          ],
                        ].map((row, index) => (
                          <tr
                            key={index}
                            className="hover:bg-gray-50 transition"
                          >
                            {row.map((item, i) => (
                              <td
                                key={i}
                                className="border p-4 text-[15px]"
                              >
                                {item}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* MEMBERSHIP DETAILS */}
                {activeSection === 1 && (
                  <div className="overflow-x-auto">
                    <table className="w-full border border-gray-200">
                      <tbody>
                        <tr>
                          <td className="border p-4 font-semibold bg-[#f8f8f8]">
                            NAME OF STOCK BROKER
                          </td>

                          <td className="border p-4 font-semibold">
                            ASHLAR SECURITIES PRIVATE LIMITED
                          </td>
                        </tr>

                        <tr>
                          <td className="border p-4">
                            Registered Office
                          </td>

                          <td className="border p-4">
                            A-38, Sector-67, Noida-201301,
                            Uttar Pradesh
                          </td>
                        </tr>

                        <tr>
                          <td className="border p-4">
                            Corporate Office
                          </td>

                          <td className="border p-4">
                            A-38, Sector-67, Noida-201301,
                            Uttar Pradesh
                          </td>
                        </tr>

                        <tr>
                          <td className="border p-4">
                            Landline Number
                          </td>

                          <td className="border p-4">
                            0120-6633205/231
                          </td>
                        </tr>

                        <tr>
                          <td className="border p-4">
                            Email ID
                          </td>

                          <td className="border p-4">
                            compliance@ashlarindia.com
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}

                {/* AUTHORISED PERSON DETAILS */}
                {activeSection === 2 && (
                  <div className="space-y-6">
                    <div className="overflow-x-auto">
                      <table className="w-full border border-gray-200">
                        <thead className="bg-[#f8f8f8]">
                          <tr>
                            <th className="border p-4 text-left">
                              Exchange
                            </th>

                            <th className="border p-4 text-left">
                              Segment
                            </th>

                            <th className="border p-4 text-left">
                              Type
                            </th>

                            <th className="border p-4 text-left">
                              Membership No.
                            </th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr>
                            <td className="border p-4">NSE</td>
                            <td className="border p-4">
                              CM, F&O, CD
                            </td>
                            <td className="border p-4">TM</td>
                            <td className="border p-4">13718</td>
                          </tr>

                          <tr>
                            <td className="border p-4">BSE</td>
                            <td className="border p-4">
                              CM, F&O, CD
                            </td>
                            <td className="border p-4">TM</td>
                            <td className="border p-4">3302</td>
                          </tr>

                          <tr>
                            <td className="border p-4">MCX</td>
                            <td className="border p-4">
                              Commodity
                            </td>
                            <td className="border p-4">TM</td>
                            <td className="border p-4">56815</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <a
                      href="/pdfs/AP-Details.pdf"
                      target="_blank"
                      className="inline-block bg-[#d63b34]
                      hover:bg-[#b92d27] text-white
                      px-5 py-3 transition-all duration-300"
                    >
                      Download AP Details
                    </a>
                  </div>
                )}

                {/* MGT 9 */}
                {activeSection === 3 && (
                  <div className="space-y-6">
                    <p className="text-gray-700 leading-8 text-[15px]">
                      Download the official MGT-9 Annual
                      Return document.
                    </p>

                    <a
                      href="/pdfs/ASHLAR-SECURITIES-MGT9.pdf"
                      target="_blank"
                      className="inline-block bg-[#d63b34]
                      hover:bg-[#b92d27] text-white
                      px-5 py-3 transition-all duration-300"
                    >
                      Download MGT-9 PDF
                    </a>
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