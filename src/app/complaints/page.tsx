'use client';

import {
  FileText,
  Download,
  ExternalLink,
  ShieldAlert,
  Phone,
  Mail,
  ChevronRight,
} from 'lucide-react';

const pdfs = [
  {
    title: 'Complaint Filing Process',
    description:
      'Step-by-step investor grievance complaint redressal mechanism.',
    file: '/pdfs/COMPLAINT_FILLING.pdf',
  },

  {
    title: 'Investor Charter',
    description:
      'Investor rights, responsibilities and grievance process.',
    file: '/pdfs/investor-charter.pdf',
  },

  {
    title: 'Escalation Matrix',
    description:
      'Contact escalation hierarchy for investor support.',
    file: '/pdfs/escalation-matrix.pdf',
  },
];

export default function ComplaintsPage() {
  return (
    <div className="min-h-screen bg-[#030b1d] text-white relative overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-red-500/20 rounded-full blur-3xl" />

      <div className="absolute bottom-[-150px] right-[-120px] w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-3xl" />

      {/* HERO */}
      <section className="relative z-10 py-24">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 px-5 py-2 rounded-full mb-6">

            <ShieldAlert size={18} />

            Investor Support

          </div>

          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Complaints & Grievances
          </h1>

          <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-8">
            We are committed to quick resolution of investor
            grievances with complete transparency and support.
          </p>

        </div>

      </section>

      {/* SUPPORT CARDS */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pb-20">

        <div className="grid md:grid-cols-2 gap-8">

          {/* CALL */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-[32px] p-10 shadow-2xl hover:scale-[1.02] transition-all duration-300">

            <div className="w-20 h-20 rounded-3xl bg-red-500/10 flex items-center justify-center text-red-400 mb-8">

              <Phone size={40} />

            </div>

            <h3 className="text-3xl font-bold mb-5">
              Call Customer Care
            </h3>

            <p className="text-slate-400 leading-8 mb-6">
              Contact our investor support team during
              business hours for grievance assistance.
            </p>

            <div className="space-y-3">

              <p className="text-xl font-semibold text-white">
                0120-6633205 / 231
              </p>

              <p className="text-slate-500">
                Monday to Friday
              </p>

              <p className="text-slate-500">
                09:00 AM to 05:30 PM
              </p>

            </div>

          </div>

          {/* EMAIL */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-[32px] p-10 shadow-2xl hover:scale-[1.02] transition-all duration-300">

            <div className="w-20 h-20 rounded-3xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-8">

              <Mail size={40} />

            </div>

            <h3 className="text-3xl font-bold mb-5">
              Email Complaint/Query
            </h3>

            <p className="text-slate-400 leading-8 mb-6">
              Send your grievance or support request
              directly to our investor support desk.
            </p>

            <a
              href="mailto:investorcell@ashlarindia.com"
              className="text-xl text-cyan-400 hover:text-cyan-300 transition"
            >

              investorcell@ashlarindia.com

            </a>

          </div>

        </div>

      </section>

      {/* PDF SECTION */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-24">

        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-[40px] overflow-hidden shadow-2xl">

          {/* HEADER */}
          <div className="p-10 border-b border-white/10">

            <div className="flex items-center gap-4">

              <div className="w-16 h-16 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-400">

                <FileText size={30} />

              </div>

              <div>

                <h2 className="text-4xl font-bold">
                  Complaint Documents
                </h2>

                <p className="text-slate-400 mt-2">
                  Download important complaint
                  and grievance related documents.
                </p>

              </div>

            </div>

          </div>

          {/* FILE LIST */}
          <div>

            {pdfs.map((item, index) => (
              <div
                key={index}
                className="grid lg:grid-cols-12 gap-6 items-center px-10 py-8 border-b border-white/10 hover:bg-white/5 transition-all duration-300"
              >

                {/* LEFT */}
                <div className="lg:col-span-8">

                  <div className="flex items-start gap-5">

                    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-red-400 shrink-0">

                      <FileText size={28} />

                    </div>

                    <div>

                      <h3 className="text-2xl font-semibold mb-3">

                        {item.title}

                      </h3>

                      <p className="text-slate-400 leading-7">

                        {item.description}

                      </p>

                    </div>

                  </div>

                </div>

                {/* RIGHT */}
                <div className="lg:col-span-4 flex flex-wrap gap-4 justify-start lg:justify-end">

                  {/* VIEW */}
                  <a
                    href={item.file}
                    target="_blank"
                    className="flex items-center gap-2 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                  >

                    <ExternalLink size={18} />

                    View PDF

                  </a>

                  {/* DOWNLOAD */}
                  <a
                    href={item.file}
                    download
                    className="flex items-center gap-2 px-6 py-4 rounded-2xl bg-gradient-to-r from-red-500 to-red-600 hover:scale-105 transition-all duration-300 shadow-2xl shadow-red-500/20"
                  >

                    <Download size={18} />

                    Download

                  </a>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pb-24">

        <div className="rounded-[40px] overflow-hidden bg-gradient-to-r from-red-500 to-red-600 p-14 shadow-[0_20px_80px_rgba(239,68,68,0.4)] relative">

          <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">

            <div>

              <h2 className="text-4xl font-bold mb-5">
                Need Immediate Help?
              </h2>

              <p className="text-red-100 text-lg leading-8 max-w-2xl">
                Contact our investor grievance support team
                for quick assistance and complaint resolution.
              </p>

            </div>

            <a
              href="mailto:investorcell@ashlarindia.com"
              className="flex items-center gap-3 bg-white text-red-600 px-8 py-5 rounded-2xl font-semibold hover:scale-105 transition-all duration-300 shadow-2xl"
            >

              Contact Support

              <ChevronRight size={20} />

            </a>

          </div>

        </div>

      </section>

    </div>
  );
}