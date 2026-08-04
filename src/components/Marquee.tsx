import { content, type Locale } from "@/lib/content";

function Track({
  line,
  ariaHidden = false,
}: {
  line: string;
  ariaHidden?: boolean;
}) {
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

export function Marquee({ locale = "de" }: { locale?: Locale }) {
  const line = content[locale].marquee;

  return (
    <div className="marquee border-b border-line py-2.5">
      <Track line={line} />
      <Track line={line} ariaHidden />
    </div>
  );
}
