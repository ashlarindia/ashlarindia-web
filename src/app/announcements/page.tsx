'use client';

import {
  BellRing,
  CalendarDays,
  ArrowRight,
  Briefcase,
  Landmark,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

const announcements = [
  {
    title:
      'Revision In MCX Trading Hours From March 11, 2024',
    description:
      'MCX will revise its trading hours for commodity derivative segment from March 11, 2024.',
    date: 'Thursday, February 29, 2024',
  },
  {
    title:
      'Changes In Securities Transaction Tax Rate',
    description:
      'Government revised STT rates effective from October 1, 2024.',
    date: 'Friday, March 1, 2024',
  },
  {
    title:
      'Live Trading Session On Saturday',
    description:
      'NSE & BSE announced a special live trading session.',
    date: 'Saturday, March 2, 2024',
  },
  {
    title:
      'MCX Transaction Charges Revised',
    description:
      'New transaction charges applicable from October 1, 2024.',
    date: 'Monday, March 4, 2024',
  },
];

const services = [
  {
    title: 'Currency',
    icon: TrendingUp,
    description:
      'Foreign exchange market trading with advanced tools.',
  },
  {
    title: 'Depository Participant',
    icon: ShieldCheck,
    description:
      'Secure electronic holding of shares and securities.',
  },
  {
    title: 'IPO Investments',
    icon: Landmark,
    description:
      'Invest in upcoming IPO opportunities seamlessly.',
  },
  {
    title: 'Insurance',
    icon: Briefcase,
    description:
      'Life and general insurance plans for protection.',
  },
  {
    title: 'Mutual Funds',
    icon: BellRing,
    description:
      'Smart investment solutions for long-term wealth.',
  },
];

export default function AnnouncementsPage() {
  return (
    <div className="min-h-screen bg-[#f5f7fb]">

      {/* HERO */}
      <section className="bg-gradient-to-r from-[#071028] via-[#0d1b3d] to-[#132b5e] text-white py-24">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-5 py-2 rounded-full mb-6">
            <BellRing size={18} />
            Latest Updates & Notifications
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Announcements
          </h1>

          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-8">
            Stay updated with important market announcements,
            trading updates, exchange circulars and investor notifications.
          </p>

        </div>

      </section>

      {/* ANNOUNCEMENTS */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="flex items-center justify-between mb-10">

          <div>

            <h2 className="text-4xl font-bold text-[#071028] mb-3">
              Latest Announcements
            </h2>

            <p className="text-slate-600 text-lg">
              Important updates from Ashlar India and Exchanges.
            </p>

          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {announcements.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition duration-300 border border-red-100"
            >

              <div className="flex items-start justify-between gap-5 mb-5">

                <div className="w-14 h-14 rounded-2xl bg-red-100 flex items-center justify-center text-red-500">
                  <BellRing />
                </div>

                <span className="text-sm bg-red-50 text-red-500 px-4 py-1 rounded-full">
                  Update
                </span>

              </div>

              <h3 className="text-2xl font-bold text-[#071028] mb-4 leading-snug">
                {item.title}
              </h3>

              <p className="text-slate-600 leading-7 mb-6">
                {item.description}
              </p>

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <CalendarDays size={16} />
                  {item.date}
                </div>

                <button className="flex items-center gap-2 text-red-500 font-semibold hover:gap-3 transition-all">
                  Read More
                  <ArrowRight size={16} />
                </button>

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* PRODUCT & SERVICES */}
      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <h2 className="text-5xl font-bold text-[#071028] mb-5">
              Product & Services
            </h2>

            <p className="text-slate-600 text-lg">
              Explore our complete investment ecosystem.
            </p>

          </div>

          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
          >

            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <SwiperSlide key={index}>

                  <div className="bg-[#f5f7fb] rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition duration-300 border border-slate-100 h-full">

                    <div className="w-20 h-20 mx-auto rounded-3xl bg-red-100 flex items-center justify-center text-red-500 mb-6">
                      <Icon size={38} />
                    </div>

                    <h3 className="text-2xl font-bold text-[#071028] mb-4">
                      {service.title}
                    </h3>

                    <p className="text-slate-600 leading-7">
                      {service.description}
                    </p>

                  </div>

                </SwiperSlide>
              );
            })}

          </Swiper>

        </div>

      </section>

      {/* CTA */}
      <section className="py-24">

        <div className="max-w-6xl mx-auto px-6">

          <div className="bg-gradient-to-r from-[#071028] to-[#132b5e] rounded-[40px] p-14 text-white relative overflow-hidden shadow-2xl">

            <div className="absolute top-0 right-0 w-72 h-72 bg-red-500/20 rounded-full blur-3xl" />

            <div className="relative z-10 text-center">

              <h2 className="text-5xl font-bold mb-6">
                Open Your Trading Account Today
              </h2>

              <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-8 mb-10">
                Start your investment journey with Ashlar India and
                access powerful trading platforms, market insights
                and expert support.
              </p>

              <button className="px-10 py-5 rounded-2xl bg-red-500 hover:bg-red-600 transition text-white font-semibold text-lg shadow-2xl hover:scale-105">
                Open Account Now
              </button>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}