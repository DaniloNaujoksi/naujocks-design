const items = ["Webdesign", "Entwicklung", "Branding", "Betreuung", "Berlin"];

function Track({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div className="marquee-track" aria-hidden={ariaHidden || undefined}>
      {items.map((item, i) => (
        <span
          key={item}
          className={`shrink-0 px-6 font-display text-4xl font-semibold uppercase tracking-tight font-expanded sm:px-10 sm:text-6xl ${
            i % 2 === 1 ? "text-outline" : ""
          }`}
        >
          {item}
          <span className="ml-12 inline-block size-2 rounded-full bg-foreground align-middle sm:ml-20 sm:size-2.5" />
        </span>
      ))}
    </div>
  );
}

export function Marquee() {
  return (
    <div className="marquee border-y border-line py-6 sm:py-8">
      <Track />
      <Track ariaHidden />
    </div>
  );
}
