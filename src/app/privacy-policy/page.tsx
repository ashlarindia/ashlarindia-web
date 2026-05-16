'use client';

import {
  ShieldCheck,
  LockKeyhole,
  Globe,
  Cookie,
  FileCheck,
  ChevronRight,
} from 'lucide-react';

export default function PrivacyPolicyPage() {

  return (

    <div className="min-h-screen bg-[#020817] text-white relative overflow-hidden">

      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute top-[-200px] left-[-150px] w-[500px] h-[500px] bg-red-500/10 rounded-full blur-3xl" />

        <div className="absolute bottom-[-200px] right-[-150px] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl" />

      </div>

      {/* HERO */}
      <section className="relative z-10 pt-24 pb-16">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-4xl mx-auto">

            <div className="inline-flex items-center gap-2 border border-red-500/20 bg-red-500/10 px-5 py-2 rounded-full text-sm text-red-300 mb-8">

              <ShieldCheck size={18} />

              Your Data Protection Matters

            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-8">

              Privacy{' '}

              <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">

                Policy

              </span>

            </h1>

            <p className="text-slate-400 text-lg leading-9">

              Ashlar Securities Pvt. Ltd. is committed to protecting your
              personal information and maintaining complete transparency
              regarding data usage, privacy and security practices.

            </p>

          </div>

        </div>

      </section>

      {/* CONTENT */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-24">

        <div className="grid lg:grid-cols-12 gap-10">

          {/* SIDEBAR */}
          <div className="lg:col-span-4">

            <div className="sticky top-28 rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-xl p-8">

              <h3 className="text-2xl font-bold mb-8">
                Policy Sections
              </h3>

              <div className="space-y-4">

                {[
                  'Privacy Protection',
                  'Personal Information',
                  'Internet Advertising',
                  'Cookies Policy',
                  'Policy Updates',
                ].map((item, index) => (

                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-red-500/10 hover:border-red-500/20 transition-all duration-300"
                  >

                    <ChevronRight
                      size={18}
                      className="text-red-400"
                    />

                    <span className="text-slate-300">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>

          {/* MAIN CONTENT */}
          <div className="lg:col-span-8 space-y-10">

            {/* SECTION 1 */}
            <div className="rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-xl p-10">

              <div className="flex items-center gap-5 mb-8">

                <div className="w-16 h-16 rounded-2xl bg-red-500/10 flex items-center justify-center">

                  <ShieldCheck
                    size={32}
                    className="text-red-400"
                  />

                </div>

                <div>

                  <h2 className="text-3xl font-bold">
                    Respecting Your Privacy
                  </h2>

                  <p className="text-slate-400 mt-2">
                    Commitment to privacy and legal compliance.
                  </p>

                </div>

              </div>

              <p className="text-slate-300 leading-9 text-[16px]">

                The privacy of your personal information has always been
                extremely important to us at Ashlar Securities Pvt. Ltd.
                We are committed to respecting your right to privacy and
                protecting your information against unauthorized access,
                disclosure, misuse or modification.

              </p>

            </div>

            {/* SECTION 2 */}
            <div className="rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-xl p-10">

              <div className="flex items-center gap-5 mb-8">

                <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center">

                  <LockKeyhole
                    size={32}
                    className="text-blue-400"
                  />

                </div>

                <div>

                  <h2 className="text-3xl font-bold">
                    Personal Information Protection
                  </h2>

                  <p className="text-slate-400 mt-2">
                    Safe collection and handling of user data.
                  </p>

                </div>

              </div>

              <p className="text-slate-300 leading-9 text-[16px]">

                This privacy statement applies to all services provided
                through our website and digital platforms. Personal
                information may be collected when users voluntarily
                register, submit forms, participate in services or
                communicate with us. Such information is never shared
                with unaffiliated third parties without appropriate
                consent unless legally required.

              </p>

            </div>

            {/* SECTION 3 */}
            <div className="rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-xl p-10">

              <div className="flex items-center gap-5 mb-8">

                <div className="w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center">

                  <Globe
                    size={32}
                    className="text-green-400"
                  />

                </div>

                <div>

                  <h2 className="text-3xl font-bold">
                    Internet & Third-Party Advertising
                  </h2>

                  <p className="text-slate-400 mt-2">
                    Data analysis and online service monitoring.
                  </p>

                </div>

              </div>

              <p className="text-slate-300 leading-9 text-[16px]">

                We may perform statistical analysis of user behaviour
                and website activity to improve our services and
                understand platform usage. Any information shared with
                advertisers or partners remains aggregated and anonymous,
                ensuring complete user privacy and confidentiality.

              </p>

            </div>

            {/* SECTION 4 */}
            <div className="rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-xl p-10">

              <div className="flex items-center gap-5 mb-8">

                <div className="w-16 h-16 rounded-2xl bg-yellow-500/10 flex items-center justify-center">

                  <Cookie
                    size={32}
                    className="text-yellow-400"
                  />

                </div>

                <div>

                  <h2 className="text-3xl font-bold">
                    Cookies Policy
                  </h2>

                  <p className="text-slate-400 mt-2">
                    Understanding cookies and browser settings.
                  </p>

                </div>

              </div>

              <p className="text-slate-300 leading-9 text-[16px]">

                Cookies are small text files stored by your browser to
                improve website functionality and user experience.
                Cookies help recognize returning visitors, improve
                navigation and analyze website traffic. Users may
                disable cookies in browser settings, however certain
                services may become unavailable or function improperly.

              </p>

            </div>

            {/* SECTION 5 */}
            <div className="rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-xl p-10">

              <div className="flex items-center gap-5 mb-8">

                <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center">

                  <FileCheck
                    size={32}
                    className="text-purple-400"
                  />

                </div>

                <div>

                  <h2 className="text-3xl font-bold">
                    Policy Updates
                  </h2>

                  <p className="text-slate-400 mt-2">
                    Changes and future modifications.
                  </p>

                </div>

              </div>

              <p className="text-slate-300 leading-9 text-[16px]">

                Ashlar Securities reserves the right to modify this
                privacy policy at any time without prior notice.
                Updated policies will be published on this page and
                become effective immediately upon publication.

              </p>

            </div>

            {/* SECURITY NOTICE */}
            <div className="rounded-[35px] bg-gradient-to-r from-red-500 to-red-600 p-12 relative overflow-hidden shadow-[0_20px_80px_rgba(239,68,68,0.35)]">

              <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl" />

              <div className="relative z-10">

                <h2 className="text-4xl font-bold mb-6">
                  Data Security Commitment
                </h2>

                <p className="text-red-100 text-lg leading-9 max-w-4xl">

                  We implement strong security standards, encrypted
                  communication channels and strict compliance policies
                  to ensure the confidentiality and integrity of client
                  information at every level.

                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>

  );

}