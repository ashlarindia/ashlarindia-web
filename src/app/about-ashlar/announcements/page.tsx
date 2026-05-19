"use client";

import { motion } from "framer-motion";

const announcements = [
  {
    id: 1,
    title: "SEBI Circular: New Margin Rules Effective from March 2024",
    date: "March 15, 2024",
    category: "Regulatory",
    summary:
      "SEBI has introduced revised margin requirements for intraday and derivatives trading.",
  },
  {
    id: 2,
    title: "Trading Holiday on Holi - March 25, 2024",
    date: "March 10, 2024",
    category: "Exchange Holiday",
    summary:
      "NSE, BSE, MCX and commodity markets will remain closed on account of Holi.",
  },
  {
    id: 3,
    title: "Instant Fund Transfer Now Available",
    date: "March 5, 2024",
    category: "Platform Update",
    summary:
      "Clients can now transfer funds instantly using UPI and Payment Gateway services.",
  },
  {
    id: 4,
    title: "Upcoming IPO: Bharat Electronics Limited",
    date: "March 1, 2024",
    category: "IPO Alert",
    summary:
      "IPO subscription opens next week. Apply easily through your Ashlar trading account.",
  },
];

export default function AnnouncementsPage() {
  return (
    <main className="min-h-screen bg-white py-14">
      <section className="mx-auto max-w-6xl px-4 sm:px-6">

        {/* HEADING */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold text-[#24324B]">
            Announcements
          </h1>

          <p className="mt-3 text-sm text-slate-500">
            Latest updates and important notifications from Ashlar India.
          </p>

          <div className="mt-5 h-[1px] w-32 bg-slate-200" />
        </motion.div>

        {/* ANNOUNCEMENTS */}

        <div className="space-y-5">
          {announcements.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className="rounded-xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h2 className="text-lg font-semibold text-[#24324B]">
                    {item.title}
                  </h2>

                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {item.summary}
                  </p>
                </div>

                <span className="rounded-full bg-[#9B2C1F]/10 px-3 py-1 text-xs font-medium text-[#9B2C1F]">
                  {item.category}
                </span>
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                <span className="text-xs text-slate-400">
                  {item.date}
                </span>

                <button className="text-sm font-medium text-[#9B2C1F] transition hover:translate-x-1">
                  Read More →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}