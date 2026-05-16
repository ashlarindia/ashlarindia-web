'use client';

import { useState } from 'react';

import {
  FileText,
  ShieldCheck,
  Landmark,
  Scale,
  ChevronRight,
  BadgeCheck,
} from 'lucide-react';

const policies = [
  {
    title: 'Running Account Settlement Policy',
    icon: <Landmark size={22} />,
    content: `
Ashlar Securities follows SEBI guidelines regarding the settlement of client funds and securities. Running account settlement ensures timely transfer of funds and securities to the client’s registered bank and demat account.

• Quarterly and monthly settlement options are available.
• Clients receive settlement statements through registered email.
• Credit balances are transferred securely.
• Funds retention follows SEBI margin obligations.

The objective of this policy is to protect client funds and maintain complete transparency in financial settlements.
    `,
  },

  {
    title: 'RMS & Margin Policy',
    icon: <ShieldCheck size={22} />,
    content: `
Risk Management System (RMS) policies are designed to minimize trading risks and maintain market integrity.

• Margin requirements are monitored in real-time.
• Additional margins may be levied during high volatility.
• Positions may be squared off in case of insufficient margins.
• Exposure limits vary according to market conditions.

Ashlar reserves the right to update RMS policies without prior notice in compliance with regulatory standards.
    `,
  },

  {
    title: 'Surveillance Policy',
    icon: <BadgeCheck size={22} />,
    content: `
The surveillance mechanism helps identify suspicious trading patterns and ensures market compliance.

• Automated trade monitoring systems are deployed.
• Abnormal price movement alerts are generated.
• Insider trading and market manipulation activities are reviewed.
• Clients may be asked for additional clarification when required.

This policy strengthens investor confidence and promotes fair market practices.
    `,
  },

  {
    title: 'PMLA Policy',
    icon: <Scale size={22} />,
    content: `
Ashlar Securities complies with Prevention of Money Laundering Act (PMLA) regulations.

• KYC verification is mandatory.
• Suspicious transactions are reported to regulatory authorities.
• Client records are maintained securely.
• Financial activities are monitored regularly.

The policy helps prevent financial crimes and illegal fund movements.
    `,
  },

  {
    title: 'Investor Grievance Handling Policy',
    icon: <FileText size={22} />,
    content: `
Ashlar Securities is committed to resolving investor complaints efficiently and transparently.

• Complaints can be raised via email or customer care.
• Dedicated escalation matrix is available.
• Resolution timelines follow SEBI norms.
• Complaint tracking mechanisms are provided.

Our goal is to ensure quick, fair and transparent grievance redressal.
    `,
  },

  {
    title: 'Policy on Freezing/Blocking Account',
    icon: <ShieldCheck size={22} />,
    content: `
Clients may voluntarily request freezing or blocking of trading accounts in case of suspicious activity.

• Requests can be submitted through registered email or phone.
• Immediate account restrictions can be applied.
• Reactivation requires client verification.
• Policies comply with SEBI and exchange regulations.

This mechanism enhances account security and fraud prevention.
    `,
  },
];

export default function PoliciesProcedurePage() {

  const [activePolicy, setActivePolicy] = useState(0);

  return (

    <div className="min-h-screen bg-[#020817] text-white relative overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] bg-red-500/10 rounded-full blur-3xl" />

        <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl" />

      </div>

      {/* HERO */}
      <section className="relative z-10 pt-24 pb-16">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <div className="inline-flex items-center gap-2 border border-red-500/20 bg-red-500/10 px-5 py-2 rounded-full text-sm text-red-300 mb-8">

            <ShieldCheck size={18} />

            Regulatory Compliance & Transparency

          </div>

          <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-8">

            Policies{' '}

            <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">

              & Procedures

            </span>

          </h1>

          <p className="text-slate-400 text-lg leading-9 max-w-4xl mx-auto">

            Explore Ashlar Securities policies and procedures designed
            to ensure investor protection, transparency, regulatory
            compliance and secure trading operations.

          </p>

        </div>

      </section>

      {/* MAIN CONTENT */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-24">

        <div className="grid lg:grid-cols-12 gap-10">

          {/* SIDEBAR */}
          <div className="lg:col-span-4">

            <div className="sticky top-28 rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-xl p-6">

              <h3 className="text-2xl font-bold mb-8">
                Policies List
              </h3>

              <div className="space-y-4">

                {policies.map((policy, index) => (

                  <button
                    key={index}
                    onClick={() => setActivePolicy(index)}
                    className={`w-full text-left rounded-2xl border transition-all duration-300 p-5 flex items-center gap-4 ${
                      activePolicy === index
                        ? 'bg-gradient-to-r from-red-500 to-red-600 border-red-500 shadow-[0_10px_40px_rgba(239,68,68,0.35)]'
                        : 'border-white/10 bg-white/5 hover:bg-white/10'
                    }`}
                  >

                    <div className={`${activePolicy === index ? 'text-white' : 'text-red-400'}`}>

                      {policy.icon}

                    </div>

                    <div className="flex-1">

                      <h4 className="font-semibold text-sm lg:text-base">

                        {policy.title}

                      </h4>

                    </div>

                    <ChevronRight
                      size={18}
                      className={`${activePolicy === index ? 'text-white' : 'text-slate-400'}`}
                    />

                  </button>

                ))}

              </div>

            </div>

          </div>

          {/* CONTENT */}
          <div className="lg:col-span-8">

            <div className="rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">

              {/* TOP */}
              <div className="bg-gradient-to-r from-red-500 to-red-600 p-10">

                <div className="flex items-center gap-5">

                  <div className="w-20 h-20 rounded-3xl bg-white/10 flex items-center justify-center">

                    {policies[activePolicy].icon}

                  </div>

                  <div>

                    <h2 className="text-4xl font-bold leading-tight">

                      {policies[activePolicy].title}

                    </h2>

                    <p className="text-red-100 mt-3">

                      Official policy documentation & investor guidelines.

                    </p>

                  </div>

                </div>

              </div>

              {/* BODY */}
              <div className="p-10">

                <div className="rounded-3xl border border-white/10 bg-[#0f172a]/60 p-8">

                  <div className="prose prose-invert max-w-none">

                    <p className="text-slate-300 leading-9 whitespace-pre-line text-[15px]">

                      {policies[activePolicy].content}

                    </p>

                  </div>

                </div>

                {/* NOTICE */}
                <div className="mt-10 rounded-3xl bg-gradient-to-r from-[#111827] to-[#1e293b] border border-white/10 p-8">

                  <div className="flex items-start gap-5">

                    <div className="w-14 h-14 rounded-2xl bg-red-500/10 flex items-center justify-center flex-shrink-0">

                      <ShieldCheck
                        size={28}
                        className="text-red-400"
                      />

                    </div>

                    <div>

                      <h3 className="text-2xl font-bold mb-4">

                        Important Compliance Notice

                      </h3>

                      <p className="text-slate-400 leading-8">

                        All policies are subject to SEBI regulations,
                        exchange guidelines and internal compliance
                        standards. Ashlar Securities reserves the
                        right to modify policies from time to time
                        without prior notice in accordance with
                        regulatory requirements.

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