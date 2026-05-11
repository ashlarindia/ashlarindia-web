import { calculators } from '@/data/site-data';

export function CalculatorsSection() {
  return (
    <section id="calculators" className="section-space">
      <div className="container-shell">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="eyebrow">Calculators</span>
            <h2 className="section-title mt-4">
              Interactive cost and margin tools improve trust before signup.
            </h2>
          </div>
          <p className="section-copy">
            Broker sites need working calculators in prominent positions because users compare fees, margins, and trade outcomes before opening accounts.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {calculators.map((calculator, index) => (
            <article
              key={calculator.title}
              id={index === 2 ? 'open-account' : undefined}
              className="card-surface p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-slate-500">{calculator.label}</p>
                  <h3 className="mt-2 text-2xl font-bold">{calculator.title}</h3>
                </div>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
                  {calculator.badge}
                </span>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {calculator.fields.map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                      {label}
                    </p>
                    <p className="mt-3 text-sm font-semibold text-brand-navy">{value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between rounded-2xl bg-orange-50 px-5 py-4">
                <span className="text-sm font-semibold text-slate-600">
                  {calculator.resultLabel}
                </span>
                <span className="text-lg font-bold text-brand-orange">
                  {calculator.resultValue}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}