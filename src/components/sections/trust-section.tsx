export function TrustSection() {
  return (
    <section id="trust" className="pb-16 sm:pb-20 lg:pb-24">
      <div className="container-shell grid gap-6 lg:grid-cols-2">
        <article className="card-surface p-8">
          <span className="eyebrow">Trust signals</span>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl">
            A broker website must show confidence through transparency.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
            Place compliance links, investor grievance details, secure onboarding language, and support availability above the fold and in the footer.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              ['99.9%', 'Platform uptime target'],
              ['1 day', 'Average response window'],
              ['100%', 'Digital document flow'],
            ].map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-2xl font-bold text-brand-navy">{value}</p>
                <p className="mt-2 text-sm text-slate-600">{label}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="card-surface p-8">
          <p className="text-sm text-slate-500">Recommended footer trust blocks</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {['Regulatory disclosures', 'Investor charter', 'Complaint process', 'Downloads & forms'].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-4 py-5 text-center text-sm font-semibold text-slate-600"
              >
                {item}
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
            <p className="font-semibold text-brand-navy">Why it works</p>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Fintech users trust websites that explain process, pricing, and compliance clearly before asking for signup.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}