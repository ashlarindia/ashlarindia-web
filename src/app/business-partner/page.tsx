'use client';

import {
  Briefcase,
  ShieldCheck,
  TrendingUp,
  Users,
  BadgeDollarSign,
  CheckCircle2,
} from 'lucide-react';

export default function BusinessPartnerPage() {
  return (
    <div className="min-h-screen bg-[#f4f7fb]">

      {/* HERO */}
      <section className="bg-gradient-to-r from-[#071028] via-[#0d1b3d] to-[#132b5e] text-white py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="max-w-3xl">

            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full text-sm mb-6">
              <Briefcase size={16} />
              Grow With Ashlar India
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Become a
              <span className="text-red-400"> Business Partner </span>
              With Ashlar India
            </h1>

            <p className="text-lg text-slate-300 leading-8">
              Join one of India’s rapidly growing financial ecosystems.
              Build your network, increase earnings, and empower investors
              with trusted trading solutions.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <button className="px-8 py-4 rounded-2xl bg-red-500 hover:bg-red-600 transition text-white font-semibold">
                Become a Partner
              </button>

              <button className="px-8 py-4 rounded-2xl border border-white/30 hover:bg-white/10 transition font-semibold">
                Learn More
              </button>

            </div>

          </div>

        </div>

      </section>

      {/* MAIN */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* LEFT */}
          <div>

            <h2 className="text-4xl font-bold text-[#071028] mb-6">
              Why Partner With Us?
            </h2>

            <p className="text-slate-600 text-lg leading-8 mb-10">
              We help entrepreneurs and finance professionals
              build scalable businesses with strong support,
              advanced trading platforms, and attractive revenue models.
            </p>

            <div className="space-y-6">

              <div className="flex gap-5 p-5 rounded-3xl bg-white shadow-lg">

                <div className="w-14 h-14 rounded-2xl bg-red-100 flex items-center justify-center text-red-500">
                  <TrendingUp />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#071028] mb-2">
                    High Revenue Sharing
                  </h3>

                  <p className="text-slate-600">
                    Earn competitive commissions with flexible revenue models.
                  </p>
                </div>

              </div>

              <div className="flex gap-5 p-5 rounded-3xl bg-white shadow-lg">

                <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-500">
                  <ShieldCheck />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#071028] mb-2">
                    Strong Compliance
                  </h3>

                  <p className="text-slate-600">
                    Secure systems and SEBI-compliant infrastructure.
                  </p>
                </div>

              </div>

              <div className="flex gap-5 p-5 rounded-3xl bg-white shadow-lg">

                <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center text-green-500">
                  <Users />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#071028] mb-2">
                    Dedicated Support
                  </h3>

                  <p className="text-slate-600">
                    Full onboarding and marketing support for partners.
                  </p>
                </div>

              </div>

              <div className="flex gap-5 p-5 rounded-3xl bg-white shadow-lg">

                <div className="w-14 h-14 rounded-2xl bg-yellow-100 flex items-center justify-center text-yellow-500">
                  <BadgeDollarSign />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#071028] mb-2">
                    Fast Client Activation
                  </h3>

                  <p className="text-slate-600">
                    Instant digital onboarding and account opening.
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* RIGHT FORM */}
          <div>

            <div className="bg-[#071028] text-white rounded-[32px] p-8 shadow-2xl sticky top-24">

              <h2 className="text-3xl font-bold mb-3">
                Partner Registration
              </h2>

              <p className="text-slate-300 mb-8">
                Fill your details and our team will contact you shortly.
              </p>

              <form className="space-y-5">

                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-5 py-4 rounded-2xl bg-white/10 border border-white/20 outline-none"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-5 py-4 rounded-2xl bg-white/10 border border-white/20 outline-none"
                />

                <input
                  type="tel"
                  placeholder="Mobile Number"
                  className="w-full px-5 py-4 rounded-2xl bg-white/10 border border-white/20 outline-none"
                />

                <input
                  type="text"
                  placeholder="City"
                  className="w-full px-5 py-4 rounded-2xl bg-white/10 border border-white/20 outline-none"
                />

                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full px-5 py-4 rounded-2xl bg-white/10 border border-white/20 outline-none"
                />

                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-red-500 hover:bg-red-600 transition font-semibold text-lg"
                >
                  Become a Partner
                </button>

              </form>

            </div>

          </div>

        </div>

      </section>

      {/* BENEFITS */}
      <section className="bg-white py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <h2 className="text-4xl font-bold text-[#071028] mb-4">
              Partner Benefits
            </h2>

            <p className="text-slate-600 text-lg">
              Everything you need to grow your business.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              'Advanced Trading Platforms',
              'Dedicated Relationship Manager',
              'Marketing & Branding Support',
              'Transparent Revenue Sharing',
            ].map((item) => (
              <div
                key={item}
                className="bg-[#f4f7fb] rounded-3xl p-8 shadow-md hover:shadow-xl transition"
              >

                <CheckCircle2 className="text-green-500 mb-5" size={36} />

                <h3 className="text-xl font-semibold text-[#071028]">
                  {item}
                </h3>

              </div>
            ))}

          </div>

        </div>

      </section>

    </div>
  );
}