export const site = {
  name: "Daniel Naujocks",
  role: "Webdesign & Grafikdesign",
  city: "Berlin",
  email: "d.naujocks@icloud.com",
  phone: "0152 53536835",
  phoneHref: "tel:+4915253536835",
  url: "https://naujocks-design.vercel.app",
};

export type Project = {
  slug: string;
  client: string;
  sector: string;
  year: string;
  services: string[];
  description: string;
  image: string;
  url?: string;
  status: "live" | "soon";
};

// Neue Referenzen: ein weiteres Objekt + ein Screenshot (1440x900) unter public/work/.
export const projects: Project[] = [
  {
    slug: "vazis-xidi",
    client: "Vazis Xidi Winery",
    sector: "Weingut · Georgien",
    year: "2026",
    services: ["Webdesign", "Entwicklung", "4 Sprachen", "Backend", "CRM", "Shop-System"],
    description:
      "Digitale Bühne für ein Qvevri-Weingut in Westgeorgien: Weinkollektion, Vinoseum-Touren und Besuchsplanung in vier Sprachen — mit eigenem Backoffice für Anfragen.",
    image: "/work/vazis-xidi.png",
    url: "https://winemore.vercel.app",
    status: "live",
  },
  {
    slug: "muller-records",
    client: "Müller Records",
    sector: "Techno-Label · Berlin",
    year: "2026",
    services: ["Webdesign", "Entwicklung", "Zweisprachig"],
    description:
      "Reduzierter Auftritt für das Label von Beroshima-Gründer Frank Müller: Releases, Künstler und Demos auf den Punkt gebracht — so kompromisslos wie der Sound.",
    image: "/work/muller-records.png",
    url: "https://muller-records.vercel.app",
    status: "live",
  },
  {
    slug: "surf-and-cook",
    client: "Surf and Cook",
    sector: "Surfcamp · Peru",
    year: "2026",
    services: ["Webdesign", "Entwicklung", "Mehrsprachig"],
    description:
      "Surfen am Morgen, Ceviche am Nachmittag: Website für Diegos Surf- und Kochschule in Lobitos, Nordperu — mit Tagesablauf, Unterkunft und direkter Platzanfrage.",
    image: "/work/surf-and-cook.png",
    url: "https://surfandcook.vercel.app",
    status: "live",
  },
];
