'use client';

import {
  ShieldAlert,
  Lock,
  Mail,
  Phone,
  ExternalLink,
  ChevronRight,
  CheckCircle2,
} from 'lucide-react';

export default function FreezeBlockingPage() {
  return (
    <div className="min-h-screen bg-[#030b1d] text-white overflow-hidden relative">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-red-500/20 rounded-full blur-3xl" />

      <div className="absolute bottom-[-150px] right-[-120px] w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-3xl" />

      {/* HERO */}
      <section className="relative z-10 py-24">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 px-5 py-2 rounded-full mb-6">

            <ShieldAlert size={18} />

            Trading Account Protection

          </div>

          <h1 className="text-5xl lg:text-7xl font-bold mb-8">

            Freezing &{' '}

            <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">

              Blocking

            </span>

          </h1>

          <p className="text-slate-400 text-lg max-w-4xl mx-auto leading-8">

            Protect your trading account by requesting voluntary
            freezing or blocking access in case of suspicious activity
            or security concerns.

          </p>

        </div>

      </section>

      {/* MAIN CONTENT */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-24">

        {/* INTRO CARD */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-[40px] p-10 lg:p-14 shadow-2xl mb-12">

          <div className="flex items-center gap-5 mb-10">

            <div className="w-20 h-20 rounded-3xl bg-red-500/10 flex items-center justify-center text-red-400">

              <Lock size={40} />

            </div>

            <div>

              <h2 className="text-4xl font-bold">
                Voluntary Freezing / Blocking
              </h2>

              <p className="text-slate-400 mt-3">
                SEBI compliant investor protection framework.
              </p>

            </div>

          </div>

          <div className="space-y-8 text-slate-300 leading-9 text-lg">

            <p>
              We hereby inform and notify you that we have implemented
              a policy in accordance with SEBI regulations and NSE circulars
              regarding the framework for Trading Members to provide the facility
              of voluntary freezing/blocking of online access of trading accounts.
            </p>

            <p>
              This framework has been introduced to protect clients against
              suspicious activities and unauthorized access to trading accounts.
            </p>

            <p>
              With effect from <span className="text-red-400 font-semibold">01.07.2024</span>,
              clients can request voluntary freezing/blocking through dedicated
              communication channels mentioned below.
            </p>

          </div>

        </div>

        {/* CONTACT METHODS */}
        <div className="grid lg:grid-cols-2 gap-10 mb-14">

          {/* EMAIL */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-[36px] p-10 shadow-2xl hover:scale-[1.02] transition-all duration-300">

            <div className="w-20 h-20 rounded-3xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-8">

              <Mail size={40} />

            </div>

            <h3 className="text-3xl font-bold mb-5">
              Dedicated Email ID
            </h3>

            <p className="text-slate-400 leading-8 mb-8">
              Send your freezing/blocking request directly from your
              registered email ID for quick verification and processing.
            </p>

            <a
              href="mailto:stoptrade@ashlarindia.com"
              className="inline-flex items-center gap-3 text-cyan-400 text-xl hover:text-cyan-300 transition"
            >

              stoptrade@ashlarindia.com

              <ExternalLink size={18} />

            </a>

          </div>

          {/* CALL */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-[36px] p-10 shadow-2xl hover:scale-[1.02] transition-all duration-300">

            <div className="w-20 h-20 rounded-3xl bg-red-500/10 flex items-center justify-center text-red-400 mb-8">

              <Phone size={40} />

            </div>

            <h3 className="text-3xl font-bold mb-5">
              Customer Support Call
            </h3>

            <p className="text-slate-400 leading-8 mb-8">
              Clients may also request freezing/blocking
              using their registered mobile number.
            </p>

            <div className="space-y-3">

              <p className="text-3xl font-bold text-white">
                0120-6633205 / 231
              </p>

              <p className="text-slate-500">
                Between 09:00 AM to 05:00 PM
              </p>

            </div>

          </div>

        </div>

        {/* HOW IT WORKS */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-[40px] overflow-hidden shadow-2xl mb-14">

          {/* HEADER */}
          <div className="p-10 border-b border-white/10">

            <h2 className="text-4xl font-bold">
              Request Process
            </h2>

            <p className="text-slate-400 mt-3">
              Follow these simple steps to freeze/block your account.
            </p>

          </div>

          {/* STEPS */}
          <div className="grid lg:grid-cols-3 gap-8 p-10">

            {/* STEP 1 */}
            <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">

              <div className="w-16 h-16 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-400 mb-6">

                <CheckCircle2 size={30} />

              </div>

              <h3 className="text-2xl font-bold mb-5">
                Step 1
              </h3>

              <p className="text-slate-400 leading-8">
                Send request from your registered email ID
                OR call from your registered mobile number.
              </p>

            </div>

            {/* STEP 2 */}
            <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">

              <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6">

                <CheckCircle2 size={30} />

              </div>

              <h3 className="text-2xl font-bold mb-5">
                Step 2
              </h3>

              <p className="text-slate-400 leading-8">
                Verification will be performed by the
                support/security team immediately.
              </p>

            </div>

            {/* STEP 3 */}
            <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">

              <div className="w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-400 mb-6">

                <CheckCircle2 size={30} />

              </div>

              <h3 className="text-2xl font-bold mb-5">
                Step 3
              </h3>

              <p className="text-slate-400 leading-8">
                Trading access will be frozen/blocked
                to protect your account from misuse.
              </p>

            </div>

          </div>

        </div>

        {/* IMPORTANT NOTICE */}
        <div className="backdrop-blur-xl bg-gradient-to-r from-red-500/10 to-red-600/10 border border-red-500/20 rounded-[40px] p-10 shadow-2xl mb-14">

          <h2 className="text-3xl font-bold mb-6 text-red-400">
            Important Notice
          </h2>

          <div className="space-y-6 text-slate-300 leading-8 text-lg">

            <p>
              The client may send his/her request for voluntary
              freezing/blocking of online trading access through:
            </p>

            <ul className="space-y-4">

              <li>
                • Registered Email ID
              </li>

              <li>
                • Registered Mobile Number
              </li>

              <li>
                • Customer Support Call
              </li>

            </ul>

            <p>
              Further details and operational procedures
              are governed under the Exchange prescribed framework.
            </p>

          </div>

        </div>

        {/* CTA */}
        <div className="rounded-[40px] overflow-hidden bg-gradient-to-r from-red-500 to-red-600 p-14 shadow-[0_20px_80px_rgba(239,68,68,0.4)] relative">

          <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">

            <div>

              <h2 className="text-4xl font-bold mb-5">
                Need Immediate Assistance?
              </h2>

              <p className="text-red-100 text-lg leading-8 max-w-2xl">

                Contact our support team immediately if you
                suspect unauthorized activity in your trading account.

              </p>

            </div>

            <a
              href="mailto:stoptrade@ashlarindia.com"
              className="flex items-center gap-3 bg-white text-red-600 px-8 py-5 rounded-2xl font-semibold hover:scale-105 transition-all duration-300 shadow-2xl"
            >

              Contact Support

              <ChevronRight size={20} />

            </a>

          </div>

        </div>

      </section>

    </div>
  );
}