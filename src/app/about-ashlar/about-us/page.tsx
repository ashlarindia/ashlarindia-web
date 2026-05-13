'use client';

import Link from 'next/link';
import { Shield, Award, Building2, Users, TrendingUp, Clock, CheckCircle } from 'lucide-react';

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1A1A2E] to-[#2D2D4A] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Ashlar India</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            India's most trusted stockbroker, serving investors since 2009
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Ashlar India is a SEBI-registered stockbroker committed to democratizing stock market investing in India. 
                Founded in 2009, we have grown to serve over 50,000+ satisfied clients across the country.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our mission is to provide transparent, technology-driven trading solutions with flat ₹10 brokerage 
                and zero hidden charges. We believe that every Indian deserves access to quality financial services.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With memberships on NSE, BSE, MCX, NCDEX, and as a Depository Participant with NSDL and CDSL, 
                we offer a comprehensive range of investment options across all asset classes.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 mb-6">
                To empower every Indian with the knowledge and tools needed to achieve financial independence 
                through transparent and affordable stock market investing.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-green-500 mt-0.5" />
                  <span className="text-gray-600">Provide transparent pricing with flat ₹10 brokerage</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-green-500 mt-0.5" />
                  <span className="text-gray-600">Offer cutting-edge trading platforms for all devices</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-green-500 mt-0.5" />
                  <span className="text-gray-600">Deliver exceptional customer support 24/7</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-green-500 mt-0.5" />
                  <span className="text-gray-600">Educate investors through quality research and insights</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-blue-600">15+</div>
              <div className="text-gray-500 text-sm">Years of Experience</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-blue-600">50,000+</div>
              <div className="text-gray-500 text-sm">Satisfied Clients</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-blue-600">200+</div>
              <div className="text-gray-500 text-sm">Team Members</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-blue-600">10+</div>
              <div className="text-gray-500 text-sm">Asset Classes</div>
            </div>
          </div>

          {/* Registrations */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Registrations & Memberships</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="font-semibold text-gray-900">SEBI</div>
                <div className="text-xs text-gray-500">INZ000203739</div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="font-semibold text-gray-900">NSE</div>
                <div className="text-xs text-gray-500">13718</div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="font-semibold text-gray-900">BSE</div>
                <div className="text-xs text-gray-500">3302</div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="font-semibold text-gray-900">MCX</div>
                <div className="text-xs text-gray-500">56815</div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="font-semibold text-gray-900">NCDEX</div>
                <div className="text-xs text-gray-500">01002</div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="font-semibold text-gray-900">NSDL DP</div>
                <div className="text-xs text-gray-500">IN303921</div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="font-semibold text-gray-900">CDSL DP</div>
                <div className="text-xs text-gray-500">IN-DP-2362016</div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="font-semibold text-gray-900">CIN</div>
                <div className="text-xs text-gray-500">U74899UP1994PTC016662</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}