"use client";

import Link from "next/link";
import {
  Shield,
  Heart,
  Users,
  Clock,
  TrendingUp,
  Award,
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  Baby,
  GraduationCap,
  Home,
  Coffee,
} from "lucide-react";

export default function LifeInsurancePage() {
  const plans = [
    {
      name: "Term Insurance",
      coverage: "Up to ₹5 Crore",
      premium: "From ₹500/month",
      features: "Pure protection, high coverage",
      icon: Shield,
      color: "blue",
    },
    {
      name: "ULIP Plans",
      coverage: "Market-linked",
      premium: "From ₹2,000/month",
      features: "Investment + Insurance",
      icon: TrendingUp,
      color: "green",
    },
    {
      name: "Endowment Plans",
      coverage: "Guaranteed",
      premium: "From ₹1,500/month",
      features: "Savings + Protection",
      icon: Heart,
      color: "purple",
    },
    {
      name: "Retirement Plans",
      coverage: "Pension",
      premium: "From ₹3,000/month",
      features: "Regular income post-retirement",
      icon: Coffee,
      color: "orange",
    },
    {
      name: "Child Plans",
      coverage: "Future Goals",
      premium: "From ₹2,000/month",
      features: "Education + Marriage fund",
      icon: Baby,
      color: "pink",
    },
    {
      name: "Money Back Plans",
      coverage: "Liquidity + Protection",
      premium: "From ₹2,500/month",
      features: "Regular income + Life cover",
      icon: Clock,
      color: "teal",
    },
  ];

  const partners = [
    "HDFC Life",
    "ICICI Prudential",
    "SBI Life",
    "Bajaj Allianz",
    "Max Life",
    "Tata AIA",
    "Pramerica Life",
    "Kotak Life",
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Financial Security",
      desc: "Family को आपकी अनुपस्थिति में financial support",
    },
    {
      icon: TrendingUp,
      title: "Wealth Creation",
      desc: "Investment plans से wealth बनाएं",
    },
    {
      icon: Award,
      title: "Tax Benefits",
      desc: "80C और 10(10D) के तहत tax savings",
    },
    {
      icon: Users,
      title: "Rider Benefits",
      desc: "Critical illness, accidental death जैसे add-ons",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1A1A2E] to-[#2D2D4A] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 border border-white/10 bg-white/5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00C853] animate-pulse" />
            <span className="text-[#C0C0D0] text-xs font-medium">
              Life Insurance · सुरक्षा · बचत · निवेश
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Secure Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4D9FFF] to-[#00C9A7]">
              Family's Future
            </span>
          </h1>
          <p className="text-[#9B9BAA] text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Life insurance आपके परिवार को financial protection देता है। सही plan
            चुनें और अपनों का future सुरक्षित करें।
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#quote-form"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0066CC] text-white rounded-lg font-semibold hover:bg-[#0052A3] transition-all"
            >
              Get Free Quote <ArrowRight size={18} />
            </Link>
            <Link
              href="#plans"
              className="inline-flex items-center justify-center px-6 py-3 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/10 transition-all"
            >
              View All Plans
            </Link>
          </div>
        </div>
      </section>

      {/* Why Life Insurance */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#1A1A2E] mb-4">
                Life Insurance Kyun Zaroori Hai?
              </h2>
              <p className="text-[#6B6B7B] mb-4 leading-relaxed">
                Life insurance सिर्फ एक पॉलिसी नहीं है, यह आपके परिवार की
                financial security का सबसे भरोसेमंद साधन है।
              </p>
              <p className="text-[#6B6B7B] mb-6 leading-relaxed">
                चाहे बच्चों की पढ़ाई हो, उनकी शादी हो, या घर का कर्ज़ — life
                insurance यह सुनिश्चित करता है कि आपकी अनुपस्थिति में भी आपके
                सपने अधूरे न रहें।
              </p>
              <div className="bg-blue-50 rounded-xl p-4 border-l-4 border-[#0066CC]">
                <p className="text-sm text-[#1A1A2E] font-medium">
                  💡 80C के तहत life insurance premium पर ₹1.5 लाख तक का tax
                  benefit मिलता है!
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
                <Shield size={32} className="text-[#0066CC] mx-auto mb-2" />
                <div className="text-2xl font-bold text-[#1A1A2E]">1Cr+</div>
                <div className="text-xs text-gray-500">Coverage Available</div>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
                <TrendingUp size={32} className="text-[#00C853] mx-auto mb-2" />
                <div className="text-2xl font-bold text-[#1A1A2E]">30+</div>
                <div className="text-xs text-gray-500">Insurance Partners</div>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
                <Award size={32} className="text-yellow-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-[#1A1A2E]">24/7</div>
                <div className="text-xs text-gray-500">Claim Support</div>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
                <Users size={32} className="text-purple-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-[#1A1A2E]">15+</div>
                <div className="text-xs text-gray-500">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-[#1A1A2E] text-center mb-4">
            Life Insurance Ke Fayde
          </h2>
          <p className="text-center text-[#6B6B7B] mb-12">
            Key benefits of life insurance
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={idx}
                  className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-md transition-all"
                >
                  <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon size={28} className="text-[#0066CC]" />
                  </div>
                  <h3 className="font-semibold text-[#1A1A2E] mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-[#6B6B7B]">{benefit.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Insurance Plans */}
      <section id="plans" className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-[#1A1A2E] text-center mb-4">
            Life Insurance Plans We Offer
          </h2>
          <p className="text-center text-[#6B6B7B] mb-12">
            हर ज़रूरत के लिए सही प्लान
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plans.map((plan, idx) => {
              const Icon = plan.icon;
              const colorClasses = {
                blue: "bg-blue-100 text-blue-600",
                green: "bg-green-100 text-green-600",
                purple: "bg-purple-100 text-purple-600",
                orange: "bg-orange-100 text-orange-600",
                pink: "bg-pink-100 text-pink-600",
                teal: "bg-teal-100 text-teal-600",
              };
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all"
                >
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${colorClasses[plan.color as keyof typeof colorClasses]}`}
                  >
                    <Icon size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1A2E] mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-2xl font-bold text-[#0066CC] mb-1">
                    {plan.coverage}
                  </p>
                  <p className="text-sm text-[#6B6B7B] mb-3">{plan.premium}</p>
                  <p className="text-sm text-gray-500 mb-4">{plan.features}</p>
                  <Link
                    href="#quote-form"
                    className="inline-block text-sm text-[#0066CC] font-semibold hover:underline"
                  >
                    Get Quote →
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tax Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-[#1A1A2E] text-center mb-4">
              Tax Benefits Under Section 80C & 10(10D)
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-white rounded-xl p-4">
                <h3 className="font-bold text-[#1A1A2E] mb-2">Section 80C</h3>
                <p className="text-2xl font-bold text-[#00C853]">₹1.5 Lakh</p>
                <p className="text-xs text-gray-500 mt-1">
                  Deduction on premium paid
                </p>
              </div>
              <div className="bg-white rounded-xl p-4">
                <h3 className="font-bold text-[#1A1A2E] mb-2">
                  Section 10(10D)
                </h3>
                <p className="text-2xl font-bold text-[#00C853]">Tax Free</p>
                <p className="text-xs text-gray-500 mt-1">
                  Maturity amount tax free
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-600 text-center mt-4">
              *Tax benefits are subject to change as per income tax laws. Please
              consult your tax advisor.
            </p>
          </div>
        </div>
      </section>

      {/* How to Buy */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-[#1A1A2E] text-center mb-4">
            How to Buy Life Insurance?
          </h2>
          <p className="text-center text-[#6B6B7B] mb-12">
            सिर्फ 5 simple steps में
          </p>
          <div className="grid md:grid-cols-5 gap-4">
            {[
              {
                step: "01",
                title: "Compare Plans",
                desc: "अलग-अलग plans compare करें",
              },
              {
                step: "02",
                title: "Choose Cover",
                desc: "अपनी ज़रूरत का cover चुनें",
              },
              { step: "03", title: "Fill Form", desc: "Online form भरें" },
              { step: "04", title: "Medical Test", desc: "अगर ज़रूरी हो तो" },
              {
                step: "05",
                title: "Policy Issued",
                desc: "Policy आपके पास आ जाएगी",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-10 h-10 bg-[#0066CC] text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold text-sm">
                  {item.step}
                </div>
                <p className="font-semibold text-xs text-[#1A1A2E]">
                  {item.title}
                </p>
                <p className="text-xs text-gray-400 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section id="quote-form" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-2 text-center">
              Get Free Quote
            </h2>
            <p className="text-center text-[#6B6B7B] mb-6">
              अपने लिए सही plan चुनें
            </p>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#1A1A2E] mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066CC]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1A1A2E] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066CC]"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#1A1A2E] mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066CC]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1A1A2E] mb-1">
                    Insurance Type
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066CC]">
                    <option>Term Insurance</option>
                    <option>ULIP Plans</option>
                    <option>Endowment Plans</option>
                    <option>Retirement Plans</option>
                    <option>Child Plans</option>
                    <option>Money Back Plans</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1A1A2E] mb-1">
                  Coverage Amount (₹)
                </label>
                <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066CC]">
                  <option>₹25 Lakhs</option>
                  <option>₹50 Lakhs</option>
                  <option>₹1 Crore</option>
                  <option>₹2 Crores</option>
                  <option>₹3 Crores</option>
                  <option>₹5 Crores</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-[#0066CC] text-white rounded-lg font-semibold hover:bg-[#0052A3] transition-all"
              >
                Get Free Quote
              </button>
            </form>
            <p className="text-center text-xs text-gray-400 mt-4">
              एक insurance expert जल्द ही आपसे संपर्क करेगा
            </p>
          </div>
        </div>
      </section>

      {/* Partner Insurers */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-[#1A1A2E] text-center mb-8">
            Our Insurance Partners
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {partners.map((partner, idx) => (
              <div
                key={idx}
                className="bg-white px-6 py-3 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all"
              >
                <span className="font-medium text-gray-700 text-sm">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1A1A2E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Protect Your Family's Future Today
          </h2>
          <p className="text-[#9B9BAA] mb-8">
            सही life insurance plan चुनें और अपनों का future सुरक्षित करें
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#quote-form"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#0066CC] text-white rounded-lg font-semibold hover:bg-[#0052A3] transition-all"
            >
              Get Free Quote <ArrowRight size={18} />
            </Link>
            <Link
              href="/supports/contact-us"
              className="inline-flex items-center gap-2 px-8 py-3 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/10 transition-all"
            >
              <Phone size={16} /> Talk to Expert
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
