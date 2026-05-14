'use client';

import {
  Download,
  FileText,
  FolderOpen,
  Search,
  ShieldCheck,
} from 'lucide-react';

const categories = [
  'Software & Utilities',
  'Forms & Formats',
  'User Manuals',
  'KYC Form',
  'Tariff & Term Sheets',
  'Client Registration Docs (Commodities)',
  'Client Registration Docs (Securities)',
  'Others',
];

const downloads = [
  {
    title: 'Remote Desktop Application',
    category: 'Software',
  },
  {
    title: 'Wisdom XTS Patch Update',
    category: 'Software',
  },
  {
    title: 'Wisdom NEO Trading Software',
    category: 'Software',
  },
  {
    title: 'WinRAR 64 Bit',
    category: 'Utility',
  },
  {
    title: 'JAVA Chart 32 Bit',
    category: 'Utility',
  },
  {
    title: 'wisdomXTS_32Bit',
    category: 'Software',
  },
  {
    title: 'wisdomXTS_64Bit',
    category: 'Software',
  },
];

export default function DownloadsPage() {
  return (
    <div className="min-h-screen bg-[#030b1d] text-white relative overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-red-500/20 rounded-full blur-3xl" />

      <div className="absolute bottom-[-150px] right-[-120px] w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-3xl" />

      {/* HERO */}
      <section className="relative z-10 py-24">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 px-5 py-2 rounded-full mb-6 backdrop-blur-md">

            <FolderOpen size={18} />

            Downloads Center

          </div>

          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Downloads
          </h1>

          <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-8">
            Download trading software, forms, utilities,
            manuals and important documents securely.
          </p>

        </div>

      </section>

      {/* MAIN */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-24">

        <div className="grid lg:grid-cols-12 gap-8">

          {/* LEFT SIDEBAR */}
          <div className="lg:col-span-4">

            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-[32px] p-6 shadow-2xl">

              <div className="flex items-center gap-3 mb-8">

                <ShieldCheck className="text-red-400" />

                <h2 className="text-2xl font-bold">
                  Categories
                </h2>

              </div>

              <div className="space-y-4">

                {categories.map((item, index) => (
                  <button
                    key={index}
                    className={`w-full text-left px-6 py-5 rounded-2xl border transition-all duration-300 ${
                      index === 0
                        ? 'bg-gradient-to-r from-red-500 to-red-600 border-red-500 text-white shadow-lg'
                        : 'bg-white/5 border-white/10 hover:bg-white/10 text-slate-300'
                    }`}
                  >

                    {item}

                  </button>
                ))}

              </div>

            </div>

          </div>

          {/* RIGHT CONTENT */}
          <div className="lg:col-span-8">

            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-[32px] overflow-hidden shadow-2xl">

              {/* SEARCH */}
              <div className="p-6 border-b border-white/10">

                <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl px-5 py-4">

                  <Search
                    className="text-red-400"
                    size={22}
                  />

                  <input
                    type="text"
                    placeholder="Search downloads..."
                    className="w-full bg-transparent outline-none text-white placeholder:text-slate-500"
                  />

                </div>

              </div>

              {/* HEADER */}
              <div className="grid grid-cols-12 px-8 py-5 border-b border-white/10 text-slate-400 text-sm uppercase tracking-wider font-semibold">

                <div className="col-span-8">
                  Software & Utilities File List
                </div>

                <div className="col-span-4 text-center">
                  Download
                </div>

              </div>

              {/* FILES */}
              <div>

                {downloads.map((item, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-12 px-8 py-6 border-b border-white/10 items-center hover:bg-white/5 transition-all duration-300"
                  >

                    {/* TITLE */}
                    <div className="col-span-8 flex items-center gap-4">

                      <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-400">

                        <FileText size={22} />

                      </div>

                      <div>

                        <h3 className="font-semibold text-white text-lg">

                          {item.title}

                        </h3>

                        <p className="text-slate-500 text-sm mt-1">

                          {item.category}

                        </p>

                      </div>

                    </div>

                    {/* BUTTON */}
                    <div className="col-span-4 flex justify-center">

                      <button className="flex items-center gap-2 px-6 py-3 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-[#071028] transition-all duration-300 font-semibold">

                        <Download size={18} />

                        Download

                      </button>

                    </div>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}