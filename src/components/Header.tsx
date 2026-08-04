import Link from "next/link";

const nav = [
  { href: "/#arbeiten", label: "Arbeiten" },
  { href: "/#leistungen", label: "Leistungen" },
  { href: "/#profil", label: "Profil" },
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4 sm:px-10">
        <Link
          href="/"
          className="font-display text-[13px] font-semibold tracking-[0.18em] uppercase font-expanded"
        >
          Daniel Naujocks
        </Link>
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
          <Link
            href="/#kontakt"
            className="rounded-full bg-foreground px-4 py-1.5 text-sm font-medium text-background transition-opacity hover:opacity-80"
          >
            Kontakt
          </Link>
        </nav>
      </div>
    </header>
  );
}
