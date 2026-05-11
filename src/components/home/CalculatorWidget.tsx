'use client';

import Link from 'next/link';
import {
  Calculator,
  TrendingUp,
  ArrowRight,
  IndianRupee,
  BarChart2,
  Clock,
  ShieldCheck,
} from 'lucide-react';

interface CalcCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  internalHref: string;
  externalHref: string;
  Icon: typeof Calculator;
  accentBg: string;
  accentText: string;
  accentBorder: string;
  chipBg: string;
  chipText: string;
  topBar: string;
}

const CALC_CARDS: CalcCard[] = [
  {
    id: 'brokerage',
    title: 'Brokerage Calculator',
    subtitle: 'Know your exact cost before trading',
    description:
      'Calculate total brokerage, STT, GST, SEBI turnover fees, stamp duty, and exchange charges for any trade — across Equity, F&O, Commodity, and Currency segments.',
    features: [
      'Equity delivery & intraday',
      'Futures & options (F&O)',
      'MCX commodity trades',
      'Currency derivatives',
    ],
    internalHref: '/brokerage-calculator',
    externalHref: 'https://calc.wisdomtreeventures.com/',
    Icon: IndianRupee,
    accentBg: 'bg-blue-50',
    accentText: 'text-blue-600',
    accentBorder: 'border-t-blue-600',
    chipBg: 'bg-blue-50',
    chipText: 'text-blue-700',
    topBar: 'bg-blue-600',
  },
  {
    id: 'margin',
    title: 'Margin Calculator',
    subtitle: 'Check margin before you place an order',
    description:
      'Instantly calculate SPAN margin, exposure margin, and total required margin for F&O, equity intraday, and currency trades. Supports all major NSE and BSE instruments.',
    features: [
      'SPAN + exposure margin',
      'F&O position sizing',
      'Equity intraday margin',
      'Currency & commodity',
    ],
    internalHref: '/margin-calculator',
    externalHref: 'https://calc.wisdomtreeventures.com/margin/',
    Icon: BarChart2,
    accentBg: 'bg-teal-50',
    accentText: 'text-teal-600',
    accentBorder: 'border-t-teal-600',
    chipBg: 'bg-teal-50',
    chipText: 'text-teal-700',
    topBar: 'bg-teal-600',
  },
];

const BOTTOM_STATS = [
  { Icon: Clock,       text: 'Results in under 1 second'      },
  { Icon: ShieldCheck, text: 'NSE & BSE official charge rates' },
  { Icon: TrendingUp,  text: 'Updated for latest STT & GST'   },
];

export default function CalculatorWidget() {
  return (
    <section className="py-20 bg-white" id="calculators">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-4">
            Free Tools
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-3">
            Trading calculators
          </h2>
          <p className="text-slate-500 text-base max-w-lg mx-auto">
            Plan every trade with precision. Know your exact costs and required
            margin before you place a single order.
          </p>
        </div>

        {/* Calculator cards */}
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {CALC_CARDS.map((calc) => {
            const { Icon } = calc;

            return (
              <div
                key={calc.id}
                className={[
                  'group bg-white rounded-2xl border border-slate-200',
                  'border-t-4 hover:border-slate-300 hover:shadow-lg',
                  'transition-all duration-200 overflow-hidden flex flex-col',
                  calc.accentBorder,
                ].join(' ')}
              >
                <div className="p-7 flex flex-col flex-1">

                  {/* Icon + chip */}
                  <div className="flex items-start justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${calc.accentBg} ${calc.accentText}`}>
                      <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
                    </div>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${calc.chipBg} ${calc.chipText}`}>
                      Free · No login
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 mb-1">
                    {calc.title}
                  </h3>
                  <p className={`text-sm font-medium mb-3 ${calc.accentText}`}>
                    {calc.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-slate-500 leading-relaxed mb-5">
                    {calc.description}
                  </p>

                  {/* Feature list */}
                  <ul className="space-y-2 mb-6 flex-1">
                    {calc.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2.5 text-sm text-slate-600">
                        <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0 ${calc.accentBg} ${calc.accentText}`}>
                          ✓
                        </span>
                        {feat}
                      </li>
                    ))}
                  </ul>

                  {/* Divider */}
                  <div className="border-t border-slate-100 pt-5 flex flex-col sm:flex-row gap-3">

                    {/* Primary — internal page */}
                    <Link
                      href={calc.internalHref}
                      className={[
                        'flex-1 flex items-center justify-center gap-2',
                        'py-3 rounded-xl text-sm font-semibold',
                        'transition-all duration-150 active:scale-[0.98]',
                        calc.id === 'brokerage'
                          ? 'bg-blue-600 hover:bg-blue-700 text-white'
                          : 'bg-teal-600 hover:bg-teal-700 text-white',
                      ].join(' ')}
                    >
                      <Calculator size={15} aria-hidden="true" />
                      Open calculator
                    </Link>

                    {/* Secondary — external full tool */}
                    <a
                      href={calc.externalHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl text-sm font-semibold border border-slate-200 hover:border-slate-300 text-slate-600 hover:text-slate-900 transition-all duration-150 bg-slate-50 hover:bg-slate-100"
                    >
                      Full tool
                      <ArrowRight size={13} aria-hidden="true" />
                    </a>

                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom stats strip */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl px-6 py-5 flex flex-wrap justify-center gap-8">
          {BOTTOM_STATS.map(({ Icon, text }) => (
            <div key={text} className="flex items-center gap-2.5 text-sm text-slate-500">
              <Icon size={16} className="text-blue-500 flex-shrink-0" aria-hidden="true" />
              {text}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}