import { projects, type Project } from "@/lib/site";

export type Locale = "de" | "en" | "sv";

export const locales: Locale[] = ["de", "en", "sv"];

export function localeBase(locale: Locale) {
  return locale === "de" ? "/" : `/${locale}`;
}

type ProjectText = Pick<Project, "sector" | "services" | "description">;

type Content = {
  nav: { arbeiten: string; leistungen: string; profil: string; kontakt: string };
  marquee: string;
  hero: {
    badge: string;
    title: string;
    text: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  work: {
    kicker: string;
    slotKicker: string;
    slotTitle: string;
    slotText: string;
    soon: string;
    altPrefix: string;
  };
  statement: { before: string; muted: string; after: string };
  leistungenKicker: string;
  services: { n: string; title: string; text: string }[];
  processKicker: string;
  steps: { n: string; title: string; text: string }[];
  profil: { kicker: string; lead: string; text: string };
  kontakt: { kicker: string; line1: string; line2: string; text: string };
  footer: { role: string; impressum: string; datenschutz: string };
  projects: Record<string, ProjectText>;
};

export const content: Record<Locale, Content> = {
  de: {
    nav: {
      arbeiten: "Arbeiten",
      leistungen: "Leistungen",
      profil: "Profil",
      kontakt: "Kontakt",
    },
    marquee:
      "Sie möchten einfach nur eine geile Website mit Wow-Effekt? Verstanden. Kein Agentur-Blabla, keine Meetings über Meetings, kein Praktikant am Werk — ein Berliner, der Design und Code kann. Schnell, zum fairen Preis, und den ersten Demo-Entwurf bewundern Sie noch am selben Tag. Ja, wirklich. Nein, das ist kein Tippfehler. Ihre Konkurrenz scrollt noch durch Baukasten-Vorlagen — Zeit, sie zu überholen. Und wenn Sie denken, gutes Design sei teuer: Warten Sie ab, was schlechtes kostet. Besucher kommen, gähnen, gehen — direkt zur Konkurrenz. Muss nicht sein. Ihre neue Website lädt schneller, als dieser Satz vorbeiscrollt, und verkauft auch nachts um drei, wenn Sie längst schlafen. Denn Ihr Kunde ist nicht doof — Ihr Kunde ist Ihr Kunde, und der verdient besser als eine Vorlage von der Stange. Schreiben Sie mir heute, Antwort in 48 Stunden. Der nächste Platz im Portfolio ist noch frei — er sieht Ihnen ähnlich. Grinsen inklusive.",
    hero: {
      badge: "Webdesign & Copywriting — Berlin",
      title: "Geile Webseiten\nvom Profi.",
      text: "Gestaltet und programmiert aus einer Hand in Berlin — ohne Agentur-Schleifen, ohne Baukasten. Was Sie unten sehen, ist live: Klicken Sie sich durch. Und dann reden wir über Ihre Website.",
      ctaPrimary: "Projekt besprechen",
      ctaSecondary: "Arbeiten ansehen",
    },
    work: {
      kicker: "Ausgewählte Arbeiten",
      slotKicker: "Ihr Projekt",
      slotTitle: "Der nächste Platz ist frei.",
      slotText:
        "Hier steht bald Ihr Projekt. Erzählen Sie mir, was Sie vorhaben.",
      soon: "Launch in Kürze",
      altPrefix: "Screenshot der Website von",
    },
    statement: {
      before:
        "Gutes Design ist keine Dekoration. Es ist der Unterschied zwischen ",
      muted: "gesehen werden",
      after: " und im Kopf bleiben.",
    },
    leistungenKicker: "Leistungen",
    services: [
      {
        n: "01",
        title: "Webdesign",
        text: "Maßgeschneiderte Websites statt Baukasten. Jede Fläche, jede Schrift, jeder Abstand ist eine Entscheidung — getroffen für Ihre Marke, nicht für eine Vorlage.",
      },
      {
        n: "02",
        title: "Entwicklung",
        text: "Moderne Technik unter der Haube: Next.js, TypeScript, Bestwerte bei Ladezeit und Suchmaschinen. Schön allein reicht nicht — es muss laufen.",
      },
      {
        n: "03",
        title: "Grafikdesign & Branding",
        text: "Logo, Typografie, Farbwelt. Eine visuelle Identität, die auf dem Bildschirm genauso funktioniert wie auf dem Plakat.",
      },
      {
        n: "04",
        title: "Betreuung",
        text: "Nach dem Livegang fängt die Arbeit an. Neue Inhalte, Updates, Weiterentwicklung — Ihre Website bleibt so gut, wie sie am ersten Tag war.",
      },
    ],
    processKicker: "So arbeite ich",
    steps: [
      {
        n: "01",
        title: "Verstehen",
        text: "Ihre Marke, Ihre Ziele, Ihr Publikum. Erst zuhören, dann gestalten.",
      },
      {
        n: "02",
        title: "Konzept",
        text: "Struktur, Inhalte, Tonalität — ein klarer Plan, bevor der erste Entwurf entsteht.",
      },
      {
        n: "03",
        title: "Design & Umsetzung",
        text: "Vom Entwurf zum fertigen Produkt, in kurzen Abstimmungsschleifen. Sie sehen früh, was entsteht.",
      },
      {
        n: "04",
        title: "Launch & Begleitung",
        text: "Sauberer Livegang auf Ihrer Domain. Danach: messbare Ergebnisse und ein Ansprechpartner, der bleibt.",
      },
    ],
    profil: {
      kicker: "Profil",
      lead: "Ich arbeite an der Schnittstelle von Grafik und Code: Als Grafiker denke ich in Marken und Flächen, als Entwickler in Systemen und Details.",
      text: "Das Ergebnis sind Websites aus einem Guss — gestaltet und gebaut von einer Hand, ohne Reibungsverluste zwischen Agentur, Designer und Entwickler. Aus Berlin, für Kunden von hier bis Georgien.",
    },
    kontakt: {
      kicker: "Kontakt",
      line1: "Lassen Sie uns",
      line2: "sprechen.",
      text: "Erzählen Sie mir, was Sie vorhaben — Sie bekommen innerhalb von 48 Stunden eine Antwort.",
    },
    footer: {
      role: "Webdesign & Grafikdesign",
      impressum: "Impressum",
      datenschutz: "Datenschutz",
    },
    projects: {},
  },

  en: {
    nav: {
      arbeiten: "Work",
      leistungen: "Services",
      profil: "Profile",
      kontakt: "Contact",
    },
    marquee:
      "You just want a seriously good website with a wow effect? Understood. No agency blabla, no meetings about meetings, no intern at the wheel — one Berliner who does both design and code. Fast, at a fair price, and you'll be admiring the first demo draft the very same day. Yes, really. No, that's not a typo. Your competition is still scrolling through website-builder templates — time to overtake them. And if you think good design is expensive: wait until you see what bad design costs. Visitors come, yawn, leave — straight to the competition. It doesn't have to be that way. Your new website loads faster than this sentence scrolls by, and it keeps selling at three in the morning while you're fast asleep. Because your customer isn't stupid — your customer is your customer, and they deserve better than an off-the-shelf template. Write to me today, answer within 48 hours. The next spot in the portfolio is still open — it looks a lot like you. Grin included.",
    hero: {
      badge: "Web design & copywriting — Berlin",
      title: "Damn good websites.\nBy a pro.",
      text: "Designed and coded by one person in Berlin — no agency loops, no site builders. Everything below is live: click through. Then let's talk about your website.",
      ctaPrimary: "Discuss your project",
      ctaSecondary: "See the work",
    },
    work: {
      kicker: "Selected work",
      slotKicker: "Your project",
      slotTitle: "The next spot is open.",
      slotText: "Your project could be here soon. Tell me what you have in mind.",
      soon: "Launching soon",
      altPrefix: "Screenshot of the website of",
    },
    statement: {
      before: "Good design isn't decoration. It's the difference between ",
      muted: "being seen",
      after: " and being remembered.",
    },
    leistungenKicker: "Services",
    services: [
      {
        n: "01",
        title: "Web design",
        text: "Custom websites instead of builder templates. Every surface, every typeface, every spacing is a decision — made for your brand, not for a template.",
      },
      {
        n: "02",
        title: "Development",
        text: "Modern tech under the hood: Next.js, TypeScript, top scores for load time and search engines. Pretty alone isn't enough — it has to perform.",
      },
      {
        n: "03",
        title: "Graphic design & branding",
        text: "Logo, typography, color world. A visual identity that works on screen just as well as on a poster.",
      },
      {
        n: "04",
        title: "Ongoing care",
        text: "The real work starts after launch. New content, updates, further development — your website stays as good as it was on day one.",
      },
    ],
    processKicker: "How I work",
    steps: [
      {
        n: "01",
        title: "Understand",
        text: "Your brand, your goals, your audience. Listen first, then design.",
      },
      {
        n: "02",
        title: "Concept",
        text: "Structure, content, tone of voice — a clear plan before the first draft.",
      },
      {
        n: "03",
        title: "Design & build",
        text: "From draft to finished product, in short feedback loops. You see results early.",
      },
      {
        n: "04",
        title: "Launch & support",
        text: "A clean launch on your domain. After that: measurable results and a contact who sticks around.",
      },
    ],
    profil: {
      kicker: "Profile",
      lead: "I work at the intersection of graphics and code: as a designer I think in brands and surfaces, as a developer in systems and details.",
      text: "The result: websites cast from a single mold — designed and built by one person, with no friction between agency, designer and developer. From Berlin, for clients from here to Georgia.",
    },
    kontakt: {
      kicker: "Contact",
      line1: "Let's",
      line2: "talk.",
      text: "Tell me what you have in mind — you'll get an answer within 48 hours.",
    },
    footer: {
      role: "Web & graphic design",
      impressum: "Legal notice",
      datenschutz: "Privacy policy",
    },
    projects: {
      "vazis-xidi": {
        sector: "Winery · Georgia",
        services: ["Web design", "4 languages", "Backend", "CRM", "Shop system"],
        description:
          "A digital stage for a qvevri winery in western Georgia: wine collection, vinoseum tours and visit planning in four languages — with its own back office for inquiries.",
      },
      "wagyu-hauser": {
        sector: "Wagyu farm · Upper Palatinate",
        services: ["Web design", "Copywriting", "Shop"],
        description:
          "Hand-stroked, grass-fed, delivered by Tesla: dark one-pager for fullblood Wagyu from a farm in Schwarzach near Nabburg — with share reservations for the next slaughter and a cut overview.",
      },
      "muller-records": {
        sector: "Techno label · Berlin",
        services: ["Web design", "Bilingual", "Shop"],
        description:
          "A pared-down presence for the label of Beroshima founder Frank Müller: releases, artists and demos straight to the point — as uncompromising as the sound.",
      },
      "surf-and-cook": {
        sector: "Surf camp · Peru",
        services: ["Web design", "Multilingual"],
        description:
          "Surfing in the morning, ceviche in the afternoon: website for Diego's surf and cooking school in Lobitos, northern Peru — with daily schedule, accommodation and direct booking requests.",
      },
      "atix-pizza": {
        sector: "Pizzeria · Berlin-Mitte",
        services: ["Web design", "Bilingual", "Copywriting"],
        description:
          "One-pager for Berlin's cheapest pizza: every pizza €4.90, cheekily written and sharpened for mobile — with a pizza conveyor belt, clickable pizzas and a language switcher. From first draft to launch on Google Maps in two days.",
      },
    },
  },

  sv: {
    nav: {
      arbeiten: "Arbeten",
      leistungen: "Tjänster",
      profil: "Profil",
      kontakt: "Kontakt",
    },
    marquee:
      "Du vill bara ha en riktigt snygg webbplats med wow-effekt? Uppfattat. Inget byråsnack, inga möten om möten, ingen praktikant vid rodret — en berlinare som kan både design och kod. Snabbt, till ett schysst pris, och det första demoutkastet beundrar du redan samma dag. Ja, på riktigt. Nej, det är inget stavfel. Dina konkurrenter scrollar fortfarande genom färdiga mallar — dags att köra om dem. Och om du tror att bra design är dyrt: vänta tills du ser vad dålig design kostar. Besökare kommer, gäspar, går — raka vägen till konkurrenten. Så behöver det inte vara. Din nya webbplats laddar snabbare än den här meningen scrollar förbi, och den säljer klockan tre på natten när du sover gott. För din kund är inte dum — din kund är din kund, och den förtjänar bättre än en mall från hyllan. Skriv till mig i dag, svar inom 48 timmar. Nästa plats i portfolion är fortfarande ledig — den är väldigt lik dig. Flin ingår.",
    hero: {
      badge: "Webbdesign & copywriting — Berlin",
      title: "Grymt snygga proffssajter.",
      text: "Formgiven och programmerad av en och samma person i Berlin — inga byråslingor, inga mallverktyg. Allt du ser nedan är live: klicka runt. Sedan pratar vi om din webbplats.",
      ctaPrimary: "Diskutera ditt projekt",
      ctaSecondary: "Se arbeten",
    },
    work: {
      kicker: "Utvalda arbeten",
      slotKicker: "Ditt projekt",
      slotTitle: "Nästa plats är ledig.",
      slotText: "Här står snart ditt projekt. Berätta vad du har på gång.",
      soon: "Lanseras snart",
      altPrefix: "Skärmdump av webbplatsen för",
    },
    statement: {
      before: "Bra design är ingen dekoration. Det är skillnaden mellan ",
      muted: "att synas",
      after: " och att fastna i minnet.",
    },
    leistungenKicker: "Tjänster",
    services: [
      {
        n: "01",
        title: "Webbdesign",
        text: "Skräddarsydda webbplatser i stället för mallar. Varje yta, varje typsnitt, varje avstånd är ett beslut — fattat för ditt varumärke, inte för en mall.",
      },
      {
        n: "02",
        title: "Utveckling",
        text: "Modern teknik under huven: Next.js, TypeScript, toppbetyg för laddtid och sökmotorer. Snyggt räcker inte — det måste fungera.",
      },
      {
        n: "03",
        title: "Grafisk design & branding",
        text: "Logotyp, typografi, färgvärld. En visuell identitet som fungerar lika bra på skärmen som på affischen.",
      },
      {
        n: "04",
        title: "Förvaltning",
        text: "Efter lanseringen börjar arbetet. Nytt innehåll, uppdateringar, vidareutveckling — din webbplats förblir lika bra som första dagen.",
      },
    ],
    processKicker: "Så arbetar jag",
    steps: [
      {
        n: "01",
        title: "Förstå",
        text: "Ditt varumärke, dina mål, din publik. Först lyssna, sedan formge.",
      },
      {
        n: "02",
        title: "Koncept",
        text: "Struktur, innehåll, tonalitet — en tydlig plan innan första utkastet.",
      },
      {
        n: "03",
        title: "Design & genomförande",
        text: "Från utkast till färdig produkt, i korta avstämningar. Du ser tidigt vad som växer fram.",
      },
      {
        n: "04",
        title: "Lansering & uppföljning",
        text: "Ren lansering på din domän. Därefter: mätbara resultat och en kontakt som stannar kvar.",
      },
    ],
    profil: {
      kicker: "Profil",
      lead: "Jag arbetar i gränslandet mellan grafik och kod: som grafiker tänker jag i varumärken och ytor, som utvecklare i system och detaljer.",
      text: "Resultatet är webbplatser gjutna i ett stycke — formgivna och byggda av en och samma person, utan friktion mellan byrå, designer och utvecklare. Från Berlin, för kunder härifrån till Georgien.",
    },
    kontakt: {
      kicker: "Kontakt",
      line1: "Ska vi",
      line2: "prata?",
      text: "Berätta vad du har på gång — du får svar inom 48 timmar.",
    },
    footer: {
      role: "Webbdesign & grafisk design",
      impressum: "Juridisk information",
      datenschutz: "Integritetspolicy",
    },
    projects: {
      "vazis-xidi": {
        sector: "Vingård · Georgien",
        services: ["Webbdesign", "4 språk", "Backend", "CRM", "Butikssystem"],
        description:
          "En digital scen för en qvevri-vingård i västra Georgien: vinkollektion, vinoseum-turer och besöksplanering på fyra språk — med eget backoffice för förfrågningar.",
      },
      "wagyu-hauser": {
        sector: "Wagyu-uppfödning · Oberpfalz",
        services: ["Webbdesign", "Copywriting", "Butik"],
        description:
          "Handklappad, gräsuppfödd, levererad i en Tesla: mörk onepager för fullblods-wagyu från gården i Schwarzach vid Nabburg — med andelsreservation inför nästa slakt och styckningsöversikt.",
      },
      "muller-records": {
        sector: "Technolabel · Berlin",
        services: ["Webbdesign", "Tvåspråkig", "Butik"],
        description:
          "Ett avskalat uttryck för Beroshima-grundaren Frank Müllers label: releaser, artister och demos rakt på sak — lika kompromisslöst som soundet.",
      },
      "surf-and-cook": {
        sector: "Surfcamp · Peru",
        services: ["Webbdesign", "Flerspråkig"],
        description:
          "Surf på morgonen, ceviche på eftermiddagen: webbplats för Diegos surf- och matlagningsskola i Lobitos i norra Peru — med dagsschema, boende och direkt platsförfrågan.",
      },
      "atix-pizza": {
        sector: "Pizzeria · Berlin-Mitte",
        services: ["Webbdesign", "Tvåspråkig", "Copywriting"],
        description:
          "Onepager för Berlins billigaste pizza: varje pizza 4,90 €, fräckt skriven och vässad för mobilen — med pizzaband, klickbara sorter och språkväxlare. Från första utkast till lansering på Google Maps på två dagar.",
      },
    },
  },
};

// Projektliste mit übersetzten Texten; unbekannte Slugs behalten das deutsche Original.
export function localizedProjects(locale: Locale): Project[] {
  const overrides = content[locale].projects;
  return projects.map((p) => ({ ...p, ...overrides[p.slug] }));
}
