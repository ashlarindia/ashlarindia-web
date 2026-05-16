import { clsx, type ClassValue } from "clsx";

/**
 * Merge Tailwind classes safely.
 * If you skip clsx, replace cn(a, b, c) with `${a} ${b} ${c}`.
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}