import { tickerHighlights } from '@/data/site-data';

export function MarketStrip() {
  return (
    <section id="markets" className="pb-6">
      <div className="container-shell">
        <div className="grid gap-4 rounded-3xl border border-slate-200 bg-white p-4 shadow-soft md:grid-cols-2 xl:grid-cols-4">
          {tickerHighlights.map((item) => (
            <div key={item.label} className="flex items-center justify-between gap-4 rounded-2xl px-2 py-3">
              <div>
                <p className="text-sm text-slate-500">{item.label}</p>
                <p className="mt-1 font-semibold text-brand-navy">{item.value}</p>
              </div>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}