'use client';

import {
  BriefcaseBusiness,
  Users,
  Rocket,
  HeartHandshake,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

const benefits = [
  'Professional Growth Opportunities',
  'Inclusive & Friendly Work Culture',
  'Performance Based Rewards',
  'Training & Skill Development',
  'Modern Work Environment',
  'Fast Growing Financial Industry Exposure',
];

const openings = [
  {
    role: 'Relationship Manager',
    location: 'Noida',
    type: 'Full Time',
  },
  {
    role: 'Equity Dealer',
    location: 'Delhi',
    type: 'Full Time',
  },
  {
    role: 'Business Development Executive',
    location: 'Mumbai',
    type: 'Full Time',
  },
  {
    role: 'Customer Support Executive',
    location: 'Remote',
    type: 'Full Time',
  },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-[#f5f7fb]">

      {/* HERO */}
      <section className="bg-gradient-to-r from-[#071028] via-[#0d1b3d] to-[#132b5e] text-white py-24">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-5 py-2 rounded-full mb-6">
            <BriefcaseBusiness size={18} />
            Build Your Future With Us
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Careers At Ashlar India
          </h1>

          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-8">
            Join a fast-growing financial organization where innovation,
            collaboration and career growth come together.
          </p>

        </div>

      </section>

      {/* BENEFITS */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>

            <h2 className="text-4xl font-bold text-[#071028] mb-6">
              Why Work With Us?
            </h2>

            <p className="text-slate-600 text-lg leading-8 mb-10">
              ASHLAR is committed to creating and maintaining
              a culture that fosters an inclusive and diverse
              workforce where every employee has the opportunity
              to grow and succeed.
            </p>

            <div className="grid sm:grid-cols-2 gap-5">

              {benefits.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-white p-5 rounded-2xl shadow-md"
                >

                  <CheckCircle2
                    className="text-green-500 mt-1"
                    size={20}
                  />

                  <span className="text-slate-700 font-medium">
                    {item}
                  </span>

                </div>
              ))}

            </div>

          </div>

          {/* RIGHT */}
          <div className="bg-white rounded-[32px] p-10 shadow-2xl">

            <div className="space-y-8">

              <div className="flex gap-5">

                <div className="w-16 h-16 rounded-2xl bg-red-100 text-red-500 flex items-center justify-center">
                  <Users size={30} />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#071028] mb-2">
                    Inclusive Culture
                  </h3>

                  <p className="text-slate-600 leading-7">
                    We believe in teamwork and equal opportunities.
                  </p>
                </div>

              </div>

              <div className="flex gap-5">

                <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-500 flex items-center justify-center">
                  <Rocket size={30} />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#071028] mb-2">
                    Career Growth
                  </h3>

                  <p className="text-slate-600 leading-7">
                    Continuous learning and professional development.
                  </p>
                </div>

              </div>

              <div className="flex gap-5">

                <div className="w-16 h-16 rounded-2xl bg-green-100 text-green-500 flex items-center justify-center">
                  <HeartHandshake size={30} />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#071028] mb-2">
                    Supportive Team
                  </h3>

                  <p className="text-slate-600 leading-7">
                    Collaborative and motivating work environment.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* OPENINGS */}
      <section className="bg-white py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <h2 className="text-5xl font-bold text-[#071028] mb-5">
              Current Openings
            </h2>

            <p className="text-slate-600 text-lg">
              Explore exciting career opportunities with us.
            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {openings.map((job, index) => (
              <div
                key={index}
                className="bg-[#f5f7fb] rounded-3xl p-8 shadow-lg hover:shadow-2xl transition"
              >

                <div className="flex items-start justify-between mb-6">

                  <div>

                    <h3 className="text-2xl font-bold text-[#071028] mb-3">
                      {job.role}
                    </h3>

                    <p className="text-slate-600">
                      {job.location}
                    </p>

                  </div>

                  <span className="bg-red-100 text-red-500 px-4 py-2 rounded-full text-sm font-semibold">
                    {job.type}
                  </span>

                </div>

                <button className="flex items-center gap-2 text-red-500 font-semibold hover:gap-3 transition-all">

                  Apply Now

                  <ArrowRight size={18} />

                </button>

              </div>
            ))}

          </div>

        </div>

      </section>

    </div>
  );
}