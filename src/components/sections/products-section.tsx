import { BarChart3, CandlestickChart, CircleDollarSign, Landmark } from 'lucide-react';
import { products } from '@/data/site-data';

const icons = [BarChart3, CandlestickChart, CircleDollarSign, Landmark];

export function ProductsSection() {
  return (
    <section id="products" className="section-space">
      <div className="container-shell">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="eyebrow">Products</span>
            <h2 className="section-title mt-4">Trading products arranged for fast discovery.</h2>
          </div>
          <p className="section-copy">
            Each card gives users a direct route into the product they care about, instead of making them scan long text-heavy pages.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {products.map((product, index) => {
            const Icon = icons[index];
            return (
              <article key={product.title} className="card-surface p-6">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-orange-50 text-brand-orange">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-bold">{product.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{product.description}</p>
                <div className="mt-6 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  <span>{product.audience}</span>
                  <span>→</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}