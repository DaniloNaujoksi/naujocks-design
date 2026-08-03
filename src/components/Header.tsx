import Link from "next/link";

const nav = [
  { href: "#arbeiten", label: "Arbeiten" },
  { href: "#leistungen", label: "Leistungen" },
  { href: "#profil", label: "Profil" },
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-sm font-medium tracking-widest uppercase">
          Daniel Naujocks
        </Link>
        <nav className="flex items-center gap-8">
          <div className="hidden gap-8 sm:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </div>
          <a
            href="#kontakt"
            className="text-sm text-accent transition-opacity hover:opacity-80"
          >
            Kontakt
          </a>
        </nav>
      </div>
    </header>
  );
}
