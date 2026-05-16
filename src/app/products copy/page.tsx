import Link from 'next/link';

const products = [
  { name: 'Equity', href: '/products/equity', desc: 'Stocks & Shares', color: 'bg-blue-50' },
  { name: 'F&O', href: '/products/fno', desc: 'Futures & Options', color: 'bg-purple-50' },
  { name: 'Commodities', href: '/products/commodities', desc: 'Gold, Silver & More', color: 'bg-amber-50' },
  { name: 'Currency', href: '/products/currency', desc: 'Forex Trading', color: 'bg-green-50' },
  { name: 'IPO', href: '/products/ipo', desc: 'Initial Public Offerings', color: 'bg-indigo-50' },
  { name: 'Mutual Funds', href: '/products/mutual-funds', desc: 'Systematic Investments', color: 'bg-pink-50' },
  { name: 'Life Insurance', href: '/products/life-insurance', desc: 'Financial Protection', color: 'bg-red-50' },
  { name: 'General Insurance', href: '/products/general-insurance', desc: 'Health, Vehicle & Home', color: 'bg-orange-50' },
  { name: 'Corporate FDs', href: '/products/corporate-fixed-deposits', desc: 'Fixed Income', color: 'bg-emerald-50' },
  { name: 'Bonds', href: '/products/bonds', desc: 'Government Securities', color: 'bg-cyan-50' },
  { name: 'Depository', href: '/products/depository-participant', desc: 'Demat Services', color: 'bg-slate-50' },
];

export default function ProductsPage() {
  return (
    <div className="container-shell section-space">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-brand-navy mb-4">Our Products</h1>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Explore our comprehensive range of financial products designed to help you achieve your investment goals
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Link key={product.href} href={product.href}>
            <div className={`rounded-3xl border border-slate-200 ${product.color} p-6 hover:shadow-lg transition-all cursor-pointer`}>
              <h3 className="text-xl font-bold text-brand-navy mb-2">{product.name}</h3>
              <p className="text-slate-600">{product.desc}</p>
              <div className="mt-4 text-brand-orange font-medium">Learn More →</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}