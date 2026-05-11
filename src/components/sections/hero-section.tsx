import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { marketStats } from '@/data/site-data';

export function HeroSection() {
  return (
    <section className="bg-hero-grid pb-16 pt-12 sm:pb-20 sm:pt-16">
      <div className="container-shell grid items-center gap-10 lg:grid-cols-[1.1fr_.9fr]">
        <div>
          <span className="eyebrow">Built for modern investors</span>
          <h1 className="mt-6 max-w-4xl font-display text-4xl font-extrabold leading-tight tracking-tight text-brand-navy sm:text-5xl lg:text-6xl">
            Trade across equity, F&amp;O, currency, commodities, and IPOs in one trusted
            platform.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Designed as a premium broker website UI, this concept prioritizes trust,
            product discoverability, market clarity, calculators, and mobile-first
            conversion paths.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button>Start investing</Button>
            <Button variant="secondary">View products</Button>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            {[
              { value: '₹0*', label: 'For equity delivery' },
              { value: '4.8/5', label: 'Customer satisfaction' },
              { value: '24×7', label: 'Digital onboarding support' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-slate-200 bg-white/80 px-5 py-4 shadow-soft"
              >
                <p className="text-lg font-bold text-brand-navy">{stat.value}</p>
                <p className="text-sm text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-panel">
          <div className="rounded-[1.5rem] bg-brand-navy p-5 text-white">
            <div className="grid gap-4 sm:grid-cols-3">
              {marketStats.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-300">
                    {item.label}
                  </p>
                  <p className="mt-3 text-lg font-bold">{item.value}</p>
                  <p className="mt-1 text-sm font-semibold text-emerald-300">{item.change}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 grid gap-4 lg:grid-cols-[1.1fr_.9fr]">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-300">
                  Market momentum
                </p>
                <div className="mt-4 h-44 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 p-3">
                  <svg viewBox="0 0 100 40" className="h-full w-full" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="lineFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#fb923c" stopOpacity="0.45" />
                        <stop offset="100%" stopColor="#fb923c" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0 34 C8 32, 14 28, 20 27 S34 26, 40 20 S54 12, 60 16 S74 24, 80 14 S92 6, 100 8 L100 40 L0 40 Z"
                      fill="url(#lineFill)"
                    />
                    <path
                      d="M0 34 C8 32, 14 28, 20 27 S34 26, 40 20 S54 12, 60 16 S74 24, 80 14 S92 6, 100 8"
                      fill="none"
                      stroke="#fb923c"
                      strokeWidth="1.8"
                    />
                  </svg>
                </div>
              </div>

              <div className="grid gap-4">
                {[
                  'Margin available • Up to 5×',
                  'IPO this week • 06 active offers',
                  'Account opening • 6 min average',
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm font-semibold text-slate-100"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {[
                'Brokerage calculator • Estimate before you trade',
                'Investor protection • Transparent disclosures',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4 text-sm font-semibold text-slate-100"
                >
                  <span>{item}</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}