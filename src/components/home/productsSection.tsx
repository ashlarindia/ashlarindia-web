'use client';

import Link from 'next/link';
import {
  TrendingUp,
  BarChart2,
  Coins,
  BadgeDollarSign,
  Rocket,
  PieChart,
  ShieldCheck,
  Landmark,
  FileText,
  CreditCard,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Product {
  name: string;
  href: string;
  description: string;
  Icon: LucideIcon;
  badge?: string;
  iconBg: string;
  iconColor: string;
  hoverBorder: string;
  hoverText: string;
}

interface StatItem {
  value: string;
  label: string;
}

const PRODUCTS: Product[] = [
  {
    name: 'Equity',
    href: '/equity',
    description: 'Stocks & ETFs',
    Icon: TrendingUp,
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    hoverBorder: 'hover:border-blue-300',
    hoverText: 'group-hover:text-blue-700',
  },
  {
    name: 'F&O',
    href: '/fo',
    description: 'Futures & options',
    Icon: BarChart2,
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-600',
    hoverBorder: 'hover:border-purple-300',
    hoverText: 'group-hover:text-purple-700',
  },
  {
    name: 'Commodities',
    href: '/commodities',
    description: 'Gold, silver & oil',
    Icon: Coins,
    badge: 'MCX',
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-600',
    hoverBorder: 'hover:border-amber-300',
    hoverText: 'group-hover:text-amber-700',
  },
  {
    name: 'Currency',
    href: '/currency',
    description: 'Forex trading',
    Icon: BadgeDollarSign,
    iconBg: 'bg-teal-50',
    iconColor: 'text-teal-600',
    hoverBorder: 'hover:border-teal-300',
    hoverText: 'group-hover:text-teal-700',
  },
  {
    name: 'IPO',
    href: '/ipo',
    description: 'New listings',
    Icon: Rocket,
    badge: 'Hot',
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    hoverBorder: 'hover:border-emerald-300',
    hoverText: 'group-hover:text-emerald-700',
  },
  {
    name: 'Mutual Funds',
    href: '/mutual-funds',
    description: 'SIP & lumpsum',
    Icon: PieChart,
    iconBg: 'bg-indigo-50',
    iconColor: 'text-indigo-600',
    hoverBorder: 'hover:border-indigo-300',
    hoverText: 'group-hover:text-indigo-700',
  },
  {
    name: 'Life Insurance',
    href: '/insurance',
    description: 'Term & health',
    Icon: ShieldCheck,
    iconBg: 'bg-red-50',
    iconColor: 'text-red-500',
    hoverBorder: 'hover:border-red-300',
    hoverText: 'group-hover:text-red-700',
  },
  {
    name: 'Corporate FD',
    href: '/corporate-fds',
    description: 'Fixed deposits',
    Icon: Landmark,
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-600',
    hoverBorder: 'hover:border-orange-300',
    hoverText: 'group-hover:text-orange-700',
  },
  {
    name: 'Bonds',
    href: '/bonds',
    description: 'Govt & PSU bonds',
    Icon: FileText,
    iconBg: 'bg-slate-100',
    iconColor: 'text-slate-600',
    hoverBorder: 'hover:border-slate-400',
    hoverText: 'group-hover:text-slate-800',
  },
  {
    name: 'DP Services',
    href: '/dp',
    description: 'Demat & custody',
    Icon: CreditCard,
    iconBg: 'bg-cyan-50',
    iconColor: 'text-cyan-600',
    hoverBorder: 'hover:border-cyan-300',
    hoverText: 'group-hover:text-cyan-700',
  },
];

const HIGHLIGHT_STATS: StatItem[] = [
  { value: '₹0',    label: 'Delivery brokerage' },
  { value: '₹10',   label: 'Flat F&O charges'   },
  { value: '5 min', label: 'Account opening'     },
  { value: '10+',   label: 'Asset classes'       },
];

export default function ProductsSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-4">
            Everything you need
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-3">
            Products &amp; services
          </h2>
          <p className="text-slate-500 text-base max-w-xl mx-auto">
            From your first stock to complex derivatives — one account, one
            platform, every asset class that matters.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-12">
          {PRODUCTS.map((product) => {
            const { Icon } = product;

            return (
              <Link
                key={product.name}
                href={product.href}
                className={[
                  'group relative bg-white rounded-2xl border border-slate-200 p-4',
                  'text-center flex flex-col items-center gap-3',
                  'transition-all duration-200 active:scale-[0.97] hover:shadow-md',
                  product.hoverBorder,
                ].join(' ')}
              >
                {/* Badge — only rendered when defined */}
                {product.badge && (
                  <span className="absolute top-2.5 right-2.5 text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-100">
                    {product.badge}
                  </span>
                )}

                {/* Icon circle */}
                <div
                  className={[
                    'w-11 h-11 rounded-xl flex items-center justify-center',
                    'transition-colors duration-200',
                    product.iconBg,
                    product.iconColor,
                  ].join(' ')}
                >
                  {/* ✅ Fix: lucide-react Icon component — works without any font/CDN setup */}
                  <Icon size={20} strokeWidth={1.75} aria-hidden="true" />
                </div>

                {/* Label */}
                <div>
                  <p
                    className={[
                      'text-sm font-semibold text-slate-800 transition-colors duration-150',
                      product.hoverText,
                    ].join(' ')}
                  >
                    {product.name}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {product.description}
                  </p>
                </div>

                {/* Hover arrow */}
                <span className="text-xs text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-150 -mt-1">
                  Explore →
                </span>
              </Link>
            );
          })}
        </div>

        {/* Stats strip */}
        <div className="bg-slate-900 rounded-2xl px-6 py-5 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {HIGHLIGHT_STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={[
                'text-center',
                // ✅ Fix: full class strings so Tailwind never purges them
                i < HIGHLIGHT_STATS.length - 1
                  ? 'sm:border-r sm:border-slate-700'
                  : '',
              ].join(' ')}
            >
              <p className="text-2xl font-bold text-white font-mono tracking-tight">
                {stat.value}
              </p>
              <p className="text-xs text-slate-400 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10">
          <Link
            href="https://kyc.wisdomcapital.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white text-sm font-semibold rounded-xl transition-all duration-150"
          >
            Open free account — access all products
            <span aria-hidden="true">→</span>
          </Link>
          <p className="text-xs text-slate-400 mt-3">
            Zero account opening charges · No AMC for first year
          </p>
        </div>

      </div>
    </section>
  );
}