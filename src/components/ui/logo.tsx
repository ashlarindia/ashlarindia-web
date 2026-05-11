export function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="grid h-11 w-11 place-items-center rounded-2xl bg-brand-orange text-white shadow-soft">
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 16 10 8l3 4 6-8" />
          <path d="M4 19h16" />
        </svg>
      </div>
      <div>
        <p className="font-display text-base font-extrabold leading-none text-brand-navy">
          Ashlar Markets
        </p>
        <p className="mt-1 text-xs text-slate-500">Brokerage platform UI</p>
      </div>
    </div>
  );
}