"use client";

import type { FC } from "react";
import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

interface AnimatedNumberProps {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  /** Re-run animation every time element enters view */
  repeat?: boolean;
  className?: string;
  locale?: string;
}

/**
 * rAF-driven count-up. easeOutExpo. Reduced-motion safe.
 * Used in Stats, Hero preview, Calculators.
 */
const AnimatedNumber: FC<AnimatedNumberProps> = ({
  value, prefix = "", suffix = "", decimals = 0, duration = 1600,
  repeat, className, locale = "en-IN",
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: !repeat, margin: "-40px" });
  const prefersReducedMotion = useReducedMotion();
  const [display, setDisplay] = useState(prefersReducedMotion ? value : 0);

  useEffect(() => {
    if (!inView) return;
    if (prefersReducedMotion) { setDisplay(value); return; }

    let raf = 0;
    const start = performance.now();
    const startFrom = display;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      setDisplay(startFrom + (value - startFrom) * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, value, duration, prefersReducedMotion]);

  return (
    <span ref={ref} className={`tabular-nums ${className ?? ""}`}>
      {prefix}
      {display.toLocaleString(locale, {
        minimumFractionDigits: decimals, maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
};

export default AnimatedNumber;