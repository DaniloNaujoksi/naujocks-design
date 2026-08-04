import type { Metadata } from "next";
import { Archivo, Geist } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
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
      suppressHydrationWarning
      className={`${geistSans.variable} ${archivo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          // Läuft vor dem ersten Paint: Standard ist Night-Modus, gespeicherte Wahl gewinnt.
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("theme");document.documentElement.dataset.theme=t==="light"?"light":"dark"}catch(e){document.documentElement.dataset.theme="dark"}`,
          }}
        />
        {children}
      </body>
    </html>
  );
}
