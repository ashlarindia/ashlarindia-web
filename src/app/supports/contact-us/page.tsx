"use client";

import {
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

export default function ContactUsPage() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* HERO */}

      <section className="border-b border-slate-200 py-16">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <h1 className="text-5xl font-bold text-[#24324B]">
            Contact{" "}
            <span className="text-[#9B2C1F]">
              Us
            </span>
          </h1>

          <div className="mx-auto mt-5 h-[1px] w-40 bg-slate-200" />

          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-7 text-slate-600">
            Our support team is available to help you with
            trading accounts, investments, KYC queries,
            fund transfers, and technical assistance.
          </p>
        </div>
      </section>

      {/* CONTACT DETAILS */}

      <section className="py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6 md:grid-cols-3">

            {/* PHONE */}

            <div className="rounded-md border border-slate-200 p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#9B2C1F]/10">
                <Phone
                  size={22}
                  className="text-[#9B2C1F]"
                />
              </div>

              <h3 className="text-lg font-semibold text-slate-900">
                Call Us
              </h3>

              <div className="mt-4 space-y-2 text-sm text-slate-700">
                <p>Toll Free: 1800-123-9343</p>
                <p>Direct: 0120-6633205</p>
                <p>0120-6633231 / 232 / 238</p>
              </div>
            </div>

            {/* EMAIL */}

            <div className="rounded-md border border-slate-200 p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#9B2C1F]/10">
                <Mail
                  size={22}
                  className="text-[#9B2C1F]"
                />
              </div>

              <h3 className="text-lg font-semibold text-slate-900">
                Email Us
              </h3>

              <div className="mt-4 space-y-2 text-sm text-slate-700">
                <p>info@ashlarindia.com</p>
                <p>compliance@ashlarindia.com</p>
                <p>investorcell@ashlarindia.com</p>
              </div>
            </div>

            {/* ADDRESS */}

            <div className="rounded-md border border-slate-200 p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#9B2C1F]/10">
                <MapPin
                  size={22}
                  className="text-[#9B2C1F]"
                />
              </div>

              <h3 className="text-lg font-semibold text-slate-900">
                Office Address
              </h3>

              <div className="mt-4 space-y-2 text-sm leading-7 text-slate-700">
                <p>
                  Corporate Address : 1D, A-1,
                  Sector-10, Noida,
                </p>

                <p>
                  Uttar Pradesh - 201301
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OFFICE HOURS */}

      <section className="pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-md border border-slate-200 p-8">

            <div className="mb-8 flex items-center gap-3">
              <Clock
                size={22}
                className="text-[#9B2C1F]"
              />

              <h2 className="text-2xl font-semibold text-slate-900">
                Office & Trading Hours
              </h2>
            </div>

            <div className="grid gap-10 md:grid-cols-2">

              {/* MARKET HOURS */}

              <div>
                <h3 className="mb-5 text-lg font-semibold text-slate-900">
                  Market Timings
                </h3>

                <div className="space-y-4 text-sm">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <span className="text-slate-600">
                      Equity & F&O
                    </span>

                    <span className="font-medium text-slate-900">
                      9:15 AM - 3:30 PM
                    </span>
                  </div>

                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <span className="text-slate-600">
                      Currency
                    </span>

                    <span className="font-medium text-slate-900">
                      9:00 AM - 5:00 PM
                    </span>
                  </div>

                  <div className="flex items-center justify-between pb-3">
                    <span className="text-slate-600">
                      Commodities
                    </span>

                    <span className="font-medium text-slate-900">
                      9:00 AM - 11:30 PM
                    </span>
                  </div>
                </div>
              </div>

              {/* SUPPORT HOURS */}

              <div>
                <h3 className="mb-5 text-lg font-semibold text-slate-900">
                  Customer Support
                </h3>

                <div className="space-y-4 text-sm">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <span className="text-slate-600">
                      Monday - Friday
                    </span>

                    <span className="font-medium text-slate-900">
                      9:00 AM - 6:00 PM
                    </span>
                  </div>

                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <span className="text-slate-600">
                      Saturday
                    </span>

                    <span className="font-medium text-slate-900">
                      9:00 AM - 5:00 PM
                    </span>
                  </div>

                  <div className="flex items-center justify-between pb-3">
                    <span className="text-slate-600">
                      Sunday
                    </span>

                    <span className="font-medium text-slate-900">
                      Closed
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}