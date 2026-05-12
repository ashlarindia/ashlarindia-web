'use client';
import Link from 'next/link';
import { TRUST_BADGES, getKycUrl } from '@/data/site-data';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <>
      {/* Hero Section — Professional like Lakshmishree */}
      <section className="relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/stock.jpg"
            alt="Stock market background"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-black/60 z-0" />
        
        {/* Background pattern (optional, keep or remove) */}
        <div aria-hidden="true" className="absolute inset-0 opacity-[0.03] z-0"
          style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '28px 28px' }} />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20 lg:py-24 z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Content */}
            <div className="text-center lg:text-left">
              {/* Trust badge */}
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 border border-white/10 bg-white/5 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00C853] animate-pulse" />
                <span className="text-[#C0C0D0] text-xs font-medium tracking-wide">
                  SEBI Registered · Trusted since 2009
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-[-0.02em] leading-[1.1] mb-4">
                Trade smarter with{' '}
                <span className="block mt-2" style={{ background: 'linear-gradient(90deg, #4D9FFF 0%, #00C9A7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Ashlar India
                </span>
              </h1>

              {/* Description */}
              <p className="text-[#E0E0E0] text-base md:text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
                Built For Traders & Investors. Open a FREE Demat account in minutes!
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Link 
                  href={getKycUrl('hero')} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white transition-all duration-150 hover:scale-105"
                  style={{ background: 'linear-gradient(135deg, #0066CC 0%, #004FA3 100%)' }}
                >
                  Open Free Account
                  <span aria-hidden="true">→</span>
                </Link>
                <Link 
                  href="/products"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-semibold text-white transition-all duration-150 border border-white/20 hover:bg-white/10 backdrop-blur-sm"
                >
                  Explore Products
                </Link>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {TRUST_BADGES.slice(0, 4).map((badge) => (
                  <div key={badge.text} className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 border border-white/10 bg-white/5 backdrop-blur-sm">
                    <span className="text-[#00C853] text-xs font-bold">✓</span>
                    <span className="text-[#C0C0D0] text-xs">{badge.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Stats/Info Cards */}
            {/* <div className="grid grid-cols-2 gap-4">
              
              <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-white text-2xl font-bold">5 min</div>
                <div className="text-[#C0C0D0] text-xs mt-1">Account Opening</div>
              </div>
            </div> */}

          </div>
        </div>
      </section>
    </>
  );
}