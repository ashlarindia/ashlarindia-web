import { Button } from '@/components/ui/button';

export function CtaSection() {
  return (
    <section className="pb-20">
      <div className="container-shell">
        <div className="grid gap-6 rounded-[2rem] border border-orange-200 bg-gradient-to-r from-orange-50 to-white p-8 shadow-panel lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div>
            <span className="eyebrow">Lead generation</span>
            <h2 className="mt-4 max-w-2xl font-display text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl">
              Open a trading and demat account with a cleaner, faster fintech experience.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
              This final section is designed as the last conversion checkpoint, combining trust language with a simple contact form.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <input
              type="text"
              placeholder="Enter your mobile number"
              className="min-h-12 flex-1 rounded-full border border-slate-200 bg-white px-5 text-sm text-slate-900 outline-none placeholder:text-slate-400"
            />
            <Button className="sm:px-8">Get callback</Button>
          </div>
        </div>
      </div>
    </section>
  );
}