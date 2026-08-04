import type { Metadata } from "next";
import { HomePage } from "@/components/HomePage";

export const metadata: Metadata = {
  title: "Daniel Naujocks — Web Design & Graphic Design, Berlin",
  description:
    "Custom websites and visual identities from Berlin. Designed and developed by one person — from first concept to launch.",
  openGraph: {
    title: "Daniel Naujocks — Web Design & Graphic Design, Berlin",
    description:
      "Custom websites and visual identities from Berlin. Designed and developed by one person.",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "/en",
    languages: { de: "/", en: "/en" },
  },
};

export default function HomeEn() {
  return <HomePage locale="en" />;
}
