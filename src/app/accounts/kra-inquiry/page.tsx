'use client';

import {
  ShieldCheck,
  BadgeCheck,
  AlertTriangle,
  Clock3,
  ExternalLink,
  ChevronRight,
  Search,
} from 'lucide-react';

const kraStatus = [
  {
    kra: 'CVL KRA',
    status: 'ON HOLD - New KYC',
  },
  {
    kra: 'NDML KRA',
    status: 'Not Checked with NDML KRA',
  },
  {
    kra: 'DOTEX KRA',
    status: 'Not Checked with DOTEX KRA',
  },
  {
    kra: 'CAMS KRA',
    status: 'Not Checked with CAMS KRA',
  },
  {
    kra: 'KARVY KRA',
    status: 'Not Checked with KARVY KRA',
  },
];

const statusMeaning = [
  {
    status: 'Registered',
    meaning: 'KYC is registered successfully.',
    action: 'Relax! No action required.',
    icon: BadgeCheck,
    color: 'text-green-400',
  },

  {
    status: 'Under Process',
    meaning:
      'Account recently opened and KYC update may take approximately 5 days.',
    action: 'Please wait for KYC process completion.',
    icon: Clock3,
    color: 'text-yellow-400',
  },

  {
    status: 'On-Hold / Rejected',
    meaning:
      'Existing broker did not update details with accurate information.',
    action:
      'Submit a fresh KYC form with PAN copy and address proof.',
    icon: AlertTriangle,
    color: 'text-red-400',
  },
];

export default function KRAInquiryPage() {
  return (
    <div className="min-h-screen bg-[#030b1d] text-white overflow-hidden relative">

      {/* GLOW EFFECTS */}
      <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-red-500/20 rounded-full blur-3xl" />

      <div className="absolute bottom-[-150px] right-[-120px] w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-3xl" />

      {/* HERO */}
      <section className="relative z-10 py-24">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 px-5 py-2 rounded-full mb-6">

            <ShieldCheck size={18} />

            Investor Verification

          </div>

          <h1 className="text-5xl lg:text-7xl font-bold mb-6">

            KRA{' '}

            <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">

              Inquiry

            </span>

          </h1>

          <p className="text-slate-400 text-lg max-w-4xl mx-auto leading-8">

            Verify your KYC/KRA registration status,
            understand KYC processing stages and
            resolve investor onboarding issues seamlessly.

          </p>

        </div>

      </section>

      {/* MAIN CONTENT */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-24">

        {/* INTRO */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-[40px] p-10 lg:p-14 shadow-2xl mb-12">

          <h2 className="text-4xl font-bold mb-8">
            What is KYC/KRA?
          </h2>

          <div className="space-y-8 text-slate-300 leading-9 text-lg">

            <p>
              KRA provides centralization of KYC records in the securities market.
              Investors opening accounts with SEBI registered intermediaries
              submit KYC details through a KYC Registration Agency (KRA).
            </p>

            <p>
              Once KYC is completed with one SEBI intermediary,
              there is no need to repeat the KYC process with another intermediary.
            </p>

            <p>
              In case of any changes in KYC details,
              investors should submit a modification request
              along with supporting documents.
            </p>

          </div>

        </div>

        {/* STEPS */}
        <div className="grid lg:grid-cols-2 gap-10 mb-14">

          {/* CVL */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-[36px] p-10 shadow-2xl">

            <div className="flex items-center gap-4 mb-8">

              <div className="w-16 h-16 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-400">

                <Search size={30} />

              </div>

              <div>

                <h3 className="text-3xl font-bold">
                  Check via CVL KRA
                </h3>

                <p className="text-slate-400 mt-2">
                  Verify your KYC registration status.
                </p>

              </div>

            </div>

            <ol className="space-y-5 text-slate-300 leading-8">

              <li>
                • Visit CVL KRA website
              </li>

              <li>
                • Click on KYC Inquiry
              </li>

              <li>
                • Enter PAN & Captcha
              </li>

              <li>
                • Submit to view KYC status
              </li>

            </ol>

            <a
              href="https://www.cvlkra.com/"
              target="_blank"
              className="mt-10 inline-flex items-center gap-3 bg-gradient-to-r from-red-500 to-red-600 px-7 py-4 rounded-2xl hover:scale-105 transition-all duration-300 shadow-2xl shadow-red-500/20"
            >

              Visit CVL KRA

              <ExternalLink size={18} />

            </a>

          </div>

          {/* NDML */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-[36px] p-10 shadow-2xl">

            <div className="flex items-center gap-4 mb-8">

              <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400">

                <Search size={30} />

              </div>

              <div>

                <h3 className="text-3xl font-bold">
                  Check via NDML KRA
                </h3>

                <p className="text-slate-400 mt-2">
                  Alternate KRA verification portal.
                </p>

              </div>

            </div>

            <ol className="space-y-5 text-slate-300 leading-8">

              <li>
                • Visit NDML KRA portal
              </li>

              <li>
                • Open KYC Inquiry section
              </li>

              <li>
                • Enter PAN & Captcha
              </li>

              <li>
                • Submit to verify status
              </li>

            </ol>

            <a
              href="https://kra.ndml.in/kra-web/"
              target="_blank"
              className="mt-10 inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-4 rounded-2xl hover:scale-105 transition-all duration-300 shadow-2xl shadow-cyan-500/20"
            >

              Visit NDML KRA

              <ExternalLink size={18} />

            </a>

          </div>

        </div>

        {/* KRA STATUS TABLE */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-[40px] overflow-hidden shadow-2xl mb-14">

          <div className="p-10 border-b border-white/10">

            <h2 className="text-4xl font-bold">
              KRA Registration Status
            </h2>

            <p className="text-slate-400 mt-3">
              Identify the KYC Registration Agency linked to your account.
            </p>

          </div>

          <div>

            {/* HEADER */}
            <div className="grid grid-cols-12 px-8 py-5 bg-white/5 border-b border-white/10 text-slate-400 uppercase text-sm tracking-wider">

              <div className="col-span-4">
                KRA
              </div>

              <div className="col-span-8">
                KYC Status
              </div>

            </div>

            {/* ROWS */}
            {kraStatus.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-12 px-8 py-6 border-b border-white/10 hover:bg-white/5 transition-all duration-300"
              >

                <div className="col-span-4 font-semibold text-white">

                  {item.kra}

                </div>

                <div className="col-span-8 text-slate-300">

                  {item.status}

                </div>

              </div>
            ))}

          </div>

        </div>

        {/* STATUS MEANING */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-[40px] overflow-hidden shadow-2xl mb-14">

          <div className="p-10 border-b border-white/10">

            <h2 className="text-4xl font-bold">
              KYC Status Meaning
            </h2>

            <p className="text-slate-400 mt-3">
              Understand each KYC status and required action.
            </p>

          </div>

          {/* HEADER */}
          <div className="grid grid-cols-12 px-8 py-5 bg-white/5 border-b border-white/10 text-slate-400 uppercase text-sm tracking-wider">

            <div className="col-span-3">
              Status
            </div>

            <div className="col-span-4">
              Meaning
            </div>

            <div className="col-span-5">
              Recommended Action
            </div>

          </div>

          {/* ROWS */}
          {statusMeaning.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="grid grid-cols-12 px-8 py-8 border-b border-white/10 hover:bg-white/5 transition-all duration-300"
              >

                {/* STATUS */}
                <div className="col-span-3 flex items-center gap-4">

                  <Icon
                    className={item.color}
                    size={28}
                  />

                  <span className="font-semibold text-white">

                    {item.status}

                  </span>

                </div>

                {/* MEANING */}
                <div className="col-span-4 text-slate-300 leading-7">

                  {item.meaning}

                </div>

                {/* ACTION */}
                <div className="col-span-5 text-slate-300 leading-7">

                  {item.action}

                </div>

              </div>
            );
          })}

        </div>

        {/* LINKS */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-[36px] p-10 shadow-2xl mb-14">

          <h2 className="text-3xl font-bold mb-8">
            Quick KRA Links
          </h2>

          <div className="flex flex-wrap gap-5">

            {[
              'CVL',
              'NDML',
              'CAMS',
              'Karvy',
              'DOTEX',
            ].map((item, index) => (
              <button
                key={index}
                className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-red-500 hover:border-red-500 transition-all duration-300"
              >

                {item}

              </button>
            ))}

          </div>

        </div>

        {/* HELP SECTION */}
        <div className="rounded-[40px] overflow-hidden bg-gradient-to-r from-red-500 to-red-600 p-14 shadow-[0_20px_80px_rgba(239,68,68,0.4)] relative">

          <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">

            <div>

              <h2 className="text-4xl font-bold mb-5">
                Need KYC Assistance?
              </h2>

              <p className="text-red-100 text-lg leading-8 max-w-2xl">

                Contact our KYC support team for account verification,
                KRA registration help and KYC modification requests.

              </p>

            </div>

            <a
              href="mailto:kra@ashlarindia.com"
              className="flex items-center gap-3 bg-white text-red-600 px-8 py-5 rounded-2xl font-semibold hover:scale-105 transition-all duration-300 shadow-2xl"
            >

              Contact Support

              <ChevronRight size={20} />

            </a>

          </div>

        </div>

      </section>

    </div>
  );
}