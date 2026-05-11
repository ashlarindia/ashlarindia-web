'use client';

import { useEffect, useState } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface Stock {
  name: string;
  price: number;
  change: number;
  changePercent: number;
}

const mockStocks: Stock[] = [
  { name: 'NIFTY 50', price: 22450.30, change: 124.50, changePercent: 0.56 },
  { name: 'SENSEX', price: 73950.80, change: 345.20, changePercent: 0.47 },
  { name: 'BANK NIFTY', price: 48250.60, change: -125.30, changePercent: -0.26 },
  { name: 'RELIANCE', price: 2856.40, change: 45.20, changePercent: 1.61 },
  { name: 'HDFC BANK', price: 1680.30, change: -12.50, changePercent: -0.74 },
  { name: 'INFY', price: 1560.75, change: 28.40, changePercent: 1.85 },
  { name: 'ICICI BANK', price: 1120.50, change: 15.30, changePercent: 1.38 },
  { name: 'TCS', price: 3890.20, change: -35.60, changePercent: -0.91 },
];

export default function MarketStrip() {
  const [mounted, setMounted] = useState(false);
  const [stocks] = useState<Stock[]>(mockStocks);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="bg-slate-900 border-y border-slate-800 overflow-hidden">
        <div className="flex whitespace-nowrap py-3">
          <div className="inline-flex items-center gap-3 mx-6">
            <span className="font-semibold text-white">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-900 border-y border-slate-800 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap py-3">
        {[...stocks, ...stocks].map((stock, idx) => (
          <div key={idx} className="inline-flex items-center gap-3 mx-6">
            <span className="font-semibold text-white">{stock.name}</span>
            <span className="text-white">{stock.price.toFixed(2)}</span>
            <span className={`flex items-center gap-1 ${stock.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
              {stock.change >= 0 ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
              {stock.change >= 0 ? '+' : ''}{stock.change.toFixed(2)}
              <span className="text-xs">
                ({stock.changePercent >= 0 ? '+' : ''}{stock.changePercent.toFixed(2)}%)
              </span>
            </span>
          </div>
        ))}
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
}