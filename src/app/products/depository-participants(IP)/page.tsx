"use client";

import Link from "next/link";
import {
  Shield,
  Database,
  Lock,
  RefreshCw,
  ArrowRight,
  CheckCircle2,
  FileText,
  Users,
} from "lucide-react";

export default function DPPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1A1A2E] to-[#2D2D4A] py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 border border-white/10 bg-white/5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00C853] animate-pulse" />
            <span className="text-[#C0C0D0] text-xs font-medium">
              DP Services · Demat Account · Depository
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Depository Participant (DP)
          </h1>
          <p className="text-[#9B9BAA] text-lg mb-8 max-w-2xl mx-auto">
            अपने shares और securities को सुरक्षित रखें Electronic Form में |
            NSDL & CDSL registered DP
          </p>
          <Link
            href="https://kyc.wisdomcapital.in/"
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0066CC] text-white rounded-lg font-semibold hover:bg-[#0052A3]"
          >
            Open Demat Account <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* What is DP */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#1A1A2E] mb-4">
                Depository Participant Kya Hai?
              </h2>
              <p className="text-[#6B6B7B] mb-4 leading-relaxed">
                Depository वो जगह है जहाँ आपके shares और securities को
                electronic form में सुरक्षित रखा जाता है। जैसे bank आपके पैसे
                रखता है, वैसे ही depository आपके shares रखता है।
              </p>
              <p className="text-[#6B6B7B] mb-6 leading-relaxed">
                Ashlar India CDSL और NSDL का registered Depository Participant
                (DP) है। हम आपको demat account provide करते हैं जहाँ आप अपने
                shares सुरक्षित रख सकते हैं।
              </p>
              <div className="flex gap-4">
                <div className="bg-blue-50 rounded-lg px-4 py-2 text-center">
                  <div className="font-bold text-[#0066CC]">NSDL</div>
                  <div className="text-xs text-gray-600">IN303921</div>
                </div>
                <div className="bg-blue-50 rounded-lg px-4 py-2 text-center">
                  <div className="font-bold text-[#0066CC]">CDSL</div>
                  <div className="text-xs text-gray-600">IN-DP-2362016</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
                <Database size={32} className="text-[#0066CC] mx-auto mb-2" />
                <div className="font-bold text-[#1A1A2E]">
                  Electronic Storage
                </div>
                <div className="text-xs text-gray-500">
                  No physical certificates
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
                <Lock size={32} className="text-[#00C853] mx-auto mb-2" />
                <div className="font-bold text-[#1A1A2E]">100% Safe</div>
                <div className="text-xs text-gray-500">SEBI regulated</div>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
                <RefreshCw size={32} className="text-orange-500 mx-auto mb-2" />
                <div className="font-bold text-[#1A1A2E]">Instant Transfer</div>
                <div className="text-xs text-gray-500">T+1 settlement</div>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
                <Shield size={32} className="text-purple-500 mx-auto mb-2" />
                <div className="font-bold text-[#1A1A2E]">Safe Custody</div>
                <div className="text-xs text-gray-500">No theft or forgery</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-[#1A1A2E] text-center mb-4">
            DP Services
          </h2>
          <p className="text-center text-[#6B6B7B] mb-12">
            हम आपको क्या services provide करते हैं?
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Dematerialization (DEMAT)",
                desc: "Physical certificates को electronic form में बदलना",
              },
              {
                title: "Rematerialization (REMAT)",
                desc: "Electronic shares को physical form में बदलना",
              },
              {
                title: "Transfer of Securities",
                desc: "एक account से दूसरे account में shares transfer करना",
              },
              {
                title: "Settlement of Trades",
                desc: "खरीदे या बेचे गए shares का settlement",
              },
              {
                title: "Pledge/Unpledge",
                desc: "Shares को pledge करके margin लेना",
              },
              {
                title: "Nomination Facility",
                desc: "अपने shares के लिए nominee add करना",
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

      {/* Benefits */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-[#1A1A2E] text-center mb-4">
            Benefits of Demat Account
          </h2>
          <p className="text-center text-[#6B6B7B] mb-12">
            Demat account होने के फायदे
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "No risk of theft, forgery or loss of certificates",
              "Instant transfer and settlement of shares",
              "Lower transaction charges compared to physical",
              "Automatic credit of bonus, splits, and dividends",
              "Easy address change - update once reflected everywhere",
              "One statement for all your investments",
              "Trade anytime, anywhere on mobile/web",
              "No stamp duty on transfer of securities",
            ].map((benefit, idx) => (
              <div key={idx} className="flex items-center gap-2 p-2">
                <CheckCircle2 size={16} className="text-[#00C853]" />
                <span className="text-sm text-[#6B6B7B]">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Open */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-[#1A1A2E] text-center mb-4">
            How to Open Demat Account?
          </h2>
          <p className="text-center text-[#6B6B7B] mb-8">
            सिर्फ 5 मिनट में, बिल्कुल FREE
          </p>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              {
                step: "01",
                title: "Fill Form",
                desc: "Online application भरें",
              },
              {
                step: "02",
                title: "Upload Docs",
                desc: "PAN और Aadhaar upload करें",
              },
              {
                step: "03",
                title: "Video KYC",
                desc: "Video call complete करें",
              },
              {
                step: "04",
                title: "Start Trading",
                desc: "Account active हो जाएगा",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 bg-[#0066CC] text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                  {item.step}
                </div>
                <h3 className="font-semibold text-[#1A1A2E] mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1A1A2E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Open Free Demat Account
          </h2>
          <p className="text-[#9B9BAA] mb-8">
            Zero account opening charges · Zero maintenance fees
          </p>
          <Link
            href="https://kyc.wisdomcapital.in/"
            target="_blank"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#0066CC] text-white rounded-lg font-semibold hover:bg-[#0052A3]"
          >
            Open Account Now <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
