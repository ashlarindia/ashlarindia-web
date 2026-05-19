"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { TrendingUp, TrendingDown, Zap } from "lucide-react";

/* =========================================================
   TYPES
========================================================= */

interface Ticker {
  symbol: string;
  price: number;
  change: number;
  changePct: number;
}

interface IndexTicker {
  name: string;
  value: number;
  change: number;
  changePct: number;
}

/* =========================================================
   DATA
========================================================= */

const INITIAL_INDICES: IndexTicker[] = [
  {
    name: "NIFTY 50",
    value: 24812.5,
    change: 142.3,
    changePct: 0.58,
  },
  {
    name: "SENSEX",
    value: 81243.66,
    change: -89.15,
    changePct: -0.11,
  },
];

const INITIAL_TICKERS: Ticker[] = [
  {
    symbol: "RELIANCE",
    price: 2842.5,
    change: 52.3,
    changePct: 1.84,
  },
  {
    symbol: "TCS",
    price: 3956.1,
    change: -16.72,
    changePct: -0.42,
  },
  {
    symbol: "HDFCBANK",
    price: 1672.35,
    change: 15.1,
    changePct: 0.91,
  },
  {
    symbol: "INFY",
    price: 1843.9,
    change: 22.45,
    changePct: 1.23,
  },
  {
    symbol: "ICICIBANK",
    price: 1234.55,
    change: -8.2,
    changePct: -0.66,
  },
  {
    symbol: "SBIN",
    price: 815.4,
    change: 12.8,
    changePct: 1.59,
  },
  {
    symbol: "ITC",
    price: 462.8,
    change: -2.15,
    changePct: -0.46,
  },
];

/* =========================================================
   HELPERS
========================================================= */

const fmtPrice = (n: number) =>
  n.toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

const fmtChange = (n: number) =>
  `${n >= 0 ? "+" : ""}${n.toFixed(2)}`;

const fmtPct = (n: number) =>
  `${n >= 0 ? "+" : ""}${n.toFixed(2)}%`;

const simulateTick = (t: Ticker): Ticker => {
  const direction = Math.random() > 0.5 ? 1 : -1;
  const move = t.price * (Math.random() * 0.0012) * direction;

  const newPrice = t.price + move;
  const newChange = t.change + move;

  return {
    ...t,
    price: newPrice,
    change: newChange,
    changePct: (newChange / (t.price - t.change)) * 100,
  };
};

/* =========================================================
   INDEX
========================================================= */

const IndexPill = ({ index }: { index: IndexTicker }) => {
  const up = index.change >= 0;

  return (
    <div className="flex shrink-0 items-center gap-3 border-r border-white/10 px-4 py-2">
      <span className="text-[11px] font-bold text-white">
        {index.name}
      </span>

      <span className="text-[13px] font-semibold text-white">
        {fmtPrice(index.value)}
      </span>

      <span
        className={`text-[11px] font-semibold ${
          up ? "text-green-400" : "text-red-400"
        }`}
      >
        {fmtPct(index.changePct)}
      </span>
    </div>
  );
};

/* =========================================================
   STOCK ITEM
========================================================= */

const TickerItem = ({ ticker }: { ticker: Ticker }) => {
  const up = ticker.change >= 0;

  const Icon = up ? TrendingUp : TrendingDown;

  const [flash, setFlash] = useState<"up" | "down" | null>(null);

  const prevPrice = useRef(ticker.price);

  useEffect(() => {
    if (ticker.price !== prevPrice.current) {
      setFlash(ticker.price > prevPrice.current ? "up" : "down");

      const timeout = setTimeout(() => {
        setFlash(null);
      }, 500);

      prevPrice.current = ticker.price;

      return () => clearTimeout(timeout);
    }
  }, [ticker.price]);

  return (
    <div
      className={`
        flex shrink-0 items-center gap-2 border-r border-gray-200 px-5 py-2
        transition-all duration-300
        ${flash === "up" ? "bg-green-50" : ""}
        ${flash === "down" ? "bg-red-50" : ""}
      `}
    >
      <span className="text-[12px] font-bold text-gray-900">
        {ticker.symbol}
      </span>

      <span className="text-[12px] font-semibold text-gray-800">
        ₹{fmtPrice(ticker.price)}
      </span>

      <span
        className={`flex items-center gap-1 text-[11px] font-semibold ${
          up ? "text-green-600" : "text-red-600"
        }`}
      >
        <Icon size={11} />
        {fmtChange(ticker.change)}
        ({fmtPct(ticker.changePct)})
      </span>
    </div>
  );
};

/* =========================================================
   MAIN
========================================================= */

export default function LiveTicker() {
  const [tickers, setTickers] =
    useState<Ticker[]>(INITIAL_TICKERS);

  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTickers((prev) => prev.map(simulateTick));
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const doubled = useMemo(
    () => [...tickers, ...tickers],
    [tickers]
  );

  return (
    <section className="w-full overflow-hidden border-y border-gray-200 bg-white">
      <div className="flex items-center">
        {/* LEFT LIVE PANEL */}

        <div className="hidden shrink-0 items-center bg-[#0b1220] sm:flex">
          <div className="flex items-center gap-2 border-r border-white/10 px-4 py-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />

              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>

            <span className="text-[10px] font-bold tracking-wider text-white">
              LIVE
            </span>

            <Zap
              size={11}
              className="text-yellow-400"
            />
          </div>

          {INITIAL_INDICES.map((index) => (
            <IndexPill
              key={index.name}
              index={index}
            />
          ))}
        </div>

        {/* TICKER */}

        <div
          className="relative flex-1 overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* LEFT FADE */}

          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-white to-transparent" />

          {/* RIGHT FADE */}

          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-l from-white to-transparent" />

          {/* TRACK */}

          <div
            className="ticker-track flex min-w-max whitespace-nowrap"
            style={{
              animationPlayState: paused
                ? "paused"
                : "running",
            }}
          >
            {doubled.map((ticker, idx) => (
              <TickerItem
                key={`${ticker.symbol}-${idx}`}
                ticker={ticker}
              />
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}