"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import {
  ShieldCheck,
  Mail,
  LockKeyhole,
  TriangleAlert,
  Users,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

const campaignData = [
  {
    id: "email",
    title: "Email",
    icon: Mail,

    images: [
      "/images/cyber/email-1.webp",
      "/images/cyber/email-2.jpg",
      "/images/cyber/email-3.jpg",
    ],

    description:
      "Stay alert from suspicious emails, fake attachments and unknown links.",
  },

  {
    id: "password",
    title: "Password Security & Threats",
    icon: LockKeyhole,

    images: [
      "/images/cyber/password-1.webp",
      "/images/cyber/password-2.webp",
      "/images/cyber/password-3.webp",
    ],

    description:
      "Create strong passwords and never share credentials with anyone.",
  },

  {
    id: "phishing",
    title: "Phishing",
    icon: TriangleAlert,

    images: [
      "/images/cyber/phishing-1.jpg",
      "/images/cyber/phishing-2.jpg",
      "/images/cyber/phishing-3.jpg",
    ],

    description:
      "Avoid fake lottery, banking and investment scam websites.",
  },

  {
    id: "social",
    title: "Social Engineering",
    icon: Users,

    images: [
      "/images/cyber/social-1.jpg",
      "/images/cyber/social-2.jpg",
      "/images/cyber/social-3.jpg",
    ],

    description:
      "Never trust unknown requests asking for OTP, funds or confidential data.",
  },
];

export default function CyberSecurityAwarenessPage() {
  const [activeTab, setActiveTab] = useState(campaignData[0]);

  const [currentImage, setCurrentImage] = useState(0);

  const nextSlide = () => {
    setCurrentImage((prev) =>
      prev === activeTab.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentImage((prev) =>
      prev === 0 ? activeTab.images.length - 1 : prev - 1
    );
  };

  const handleTabChange = (tab: (typeof campaignData)[0]) => {
    setActiveTab(tab);
    setCurrentImage(0);
  };

  return (
    <div className="min-h-screen bg-[#f7f4ef] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* HERO */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-14 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#eadfd8] bg-white px-5 py-2 text-sm font-medium text-[#b3261e] shadow-sm">
            <ShieldCheck size={16} />
            Cyber Protection & Awareness
          </div>

          <h1 className="text-4xl font-bold text-[#1A2B4B] md:text-5xl">
            Cybersecurity Awareness Campaign
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-gray-500">
            Learn how to stay protected from phishing attacks, password theft,
            email scams and social engineering frauds.
          </p>
        </motion.div>

        {/* MAIN GRID */}

        <div className="grid gap-10 lg:grid-cols-[320px_1fr]">

          {/* LEFT MENU */}

          <div className="space-y-5">
            {campaignData.map((tab) => {
              const Icon = tab.icon;

              const active = activeTab.id === tab.id;

              return (
                <motion.button
                  key={tab.id}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleTabChange(tab)}
                  className={`group w-full rounded-sm border px-6 py-6 text-left transition-all duration-300 ${
                    active
                      ? "border-[#b3261e] bg-[#f3e5df]"
                      : "border-[#e5d6cf] bg-[#eef3f6] hover:bg-[#f5ece7]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">

                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-sm transition-all ${
                          active
                            ? "bg-[#b3261e] text-white"
                            : "bg-white text-[#1A2B4B]"
                        }`}
                      >
                        <Icon size={20} />
                      </div>

                      <div>
                        <h3
                          className={`text-[17px] font-semibold ${
                            active
                              ? "text-[#b3261e]"
                              : "text-[#1A2B4B]"
                          }`}
                        >
                          {tab.title}
                        </h3>
                      </div>

                    </div>

                    <ChevronRight
                      size={18}
                      className={`transition-all ${
                        active
                          ? "translate-x-1 text-[#b3261e]"
                          : "text-gray-400"
                      }`}
                    />
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* RIGHT CONTENT */}

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.35 }}
              className="overflow-hidden rounded-sm border border-[#eadfd8] bg-white shadow-sm"
            >

              {/* HEADER */}

              <div className="border-b border-[#eadfd8] bg-[#faf7f4] px-8 py-7">
                <div className="flex items-center gap-4">

                  <div className="flex h-14 w-14 items-center justify-center rounded-sm bg-[#f3e5df]">
                    <activeTab.icon
                      size={26}
                      className="text-[#b3261e]"
                    />
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-[#1A2B4B]">
                      {activeTab.title}
                    </h2>

                    <p className="mt-2 text-sm text-gray-500">
                      {activeTab.description}
                    </p>
                  </div>

                </div>
              </div>

              {/* IMAGE SLIDER */}

              <div className="relative p-6">

                <div className="relative overflow-hidden rounded-sm border border-[#eadfd8]">

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentImage}
                      initial={{ opacity: 0.4, scale: 1.02 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0.4 }}
                      transition={{ duration: 0.45 }}
                      className="relative h-[520px] w-full"
                    >
                      <Image
                        src={activeTab.images[currentImage]}
                        alt={activeTab.title}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* LEFT BUTTON */}

                  <button
                    onClick={prevSlide}
                    className="absolute left-5 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#1A2B4B] shadow-lg transition-all hover:scale-105 hover:bg-white"
                  >
                    <ChevronLeft size={22} />
                  </button>

                  {/* RIGHT BUTTON */}

                  <button
                    onClick={nextSlide}
                    className="absolute right-5 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#1A2B4B] shadow-lg transition-all hover:scale-105 hover:bg-white"
                  >
                    <ChevronRight size={22} />
                  </button>

                  {/* COUNTER */}

                  <div className="absolute right-5 top-5 rounded-full bg-black/55 px-4 py-1 text-sm text-white backdrop-blur">
                    {currentImage + 1} / {activeTab.images.length}
                  </div>

                </div>

                {/* DOTS */}

                <div className="mt-6 flex items-center justify-center gap-3">
                  {activeTab.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImage(idx)}
                      className={`h-3 rounded-full transition-all duration-300 ${
                        currentImage === idx
                          ? "w-10 bg-[#b3261e]"
                          : "w-3 bg-[#d8c8c0]"
                      }`}
                    />
                  ))}
                </div>

              </div>

            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </div>
  );
}