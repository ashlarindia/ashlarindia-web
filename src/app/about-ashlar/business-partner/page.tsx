"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function PartnerPage() {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    city: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setSubmitted(true);

    setFormData({
      name: "",
      mobile: "",
      email: "",
      city: "",
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">

        {/* TITLE */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold text-[#24324B]">
            Business <span className="text-[#9B2C1F]">Partner</span>
          </h1>

          <div className="mx-auto mt-5 h-[1px] w-40 bg-slate-200" />

          <p className="mx-auto mt-6 max-w-3xl text-[15px] leading-8 text-slate-600">
            Partner with Ashlar India and grow your business
            with strong research support and attractive
            revenue opportunities.
          </p>
        </motion.div>

        {/* CONTENT */}

        <div className="mt-20 grid gap-14 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-[#24324B]">
              Our Offering:
            </h2>

            <div className="mt-5 h-[1px] w-full bg-slate-200" />

            <ul className="mt-10 space-y-8 text-[17px] text-slate-800">
              {[
                "Instant A/C Openings",
                "Attractive Revenue Sharing",
                "Support in Client Acquisition",
                "Promotional / Branding Support",
                "Strong Compliance & Risk Management System",
                "Product Awareness for Authorized Person / Clients",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-4"
                >
                  <div className="mt-2 h-2.5 w-2.5 rounded-full bg-[#9B2C1F]" />

                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* FORM */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-xl border border-slate-200 p-8 shadow-sm"
          >
            <h2 className="text-4xl font-bold text-[#24324B]">
              Business Partner
            </h2>

            {submitted && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-6 rounded-md border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700"
              >
                Form submitted successfully.
              </motion.div>
            )}

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
                className="w-full rounded-md border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-[#9B2C1F] focus:bg-white"
              />

              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Mobile No."
                required
                className="w-full rounded-md border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-[#9B2C1F] focus:bg-white"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email ID"
                required
                className="w-full rounded-md border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-[#9B2C1F] focus:bg-white"
              />

              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
                required
                className="w-full rounded-md border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-[#9B2C1F] focus:bg-white"
              />

              <button
                type="submit"
                className="mt-4 rounded-full bg-[#18B7E8] px-8 py-3 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.03] hover:bg-[#0ea5d3]"
              >
                Become a Member
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}