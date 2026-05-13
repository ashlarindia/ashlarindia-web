"use client";

import Link from "next/link";
import {
  Car,
  Heart,
  Home,
  Shield,
  TrendingUp,
  Calendar,
  ArrowRight,
  CheckCircle2,
  Ambulance,
  Lock,
} from "lucide-react";

export default function GeneralInsurancePage() {
  const insuranceTypes = [
    {
      icon: Car,
      name: "Car Insurance",
      desc: "अपनी कार को एक्सीडेंट, चोरी और नुकसान से बचाएं",
      coverage: "Comprehensive cover",
    },
    {
      icon: Heart,
      name: "Health Insurance",
      desc: "मेडिकल खर्चों से बचाव, कैशलेस उपचार",
      coverage: "Up to ₹1 Crore",
    },
    {
      icon: Home,
      name: "Home Insurance",
      desc: "घर को आग, चोरी और प्राकृतिक आपदाओं से सुरक्षित रखें",
      coverage: "Structure + Contents",
    },
    {
      icon: Shield,
      name: "Travel Insurance",
      desc: "विदेश यात्रा के दौरान मेडिकल और लॉस कवर",
      coverage: "International cover",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1A1A2E] to-[#2D2D4A] py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 border border-white/10 bg-white/5">
            <Shield size={14} className="text-[#00C853]" />
            <span className="text-[#C0C0D0] text-xs font-medium">
              General Insurance · Health · Car · Home
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            General Insurance
          </h1>
          <p className="text-[#9B9BAA] text-lg mb-8 max-w-2xl mx-auto">
            अपने जीवन और संपत्ति को सुरक्षित रखें | Protect your assets with
            comprehensive insurance
          </p>
          <Link
            href="#quote-form"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0066CC] text-white rounded-lg font-semibold hover:bg-[#0052A3]"
          >
            Get Quote <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Insurance Types */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-[#1A1A2E] text-center mb-4">
            Insurance Types We Offer
          </h2>
          <p className="text-center text-[#6B6B7B] mb-12">
            हर need के लिए सही insurance plan
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {insuranceTypes.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all"
                >
                  <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon size={28} className="text-[#0066CC]" />
                  </div>
                  <h3 className="font-bold text-[#1A1A2E] text-center mb-2">
                    {item.name}
                  </h3>
                  <p className="text-sm text-[#6B6B7B] text-center mb-3">
                    {item.desc}
                  </p>
                  <p className="text-xs text-[#0066CC] text-center font-semibold">
                    {item.coverage}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Health Insurance Details */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#1A1A2E] mb-4">
                Health Insurance
              </h2>
              <p className="text-[#6B6B7B] mb-4 leading-relaxed">
                Health insurance आपको और आपके परिवार को मेडिकल खर्चों से बचाता
                है। कैशलेस उपचार के लिए देशभर के नेटवर्क hospitals में सुविधा।
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-[#00C853]" />
                  <span className="text-sm">
                    Pre and post hospitalization expenses cover
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-[#00C853]" />
                  <span className="text-sm">No claim bonus upto 100%</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-[#00C853]" />
                  <span className="text-sm">Tax benefit under Section 80D</span>
                </li>
              </ul>
              <div className="bg-blue-50 rounded-xl p-4">
                <p className="text-sm text-[#1A1A2E]">
                  💡 Health insurance की premium पर आपको 80D के तहत ₹25,000 तक
                  का tax benefit मिलता है।
                </p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-[#1A1A2E] text-center mb-4">
                Popular Health Plans
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                  <span>Individual Cover</span>
                  <span className="font-semibold">₹5,000 - ₹15,000/year</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                  <span>Family Floater (4 members)</span>
                  <span className="font-semibold">₹12,000 - ₹35,000/year</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                  <span>Senior Citizen Plan</span>
                  <span className="font-semibold">₹8,000 - ₹25,000/year</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Critical Illness Cover</span>
                  <span className="font-semibold">₹2,000 - ₹5,000/year</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Car Insurance Details */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-[#1A1A2E] text-center mb-4">
                  Car Insurance Types
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                    <span>Third Party (Mandatory)</span>
                    <span className="font-semibold">₹2,000 - ₹5,000/year</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                    <span>Comprehensive</span>
                    <span className="font-semibold">₹5,000 - ₹15,000/year</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Zero Depreciation</span>
                    <span className="font-semibold">
                      Add-on ₹1,000 - ₹3,000
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-[#1A1A2E] mb-4">
                Car Insurance
              </h2>
              <p className="text-[#6B6B7B] mb-4 leading-relaxed">
                Car insurance आपकी गाड़ी को एक्सीडेंट, चोरी, और प्राकृतिक आपदाओं
                से सुरक्षित रखता है।
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-[#00C853]" />
                  <span className="text-sm">
                    Third party liability cover mandatory by law
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-[#00C853]" />
                  <span className="text-sm">
                    Own damage cover for your vehicle
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-[#00C853]" />
                  <span className="text-sm">No claim bonus up to 50%</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section id="quote-form" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-6 text-center">
              Get Insurance Quote
            </h2>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#1A1A2E] mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1A1A2E] mb-1">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#1A1A2E] mb-1">
                    Insurance Type
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-200 rounded-lg">
                    <option>Health Insurance</option>
                    <option>Car Insurance</option>
                    <option>Home Insurance</option>
                    <option>Travel Insurance</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1A1A2E] mb-1">
                    Coverage Amount
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-200 rounded-lg">
                    <option>₹5 Lakhs</option>
                    <option>₹10 Lakhs</option>
                    <option>₹25 Lakhs</option>
                    <option>₹50 Lakhs</option>
                    <option>₹1 Crore</option>
                  </select>
                </div>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-[#0066CC] text-white rounded-lg font-semibold hover:bg-[#0052A3]"
              >
                Get Quote
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Partner Insurers */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-[#1A1A2E] text-center mb-8">
            Our Insurance Partners
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              "HDFC ERGO",
              "ICICI Lombard",
              "Bajaj Allianz",
              "Tata AIG",
              "Reliance General",
              "Star Health",
            ].map((partner, idx) => (
              <div
                key={idx}
                className="bg-white px-6 py-3 rounded-lg shadow-sm border border-gray-200"
              >
                <span className="font-semibold text-gray-700">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1A1A2E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Secure Your Future Today
          </h2>
          <p className="text-[#9B9BAA] mb-8">
            सही insurance plan चुनें और परिवार को सुरक्षित करें
          </p>
          <Link
            href="#quote-form"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#0066CC] text-white rounded-lg font-semibold hover:bg-[#0052A3]"
          >
            Get Quote Now <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
