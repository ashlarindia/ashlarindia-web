export function IpoSection() {
  return (
    <section className="pb-16 sm:pb-20 lg:pb-24">
      <div className="container-shell grid gap-6 lg:grid-cols-[1.05fr_.95fr]">
        <div className="rounded-[2rem] bg-gradient-to-br from-brand-navy to-blue-950 p-8 text-white shadow-panel">
          <span className="eyebrow border-white/10 bg-white/5 text-white">IPO experience</span>
          <h2 className="mt-5 max-w-lg font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            IPO discovery should feel like a premium product, not a static list.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
            Use visual offer cards, timeline chips, lot information, and issue status blocks so new investors can understand opportunities quickly.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              ['Open / Upcoming', 'Segment by issue stage for instant scanning.'],
              ['Key dates', 'Open, close, allotment, listing in one row.'],
              ['Lot size', 'Display minimum investment clearly.'],
              ['Apply CTA', 'Single direct action from each card.'],
            ].map(([title, description]) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="font-semibold text-white">{title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">{description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-6">
          <article className="card-surface p-6">
            <p className="text-sm text-slate-500">Live IPO</p>
            <h3 className="mt-2 text-2xl font-bold">Nova Energy Limited</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Price band ₹138–₹145 • Lot size 103 shares • Retail category open now.
            </p>
            <div className="mt-6 flex items-center justify-between rounded-2xl bg-orange-50 px-5 py-4 text-sm font-semibold text-brand-orange">
              <span>Status</span>
              <span>Open</span>
            </div>
          </article>

          <article className="card-surface p-6">
            <p className="text-sm text-slate-500">Upcoming IPO</p>
            <h3 className="mt-2 text-2xl font-bold">Urban Infra REIT</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Anchor allocation next week with pre-issue interest indicators and timetable preview.
            </p>
            <div className="mt-6 flex items-center justify-between text-sm font-semibold text-slate-500">
              <span>Opens in 3 days</span>
              <span>Track issue</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}