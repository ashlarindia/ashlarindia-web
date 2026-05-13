"use client";

import Link from "next/link";
import {
  Landmark,
  TrendingUp,
  Shield,
  Calendar,
  ArrowRight,
  CheckCircle2,
  Award,
  Building2,
} from "lucide-react";

export default function BondsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1A1A2E] to-[#2D2D4A] py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 border border-white/10 bg-white/5">
            <Landmark size={14} className="text-[#00C853]" />
            <span className="text-[#C0C0D0] text-xs font-medium">
              Bonds · Government Securities · Fixed Income
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Bonds & Government Securities
          </h1>
          <p className="text-[#9B9BAA] text-lg mb-8 max-w-2xl mx-auto">
            सुरक्षित निवेश के साथ गारंटीड रिटर्न | Safe and secure fixed income
            investments
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://kyc.wisdomcapital.in/"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0066CC] text-white rounded-lg font-semibold hover:bg-[#0052A3]"
            >
              Start Investing <ArrowRight size={18} />
            </Link>
            <Link
              href="/calculators"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/10"
            >
              Calculate Returns
            </Link>
          </div>
        </div>
      </section>

      {/* What are Bonds */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#1A1A2E] mb-4">
                Bonds Kya Hain?
              </h2>
              <p className="text-[#6B6B7B] mb-4 leading-relaxed">
                Bonds एक तरह का कर्ज़ है। जब आप bond खरीदते हैं, तो आप
                government या company को पैसे उधार देते हैं।
              </p>
              <p className="text-[#6B6B7B] mb-6 leading-relaxed">
                बदले में आपको एक निश्चित ब्याज (coupon rate) मिलता है और
                maturity पर आपका मूल पैसा वापस मिल जाता है। Government bonds को
                सबसे सुरक्षित निवेश माना जाता है।
              </p>
              <div className="bg-blue-50 rounded-xl p-4 border-l-4 border-[#0066CC]">
                <p className="text-sm text-[#1A1A2E] font-medium">
                  💡 RBI की तरफ से जारी government bonds पर कोई TDS नहीं कटता
                  है।
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
                <Shield size={32} className="text-[#00C853] mx-auto mb-2" />
                <div className="text-xl font-bold text-[#1A1A2E]">
                  Zero Risk
                </div>
                <div className="text-xs text-gray-500">Government Bonds</div>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
                <TrendingUp size={32} className="text-[#0066CC] mx-auto mb-2" />
                <div className="text-xl font-bold text-[#1A1A2E]">7-8%</div>
                <div className="text-xs text-gray-500">Interest Rate</div>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
                <Calendar size={32} className="text-orange-500 mx-auto mb-2" />
                <div className="text-xl font-bold text-[#1A1A2E]">5-40 Yrs</div>
                <div className="text-xs text-gray-500">Tenure Options</div>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
                <Building2 size={32} className="text-purple-500 mx-auto mb-2" />
                <div className="text-xl font-bold text-[#1A1A2E]">Liquid</div>
                <div className="text-xs text-gray-500">Sell anytime</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bond Types */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-[#1A1A2E] text-center mb-4">
            Types of Bonds
          </h2>
          <p className="text-center text-[#6B6B7B] mb-12">
            विभिन्न प्रकार के bonds में निवेश करें
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Government Bonds (G-Sec)",
                desc: "RBI की तरफ से जारी, zero risk, 6-7% returns",
                tenure: "5-40 years",
              },
              {
                title: "Corporate Bonds",
                desc: "Companies द्वारा जारी, high returns, 8-10%",
                tenure: "1-10 years",
              },
              {
                title: "Tax-Free Bonds",
                desc: "Income tax free returns, 7-8% interest",
                tenure: "10-20 years",
              },
              {
                title: "State Development Loans",
                desc: "State governments द्वारा जारी",
                tenure: "5-15 years",
              },
              {
                title: "Treasury Bills (T-Bills)",
                desc: "Short term, 91/182/364 days, 6-7%",
                tenure: "Less than 1 year",
              },
              {
                title: "Zero Coupon Bonds",
                desc: "Discount पर मिलते हैं, maturity पर full face value",
                tenure: "5-10 years",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all"
              >
                <h3 className="font-bold text-[#1A1A2E] mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{item.desc}</p>
                <span className="text-xs text-[#0066CC]">{item.tenure}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-[#1A1A2E] text-center mb-4">
            Benefits of Bond Investment
          </h2>
          <p className="text-center text-[#6B6B7B] mb-12">
            Bonds में invest क्यों करें?
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "No TDS on government bonds",
              "Regular income through coupon payments",
              "Safe and secure (especially government bonds)",
              "Can be sold in secondary market before maturity",
              "Good for retirement planning",
              "Portfolio diversification",
              "Capital protection with returns",
              "Tax benefits on certain bonds",
            ].map((benefit, idx) => (
              <div key={idx} className="flex items-center gap-2 p-2">
                <CheckCircle2 size={16} className="text-[#00C853]" />
                <span className="text-sm text-[#6B6B7B]">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Rates */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-[#1A1A2E] text-center mb-4">
            Current Bond Interest Rates
          </h2>
          <p className="text-center text-[#6B6B7B] mb-8">
            Latest rates and yields
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-[#1A1A2E]">
                  <th className="text-left py-4 px-6 text-white">Bond Type</th>
                  <th className="text-left py-4 px-6 text-white">
                    Interest Rate
                  </th>
                  <th className="text-left py-4 px-6 text-white">Tenure</th>
                  <th className="text-left py-4 px-6 text-white">
                    Tax Benefit
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 font-medium">7.37% GOI Bond 2028</td>
                  <td className="py-4 px-6 text-[#00C853]">7.37%</td>
                  <td className="py-4 px-6">5 years</td>
                  <td className="py-4 px-6">Taxable</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 font-medium">7.72% GOI Bond 2034</td>
                  <td className="py-4 px-6 text-[#00C853]">7.72%</td>
                  <td className="py-4 px-6">11 years</td>
                  <td className="py-4 px-6">Taxable</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 font-medium">NHB Tax Free Bond</td>
                  <td className="py-4 px-6 text-[#00C853]">7.15%</td>
                  <td className="py-4 px-6">10 years</td>
                  <td className="py-4 px-6 text-green-600">Tax Free</td>
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
            Start Bond Investment Today
          </h2>
          <p className="text-[#9B9BAA] mb-8">
            सुरक्षित निवेश के साथ गारंटीड रिटर्न पाएं
          </p>
          <Link
            href="https://kyc.wisdomcapital.in/"
            target="_blank"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#0066CC] text-white rounded-lg font-semibold hover:bg-[#0052A3]"
          >
            Open Demat Account <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
