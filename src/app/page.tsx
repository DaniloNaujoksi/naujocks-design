import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { Marquee } from "@/components/Marquee";
import { WorkCard } from "@/components/WorkCard";
import { projects, site } from "@/lib/site";

const services = [
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
];

const steps = [
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
];

function SectionKicker({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted">
      <span className="size-1.5 rounded-full bg-foreground" aria-hidden />
      {children}
    </h2>
  );
}

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex-1">
        {/* Laufband — schmal, direkt unter der Navigation */}
        <div className="pt-[65px]">
          <Marquee />
        </div>

        {/* Hero */}
        <section className="mx-auto flex min-h-[calc(85svh-20rem)] max-w-[1440px] flex-col justify-center px-6 pt-16 pb-8 sm:px-10">
          <Reveal>
            <p className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted sm:text-sm">
              <span className="relative flex size-2" aria-hidden>
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-live opacity-60 motion-reduce:hidden" />
                <span className="relative inline-flex size-2 rounded-full bg-live" />
              </span>
              Webdesign & Grafikdesign — Berlin
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-8 font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.95] font-semibold uppercase tracking-tight font-expanded">
              Geile Profi Webseiten.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="mt-12 flex flex-col justify-between gap-10 sm:flex-row sm:items-end">
              <p className="max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
                Gestaltet und programmiert von einer Hand in Berlin — ohne
                Agentur-Schleifen, ohne Baukasten. Was Sie unten sehen, ist
                live: Klicken Sie sich durch. Und dann reden wir über Ihre
                Website.
              </p>
              <div className="flex shrink-0 flex-wrap items-center gap-6">
                <a
                  href="#kontakt"
                  className="rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-opacity hover:opacity-80"
                >
                  Projekt besprechen
                </a>
                <a
                  href="#arbeiten"
                  className="group flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
                >
                  Arbeiten ansehen
                  <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" />
                </a>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Arbeiten */}
        <section
          id="arbeiten"
          className="mx-auto max-w-[1440px] scroll-mt-24 px-6 pt-6 pb-24 sm:px-10 sm:pt-8 sm:pb-32"
        >
          <Reveal>
            <div className="flex items-baseline justify-between gap-4">
              <SectionKicker>Ausgewählte Arbeiten</SectionKicker>
              <p
                className="font-display text-sm text-muted tabular-nums"
                aria-hidden
              >
                ({String(projects.length).padStart(2, "0")})
              </p>
            </div>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
            {projects.map((project, i) => (
              <Reveal key={project.slug} delay={0.05 * (i % 2)} className="h-full">
                <WorkCard project={project} index={i} />
              </Reveal>
            ))}
            <Reveal delay={0.05} className="h-full">
              <a
                href="#kontakt"
                className="group flex h-full flex-col rounded-3xl border border-line p-6 transition-colors duration-300 hover:bg-surface lg:p-8"
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-muted">
                      {String(projects.length + 1).padStart(2, "0")} — Ihr
                      Projekt
                    </p>
                    <h3 className="mt-4 font-display text-3xl font-semibold tracking-tight text-muted transition-colors duration-300 font-expanded group-hover:text-foreground sm:text-4xl">
                      Der nächste Platz ist frei.
                    </h3>
                  </div>
                  <span className="grid size-11 shrink-0 place-items-center rounded-full border border-line transition-all duration-300 group-hover:border-foreground group-hover:bg-foreground group-hover:text-background sm:size-12">
                    <ArrowUpRight
                      className="size-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </span>
                </div>
                <p className="mt-6 max-w-xl leading-relaxed text-muted">
                  Hier steht bald Ihr Projekt. Erzählen Sie mir, was Sie
                  vorhaben.
                </p>
              </a>
            </Reveal>
          </div>
        </section>

        {/* Statement */}
        <section id="leistungen" className="scroll-mt-24 border-y border-line">
          <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 sm:py-32">
            <Reveal>
              <SectionKicker>Leistungen</SectionKicker>
              <p className="mt-12 max-w-5xl font-display text-[clamp(1.75rem,4.5vw,3.5rem)] leading-[1.15] font-medium tracking-tight">
                Gutes Design ist keine Dekoration. Es ist der Unterschied
                zwischen <span className="text-muted">gesehen werden</span> und
                im Kopf bleiben.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Leistungen */}
        <section className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 sm:py-32">
          <div className="grid gap-x-14 gap-y-14 sm:grid-cols-2">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={i * 0.06}>
                <div className="border-t border-line pt-8">
                  <div className="flex items-baseline gap-4">
                    <span
                      className="font-display text-sm text-muted tabular-nums"
                      aria-hidden
                    >
                      {service.n}
                    </span>
                    <h3 className="font-display text-2xl font-semibold tracking-tight font-expanded sm:text-3xl">
                      {service.title}
                    </h3>
                  </div>
                  <p className="mt-5 max-w-lg leading-relaxed text-muted">
                    {service.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Prozess */}
        <section className="border-y border-line bg-surface">
          <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 sm:py-32">
            <Reveal>
              <SectionKicker>So arbeite ich</SectionKicker>
            </Reveal>
            <div className="mt-12 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, i) => (
                <Reveal key={step.n} delay={i * 0.06}>
                  <p
                    className="font-display text-5xl font-semibold text-outline font-expanded"
                    aria-hidden
                  >
                    {step.n}
                  </p>
                  <h3 className="mt-5 font-display text-lg font-semibold tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {step.text}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Profil */}
        <section
          id="profil"
          className="mx-auto max-w-[1440px] scroll-mt-24 px-6 py-24 sm:px-10 sm:py-32"
        >
          <Reveal>
            <SectionKicker>Profil</SectionKicker>
            <p className="mt-12 max-w-4xl font-display text-[clamp(1.5rem,3.5vw,2.75rem)] leading-[1.2] font-medium tracking-tight">
              Ich arbeite an der Schnittstelle von Grafik und Code: Als Grafiker
              denke ich in Marken und Flächen, als Entwickler in Systemen und
              Details.
            </p>
            <p className="mt-8 max-w-2xl leading-relaxed text-muted">
              Das Ergebnis sind Websites aus einem Guss — gestaltet und gebaut
              von einer Hand, ohne Reibungsverluste zwischen Agentur, Designer
              und Entwickler. Aus Berlin, für Kunden von hier bis Georgien.
            </p>
          </Reveal>
        </section>

        {/* Kontakt — invertierter Block */}
        <section id="kontakt" className="scroll-mt-24 bg-ink text-background">
          <div className="mx-auto max-w-[1440px] px-6 py-28 sm:px-10 sm:py-40">
            <Reveal>
              <h2 className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-ink-soft">
                <span
                  className="size-1.5 rounded-full bg-background"
                  aria-hidden
                />
                Kontakt
              </h2>
              <p className="mt-12 font-display text-[clamp(2.5rem,7vw,6.5rem)] leading-[0.95] font-semibold uppercase tracking-tight font-expanded">
                Lassen Sie uns
                <br />
                <span className="text-outline-ink">sprechen.</span>
              </p>
              <div className="mt-14 flex flex-col justify-between gap-10 sm:flex-row sm:items-end">
                <p className="max-w-md leading-relaxed text-ink-soft">
                  Erzählen Sie mir, was Sie vorhaben — Sie bekommen innerhalb
                  von 48 Stunden eine Antwort.
                </p>
                <a
                  href={`mailto:${site.email}`}
                  className="group inline-flex items-center gap-3 font-display text-xl font-medium tracking-tight underline decoration-ink-line underline-offset-8 transition-colors hover:decoration-background sm:text-3xl"
                >
                  {site.email}
                  <ArrowUpRight className="size-6 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
