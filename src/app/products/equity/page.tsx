"use client";

import Link from "next/link";
import {
  TrendingUp,
  Shield,
  Zap,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Clock,
  LineChart,
} from "lucide-react";

export default function EquityPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1A1A2E] to-[#2D2D4A] py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 border border-white/10 bg-white/5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00C853] animate-pulse" />
              <span className="text-[#C0C0D0] text-xs font-medium">
                Equity · Stocks · Shares
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Equity Trading
            </h1>
            <p className="text-[#9B9BAA] text-lg mb-8">
              शेयर मार्केट में निवेश करें और बनाएं अपनी संपत्ति | Invest in
              stocks and build long-term wealth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://kyc.wisdomcapital.in/"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0066CC] text-white rounded-lg font-semibold hover:bg-[#0052A3]"
              >
                Open Free Account <ArrowRight size={18} />
              </Link>
              <Link
                href="/calculators"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/10"
              >
                Calculate Brokerage
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is Equity */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#1A1A2E] mb-4">
                Equity Kya Hai? (What is Equity?)
              </h2>
              <p className="text-[#6B6B7B] mb-4 leading-relaxed">
                Equity market companies ko capital raise करने का मौका देता है और
                investors को profit कमाने का अवसर प्रदान करता है। NSE, BSE और
                MCX-SX जैसे stock exchanges पर shares trade किए जाते हैं।
              </p>
              <p className="text-[#6B6B7B] mb-6 leading-relaxed">
                जब आप किसी company के share खरीदते हैं, तो आप उस company के
                part-owner बन जाते हैं। अगर company अच्छा perform करती है, तो
                आपको share की value बढ़ने से profit होता है।
              </p>
              <div className="bg-blue-50 rounded-xl p-4 border-l-4 border-[#0066CC]">
                <p className="text-sm text-[#1A1A2E] font-medium">
                  💡 Pro Tip: अच्छी companies में long-term निवेश करें और
                  compounding का फायदा उठाएं।
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
                <TrendingUp size={32} className="text-[#00C853] mx-auto mb-2" />
                <div className="text-xl font-bold text-[#1A1A2E]">15%+</div>
                <div className="text-xs text-gray-500">
                  Average Annual Returns
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
                <Shield size={32} className="text-[#0066CC] mx-auto mb-2" />
                <div className="text-xl font-bold text-[#1A1A2E]">SEBI</div>
                <div className="text-xs text-gray-500">Regulated Market</div>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
                <Zap size={32} className="text-yellow-500 mx-auto mb-2" />
                <div className="text-xl font-bold text-[#1A1A2E]">T+1</div>
                <div className="text-xs text-gray-500">Settlement</div>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
                <LineChart size={32} className="text-purple-500 mx-auto mb-2" />
                <div className="text-xl font-bold text-[#1A1A2E]">24/7</div>
                <div className="text-xs text-gray-500">Market Access</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-[#1A1A2E] text-center mb-4">
            Equity Investment Ke Fayde (Benefits)
          </h2>
          <p className="text-center text-[#6B6B7B] mb-12">
            Why should you invest in equities?
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Long Term Capital Growth",
                desc: "समय के साथ share की value बढ़ने से अच्छा return मिलता है",
              },
              {
                title: "High Liquidity",
                desc: "कभी भी shares को खरीदें या बेचें, पैसा आसानी से मिल जाता है",
              },
              {
                title: "Dividend Income",
                desc: "कंपनी के मुनाफे में से आपको dividend मिलता है",
              },
              {
                title: "Ownership Benefits",
                desc: "कंपनी के part-owner होने के फायदे, जैसे voting rights",
              },
              {
                title: "Tax Benefits",
                desc: "Long term capital gains पर LTCG tax सिर्फ 10%",
              },
              {
                title: "Portfolio Diversification",
                desc: "अलग-अलग companies में invest करके risk कम करें",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl"
              >
                <CheckCircle2
                  size={20}
                  className="text-[#00C853] flex-shrink-0 mt-0.5"
                />
                <div>
                  <h3 className="font-semibold text-[#1A1A2E] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#6B6B7B]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trading Segments */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-[#1A1A2E] text-center mb-4">
            Trading Segments
          </h2>
          <p className="text-center text-[#6B6B7B] mb-12">
            अपने style के हिसाब से trading करें
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Intraday Trading",
                desc: "एक ही दिन में shares खरीदें और बेचें",
                time: "Same Day",
                icon: Clock,
              },
              {
                title: "Delivery Trading",
                desc: "शेयर खरीदें और अपने पास रखें",
                time: "Long Term",
                icon: TrendingUp,
              },
              {
                title: "Futures",
                desc: "Future date पर buy/sell करने का agreement",
                time: "Monthly",
                icon: BarChart3,
              },
              {
                title: "Options",
                desc: "Right to buy or sell, no obligation",
                time: "Weekly/Monthly",
                icon: Shield,
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition-all"
                >
                  <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon size={28} className="text-[#0066CC]" />
                  </div>
                  <h3 className="font-bold text-[#1A1A2E] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#6B6B7B] mb-2">{item.desc}</p>
                  <span className="text-xs text-[#00C853] font-medium">
                    {item.time}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Brokerage Table */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-[#1A1A2E] text-center mb-4">
            Brokerage Charges
          </h2>
          <p className="text-center text-[#6B6B7B] mb-8">
            सिर्फ ₹10 प्रति order, कोई hidden charges नहीं
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-[#1A1A2E]">
                  <th className="text-left py-4 px-6 text-white">Segment</th>
                  <th className="text-left py-4 px-6 text-white">Brokerage</th>
                  <th className="text-left py-4 px-6 text-white">Charges</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 font-medium">Equity Delivery</td>
                  <td className="py-4 px-6 text-[#00C853] font-semibold">₹0</td>
                  <td className="py-4 px-6 text-gray-500">
                    Free Delivery Trading
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 font-medium">Equity Intraday</td>
                  <td className="py-4 px-6 text-[#00C853] font-semibold">
                    ₹10
                  </td>
                  <td className="py-4 px-6 text-gray-500">
                    Per Executed Order
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 font-medium">F&O Trading</td>
                  <td className="py-4 px-6 text-[#00C853] font-semibold">
                    ₹10
                  </td>
                  <td className="py-4 px-6 text-gray-500">Per Lot</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">
                    Currency & Commodity
                  </td>
                  <td className="py-4 px-6 text-[#00C853] font-semibold">
                    ₹10
                  </td>
                  <td className="py-4 px-6 text-gray-500">Per Order</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1A1A2E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Trading?
          </h2>
          <p className="text-[#9B9BAA] mb-8">
            आज ही free demat account खोलें और equity trading शुरू करें
          </p>
          <Link
            href="https://kyc.wisdomcapital.in/"
            target="_blank"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#0066CC] text-white rounded-lg font-semibold hover:bg-[#0052A3]"
          >
            Open Free Account <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
