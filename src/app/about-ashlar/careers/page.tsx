"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  MapPin,
  ArrowRight,
  TrendingUp,
  Users,
  ShieldCheck,
} from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Growth Opportunities",
    description:
      "Build your career in a fast-growing financial services company.",
  },
  {
    icon: Users,
    title: "Supportive Team",
    description:
      "Work with experienced professionals in a collaborative environment.",
  },
  {
    icon: ShieldCheck,
    title: "Professional Environment",
    description:
      "Strong ethics, compliance and long-term career stability.",
  },
];

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* HERO */}

      <section className="border-b border-slate-200 bg-[#fafafa] py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className="rounded-full bg-[#9B2C1F]/10 px-4 py-1 text-sm font-medium text-[#9B2C1F]">
              Careers at Ashlar India
            </span>

            <h1 className="mt-6 text-5xl font-bold leading-tight text-[#24324B]">
              Build your future with
              <span className="text-[#9B2C1F]"> Ashlar India</span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              We are always looking for passionate individuals
              who want to grow in the financial services and
              capital markets industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CURRENT STATUS */}

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-slate-200 bg-white p-10 shadow-sm"
          >
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

              <div className="max-w-2xl">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#9B2C1F]/10">
                  <Briefcase
                    size={28}
                    className="text-[#9B2C1F]"
                  />
                </div>

                <h2 className="text-3xl font-bold text-[#24324B]">
                  We are not hiring actively right now
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  Even though there are no open positions at the
                  moment, we are always interested in connecting
                  with talented professionals from trading,
                  research, operations, technology, compliance,
                  and customer support backgrounds.
                </p>

                <div className="mt-6 flex flex-wrap gap-5 text-sm text-slate-500">
                  <span className="flex items-center gap-2">
                    <MapPin size={16} />
                    Noida / Delhi NCR
                  </span>

                  <span className="flex items-center gap-2">
                    <Briefcase size={16} />
                    Financial Services Industry
                  </span>
                </div>
              </div>

              {/* APPLY BOX */}

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-7 lg:w-[350px]">
                <h3 className="text-xl font-semibold text-[#24324B]">
                  Send your resume
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Share your profile with us and our HR team
                  will connect when a relevant opportunity
                  becomes available.
                </p>

                <a
                  href="mailto:hr@ashlarindia.com"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#9B2C1F] px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.03]"
                >
                  Send Resume
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY JOIN */}

      <section className="border-t border-slate-200 bg-[#fafafa] py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-[#24324B]">
              Why work with us?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-slate-600">
              A professional environment focused on growth,
              trust, innovation and long-term relationships.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">

            {benefits.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#9B2C1F]/10">
                    <Icon
                      size={28}
                      className="text-[#9B2C1F]"
                    />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-[#24324B]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}