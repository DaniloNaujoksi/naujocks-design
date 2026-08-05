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
    services: ["Webdesign", "4 Sprachen", "Backend", "CRM", "Shop-System"],
    description:
      "Digitale Bühne für ein Qvevri-Weingut in Westgeorgien: Weinkollektion, Vinoseum-Touren und Besuchsplanung in vier Sprachen — mit eigenem Backoffice für Anfragen.",
    image: "/work/vazis-xidi.png",
    url: "https://winemore.vercel.app",
    status: "live",
  },
  {
    slug: "atix-pizza",
    client: "ATIX-PIZZA",
    sector: "Pizzeria · Berlin-Mitte",
    year: "2026",
    services: ["Webdesign", "Zweisprachig", "Copywriting"],
    description:
      "Onepager für die günstigste Pizza Berlins: jede Pizza 4,90 €, frech getextet und auf Mobile zugespitzt — mit Pizza-Fließband, klickbaren Sorten und Sprachumschalter. Vom ersten Entwurf bis zum Launch auf Google Maps in zwei Tagen.",
    image: "/work/atix-pizza.png",
    url: "https://pizzeria-atix.vercel.app",
    status: "live",
  },
  {
    slug: "muller-records",
    client: "Müller Records",
    sector: "Techno-Label · Berlin",
    year: "2026",
    services: ["Webdesign", "Zweisprachig", "Shop"],
    description:
      "Reduzierter Auftritt für das Label von Beroshima-Gründer Frank Müller: Releases, Künstler und Demos auf den Punkt gebracht — so kompromisslos wie der Sound.",
    image: "/work/muller-records.png",
    url: "https://muller-records.vercel.app",
    status: "live",
  },
  {
    slug: "wagyu-hauser",
    client: "Hauser Premium Wagyu",
    sector: "Wagyu-Zucht · Oberpfalz",
    year: "2026",
    services: ["Webdesign", "Copywriting", "Shop"],
    description:
      "Handgestreichelt, grasgefüttert, im Tesla geliefert: dunkler Onepager für Fullblood-Wagyu vom Hof in Schwarzach bei Nabburg — mit Anteil-Reservierung für die nächste Schlachtung und Zuschnitt-Übersicht.",
    image: "/work/wagyu-hauser.png",
    url: "https://wagyu-hauser.vercel.app",
    status: "live",
  },
  {
    slug: "surf-and-cook",
    client: "Surf and Cook",
    sector: "Surfcamp · Peru",
    year: "2026",
    services: ["Webdesign", "Mehrsprachig"],
    description:
      "Surfen am Morgen, Ceviche am Nachmittag: Website für Diegos Surf- und Kochschule in Lobitos, Nordperu — mit Tagesablauf, Unterkunft und direkter Platzanfrage.",
    image: "/work/surf-and-cook.png",
    url: "https://surfandcook.vercel.app",
    status: "live",
  },
];
