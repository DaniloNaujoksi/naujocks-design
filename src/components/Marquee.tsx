const line =
  "Sie möchten einfach nur eine geile Website mit Wow-Effekt? Schnell, zum fairen Preis — und den ersten Demo-Entwurf bewundern Sie noch am selben Tag. Schreiben Sie mir heute.";

function Track({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div className="marquee-track" aria-hidden={ariaHidden || undefined}>
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          aria-hidden={i > 0 || undefined}
          className="shrink-0 px-5 font-display text-xs font-medium tracking-[0.06em] sm:text-[13px]"
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
