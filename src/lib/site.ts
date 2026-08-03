export const site = {
  name: "Daniel Naujocks",
  role: "Webdesign & Grafikdesign",
  city: "Berlin",
  email: "d.naujocks@icloud.com",
  url: "https://naujocks-design.vercel.app",
};

export type Project = {
  slug: string;
  client: string;
  sector: string;
  year: string;
  services: string[];
  description: string;
  url?: string;
  status: "live" | "soon";
};

// Neue Referenzen: einfach ein weiteres Objekt ergänzen.
export const projects: Project[] = [
  {
    slug: "vazis-xidi",
    client: "Vazis Xidi Winery",
    sector: "Weingut · Georgien",
    year: "2026",
    services: ["Webdesign", "Entwicklung", "4 Sprachen"],
    description:
      "Digitale Bühne für ein Qvevri-Weingut in Westgeorgien: Weinkollektion, Vinoseum-Touren und Besuchsplanung in vier Sprachen — mit eigenem Backoffice für Anfragen.",
    url: "https://www.vazisxidi.com",
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
    status: "soon",
  },
];
