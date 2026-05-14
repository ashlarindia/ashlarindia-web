'use client';

import {
  Mail,
  Lock,
  Eye,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

import Image from 'next/image';
import Link from 'next/link';

export default function QuickMailPage() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#030b1d] flex items-center justify-center px-6 py-20">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-red-500/30 rounded-full blur-3xl" />

      <div className="absolute bottom-[-150px] right-[-120px] w-[400px] h-[400px] bg-blue-500/30 rounded-full blur-3xl" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:70px_70px]" />

      {/* CARD */}
      <div className="relative z-10 w-full max-w-md">

        <div className="backdrop-blur-2xl bg-white/10 border border-white/10 rounded-[40px] shadow-[0_20px_80px_rgba(0,0,0,0.5)] overflow-hidden">

          {/* TOP BAR */}
          <div className="h-2 bg-gradient-to-r from-red-500 via-pink-500 to-red-600" />

          <div className="p-10">

            {/* LOGO */}
            <div className="flex justify-center mb-10">

              <div className="relative">

                <div className="absolute inset-0 bg-red-500/30 blur-2xl rounded-full" />

                <div className="relative bg-white rounded-[28px] p-5 shadow-2xl">

                  <Image
                    src="/logo.png"
                    alt="Ashlar India"
                    width={220}
                    height={80}
                    className="object-contain"
                  />

                </div>

              </div>

            </div>

            {/* HEADING */}
            <div className="text-center mb-10">

              <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 text-red-400 px-5 py-2 rounded-full text-sm font-medium mb-6">

                <ShieldCheck size={16} />

                Secure Login Portal

              </div>

              <h1 className="text-4xl font-bold text-white mb-4">
                Quick Mail Login
              </h1>

              <p className="text-slate-400 leading-7">
                Access your secure Ashlar India mail dashboard
                with advanced protection.
              </p>

            </div>

            {/* FORM */}
            <form className="space-y-6">

              {/* USERNAME */}
              <div>

                <label className="block text-slate-300 font-medium mb-3">

                  User Name

                </label>

                <div className="relative">

                  <Mail
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
                    size={20}
                  />

                  <input
                    type="text"
                    placeholder="Enter your username"
                    className="w-full h-16 pl-14 pr-5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:border-red-500 outline-none transition-all duration-300"
                  />

                </div>

              </div>

              {/* PASSWORD */}
              <div>

                <label className="block text-slate-300 font-medium mb-3">

                  Password

                </label>

                <div className="relative">

                  <Lock
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
                    size={20}
                  />

                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-full h-16 pl-14 pr-14 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:border-red-500 outline-none transition-all duration-300"
                  />

                  <Eye
                    className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 cursor-pointer hover:text-white transition"
                    size={20}
                  />

                </div>

              </div>

              {/* OPTIONS */}
              <div className="flex items-center justify-between text-sm">

                <label className="flex items-center gap-2 text-slate-400 cursor-pointer">

                  <input
                    type="checkbox"
                    className="accent-red-500"
                  />

                  Remember Me

                </label>

                <Link
                  href="/forgot-password"
                  className="text-red-400 hover:text-red-300 transition"
                >

                  Forgot Password?

                </Link>

              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full h-16 rounded-2xl bg-gradient-to-r from-red-500 to-red-600 hover:scale-[1.02] transition-all duration-300 text-white font-semibold text-lg shadow-[0_10px_40px_rgba(239,68,68,0.45)] flex items-center justify-center gap-3"
              >

                Log In

                <ArrowRight size={22} />

              </button>

            </form>

            {/* FOOTER */}
            <div className="mt-10 pt-8 border-t border-white/10 flex items-center justify-between">

              <div>

                <p className="text-slate-500 text-sm">
                  Need help?
                </p>

                <a
                  href="mailto:care@ashlarindia.com"
                  className="text-red-400 hover:text-red-300 transition text-sm"
                >

                  care@ashlarindia.com

                </a>

              </div>

              <Link
                href="/scores"
                className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-red-500 hover:border-red-500 transition-all duration-300 text-sm font-medium"
              >

                SCORES

              </Link>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}