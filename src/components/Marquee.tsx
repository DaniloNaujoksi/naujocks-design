const items = ["Webdesign", "Entwicklung", "Branding", "Betreuung", "Berlin"];

function Track({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div className="marquee-track" aria-hidden={ariaHidden || undefined}>
      {items.map((item, i) => (
        <span
          key={item}
          className={`shrink-0 px-4 font-display text-[11px] font-semibold uppercase tracking-[0.22em] font-expanded sm:px-6 sm:text-xs ${
            i % 2 === 1 ? "text-muted" : ""
          }`}
        >
          {item}
          <span className="ml-8 inline-block size-1 rounded-full bg-foreground align-middle sm:ml-12" />
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
