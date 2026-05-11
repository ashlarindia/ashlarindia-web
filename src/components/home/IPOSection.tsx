'use client';

import Link from 'next/link';

type IPOStatus = 'open' | 'upcoming' | 'closing';

interface IPOItem {
  name: string;
  sector: string;
  openDate: string;
  closeDate: string;
  priceBand: string;
  lotSize: number;
  minInvestment: string;
  status: IPOStatus;
  subscribed?: string;
}

const STATUS_CONFIG: Record<IPOStatus, { label: string; bg: string; text: string; dot: string }> = {
  open:     { label: 'Open now',   bg: 'bg-emerald-50', text: 'text-emerald-700', dot: 'bg-emerald-500' },
  closing:  { label: 'Closing soon', bg: 'bg-amber-50',   text: 'text-amber-700',   dot: 'bg-amber-500'   },
  upcoming: { label: 'Upcoming',   bg: 'bg-blue-50',    text: 'text-blue-700',    dot: 'bg-blue-400'    },
};

const IPO_LIST: IPOItem[] = [
  {
    name: 'Tata Technologies',
    sector: 'Engineering & IT',
    openDate: 'Nov 22, 2024',
    closeDate: 'Nov 24, 2024',
    priceBand: '₹475 – ₹500',
    lotSize: 30,
    minInvestment: '₹15,000',
    status: 'open',
    subscribed: '69.43×',
  },
  {
    name: 'IREDA',
    sector: 'Renewable Energy Finance',
    openDate: 'Nov 21, 2024',
    closeDate: 'Nov 23, 2024',
    priceBand: '₹30 – ₹32',
    lotSize: 460,
    minInvestment: '₹14,720',
    status: 'closing',
    subscribed: '38.80×',
  },
  {
    name: 'Gandhar Oil Refinery',
    sector: 'Oil & Gas',
    openDate: 'Nov 22, 2024',
    closeDate: 'Nov 24, 2024',
    priceBand: '₹160 – ₹169',
    lotSize: 88,
    minInvestment: '₹14,872',
    status: 'upcoming',
  },
];

const DETAIL_ROWS = [
  { key: 'openDate',       label: 'Open date'    },
  { key: 'closeDate',      label: 'Close date'   },
  { key: 'priceBand',      label: 'Price band'   },
  { key: 'lotSize',        label: 'Lot size',     suffix: ' shares' },
  { key: 'minInvestment',  label: 'Min. invest'  },
] as const;

export default function IPOSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-4">
              IPO Watch
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-2">
              Upcoming IPOs
            </h2>
            <p className="text-slate-500 text-base">
              Apply for new listings directly from your Ashlar demat account.
            </p>
          </div>
          <Link
            href="/ipo"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-150 group flex-shrink-0"
          >
            View all IPOs
            <span className="inline-block transition-transform duration-150 group-hover:translate-x-1">→</span>
          </Link>
        </div>

        {/* IPO Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {IPO_LIST.map((ipo) => {
            const s = STATUS_CONFIG[ipo.status];

            return (
              <article
                key={ipo.name}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-blue-300 hover:shadow-md transition-all duration-200 flex flex-col"
              >
                {/* Top accent */}
                <div className={`h-1 w-full ${
                  ipo.status === 'open'
                    ? 'bg-emerald-500'
                    : ipo.status === 'closing'
                    ? 'bg-amber-500'
                    : 'bg-blue-500'
                }`} />

                <div className="p-5 flex flex-col flex-1">

                  {/* Name + status */}
                  <div className="flex items-start justify-between gap-3 mb-1">
                    <div>
                      <h3 className="text-base font-bold text-slate-900 leading-snug">
                        {ipo.name}
                      </h3>
                      <p className="text-xs text-slate-400 mt-0.5">{ipo.sector}</p>
                    </div>
                    <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0 ${s.bg} ${s.text}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${s.dot} ${ipo.status === 'open' ? 'animate-pulse' : ''}`} />
                      {s.label}
                    </span>
                  </div>

                  {/* Subscription badge */}
                  {ipo.subscribed && (
                    <div className="mt-3 mb-1 inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-100 rounded-lg px-3 py-1.5 w-fit">
                      <span className="text-xs text-emerald-700 font-medium">Subscribed</span>
                      <span className="text-xs font-bold text-emerald-800 font-mono">{ipo.subscribed}</span>
                    </div>
                  )}

                  {/* Divider */}
                  <div className="border-t border-slate-100 my-4" />

                  {/* Detail rows */}
                  <dl className="space-y-2.5 flex-1">
                    {DETAIL_ROWS.map((row) => (
                      <div key={row.key} className="flex items-center justify-between">
                        <dt className="text-xs text-slate-500">{row.label}</dt>
                        <dd className="text-xs font-semibold text-slate-800 font-mono">
                          {row.key === 'lotSize'
                            ? `${ipo[row.key]}${row.suffix}`
                            : ipo[row.key]}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  {/* Divider */}
                  <div className="border-t border-slate-100 mt-4 pt-4">
                    <Link
                      href="https://kyc.wisdomcapital.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`
                        flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold transition-all duration-150 active:scale-[0.98]
                        ${ipo.status === 'upcoming'
                          ? 'bg-slate-100 text-slate-500 cursor-not-allowed pointer-events-none'
                          : 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm shadow-blue-200'
                        }
                      `}
                    >
                      {ipo.status === 'upcoming' ? 'Opening soon' : 'Apply now →'}
                    </Link>
                  </div>

                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom info strip */}
        <div className="mt-10 bg-white border border-slate-200 rounded-2xl px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center text-sm flex-shrink-0">
              ⚠️
            </div>
            <p className="text-xs text-slate-500 leading-relaxed max-w-lg">
              IPO investments are subject to market risks. Read all scheme-related documents carefully
              before applying. Past subscription levels are not indicative of future performance.
            </p>
          </div>
          <Link
            href="/ipo"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-700 text-white text-xs font-semibold rounded-xl transition-all duration-150 flex-shrink-0 active:scale-[0.98]"
          >
            All upcoming IPOs →
          </Link>
        </div>

      </div>
    </section>
  );
}