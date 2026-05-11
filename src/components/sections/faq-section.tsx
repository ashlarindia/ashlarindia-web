import { faqItems } from '@/data/site-data';

export function FaqSection() {
  return (
    <section id="faqs" className="section-space">
      <div className="container-shell">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="eyebrow">FAQs</span>
            <h2 className="section-title mt-4">Simple answers reduce hesitation.</h2>
          </div>
          <p className="section-copy">
            FAQ blocks work well near calculators and onboarding sections because they solve objections at the point of decision.
          </p>
        </div>

        <div className="mt-10 grid gap-4">
          {faqItems.map((item) => (
            <article key={item.question} className="card-surface p-6">
              <h3 className="text-lg font-bold text-brand-navy">{item.question}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}