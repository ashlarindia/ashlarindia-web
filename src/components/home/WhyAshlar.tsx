'use client';

import Link from 'next/link';
import {
  ShieldCheck,
  IndianRupee,
  Headphones,
  Zap,
  BarChart2,
  Lock,
  Globe,
  Award,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Feature {
  title: string;
  desc: string;
  Icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  accentBorder: string;
  tag?: string;
}

const FEATURES: Feature[] = [
  {
    title: 'SEBI registered broker',
    desc: 'Fully regulated with NSE, BSE & MCX memberships. Your funds are held in segregated client accounts — always protected.',
    Icon: ShieldCheck,
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    accentBorder: 'border-t-emerald-500',
    tag: 'Regulated',
  },
  {
    title: 'Flat ₹10 brokerage',
    desc: 'One flat fee for intraday, F&O, and currency trades. Zero brokerage on equity delivery. No hidden charges, ever.',
    Icon: IndianRupee,
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    accentBorder: 'border-t-blue-500',
    tag: 'Best price',
  },
  {
    title: '24/7 dedicated support',
    desc: 'Reach our expert team via phone, email, or chat. Average response time under 2 minutes during market hours.',
    Icon: Headphones,
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-600',
    accentBorder: 'border-t-purple-500',
  },
  {
    title: 'Open account in 5 min',
    desc: 'Fully paperless KYC with Aadhaar & PAN. Get your demat account approved and start trading the same day.',
    Icon: Zap,
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-600',
    accentBorder: 'border-t-amber-500',
    tag: 'Instant',
  },
  {
    title: 'Advanced trading platform',
    desc: 'Web, mobile & desktop apps with real-time charts, 100+ indicators, options chain, and algo trading support.',
    Icon: BarChart2,
    iconBg: 'bg-indigo-50',
    iconColor: 'text-indigo-600',
    accentBorder: 'border-t-indigo-500',
  },
  {
    title: 'Bank-grade security',
    desc: '256-bit SSL encryption, 2-factor authentication, and biometric login. ISO 27001 certified infrastructure.',
    Icon: Lock,
    iconBg: 'bg-red-50',
    iconColor: 'text-red-500',
    accentBorder: 'border-t-red-500',
  },
  {
    title: 'Pan-India presence',
    desc: '50+ branches across India with experienced relationship managers for personalised investment guidance.',
    Icon: Globe,
    iconBg: 'bg-teal-50',
    iconColor: 'text-teal-600',
    accentBorder: 'border-t-teal-500',
  },
  {
    title: '15 years of trust',
    desc: 'Serving 50,000+ investors since 2009. Consistently rated among India\'s top discount brokers.',
    Icon: Award,
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-600',
    accentBorder: 'border-t-orange-500',
    tag: '★ Top rated',
  },
];

export default function WhyAshlar() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-4">
            Why Ashlar India
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-3">
            Built for confident investors
          </h2>
          <p className="text-slate-500 text-base max-w-xl mx-auto">
            Everything you need to trade smarter — transparent pricing, powerful
            tools, and a team that puts you first.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {FEATURES.map((feature) => {
            const { Icon } = feature;

            return (
              <div
                key={feature.title}
                className={[
                  'group relative bg-white rounded-2xl border border-slate-200',
                  'border-t-2 p-6 hover:shadow-md hover:border-slate-300',
                  'transition-all duration-200',
                  feature.accentBorder,
                ].join(' ')}
              >
                {/* Optional badge */}
                {feature.tag && (
                  <span className="absolute top-4 right-4 text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-500 border border-slate-200">
                    {feature.tag}
                  </span>
                )}

                {/* Icon */}
                <div
                  className={[
                    'w-11 h-11 rounded-xl flex items-center justify-center mb-4',
                    feature.iconBg,
                    feature.iconColor,
                  ].join(' ')}
                >
                  <Icon size={20} strokeWidth={1.75} aria-hidden="true" />
                </div>

                {/* Content */}
                <h3 className="text-sm font-bold text-slate-900 mb-2 leading-snug">
                  {feature.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA row */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <p className="text-base font-bold text-slate-900 mb-1">
              Ready to start investing?
            </p>
            <p className="text-sm text-slate-500">
              Join 50,000+ investors — open your free demat account in 5 minutes.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 flex-shrink-0">
            <Link
              href="https://kyc.wisdomcapital.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white text-sm font-semibold rounded-xl transition-all duration-150"
            >
              Open free account →
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-slate-100 border border-slate-300 text-slate-700 text-sm font-semibold rounded-xl transition-all duration-150"
            >
              Explore products
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}