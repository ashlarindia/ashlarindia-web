import Link from 'next/link';

export default function EquityPage() {
  return (
    <div className="container-shell ">
      {/* Breadcrumb */}
      
      <div className="grid gap-8 lg:grid-cols-2 items-start mb-12">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-600 mb-4">
            Trading
          </div>
          <h1 className="text-4xl font-bold text-brand-navy mb-4">
            Equity Trading<br />
            <span className="text-brand-orange">Made Simple</span>
          </h1>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Invest in stocks of top Indian companies on NSE & BSE. 
            Get real-time market data, advanced charting tools, and research reports.
          </p>
          <div className="flex gap-4">
            <button className="px-6 py-2.5 bg-brand-orange text-white rounded-lg font-medium hover:bg-brand-orange/90">
              Open Demat Account
            </button>
            <button className="px-6 py-2.5 border border-slate-200 text-slate-700 rounded-lg font-medium hover:bg-slate-50">
              View Charges
            </button>
          </div>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-3xl text-center">
          <p className="text-slate-500 mb-2">Start Investing from</p>
          <p className="text-4xl font-bold text-brand-orange">₹500</p>
          <p className="text-sm text-slate-500 mt-2">brokerage as low as ₹10 per trade</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3 mb-12">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 text-center">
          <h3 className="font-bold text-brand-navy mb-2">Low Brokerage</h3>
          <p className="text-sm text-slate-600">Starting from just ₹10 per trade</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 text-center">
          <h3 className="font-bold text-brand-navy mb-2">Fast Execution</h3>
          <p className="text-sm text-slate-600">Lightning-fast order execution</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 text-center">
          <h3 className="font-bold text-brand-navy mb-2">Advanced Tools</h3>
          <p className="text-sm text-slate-600">Professional charting & indicators</p>
        </div>
      </div>

      <div className="text-center p-8 bg-gradient-to-r from-brand-orange/10 to-orange-50 rounded-3xl">
        <h3 className="text-2xl font-bold text-brand-navy mb-2">Ready to Start?</h3>
        <p className="text-slate-600 mb-4">Open your Demat account in 5 minutes</p>
        <button className="px-6 py-2.5 bg-brand-orange text-white rounded-lg font-medium">
          Open Account Now
        </button>
      </div>
    </div>
  );
}