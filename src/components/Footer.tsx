import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-10 text-sm text-muted sm:flex-row sm:items-center">
        <p>
          © {new Date().getFullYear()} {site.name} — {site.role}, {site.city}
        </p>
        <div className="flex gap-6">
          <Link href="/impressum" className="transition-colors hover:text-foreground">
            Impressum
          </Link>
          <Link href="/datenschutz" className="transition-colors hover:text-foreground">
            Datenschutz
          </Link>
        </div>
      </div>
    </footer>
  );
}
