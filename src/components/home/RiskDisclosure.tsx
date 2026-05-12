// src/components/home/RiskDisclosure.tsx
'use client';

export default function RiskDisclosure() {
  return (
    <section className="py-10 bg-[#1A1A2E] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h3 className="text-base font-bold mb-3 text-[#FF3B30]">
          Risk Disclosure on Derivatives
        </h3>
        <div className="space-y-1 text-[#C0C0D0] text-xs leading-relaxed">
          <p>• 9 out of 10 individual traders in equity Futures and Options Segment, incurred net losses.</p>
          <p>• On an average, loss makers registered net trading loss close to ₹ 50,000.</p>
          <p>• Over and above the net trading losses incurred, loss makers expended an additional 28% of net trading losses as transaction costs.</p>
          <p>• Those making net trading profits, incurred between 15% to 50% of such profits as transaction cost.</p>
          <p className="mt-3 text-[#8B8B9A] text-xs">
            Source: SEBI Study. Data available on request.
          </p>
          <p className="mt-3 text-[#8B8B9A] text-xs">
            <span className="font-semibold">Disclaimer:</span> Trading in stock markets involves risk. 
            Please read all related documents carefully before investing. Past performance doesn't guarantee future returns.
          </p>
        </div>
      </div>
    </section>
  );
}