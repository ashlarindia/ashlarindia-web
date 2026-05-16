"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { TrendingUp, TrendingDown, Activity } from "lucide-react";

/* =================================================================
   TYPES
   ================================================================= */
interface Ticker {
  symbol: string;
  name: string;
  price: number;
  change: number;     // absolute change in ₹
  changePct: number;  // % change
}

interface IndexTicker {
  name: string;
  value: number;
  change: number;
  changePct: number;
}

/* =================================================================
   MOCK DATA — replace with real WebSocket / API later
   ================================================================= */
const INITIAL_INDICES: IndexTicker[] = [
  { name: "NIFTY 50",       value: 24812.50, change:  142.30, changePct:  0.58 },
  { name: "SENSEX",         value: 81243.66, change:  -89.15, changePct: -0.11 },
  { name: "BANK NIFTY",     value: 51087.20, change:  321.45, changePct:  0.63 },
  { name: "NIFTY IT",       value: 42156.80, change: -184.20, changePct: -0.43 },
];

const INITIAL_TICKERS: Ticker[] = [
  { symbol: "RELIANCE",  name: "Reliance Industries", price: 2842.50, change:  52.30, changePct:  1.84 },
  { symbol: "TCS",       name: "Tata Consultancy",    price: 3956.10, change: -16.72, changePct: -0.42 },
  { symbol: "HDFCBANK",  name: "HDFC Bank",           price: 1672.35, change:  15.10, changePct:  0.91 },
  { symbol: "INFY",      name: "Infosys",             price: 1843.90, change:  22.45, changePct:  1.23 },
  { symbol: "ICICIBANK", name: "ICICI Bank",          price: 1234.55, change:  -8.20, changePct: -0.66 },
  { symbol: "SBIN",      name: "State Bank of India", price:  815.40, change:  12.80, changePct:  1.59 },
  { symbol: "BHARTIARTL",name: "Bharti Airtel",       price: 1567.25, change:  18.45, changePct:  1.19 },
  { symbol: "ITC",       name: "ITC Limited",         price:  462.80, change:  -2.15, changePct: -0.46 },
  { symbol: "LT",        name: "Larsen & Toubro",     price: 3654.20, change:  41.30, changePct:  1.14 },
  { symbol: "WIPRO",     name: "Wipro Limited",       price:  542.60, change:  -4.85, changePct: -0.89 },
  { symbol: "ASIANPAINT",name: "Asian Paints",        price: 2876.45, change:  -22.10, changePct: -0.76 },
  { symbol: "MARUTI",    name: "Maruti Suzuki",       price: 12450.80, change: 184.20, changePct:  1.50 },
  { symbol: "AXISBANK",  name: "Axis Bank",           price: 1156.35, change:   9.50, changePct:  0.83 },
  { symbol: "HCLTECH",   name: "HCL Technologies",    price: 1789.20, change:  21.40, changePct:  1.21 },
  { symbol: "KOTAKBANK", name: "Kotak Mahindra Bank", price: 1742.55, change:  -6.85, changePct: -0.39 },
];

/* =================================================================
   PRICE SIMULATOR
   Adds a tiny random walk to each price every few seconds so the
   ticker feels alive. Replace with real WebSocket feed in production.
   ================================================================= */
const simulateTick = (t: Ticker): Ticker => {
  // ±0.15% random walk, biased slightly toward current trend
  const direction = Math.random() > 0.5 ? 1 : -1;
  const magnitude = Math.random() * 0.0015;
  const delta = t.price * magnitude * direction;
  const newPrice = Math.max(0.01, t.price + delta);
  const newChange = t.change + delta;
  const basePrice = t.price - t.change;
  const newChangePct = (newChange / basePrice) * 100;
  return { ...t, price: newPrice, change: newChange, changePct: newChangePct };
};

/* =================================================================
   FORMATTERS
   ================================================================= */
const fmtPrice = (n: number) =>
  n.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const fmtChange = (n: number) =>
  (n >= 0 ? "+" : "") + n.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const fmtPct = (n: number) =>
  (n >= 0 ? "+" : "") + n.toFixed(2) + "%";

/* =================================================================
   TICKER ROW (single stock)
   ================================================================= */
const TickerItem: React.FC<{ ticker: Ticker }> = ({ ticker }) => {
  const isUp = ticker.change >= 0;
  const Icon = isUp ? TrendingUp : TrendingDown;
  const [flash, setFlash] = useState<"up" | "down" | null>(null);
  const prevPrice = useRef(ticker.price);

  // Flash background when price changes
  useEffect(() => {
    if (ticker.price !== prevPrice.current) {
      setFlash(ticker.price > prevPrice.current ? "up" : "down");
      const timer = setTimeout(() => setFlash(null), 600);
      prevPrice.current = ticker.price;
      return () => clearTimeout(timer);
    }
  }, [ticker.price]);

  return (
    <div
      className={[
        "inline-flex shrink-0 items-center gap-2.5 border-r border-border-subtle px-5 py-1.5 transition-colors duration-500",
        flash === "up" ? "bg-success/10" : flash === "down" ? "bg-danger/10" : "bg-transparent",
      ].join(" ")}
    >
      <span className="text-[12px] font-semibold tracking-tight text-ink-900">
        {ticker.symbol}
      </span>
      <span className="text-[12px] font-medium tabular-nums text-ink-800">
        ₹{fmtPrice(ticker.price)}
      </span>
      <span
        className={[
          "inline-flex items-center gap-0.5 text-[11px] font-medium tabular-nums",
          isUp ? "text-success" : "text-danger",
        ].join(" ")}
      >
        <Icon size={10} strokeWidth={2.25} aria-hidden="true" />
        {fmtChange(ticker.change)} ({fmtPct(ticker.changePct)})
      </span>
    </div>
  );
};

/* =================================================================
   INDEX PILL (NIFTY, SENSEX, etc — pinned, doesn't scroll)
   ================================================================= */
const IndexPill: React.FC<{ index: IndexTicker }> = ({ index }) => {
  const isUp = index.change >= 0;
  return (
    <div className="inline-flex shrink-0 items-center gap-2 border-r border-white/10 px-4 py-1.5">
      <span className="text-[11px] font-semibold uppercase tracking-wider text-white/70">
        {index.name}
      </span>
      <span className="text-[13px] font-semibold tabular-nums text-white">
        {fmtPrice(index.value)}
      </span>
      <span
        className={[
          "text-[11px] font-medium tabular-nums",
          isUp ? "text-success" : "text-danger",
        ].join(" ")}
      >
        {fmtPct(index.changePct)}
      </span>
    </div>
  );
};

/* =================================================================
   LIVE TICKER (main component)
   ================================================================= */
export default function LiveTicker() {
  const [tickers, setTickers] = useState<Ticker[]>(INITIAL_TICKERS);
  const [indices, setIndices] = useState<IndexTicker[]>(INITIAL_INDICES);
  const [paused, setPaused] = useState(false);

  // Simulate price updates every 2-3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setTickers((prev) => prev.map(simulateTick));
      setIndices((prev) =>
        prev.map((idx) => {
          const direction = Math.random() > 0.5 ? 1 : -1;
          const magnitude = Math.random() * 0.0008;
          const delta = idx.value * magnitude * direction;
          const basePrice = idx.value - idx.change;
          const newValue = idx.value + delta;
          const newChange = idx.change + delta;
          return {
            ...idx,
            value: newValue,
            change: newChange,
            changePct: (newChange / basePrice) * 100,
          };
        })
      );
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Duplicate the ticker list so the CSS marquee loops seamlessly
  const doubled = useMemo(() => [...tickers, ...tickers], [tickers]);

  return (
    <section
      aria-label="Live market data"
      className="relative w-full overflow-hidden border-y border-border-subtle bg-surface"
    >
      <div className="flex">
        {/* Left: indices badge cluster (pinned, dark background) */}
        <div className="hidden shrink-0 items-center bg-ink-900 sm:flex">
          <span className="flex items-center gap-1.5 border-r border-white/10 px-4 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-white">
              Live
            </span>
          </span>
          {indices.slice(0, 2).map((idx) => (
            <IndexPill key={idx.name} index={idx} />
          ))}
        </div>

        {/* Mobile-only live badge */}
        <div className="flex shrink-0 items-center bg-ink-900 sm:hidden">
          <span className="flex items-center gap-1.5 px-3 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-white">
              Live
            </span>
          </span>
        </div>

        {/* Right: scrolling ticker tape */}
        <div
          className="relative flex-1 overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Fade gradients on edges for premium look */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-surface to-transparent"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-l from-surface to-transparent"
          />

          {/* Scrolling track */}
          <div
            className={[
              "flex whitespace-nowrap",
              paused ? "animation-pause" : "",
              "animate-ticker-scroll motion-reduce:animate-none",
            ].join(" ")}
            style={{
              animationPlayState: paused ? "paused" : "running",
            }}
          >
            {doubled.map((ticker, idx) => (
              <TickerItem key={`${ticker.symbol}-${idx}`} ticker={ticker} />
            ))}
          </div>
        </div>
      </div>

      {/* Activity icon (mobile/decorative) */}
      <span aria-hidden="true" className="sr-only">
        <Activity />
      </span>
    </section>
  );
}