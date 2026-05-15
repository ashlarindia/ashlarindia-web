'use client';

import {
  Headset,
  Phone,
  ShieldCheck,
  Wallet,
  BadgeHelp,
  Laptop,
  Mail,
  MapPin,
  Clock3,
} from 'lucide-react';

const departments = [
  {
    title: 'Help Desk',
    icon: Headset,
    phones: '0120-6633205 / 231 / 238',
    email: 'care@ashlarindia.com',
    color: 'bg-orange-100 text-orange-500',
  },
  {
    title: 'Trading Support',
    icon: Phone,
    phones:
      '0120-6633211 / 12 / 13 / 14',
    email: 'trading@ashlarindia.com',
    color: 'bg-green-100 text-green-500',
  },
  {
    title: 'Risk Management Service',
    icon: ShieldCheck,
    phones:
      '0120-6633207 / 08 / 09 / 10',
    email: 'rms@ashlarindia.com',
    color: 'bg-yellow-100 text-yellow-500',
  },
  {
    title: 'Accounts',
    icon: Wallet,
    phones: '0120-6633220 / 22',
    email: 'fundsout@ashlarindia.com',
    color: 'bg-blue-100 text-blue-500',
  },
  {
    title: 'Sales Support',
    icon: BadgeHelp,
    phones: '0120-6633238',
    email: 'b2b@ashlarindia.com',
    color: 'bg-pink-100 text-pink-500',
  },
  {
    title: 'IT Support',
    icon: Laptop,
    phones: '0120-6633228 / 16 / 17',
    email: 'itsupport@ashlarindia.com',
    color: 'bg-red-100 text-red-500',
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#f5f7fb]">

      {/* HERO */}
      <section className="bg-gradient-to-r from-[#071028] via-[#102347] to-[#17356b] text-white py-24">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-5 py-2 rounded-full mb-6">

            <Phone size={18} />

            Contact Ashlar India

          </div>

          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Contact Us
          </h1>

          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-8">
            We are always here to help you with trading,
            investment, accounts, support and technical assistance.
          </p>

        </div>

      </section>

      {/* CONTACT CARDS */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        {/* TOP BUTTONS */}
        <div className="flex flex-wrap gap-5 mb-14 justify-center">

          <button className="px-8 py-4 rounded-2xl bg-[#071028] text-white font-semibold shadow-lg">
            Contact Us
          </button>

          <button className="px-8 py-4 rounded-2xl bg-red-500 hover:bg-red-600 transition text-white font-semibold shadow-lg">
            Escalation Matrix
          </button>

        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {departments.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-4xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:-translate-y-2"
              >

                {/* ICON */}
                <div
                  className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-6 ${item.color}`}
                >

                  <Icon size={38} />

                </div>

                {/* TITLE */}
                <h3 className="text-2xl font-bold text-[#071028] mb-5">

                  {item.title}

                </h3>

                {/* PHONE */}
                <div className="flex items-start gap-3 mb-5">

                  <Phone
                    size={18}
                    className="text-red-500 mt-1"
                  />

                  <p className="text-slate-600 leading-7">

                    {item.phones}

                  </p>

                </div>

                {/* EMAIL */}
                <div className="flex items-start gap-3">

                  <Mail
                    size={18}
                    className="text-blue-500 mt-1"
                  />

                  <a
                    href={`mailto:${item.email}`}
                    className="text-blue-500 hover:underline break-all"
                  >

                    {item.email}

                  </a>

                </div>

              </div>
            );
          })}

        </div>

      </section>

      {/* OFFICE INFO */}
      <section className="pb-24">

        <div className="max-w-6xl mx-auto px-6">

          <div className="bg-white rounded-[40px] p-10 shadow-2xl">

            <div className="grid lg:grid-cols-3 gap-10">

              {/* ADDRESS */}
              <div className="flex gap-5">

                <div className="w-16 h-16 rounded-2xl bg-red-100 text-red-500 flex items-center justify-center shrink-0">

                  <MapPin size={30} />

                </div>

                <div>

                  <h3 className="text-2xl font-bold text-[#071028] mb-3">
                    Office Address
                  </h3>

                  <p className="text-slate-600 leading-8">
                    A-1, Sector-10,
                    Noida, Uttar Pradesh - 201301
                  </p>

                </div>

              </div>

              {/* EMAIL */}
              <div className="flex gap-5">

                <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-500 flex items-center justify-center shrink-0">

                  <Mail size={30} />

                </div>

                <div>

                  <h3 className="text-2xl font-bold text-[#071028] mb-3">
                    Email Support
                  </h3>

                  <a
                    href="mailto:care@ashlarindia.com"
                    className="text-blue-500 hover:underline text-lg"
                  >

                    care@ashlarindia.com

                  </a>

                </div>

              </div>

              {/* HOURS */}
              <div className="flex gap-5">

                <div className="w-16 h-16 rounded-2xl bg-green-100 text-green-500 flex items-center justify-center shrink-0">

                  <Clock3 size={30} />

                </div>

                <div>

                  <h3 className="text-2xl font-bold text-[#071028] mb-3">
                    Working Hours
                  </h3>

                  <p className="text-slate-600 leading-8">
                    Monday - Friday
                    <br />
                    9:00 AM - 6:00 PM
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="pb-24">

        <div className="max-w-6xl mx-auto px-6">

          <div className="bg-gradient-to-r from-[#071028] to-[#17356b] rounded-[40px] p-14 text-white text-center shadow-2xl relative overflow-hidden">

            <div className="absolute top-0 right-0 w-72 h-72 bg-red-500/20 rounded-full blur-3xl" />

            <div className="relative z-10">

              <h2 className="text-5xl font-bold mb-6">
                Need Assistance?
              </h2>

              <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-8 mb-10">
                Our support team is always ready to assist you with
                account opening, trading support and investment queries.
              </p>

              <button className="px-10 py-5 rounded-2xl bg-red-500 hover:bg-red-600 transition text-white font-semibold text-lg shadow-2xl hover:scale-105">

                Contact Support

              </button>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}