import type { Metadata } from "next";
import { Geist, Fraunces } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Daniel Naujocks — Webdesign & Grafikdesign, Berlin",
  description:
    "Maßgeschneiderte Websites und visuelle Identitäten aus Berlin. Gestaltet und entwickelt von einer Hand — vom ersten Konzept bis zum Livegang.",
  openGraph: {
    title: "Daniel Naujocks — Webdesign & Grafikdesign, Berlin",
    description:
      "Maßgeschneiderte Websites und visuelle Identitäten aus Berlin. Gestaltet und entwickelt von einer Hand.",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
