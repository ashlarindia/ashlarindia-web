export default function EServicesPage() {
  return (
    <div className="min-h-screen bg-[#030b1d] flex items-center justify-center px-6">

      <div className="max-w-2xl w-full bg-white/5 border border-white/10 rounded-[40px] p-12 text-center backdrop-blur-xl shadow-2xl">

        <h1 className="text-5xl font-bold text-white mb-6">
          NSDL e-Services
        </h1>

        <p className="text-slate-400 text-lg leading-8 mb-10">
          Access official NSDL online depository services,
          e-Voting, SPEED-e, IDeAS and more.
        </p>

        <a
          href="https://eservices.nsdl.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-5 rounded-2xl bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold text-lg hover:scale-105 transition-all duration-300"
        >
          Open NSDL e-Services
        </a>

      </div>

    </div>
  );
}