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
        <h1 className="font-display text-4xl font-semibold tracking-tight font-expanded">
          Impressum
        </h1>
        <div className="mt-10 max-w-xl space-y-8 leading-relaxed text-muted">
          <section>
            <h2 className="text-sm uppercase tracking-widest text-foreground">
              Angaben gemäß § 5 DDG
            </h2>
            <p className="mt-3">
              Daniel Naujocks
              <br />
              Reinhardtstr. 2
              <br />
              10117 Berlin
            </p>
          </section>
          <section>
            <h2 className="text-sm uppercase tracking-widest text-foreground">
              Kontakt
            </h2>
            <p className="mt-3">
              E-Mail:{" "}
              <a
                href={`mailto:${site.email}`}
                className="text-foreground underline decoration-line underline-offset-4 transition-colors hover:decoration-foreground"
              >
                {site.email}
              </a>
              <br />
              Telefon:{" "}
              <a
                href={site.phoneHref}
                className="text-foreground underline decoration-line underline-offset-4 transition-colors hover:decoration-foreground"
              >
                {site.phone}
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
