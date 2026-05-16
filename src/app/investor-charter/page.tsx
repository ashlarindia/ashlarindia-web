'use client';

import { useState } from 'react';

import {
  ShieldCheck,
  Landmark,
  FileText,
  ChevronRight,
  BadgeCheck,
  ArrowUpRight,
} from 'lucide-react';

const charterData = [
  {
    title: 'Investor Charter (Depository)',
    icon: <Landmark size={22} />,
    heading: 'INVESTOR CHARTER',
    annexure: 'Annexure A1',
    content: `
1. Vision

Towards making Indian Securities Market transparent,
efficient and investor friendly by providing safe,
reliable and trusted record keeping platform for
investors to hold and transfer securities in
dematerialized form.

2. Mission

• To hold securities of investors in dematerialized form
and facilitate secure transfer.

• To ensure safekeeping of securities and protection
of investor interests.

• To provide timely and accurate information regarding
holding and transfer of securities.

• To promote investor awareness, education and
transparency in securities market.

• To create a secure and reliable depository ecosystem.
    `,
  },

  {
    title: 'Investor Charter (Stock Broker)',
    icon: <ShieldCheck size={22} />,
    heading: 'STOCK BROKER INVESTOR CHARTER',
    annexure: 'Annexure B1',
    content: `
1. Vision

To provide transparent, technology driven and
investor-focused broking services while ensuring
compliance with regulatory standards.

2. Mission

• To execute trades fairly and efficiently.

• To maintain transparency in brokerage and charges.

• To provide secure trading infrastructure.

• To resolve investor grievances promptly.

• To educate investors regarding financial products
and market risks.
    `,
  },

  {
    title: 'Annexure-B IG Report',
    icon: <FileText size={22} />,
    heading: 'INVESTOR GRIEVANCE REPORT',
    annexure: 'Annexure B',
    content: `
Investor grievance reports provide transparency
regarding complaint handling and resolution timelines.

• Number of complaints received.

• Complaints resolved successfully.

• Pending complaint status.

• Escalation matrix for unresolved grievances.

• Regulatory reporting standards.

Ashlar Securities remains committed to resolving
investor complaints in a timely and transparent manner.
    `,
  },
];

export default function InvestorCharterPage() {

  const [activeTab, setActiveTab] = useState(0);

  return (

    <div className="min-h-screen bg-[#020817] text-white overflow-hidden relative">

      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] bg-red-500/10 rounded-full blur-3xl" />

        <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl" />

      </div>

      {/* HERO */}
      <section className="relative z-10 pt-24 pb-14">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <div className="inline-flex items-center gap-2 border border-red-500/20 bg-red-500/10 px-5 py-2 rounded-full text-sm text-red-300 mb-8">

            <BadgeCheck size={18} />

            Investor Protection & Transparency

          </div>

          <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-8">

            Investor{' '}

            <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">

              Charter

            </span>

          </h1>

          <p className="text-slate-400 text-lg leading-9 max-w-4xl mx-auto">

            Explore official investor charter guidelines,
            grievance handling standards and investor
            protection mechanisms provided by
            Ashlar Securities Pvt. Ltd.

          </p>

        </div>

      </section>

      {/* MAIN */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-24">

        <div className="grid lg:grid-cols-12 gap-10">

          {/* LEFT SIDEBAR */}
          <div className="lg:col-span-4">

            <div className="sticky top-28 rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-xl p-6">

              <h3 className="text-2xl font-bold mb-8">
                Charter Documents
              </h3>

              <div className="space-y-4">

                {charterData.map((item, index) => (

                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`w-full text-left rounded-2xl border p-5 transition-all duration-300 flex items-center gap-4 ${
                      activeTab === index
                        ? 'bg-gradient-to-r from-red-500 to-red-600 border-red-500 shadow-[0_10px_40px_rgba(239,68,68,0.35)]'
                        : 'border-white/10 bg-white/5 hover:bg-white/10'
                    }`}
                  >

                    <div className={`${activeTab === index ? 'text-white' : 'text-red-400'}`}>

                      {item.icon}

                    </div>

                    <div className="flex-1">

                      <h4 className="font-semibold text-sm lg:text-base">

                        {item.title}

                      </h4>

                    </div>

                    <ChevronRight
                      size={18}
                      className={`${activeTab === index ? 'text-white' : 'text-slate-400'}`}
                    />

                  </button>

                ))}

              </div>

            </div>

          </div>

          {/* RIGHT CONTENT */}
          <div className="lg:col-span-8">

            <div className="rounded-[40px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl">

              {/* HEADER */}
              <div className="bg-gradient-to-r from-red-500 to-red-600 p-10">

                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

                  <div className="flex items-center gap-5">

                    <div className="w-20 h-20 rounded-3xl bg-white/10 flex items-center justify-center">

                      {charterData[activeTab].icon}

                    </div>

                    <div>

                      <h2 className="text-4xl font-bold">

                        {charterData[activeTab].heading}

                      </h2>

                      <p className="text-red-100 mt-3">

                        Official investor information &
                        compliance guidelines.

                      </p>

                    </div>

                  </div>

                  <div className="rounded-2xl border border-white/20 bg-white/10 px-6 py-4 text-center">

                    <p className="text-sm text-red-100">

                      Document Reference

                    </p>

                    <h4 className="text-xl font-bold mt-1">

                      {charterData[activeTab].annexure}

                    </h4>

                  </div>

                </div>

              </div>

              {/* CONTENT */}
              <div className="p-10">

                <div className="rounded-3xl border border-white/10 bg-[#0f172a]/60 p-8">

                  <div className="prose prose-invert max-w-none">

                    <p className="text-slate-300 leading-9 whitespace-pre-line text-[15px]">

                      {charterData[activeTab].content}

                    </p>

                  </div>

                </div>

                {/* CTA */}
                <div className="mt-10 flex flex-wrap gap-5">

                  <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-red-500 to-red-600 hover:scale-[1.03] transition-all duration-300 font-semibold shadow-[0_15px_40px_rgba(239,68,68,0.35)] flex items-center gap-3">

                    Read Full Document

                    <ArrowUpRight size={20} />

                  </button>

                  <button className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 font-semibold">

                    Download PDF

                  </button>

                </div>

                {/* NOTICE */}
                <div className="mt-12 rounded-3xl bg-gradient-to-r from-[#111827] to-[#1e293b] border border-white/10 p-8">

                  <div className="flex items-start gap-5">

                    <div className="w-14 h-14 rounded-2xl bg-red-500/10 flex items-center justify-center flex-shrink-0">

                      <ShieldCheck
                        size={28}
                        className="text-red-400"
                      />

                    </div>

                    <div>

                      <h3 className="text-2xl font-bold mb-4">

                        Investor Protection Notice

                      </h3>

                      <p className="text-slate-400 leading-8">

                        Ashlar Securities Pvt. Ltd.
                        follows SEBI regulations and
                        investor protection guidelines
                        to ensure secure, transparent
                        and compliant financial services.
                        Investors are encouraged to read
                        all charter documents carefully
                        before investing.

                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>

  );

}