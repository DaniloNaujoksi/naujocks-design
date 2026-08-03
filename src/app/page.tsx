import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { WorkCard } from "@/components/WorkCard";
import { projects, site } from "@/lib/site";

const services = [
  {
    title: "Webdesign",
    text: "Maßgeschneiderte Websites statt Baukasten. Jede Fläche, jede Schrift, jeder Abstand ist eine Entscheidung — getroffen für Ihre Marke, nicht für eine Vorlage.",
  },
  {
    title: "Entwicklung",
    text: "Moderne Technik unter der Haube: Next.js, TypeScript, Bestwerte bei Ladezeit und Suchmaschinen. Schön allein reicht nicht — es muss laufen.",
  },
  {
    title: "Grafikdesign & Branding",
    text: "Logo, Typografie, Farbwelt. Eine visuelle Identität, die auf dem Bildschirm genauso funktioniert wie auf dem Plakat.",
  },
  {
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

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="mx-auto flex min-h-svh max-w-6xl flex-col justify-center px-6 pt-24">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.25em] text-accent">
              Webdesign & Grafikdesign — Berlin
            </p>
            <h1 className="mt-6 font-serif text-5xl leading-[1.05] sm:text-7xl lg:text-8xl">
              Websites mit Haltung.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
              Ich bin Daniel Naujocks. Ich gestalte und entwickle digitale
              Auftritte für Marken, die mehr wollen als eine Vorlage — vom
              ersten Konzept bis zum Livegang, alles aus einer Hand.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a
                href="#kontakt"
                className="rounded-full bg-foreground px-7 py-3 text-sm font-medium text-background transition-opacity hover:opacity-85"
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
          </Reveal>
        </section>

        {/* Statement */}
        <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <Reveal>
            <p className="max-w-4xl font-serif text-3xl leading-snug sm:text-5xl">
              Gutes Design ist keine Dekoration. Es ist der Unterschied zwischen
              <span className="text-muted"> gesehen werden</span> und
              <span className="text-accent"> im Kopf bleiben</span>.
            </p>
          </Reveal>
        </section>

        {/* Arbeiten */}
        <section id="arbeiten" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
          <Reveal>
            <h2 className="text-sm uppercase tracking-[0.25em] text-muted">
              Ausgewählte Arbeiten
            </h2>
          </Reveal>
          <div className="mt-10">
            {projects.map((project, i) => (
              <Reveal key={project.slug} delay={i * 0.08}>
                <WorkCard project={project} />
              </Reveal>
            ))}
            <Reveal delay={projects.length * 0.08}>
              <a
                href="#kontakt"
                className="group block border-t border-b border-line py-10 sm:py-14"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-serif text-3xl text-muted transition-colors group-hover:text-foreground sm:text-4xl">
                    Der nächste Platz ist frei.
                  </h3>
                  <ArrowUpRight
                    className="size-6 shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent"
                    aria-hidden
                  />
                </div>
                <p className="mt-5 max-w-xl leading-relaxed text-muted">
                  Hier steht bald Ihr Projekt. Erzählen Sie mir, was Sie
                  vorhaben.
                </p>
              </a>
            </Reveal>
          </div>
        </section>

        {/* Leistungen */}
        <section id="leistungen" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
          <Reveal>
            <h2 className="text-sm uppercase tracking-[0.25em] text-muted">
              Leistungen
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-x-12 gap-y-14 sm:grid-cols-2">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={i * 0.08}>
                <h3 className="font-serif text-2xl">{service.title}</h3>
                <p className="mt-4 leading-relaxed text-muted">{service.text}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Prozess */}
        <section className="border-y border-line bg-surface">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <Reveal>
              <h2 className="text-sm uppercase tracking-[0.25em] text-muted">
                So arbeite ich
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, i) => (
                <Reveal key={step.n} delay={i * 0.08}>
                  <p className="font-serif text-lg text-accent">{step.n}</p>
                  <h3 className="mt-3 text-lg font-medium">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {step.text}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Profil */}
        <section id="profil" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
          <Reveal>
            <h2 className="text-sm uppercase tracking-[0.25em] text-muted">
              Profil
            </h2>
            <p className="mt-10 max-w-3xl font-serif text-2xl leading-snug sm:text-3xl">
              Ich arbeite an der Schnittstelle von Grafik und Code: Als Grafiker
              denke ich in Marken und Flächen, als Entwickler in Systemen und
              Details.
            </p>
            <p className="mt-6 max-w-2xl leading-relaxed text-muted">
              Das Ergebnis sind Websites aus einem Guss — gestaltet und gebaut
              von einer Hand, ohne Reibungsverluste zwischen Agentur, Designer
              und Entwickler. Aus Berlin, für Kunden von hier bis Georgien.
            </p>
          </Reveal>
        </section>

        {/* Kontakt */}
        <section id="kontakt" className="scroll-mt-24 border-t border-line">
          <div className="mx-auto max-w-6xl px-6 py-28 sm:py-36">
            <Reveal>
              <h2 className="font-serif text-4xl leading-tight sm:text-6xl">
                Lassen Sie uns über
                <br />
                Ihr Projekt sprechen.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
                Erzählen Sie mir, was Sie vorhaben — Sie bekommen innerhalb von
                48 Stunden eine Antwort.
              </p>
              <a
                href={`mailto:${site.email}`}
                className="group mt-10 inline-flex items-center gap-3 font-serif text-2xl text-accent transition-opacity hover:opacity-80 sm:text-3xl"
              >
                {site.email}
                <ArrowUpRight className="size-6 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
