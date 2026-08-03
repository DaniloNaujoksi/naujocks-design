import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Datenschutz — Daniel Naujocks",
  robots: { index: false },
};

export default function Datenschutz() {
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-6xl flex-1 px-6 pt-36 pb-24">
        <h1 className="font-serif text-4xl">Datenschutzerklärung</h1>
        <div className="mt-10 max-w-xl space-y-8 leading-relaxed text-muted">
          <section>
            <h2 className="text-sm uppercase tracking-widest text-foreground">
              Verantwortlicher
            </h2>
            <p className="mt-3">
              Daniel Naujocks, Berlin — E-Mail:{" "}
              <a href={`mailto:${site.email}`} className="text-accent">
                {site.email}
              </a>
            </p>
          </section>
          <section>
            <h2 className="text-sm uppercase tracking-widest text-foreground">
              Hosting
            </h2>
            <p className="mt-3">
              Diese Website wird bei Vercel Inc. (440 N Barranca Ave #4133,
              Covina, CA 91723, USA) gehostet. Beim Aufruf der Seite verarbeitet
              Vercel technisch notwendige Daten (z.&nbsp;B. IP-Adresse,
              Zeitpunkt des Zugriffs, Browser-Informationen) in
              Server-Logfiles. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO
              (berechtigtes Interesse an einem sicheren und stabilen Betrieb).
            </p>
          </section>
          <section>
            <h2 className="text-sm uppercase tracking-widest text-foreground">
              Keine Cookies, kein Tracking
            </h2>
            <p className="mt-3">
              Diese Website setzt keine Cookies, verwendet keine
              Analyse-Werkzeuge und bindet keine Inhalte von Drittanbietern
              ein.
            </p>
          </section>
          <section>
            <h2 className="text-sm uppercase tracking-widest text-foreground">
              Kontakt per E-Mail
            </h2>
            <p className="mt-3">
              Wenn Sie mir per E-Mail schreiben, werden Ihre Angaben zur
              Bearbeitung der Anfrage gespeichert (Art. 6 Abs. 1 lit. b DSGVO).
              Diese Daten gebe ich nicht ohne Ihre Einwilligung weiter.
            </p>
          </section>
          <section>
            <h2 className="text-sm uppercase tracking-widest text-foreground">
              Ihre Rechte
            </h2>
            <p className="mt-3">
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung und
              Einschränkung der Verarbeitung Ihrer personenbezogenen Daten
              sowie ein Beschwerderecht bei einer Aufsichtsbehörde.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
