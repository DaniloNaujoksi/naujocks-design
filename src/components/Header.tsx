import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { content, localeBase, type Locale } from "@/lib/content";

export function Header({ locale = "de" }: { locale?: Locale }) {
  const t = content[locale];
  const base = localeBase(locale);
  // Button zeigt immer die Zielsprache: auf Deutsch "EN", auf Englisch "DE".
  const other: Locale = locale === "de" ? "en" : "de";

  const nav = [
    { href: `${base}#arbeiten`, label: t.nav.arbeiten },
    { href: `${base}#leistungen`, label: t.nav.leistungen },
    { href: `${base}#profil`, label: t.nav.profil },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4 sm:px-10">
        <div className="flex items-center gap-4">
          <Link
            href={localeBase(other)}
            aria-label={other === "en" ? "Switch to English" : "Zur deutschen Version wechseln"}
            className="rounded-full border border-line px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-widest text-muted transition-colors hover:border-foreground hover:text-foreground"
          >
            {other}
          </Link>
          <Link
            href={base}
            className="font-display text-[13px] font-semibold tracking-[0.18em] uppercase font-expanded"
          >
            Daniel Naujocks
          </Link>
        </div>
        <nav className="flex items-center gap-4 sm:gap-8">
          <div className="hidden gap-8 sm:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <ThemeToggle />
          <Link
            href={`${base}#kontakt`}
            className="rounded-full bg-foreground px-4 py-1.5 text-sm font-medium text-background transition-opacity hover:opacity-80"
          >
            {t.nav.kontakt}
          </Link>
        </nav>
      </div>
    </header>
  );
}
