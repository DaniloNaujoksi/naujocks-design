import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum — Daniel Naujocks",
  robots: { index: false },
};

export default function Impressum() {
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-6xl flex-1 px-6 pt-36 pb-24">
        <h1 className="font-serif text-4xl">Impressum</h1>
        <div className="mt-10 max-w-xl space-y-8 leading-relaxed text-muted">
          <section>
            <h2 className="text-sm uppercase tracking-widest text-foreground">
              Angaben gemäß § 5 DDG
            </h2>
            <p className="mt-3">
              Daniel Naujocks
              <br />
              [Straße und Hausnummer]
              <br />
              [PLZ] Berlin
            </p>
          </section>
          <section>
            <h2 className="text-sm uppercase tracking-widest text-foreground">
              Kontakt
            </h2>
            <p className="mt-3">
              E-Mail:{" "}
              <a href={`mailto:${site.email}`} className="text-accent">
                {site.email}
              </a>
            </p>
          </section>
          <section>
            <h2 className="text-sm uppercase tracking-widest text-foreground">
              Verantwortlich für den Inhalt
            </h2>
            <p className="mt-3">Daniel Naujocks (Anschrift wie oben)</p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
