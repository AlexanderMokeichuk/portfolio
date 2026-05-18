import type { Metadata } from "next";
import { Inter_Tight, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";

/**
 * Inter Tight — body / UI text.
 * Modern, compact sans-serif. Variable font for fine-grained weight control.
 */
const interTight = Inter_Tight({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

/**
 * Instrument Serif — display / editorial accents.
 * Thin, elegant serif for headlines and emphasis.
 * Italic-only at 400 weight (no other styles available).
 */
const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

/**
 * JetBrains Mono — code / meta / technical labels.
 * Purpose-built for developers — best glyphs for code-adjacent contexts.
 */
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alexander Mokeichuk — Full-Stack Developer",
  description:
    "Full-stack developer based in Bishkek. React, React Native, Node.js. Production systems, end-to-end.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${interTight.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-dvh antialiased">{children}</body>
    </html>
  );
}
