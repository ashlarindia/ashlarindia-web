'use client';

import Link from 'next/link';
import { Briefcase, MapPin, Clock, DollarSign } from 'lucide-react';

export default function CareersPage() {
  const jobs = [
    {
      title: 'Relationship Manager',
      location: 'Noida',
      experience: '2-5 years',
      salary: '₹3-6 LPA',
      type: 'Full-time'
    },
    {
      title: 'Equity Research Analyst',
      location: 'Mumbai',
      experience: '3-7 years',
      salary: '₹5-10 LPA',
      type: 'Full-time'
    },
    {
      title: 'Customer Support Executive',
      location: 'Noida',
      experience: '1-3 years',
      salary: '₹2-4 LPA',
      type: 'Full-time'
    },
    {
      title: 'Business Development Associate',
      location: 'Delhi NCR',
      experience: '1-4 years',
      salary: '₹3-5 LPA',
      type: 'Full-time'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#1A1A2E] to-[#2D2D4A] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Join Our Team</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Build your career with India's fastest-growing stockbroking company
          </p>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Current Openings</h2>
          <div className="grid gap-4">
            {jobs.map((job, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1"><MapPin size={14} /> {job.location}</span>
                      <span className="flex items-center gap-1"><Clock size={14} /> {job.experience}</span>
                      <span className="flex items-center gap-1"><DollarSign size={14} /> {job.salary}</span>
                      <span className="flex items-center gap-1"><Briefcase size={14} /> {job.type}</span>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">Why Join Ashlar India?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl mb-2">🏆</div>
              <h3 className="font-semibold text-gray-900 mb-2">15+ Years of Excellence</h3>
              <p className="text-sm text-gray-500">Work with an established industry leader</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">📈</div>
              <h3 className="font-semibold text-gray-900 mb-2">Fast Growth</h3>
              <p className="text-sm text-gray-500">Be part of our rapid expansion journey</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">💼</div>
              <h3 className="font-semibold text-gray-900 mb-2">Great Benefits</h3>
              <p className="text-sm text-gray-500">Competitive salary and growth opportunities</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}