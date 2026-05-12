'use client';

import Link from 'next/link';
import { TrendingUp, BarChart2, Coins, BadgeDollarSign, Rocket, PieChart, ShieldCheck, Landmark, FileText, CreditCard, Globe, Smartphone } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { PRODUCTS, getKycUrl } from '@/data/site-data';

const ICON_MAP: Record<string, LucideIcon> = {
  TrendingUp, BarChart2, Coins, BadgeDollarSign, Rocket,
  PieChart, ShieldCheck, Landmark, FileText, CreditCard,
};

const HIGHLIGHT_STATS = [
  { value: '₹0',    label: 'Delivery brokerage'  },
  { value: '₹10',   label: 'Flat F&O charges'    },
  { value: '5 min', label: 'Account opening'      },
  { value: '10+',   label: 'Asset classes'        },
];

function ProductCard({ product, size }: { product: typeof PRODUCTS[0]; size: 'large' | 'medium' }) {
  const Icon = ICON_MAP[product.icon];
  const iconSize = size === 'large' ? 36 : 26;
  const imgHeight = size === 'large' ? 'h-44' : 'h-32';
  const iconWrap  = size === 'large' ? 'w-20 h-20 rounded-2xl' : 'w-14 h-14 rounded-xl';
  const titleSize = size === 'large' ? 'text-base' : 'text-sm';
  const descSize  = size === 'large' ? 'text-xs' : 'text-[11px]';

  return (
    <Link href={product.href}
      className="group relative bg-white rounded-2xl border border-[#E8E8E8] overflow-hidden hover:border-[#0066CC] hover:shadow-xl hover:shadow-[#0066CC]/8 transition-all duration-200 active:scale-[0.98] flex flex-col"
      style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* Illustrated top */}
      <div className={`relative ${imgHeight} bg-gradient-to-br ${product.accentBg} flex items-center justify-center overflow-hidden`}>
        <div aria-hidden="true" className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-white/40" />
        <div aria-hidden="true" className="absolute -bottom-8 -left-8 w-36 h-36 rounded-full bg-white/25" />
        <div className={`relative z-10 ${iconWrap} shadow-md flex items-center justify-center ${product.iconBg} ${product.iconColor} group-hover:scale-110 transition-transform duration-200`}>
          {Icon && <Icon size={iconSize} strokeWidth={1.5} aria-hidden="true" />}
        </div>
        {product.badge && (
          <span className="absolute top-3 right-3 text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#00C853] text-white shadow-sm">
            {product.badge}
          </span>
        )}
      </div>

      {/* Text */}
      <div className={`${size === 'large' ? 'p-5' : 'p-4'} flex flex-col flex-1`}>
        <div className="flex items-center gap-2 mb-1">
          <span className={`w-2 h-2 rounded-full flex-shrink-0 ${product.accentBar}`} />
          <h3 className={`${titleSize} font-bold text-[#1A1A2E] group-hover:text-[#0066CC] transition-colors duration-150`}>
            {product.name}
          </h3>
        </div>
        <p className={`${descSize} text-[#8B8B9A] leading-relaxed ml-4`}>{product.description}</p>
        {size === 'large' && (
          <div className="mt-auto pt-4">
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#0066CC] opacity-0 group-hover:opacity-100 transition-opacity duration-150">
              Explore <span aria-hidden="true">→</span>
            </span>
          </div>
        )}
      </div>
    </Link>
  );
}

export default function ProductsSection() {
  return (
    <section className="py-20 bg-[#F7F8FA]" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#0066CC] bg-[#EBF5FF] px-3 py-1 rounded-full mb-4">
            Everything you need
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A2E] tracking-[-0.02em] mb-3">
            One account, multiple investment options
          </h2>
          <p className="text-[#6B6B7B] text-base max-w-xl mx-auto">
            From your first stock to complex derivatives — every asset class that matters, all in one place.
          </p>
        </div>

        {/* Row 1 — 4 large cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {PRODUCTS.slice(0, 4).map((p) => <ProductCard key={p.name} product={p} size="large" />)}
        </div>

        {/* Row 2 — 4 medium cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
          {PRODUCTS.slice(4, 8).map((p) => <ProductCard key={p.name} product={p} size="medium" />)}
        </div>

        {/* Row 3 — 2 medium + 1 CTA card spanning 2 cols */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {PRODUCTS.slice(8, 10).map((p) => <ProductCard key={p.name} product={p} size="medium" />)}

          {/* Dark CTA card */}
          <div className="col-span-2 bg-[#1A1A2E] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 overflow-hidden relative">
            <div aria-hidden="true" className="absolute -top-8 -right-8 w-40 h-40 rounded-full blur-2xl"
              style={{ background: 'radial-gradient(circle, rgba(0,102,204,0.25) 0%, transparent 70%)' }} />
            <div className="relative z-10">
              <p className="text-white font-bold text-base mb-1">Ready to start investing?</p>
              <p className="text-[#8B8B9A] text-xs">Open a free demat account in 5 minutes. Zero charges · 10+ asset classes</p>
            </div>
            <Link href={getKycUrl('products')} target="_blank" rel="noopener noreferrer"
              className="relative z-10 flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-150 active:scale-[0.98] whitespace-nowrap"
              style={{ background: 'linear-gradient(135deg, #0066CC 0%, #004FA3 100%)' }}>
              Open Free Account →
            </Link>
          </div>
        </div>

        {/* Stats strip */}
        <div className="bg-[#1A1A2E] rounded-2xl px-6 py-5 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {HIGHLIGHT_STATS.map((stat, i) => (
            <div key={stat.label} className={`text-center ${i < HIGHLIGHT_STATS.length - 1 ? 'sm:border-r sm:border-[#2D2D4A]' : ''}`}>
              <p className="text-2xl font-bold text-white font-mono tracking-tight">{stat.value}</p>
              <p className="text-xs text-[#8B8B9A] mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Trading Tools Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">Our Trading Platforms</h2>
            <p className="text-[#6B6B7B]">Advanced tools for seamless trading experience</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-[#E8E8E8] hover:border-[#0066CC] transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0066CC] flex items-center justify-center">
                  <Globe size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#1A1A2E] mb-2">Web Trading Platform</h3>
                  <p className="text-sm text-[#6B6B7B] mb-3">Trade from anywhere with our powerful web-based platform</p>
                  <Link href="https://trade.wisdomcapital.in/#!/app" target="_blank" className="text-xs font-semibold text-[#0066CC]">
                    Access Web Platform →
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-[#E8E8E8] hover:border-[#0066CC] transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0066CC] flex items-center justify-center">
                  <Smartphone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#1A1A2E] mb-2">Mobile Trading App</h3>
                  <p className="text-sm text-[#6B6B7B] mb-3">Trade on the go with our feature-rich mobile application</p>
                  <Link href="https://play.google.com/store/search?q=wisdom+neo&c=apps&hl=en-IN" className="text-xs font-semibold text-[#0066CC]">
                    Download App →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}