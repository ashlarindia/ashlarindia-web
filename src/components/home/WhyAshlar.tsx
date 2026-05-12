'use client';
import { WHY_FEATURES, TESTIMONIALS } from '@/data/site-data';
import { Quote, ShieldCheck, IndianRupee, Headphones, Zap, BarChart2, Lock, Globe, Award } from 'lucide-react';

// Map icon names to actual Lucide components
const iconMap: Record<string, any> = {
  ShieldCheck, IndianRupee, Headphones, Zap, BarChart2, Lock, Globe, Award
};

export default function WhyAshlar() {
  return (
    <>
      {/* WHY FEATURES Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1A1A2E] mb-3">Why Choose Ashlar India?</h2>
            <p className="text-[#6B6B7B]">Experience trading with India's most transparent broker</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_FEATURES.map((feature, idx) => {
              const IconComponent = iconMap[feature.icon];
              return (
                <div key={idx} className="text-center p-6 rounded-2xl border border-[#E8E8E8] hover:shadow-lg transition-all group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-blue-50 text-[#0066CC] flex items-center justify-center group-hover:scale-110 transition-transform">
                    {IconComponent && <IconComponent size={32} />}
                  </div>
                  <h3 className="font-bold text-[#1A1A2E] mb-2">{feature.title}</h3>
                  <p className="text-sm text-[#6B6B7B] leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#F7F8FA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1A1A2E] mb-3">What Our Clients Say</h2>
            <p className="text-[#6B6B7B]">Real stories from satisfied investors</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS && TESTIMONIALS.length > 0 ? (
              TESTIMONIALS.map((testimonial, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-[#E8E8E8] shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-[#0066CC] mb-4 opacity-50">
                    <Quote size={32} />
                  </div>
                  <p className="text-[#6B6B7B] text-sm leading-relaxed mb-4">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t border-[#E8E8E8] pt-4">
                    <p className="font-semibold text-[#1A1A2E]">{testimonial.name}</p>
                    <p className="text-xs text-[#8B8B9A]">{testimonial.role}</p>
                    {testimonial.location && (
                      <p className="text-xs text-[#8B8B9A] mt-1">{testimonial.location}</p>
                    )}
                  </div>
                </div>
              ))
            ) : (
              // Fallback testimonials if none exist in data
              <>
                <div className="bg-white p-6 rounded-2xl border border-[#E8E8E8]">
                  <Quote size={32} className="text-[#0066CC] opacity-50 mb-4" />
                  <p className="text-[#6B6B7B] text-sm leading-relaxed mb-4">"Excellent platform with transparent pricing. The customer support is very responsive."</p>
                  <div className="border-t border-[#E8E8E8] pt-4">
                    <p className="font-semibold text-[#1A1A2E]">Rajesh Kumar</p>
                    <p className="text-xs text-[#8B8B9A]">Retail Investor</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-[#E8E8E8]">
                  <Quote size={32} className="text-[#0066CC] opacity-50 mb-4" />
                  <p className="text-[#6B6B7B] text-sm leading-relaxed mb-4">"The flat ₹10 brokerage has saved me thousands in trading costs. Highly recommended!"</p>
                  <div className="border-t border-[#E8E8E8] pt-4">
                    <p className="font-semibold text-[#1A1A2E]">Priya Sharma</p>
                    <p className="text-xs text-[#8B8B9A]">Professional Trader</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-[#E8E8E8]">
                  <Quote size={32} className="text-[#0066CC] opacity-50 mb-4" />
                  <p className="text-[#6B6B7B] text-sm leading-relaxed mb-4">"Opening my demat account was seamless. The platform is very user-friendly."</p>
                  <div className="border-t border-[#E8E8E8] pt-4">
                    <p className="font-semibold text-[#1A1A2E]">Amit Patel</p>
                    <p className="text-xs text-[#8B8B9A]">First-time Investor</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}