// src/components/home/CalculatorsSection.tsx
'use client';

import Link from 'next/link';
import { Calculator, TrendingUp } from 'lucide-react';

export default function CalculatorsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A2E] mb-2">
            Trading Calculators
          </h2>
          <p className="text-[#6B6B7B] text-sm">
            Plan your trades with our free calculators
          </p>
        </div>

        {/* Two Button Options */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Brokerage Calculator Button */}
          <Link
            href="/calculators"
            className="group w-full sm:w-64 flex items-center justify-center gap-3 px-6 py-4 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-xl transition-all duration-200 hover:shadow-md"
          >
            <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">
              <Calculator size={20} className="text-white" />
            </div>
            <div className="text-left">
              <p className="font-semibold text-[#1A1A2E] text-sm">Brokerage</p>
              <p className="text-xs text-[#6B6B7B]">Calculate charges</p>
            </div>
          </Link>

          {/* Margin Calculator Button */}
          <Link
            href="/calculators"
            className="group w-full sm:w-64 flex items-center justify-center gap-3 px-6 py-4 bg-green-50 hover:bg-green-100 border border-green-200 rounded-xl transition-all duration-200 hover:shadow-md"
          >
            <div className="w-10 h-10 rounded-lg bg-green-600 flex items-center justify-center">
              <TrendingUp size={20} className="text-white" />
            </div>
            <div className="text-left">
              <p className="font-semibold text-[#1A1A2E] text-sm">Margin</p>
              <p className="text-xs text-[#6B6B7B]">Check requirements</p>
            </div>
          </Link>
        </div>

        {/* Optional: Small note */}
        <p className="text-center text-xs text-[#8B8B9A] mt-6">
          Instant calculations • No hidden charges • Updated regularly
        </p>
      </div>
    </section>
  );
}