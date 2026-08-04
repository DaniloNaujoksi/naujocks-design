const line =
  "Sie möchten einfach nur eine geile Website mit Wow-Effekt? Verstanden. Kein Agentur-Blabla, keine Meetings über Meetings, kein Praktikant am Werk — ein Berliner, der Design und Code kann. Schnell, zum fairen Preis, und den ersten Demo-Entwurf bewundern Sie noch am selben Tag. Ja, wirklich. Nein, das ist kein Tippfehler. Ihre Konkurrenz scrollt noch durch Baukasten-Vorlagen — Zeit, sie zu überholen. Und wenn Sie denken, gutes Design sei teuer: Warten Sie ab, was schlechtes kostet. Besucher kommen, gähnen, gehen — direkt zur Konkurrenz. Muss nicht sein. Ihre neue Website lädt schneller, als dieser Satz vorbeiscrollt, und verkauft auch nachts um drei, wenn Sie längst schlafen. Denn Ihr Kunde ist nicht doof — Ihr Kunde ist Ihr Kunde, und der verdient besser als eine Vorlage von der Stange. Schreiben Sie mir heute, Antwort in 48 Stunden. Der nächste Platz im Portfolio ist noch frei — er sieht Ihnen ähnlich. Grinsen inklusive.";

function Track({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div className="marquee-track" aria-hidden={ariaHidden || undefined}>
      {[0, 1].map((i) => (
        <span
          key={i}
          aria-hidden={i > 0 || undefined}
          className="shrink-0 px-5 font-display text-xs font-semibold uppercase tracking-[0.08em] sm:text-[13px]"
        >
          {line}
          <span className="ml-10 inline-block size-1 rounded-full bg-foreground align-middle" />
        </span>
      ))}
    </div>
  );
}

export function Marquee() {
  return (
    <div className="marquee border-b border-line py-2.5">
      <Track />
      <Track ariaHidden />
    </div>
  );
}
