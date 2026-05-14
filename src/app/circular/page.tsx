'use client';

import {
  FileText,
  Download,
  Search,
  CalendarDays,
} from 'lucide-react';

const categories = [
  'Circular',
  'Investor Update',
  'NSE',
  'BSE',
  'MCX',
];

const circulars = [
  {
    date: '05 Sep 2024',
    title: 'Suspension of trading in TATAMTRDVR',
    description: 'Suspension of trading in TATAMTRDVR',
    segment: 'NSE',
  },
  {
    date: '25 Sep 2024',
    title:
      'MCX Transaction charges revised',
    description:
      'MCX Transaction charges revised from October 01, 2024',
    segment: 'MCX',
  },
  {
    date: '18 Sep 2024',
    title:
      'Changes in Securities Transaction Tax rate',
    description:
      'Changes in Securities Transaction Tax rate effective',
    segment: 'BSE',
  },
  {
    date: '29 Jul 2024',
    title:
      'Norms for acceptable collateral',
    description:
      'Norms for acceptable collateral and exposure',
    segment: 'SEBI',
  },
  {
    date: '10 Jul 2024',
    title: 'SEBI Trading Preferences',
    description:
      'SEBI Trading Preferences update',
    segment: 'SEBI',
  },
];

export default function CircularPage() {
  return (
    <div className="min-h-screen bg-[#f4f6fb]">

      {/* HERO */}
      <section className="bg-gradient-to-r from-[#071028] via-[#102347] to-[#17356b] text-white py-24">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-5 py-2 rounded-full mb-6">

            <FileText size={18} />

            Circular Information

          </div>

          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Exchange Circulars
          </h1>

          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-8">
            Stay updated with important circulars,
            exchange notices and investor alerts.
          </p>

        </div>

      </section>

      {/* SEARCH + FILTER */}
      <section className="max-w-7xl mx-auto px-6 -mt-12 relative z-20">

        <div className="bg-white rounded-[32px] shadow-2xl p-8">

          {/* SEARCH */}
          <div className="flex items-center gap-4 mb-8 border border-slate-200 rounded-2xl px-5 py-4">

            <Search className="text-red-500" size={22} />

            <input
              type="text"
              placeholder="Search circulars..."
              className="w-full outline-none text-slate-700 text-lg"
            />

          </div>

          {/* BUTTONS */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-5">

            {categories.map((item, index) => (
              <button
                key={index}
                className={`rounded-2xl px-6 py-4 font-semibold transition-all duration-300 ${
                  index === 0
                    ? 'bg-[#071028] text-white shadow-lg'
                    : 'bg-[#e8eef8] text-[#071028] hover:bg-red-500 hover:text-white'
                }`}
              >
                {item}
              </button>
            ))}

          </div>

        </div>

      </section>

      {/* TABLE */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="bg-[#101d34] rounded-[32px] overflow-hidden shadow-2xl border border-slate-700">

          {/* HEADER */}
          <div className="grid grid-cols-12 bg-[#1a2945] text-white px-8 py-6 text-sm font-semibold uppercase tracking-wider border-b border-slate-700">

            <div className="col-span-2">
              Date
            </div>

            <div className="col-span-3">
              Title
            </div>

            <div className="col-span-5">
              Description
            </div>

            <div className="col-span-2 text-center">
              Action
            </div>

          </div>

          {/* ROWS */}
          <div>

            {circulars.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-12 px-8 py-6 border-b border-slate-700 text-slate-300 hover:bg-[#16233d] transition-all duration-300 items-center"
              >

                {/* DATE */}
                <div className="col-span-2 flex items-start gap-3">

                  <CalendarDays
                    size={18}
                    className="text-red-400 mt-1"
                  />

                  <span className="leading-6">
                    {item.date}
                  </span>

                </div>

                {/* TITLE */}
                <div className="col-span-3">

                  <h3 className="font-semibold text-white leading-7 hover:text-red-400 transition cursor-pointer">

                    {item.title}

                  </h3>

                </div>

                {/* DESCRIPTION */}
                <div className="col-span-5 text-slate-400 leading-7">

                  {item.description}

                </div>

                {/* BUTTON */}
                <div className="col-span-2 flex justify-center">

                  <button className="flex items-center gap-2 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-[#071028] px-5 py-3 rounded-full transition-all duration-300 font-semibold">

                    <Download size={16} />

                    Download

                  </button>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

    </div>
  );
}