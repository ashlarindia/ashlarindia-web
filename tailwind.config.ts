import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1rem", lg: "2rem" },
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        brand: {
          50:  "#FBF5F4",
          100: "#F5E6E4",
          200: "#EBC9C5",
          300: "#D99A93",
          400: "#C26A60",
          500: "#A8463B",
          600: "#8B2F26",
          700: "#6E2118",
          800: "#4F1812",
          900: "#2E0E0A",
        },
        accent: {
          400: "#E8A14B",
          500: "#D4862A",
          600: "#B36A18",
        },
        ink: {
          50:  "#F7F7F8",
          100: "#EEEEF1",
          200: "#D9D9DF",
          400: "#8B8B95",
          500: "#6B6B73",
          600: "#4A4A52",
          800: "#1F1F24",
          900: "#0E0E11",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          subtle:  "#FAFAFB",
          muted:   "#F4F4F6",
          inverse: "#0E0E11",
        },
        border: {
          subtle: "rgba(15, 15, 17, 0.06)",
          DEFAULT: "rgba(15, 15, 17, 0.10)",
          strong: "rgba(15, 15, 17, 0.16)",
        },
        success: "#0F9B6C",
        danger:  "#C2362B",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "ui-serif", "Georgia", "serif"],
      },
      fontSize: {
        "display-2xl": ["clamp(2.75rem, 5vw + 1rem, 4.75rem)", { lineHeight: "1.02", letterSpacing: "-0.035em", fontWeight: "600" }],
        "display-xl":  ["clamp(2.25rem, 3.5vw + 1rem, 3.5rem)", { lineHeight: "1.05", letterSpacing: "-0.03em",  fontWeight: "600" }],
        "display-lg":  ["clamp(1.75rem, 2vw + 1rem, 2.5rem)",   { lineHeight: "1.1",  letterSpacing: "-0.025em", fontWeight: "600" }],
        "eyebrow":     ["0.75rem", { lineHeight: "1", letterSpacing: "0.14em", fontWeight: "600" }],
      },
      borderRadius: {
        sm: "6px",
        DEFAULT: "10px",
        lg: "14px",
        xl: "18px",
        "2xl": "24px",
      },
      boxShadow: {
        xs:  "0 1px 2px rgba(15,15,17,0.04)",
        sm:  "0 2px 4px rgba(15,15,17,0.04), 0 1px 2px rgba(15,15,17,0.03)",
        md:  "0 6px 16px -4px rgba(15,15,17,0.06), 0 2px 4px rgba(15,15,17,0.04)",
        lg:  "0 18px 40px -12px rgba(15,15,17,0.10), 0 4px 12px -2px rgba(15,15,17,0.05)",
        xl:  "0 32px 64px -20px rgba(15,15,17,0.14), 0 8px 20px -4px rgba(15,15,17,0.06)",
        brand: "0 12px 32px -10px rgba(139,47,38,0.35)",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "out-quart": "cubic-bezier(0.25, 1, 0.5, 1)",
      },
      keyframes: {
        "ticker-scroll": {
    "0%":   { transform: "translate3d(0, 0, 0)" },
    "100%": { transform: "translate3d(-50%, 0, 0)" },
  },
        "fade-up": {
          "0%": { opacity: "0", transform: "translate3d(0, 12px, 0)" },
          "100%": { opacity: "1", transform: "translate3d(0, 0, 0)" },
          
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) both",
        shimmer: "shimmer 2.2s linear infinite",
         "ticker-scroll": "ticker-scroll 60s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;