'use client';

import {
  ShieldCheck,
  ExternalLink,
  CheckCircle2,
  Lock,
  FileCheck,
  Globe,
} from 'lucide-react';

export default function NSDLNominationPage() {
  return (
    <div className="min-h-screen bg-[#020817] text-white overflow-hidden relative">

      {/* BACKGROUND */}
      <div className="absolute inset-0">

        <div className="absolute top-[-150px] left-[-100px] w-[400px] h-[400px] bg-red-500/20 rounded-full blur-3xl" />

        <div className="absolute bottom-[-150px] right-[-100px] w-[450px] h-[450px] bg-blue-500/20 rounded-full blur-3xl" />

      </div>

      {/* MAIN SECTION */}
      <section className="relative z-10 py-24 px-6">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT SIDE */}
          <div>

            {/* BADGE */}
            <div className="inline-flex items-center gap-3 bg-red-500/10 border border-red-500/20 text-red-400 px-5 py-2 rounded-full mb-8">

              <ShieldCheck className="w-5 h-5" />

              Official NSDL Online Facility

            </div>

            {/* HEADING */}
            <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-8">

              Online

              <br />

              <span className="text-red-500">
                Nomination
              </span>

              <br />

              Portal

            </h1>

            {/* FEATURES */}
            <div className="grid sm:grid-cols-2 gap-5 mb-12">

              {/* CARD */}
              <div className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-green-500/30 transition-all duration-300">

                <CheckCircle2 className="w-10 h-10 text-green-400 mb-4" />

                <h3 className="text-xl font-bold mb-2">
                  100% Secure
                </h3>

                <p className="text-slate-400 text-sm leading-7">
                  Official NSDL secured authentication system with encrypted access.
                </p>

              </div>

              {/* CARD */}
              <div className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-blue-500/30 transition-all duration-300">

                <Lock className="w-10 h-10 text-blue-400 mb-4" />

                <h3 className="text-xl font-bold mb-2">
                  Aadhaar eSign
                </h3>

                <p className="text-slate-400 text-sm leading-7">
                  Complete nomination digitally using Aadhaar verification.
                </p>

              </div>

              {/* CARD */}
              <div className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-red-500/30 transition-all duration-300">

                <FileCheck className="w-10 h-10 text-red-400 mb-4" />

                <h3 className="text-xl font-bold mb-2">
                  Easy Process
                </h3>

                <p className="text-slate-400 text-sm leading-7">
                  Simple OTP based nomination update process for investors.
                </p>

              </div>

              {/* CARD */}
              <div className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-yellow-500/30 transition-all duration-300">

                <Globe className="w-10 h-10 text-yellow-400 mb-4" />

                <h3 className="text-xl font-bold mb-2">
                  NSDL Verified
                </h3>

                <p className="text-slate-400 text-sm leading-7">
                  Trusted official depository platform for online services.
                </p>

              </div>

            </div>

            {/* SINGLE BUTTON ONLY */}
            <a
              href="https://eservices.nsdl.com/instademat-kyc-nomination/#/login"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-red-500 to-red-600 hover:scale-105 transition-all duration-300 px-8 py-5 rounded-2xl text-lg font-bold shadow-2xl shadow-red-500/30"
            >

              Proceed to Official NSDL Portal

              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-all" />

            </a>

          </div>

          {/* RIGHT SIDE */}
          <div className="relative">

            {/* GLOW */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-blue-500/20 blur-3xl"></div>

            {/* CARD */}
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] overflow-hidden shadow-2xl">

              {/* TOP */}
              <div className="bg-gradient-to-r from-red-500 to-red-600 p-8">

                {/* MOVED TEXT TO TOP */}
                <p className="text-white/90 text-sm leading-7 mb-6">

                  Securely update your Demat account nomination online
                  through the official NSDL e-Services platform with
                  Aadhaar authentication and OTP based verification.

                </p>

                {/* TITLE NOW BELOW */}
                <h2 className="text-4xl font-black">
                  NSDL e-Services
                </h2>

              </div>

              {/* BODY */}
              <div className="p-10">

                <div className="space-y-8">

                  {/* ITEM */}
                  <div className="flex items-start gap-5">

                    <div className="w-14 h-14 rounded-2xl bg-red-500/10 flex items-center justify-center">

                      <ShieldCheck className="w-7 h-7 text-red-400" />

                    </div>

                    <div>

                      <h3 className="text-xl font-bold mb-2">
                        Official NSDL Authentication
                      </h3>

                      <p className="text-slate-400 leading-7">
                        All login verification and investor authentication
                        are securely handled directly by NSDL.
                      </p>

                    </div>

                  </div>

                  {/* ITEM */}
                  <div className="flex items-start gap-5">

                    <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center">

                      <Lock className="w-7 h-7 text-blue-400" />

                    </div>

                    <div>

                      <h3 className="text-xl font-bold mb-2">
                        Safe & Secure Access
                      </h3>

                      <p className="text-slate-400 leading-7">
                        Your confidential investor details remain protected
                        within the official NSDL secure environment.
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}