import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { Marquee } from "@/components/Marquee";
import { WorkCard } from "@/components/WorkCard";
import { site } from "@/lib/site";
import { content, localizedProjects, type Locale } from "@/lib/content";

function SectionKicker({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted">
      <span className="size-1.5 rounded-full bg-foreground" aria-hidden />
      {children}
    </h2>
  );
}

export function HomePage({ locale }: { locale: Locale }) {
  const t = content[locale];
  const projects = localizedProjects(locale);

  return (
    <>
      <Header locale={locale} />

      <main className="flex-1">
        {/* Laufband — schmal, direkt unter der Navigation */}
        <div className="pt-[65px]">
          <Marquee locale={locale} />
        </div>

        {/* Hero */}
        <section className="mx-auto flex min-h-[calc(85svh-20rem)] max-w-[1440px] flex-col justify-center px-6 pt-16 pb-8 sm:px-10">
          <Reveal>
            <p className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted sm:text-sm">
              <span className="relative flex size-2" aria-hidden>
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-live opacity-60 motion-reduce:hidden" />
                <span className="relative inline-flex size-2 rounded-full bg-live" />
              </span>
              {t.hero.badge}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-8 font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.95] font-semibold uppercase tracking-tight font-expanded whitespace-pre-line">
              {t.hero.title}
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="mt-12 flex flex-col justify-between gap-10 sm:flex-row sm:items-end">
              <p className="max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
                {t.hero.text}
              </p>
              <div className="flex shrink-0 flex-wrap items-center gap-6">
                <a
                  href="#kontakt"
                  className="rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-opacity hover:opacity-80"
                >
                  {t.hero.ctaPrimary}
                </a>
                <a
                  href="#arbeiten"
                  className="group flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
                >
                  {t.hero.ctaSecondary}
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
              <SectionKicker>{t.work.kicker}</SectionKicker>
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
                <WorkCard project={project} index={i} locale={locale} />
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
                      {String(projects.length + 1).padStart(2, "0")} —{" "}
                      {t.work.slotKicker}
                    </p>
                    <h3 className="mt-4 font-display text-3xl font-semibold tracking-tight text-muted transition-colors duration-300 font-expanded group-hover:text-foreground sm:text-4xl">
                      {t.work.slotTitle}
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
                  {t.work.slotText}
                </p>
              </a>
            </Reveal>
          </div>
        </section>

        {/* Statement */}
        <section id="leistungen" className="scroll-mt-24 border-y border-line">
          <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 sm:py-32">
            <Reveal>
              <SectionKicker>{t.leistungenKicker}</SectionKicker>
              <p className="mt-12 max-w-5xl font-display text-[clamp(1.75rem,4.5vw,3.5rem)] leading-[1.15] font-medium tracking-tight">
                {t.statement.before}
                <span className="text-muted">{t.statement.muted}</span>
                {t.statement.after}
              </p>
            </Reveal>
          </div>
        </section>

        {/* Leistungen */}
        <section className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 sm:py-32">
          <div className="grid gap-x-14 gap-y-14 sm:grid-cols-2">
            {t.services.map((service, i) => (
              <Reveal key={service.n} delay={i * 0.06}>
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
              <SectionKicker>{t.processKicker}</SectionKicker>
            </Reveal>
            <div className="mt-12 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
              {t.steps.map((step, i) => (
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
            <SectionKicker>{t.profil.kicker}</SectionKicker>
            <p className="mt-12 max-w-4xl font-display text-[clamp(1.5rem,3.5vw,2.75rem)] leading-[1.2] font-medium tracking-tight">
              {t.profil.lead}
            </p>
            <p className="mt-8 max-w-2xl leading-relaxed text-muted">
              {t.profil.text}
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
                {t.kontakt.kicker}
              </h2>
              <p className="mt-12 font-display text-[clamp(2.5rem,7vw,6.5rem)] leading-[0.95] font-semibold uppercase tracking-tight font-expanded">
                {t.kontakt.line1}
                <br />
                <span className="text-outline-ink">{t.kontakt.line2}</span>
              </p>
              <div className="mt-14 flex flex-col justify-between gap-10 sm:flex-row sm:items-end">
                <p className="max-w-md leading-relaxed text-ink-soft">
                  {t.kontakt.text}
                </p>
                <div className="flex flex-col items-start gap-5 sm:items-end">
                  <a
                    href={`mailto:${site.email}`}
                    className="group inline-flex items-center gap-3 font-display text-xl font-medium tracking-tight underline decoration-ink-line underline-offset-8 transition-colors hover:decoration-background sm:text-3xl"
                  >
                    {site.email}
                    <ArrowUpRight className="size-6 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </a>
                  <a
                    href={site.phoneHref}
                    className="text-lg text-ink-soft underline decoration-ink-line underline-offset-8 transition-colors hover:text-background hover:decoration-background sm:text-xl"
                  >
                    {site.phone}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer locale={locale} />
    </>
  );
}
