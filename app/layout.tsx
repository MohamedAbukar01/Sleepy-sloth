import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["SOFT", "opsz"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Sleepy Sloth — Permission to rest",
  description:
    "A gentle sloth companion that falls asleep alongside you. No graphs. No scores. No streaks. Just permission to rest.",
  openGraph: {
    title: "Sleepy Sloth",
    description:
      "The market didn't want a sleep tracker. It wanted permission to rest.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sleepy Sloth",
    description:
      "The market didn't want a sleep tracker. It wanted permission to rest.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0F1117",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="bg-night-950 font-sans text-moon-100 antialiased">
        {children}
      </body>
    </html>
  );
}
