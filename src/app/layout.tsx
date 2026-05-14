import "./globals.css";

import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Inter, Fraunces } from "next/font/google";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600"] as const,
});

export const metadata: Metadata = {
  title: "Ashlar — Building Trust Together",
  description:
    "Unlock financial growth with India's trusted investment partner.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable}`}
    >
      <body className="bg-surface text-ink-800 antialiased selection:bg-brand-100 selection:text-brand-800">
        
        <Header />

        <main>
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}