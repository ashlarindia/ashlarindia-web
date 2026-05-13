"use client";

import Link from "next/link";
import {
  Building2,
  TrendingUp,
  Shield,
  Calendar,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  IndianRupee,
} from "lucide-react";

export default function CorporateFDsPage() {
  const fdRates = [
    {
      company: "HDFC Ltd.",
      rating: "AAA",
      tenure: "3 years",
      interest: "8.10%",
      seniorCitizen: "8.60%",
    },
    {
      company: "ICICI Home Finance",
      rating: "AAA",
      tenure: "5 years",
      interest: "8.00%",
      seniorCitizen: "8.50%",
    },
    {
      company: "Mahindra Finance",
      rating: "AA+",
      tenure: "3 years",
      interest: "8.25%",
      seniorCitizen: "8.75%",
    },
    {
      company: "Bajaj Finance",
      rating: "AAA",
      tenure: "44 months",
      interest: "8.35%",
      seniorCitizen: "8.60%",
    },
    {
      company: "Shriram Transport",
      rating: "AA+",
      tenure: "2 years",
      interest: "8.50%",
      seniorCitizen: "9.00%",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1A1A2E] to-[#2D2D4A] py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 border border-white/10 bg-white/5">
            <Building2 size={14} className="text-[#00C853]" />
            <span className="text-[#C0C0D0] text-xs font-medium">
              Corporate FDs · Fixed Returns · Safe Investment
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Corporate Fixed Deposits
          </h1>
          <p className="text-[#9B9BAA] text-lg mb-8 max-w-2xl mx-auto">
            Bank FD से ज़्यादा ब्याज दरें, guaranteed returns | 8-9% interest
            rates on FDs
          </p>
          <Link
            href="#compare"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0066CC] text-white rounded-lg font-semibold hover:bg-[#0052A3]"
          >
            Compare Interest Rates <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#1A1A2E] mb-4">
                Corporate FD Kya Hai?
              </h2>
              <p className="text-[#6B6B7B] mb-4 leading-relaxed">
                Corporate Fixed Deposit एक ऐसा investment option है जहाँ
                companies आपसे पैसे लेती हैं और आपको guaranteed returns देती
                हैं। Bank FD से ज़्यादा interest rates मिलते हैं।
              </p>
              <p className="text-[#6B6B7B] mb-6 leading-relaxed">
                अलग-अलग tenures (12 months से 10 years) में invest कर सकते हैं।
                Senior citizens को extra 0.50% interest मिलता है।
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                  AAA Rated
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                  Guaranteed Returns
                </span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                  Cumulative Option
                </span>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-bold text-[#1A1A2E] text-center mb-4">
                Latest Interest Rates
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span className="text-gray-600">1 Year FD</span>
                  <span className="font-bold text-[#0066CC]">
                    8.00% - 8.50%
                  </span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span className="text-gray-600">3 Year FD</span>
                  <span className="font-bold text-[#0066CC]">
                    8.25% - 8.75%
                  </span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span className="text-gray-600">5 Year FD</span>
                  <span className="font-bold text-[#0066CC]">
                    8.10% - 8.60%
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Senior Citizen</span>
                  <span className="font-bold text-[#00C853]">Extra 0.50%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white" id="compare">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-[#1A1A2E] text-center mb-4">
            Corporate FD Benefits
          </h2>
          <p className="text-center text-[#6B6B7B] mb-12">
            Corporate Fixed Deposit में invest क्यों करें?
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: TrendingUp,
                title: "Higher Interest Rates",
                desc: "Bank FD से 2-3% ज़्यादा ब्याज",
              },
              {
                icon: Shield,
                title: "AAA/AA+ Rated",
                desc: "सिर्फ top-rated companies में invest",
              },
              {
                icon: Calendar,
                title: "Flexible Tenure",
                desc: "12 महीने से 10 साल तक",
              },
              {
                icon: IndianRupee,
                title: "Tax Benefits",
                desc: "80C में deduction, TDS benefits",
              },
              {
                icon: Building2,
                title: "Multiple Payouts",
                desc: "Monthly, Quarterly, Yearly interest",
              },
              {
                icon: CheckCircle2,
                title: "Nomination Facility",
                desc: "अपने nominees को add करें",
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl"
                >
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-[#0066CC]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1A1A2E] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#6B6B7B]">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FD Rates Table */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-[#1A1A2E] text-center mb-4">
            Top Corporate FD Interest Rates
          </h2>
          <p className="text-center text-[#6B6B7B] mb-8">
            Compare करें और best FD choose करें
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-[#1A1A2E]">
                  <th className="text-left py-4 px-6 text-white">Company</th>
                  <th className="text-left py-4 px-6 text-white">Rating</th>
                  <th className="text-left py-4 px-6 text-white">Tenure</th>
                  <th className="text-left py-4 px-6 text-white">
                    Interest Rate
                  </th>
                  <th className="text-left py-4 px-6 text-white">
                    Senior Citizen
                  </th>
                </tr>
              </thead>
              <tbody>
                {fdRates.map((fd, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td className="py-4 px-6 font-medium">{fd.company}</td>
                    <td className="py-4 px-6">
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${fd.rating === "AAA" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"}`}
                      >
                        {fd.rating}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-gray-600">{fd.tenure}</td>
                    <td className="py-4 px-6">
                      <span className="font-bold text-[#0066CC]">
                        {fd.interest}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-gray-600">
                      {fd.seniorCitizen}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Risk Warning */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
            <div className="flex items-start gap-3">
              <AlertCircle
                size={24}
                className="text-yellow-600 flex-shrink-0"
              />
              <div>
                <h3 className="font-bold text-yellow-800 mb-2">
                  Important Note:
                </h3>
                <p className="text-sm text-yellow-700">
                  Corporate FDs DICGC (bank deposit insurance) से covered नहीं
                  हैं। हमेशा AAA या AA+ rated companies में ही invest करें। अपना
                  investment diversify करें और एक company में सारा पैसा न लगाएं।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FD Calculator */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-6 text-center">
              FD Calculator
            </h2>
            <p className="text-center text-gray-500 mb-6">
              Calculate your maturity amount
            </p>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#1A1A2E] mb-2">
                  Investment Amount (₹)
                </label>
                <input
                  type="range"
                  min="10000"
                  max="5000000"
                  className="w-full"
                  defaultValue="100000"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>₹10,000</span>
                  <span>₹1,00,000</span>
                  <span>₹50,00,000</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1A1A2E] mb-2">
                  Interest Rate (%)
                </label>
                <select className="w-full px-4 py-2 border border-gray-200 rounded-lg">
                  <option>8.00%</option>
                  <option>8.25%</option>
                  <option>8.50%</option>
                  <option>8.75%</option>
                  <option>9.00%</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1A1A2E] mb-2">
                  Tenure (Years)
                </label>
                <select className="w-full px-4 py-2 border border-gray-200 rounded-lg">
                  <option>1 Year</option>
                  <option>2 Years</option>
                  <option>3 Years</option>
                  <option>5 Years</option>
                </select>
              </div>
              <div className="pt-4 border-t border-gray-100">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-500">Total Investment</span>
                  <span className="font-semibold">₹1,00,000</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-500">Total Interest</span>
                  <span className="font-semibold text-[#00C853]">₹27,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Maturity Amount</span>
                  <span className="font-bold text-xl text-[#1A1A2E]">
                    ₹1,27,000
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1A1A2E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Start Your FD Investment
          </h2>
          <p className="text-[#9B9BAA] mb-8">
            अपने पैसे को सुरक्षित रखें और अच्छा return कमाएं
          </p>
          <Link
            href="/supports/contact-us"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#0066CC] text-white rounded-lg font-semibold hover:bg-[#0052A3]"
          >
            Talk to FD Expert <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
