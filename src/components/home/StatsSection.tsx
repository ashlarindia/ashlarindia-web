'use client';
import { COMPANY_STATS } from '@/data/site-data';

export default function StatsSection() {
  return (
    <section className="py-16 bg-white border-b border-[#E8E8E8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {COMPANY_STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-[#0066CC]">{stat.value}</p>
              <p className="text-sm text-[#6B6B7B] mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A2E] mb-4">
            Leading financial service provider
          </h2>
          <p className="text-[#6B6B7B] text-sm leading-relaxed">
            Ashlar India is one of the quickest growing Stock Broking companies in India, 
            providing you with the appropriate guidance in this exciting world of the Stock Market. 
            With memberships on NSE, BSE, MCX, and as a Depository Participant with CDSL, 
            we are on a mission to empower every Indian to invest and trade with confidence.
          </p>
        </div>
      </div>
    </section>
  );
}