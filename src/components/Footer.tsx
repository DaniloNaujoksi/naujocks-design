import Link from "next/link";
import { site } from "@/lib/site";
import { content, type Locale } from "@/lib/content";

export function Footer({ locale = "de" }: { locale?: Locale }) {
  const t = content[locale].footer;

  return (
    <footer className="border-t border-ink-line bg-ink text-background">
      <div className="mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-4 px-6 py-10 text-sm sm:flex-row sm:items-center sm:px-10">
        <p className="text-ink-soft">
          © {new Date().getFullYear()} {site.name} — {t.role}, {site.city}
        </p>
        <div className="flex gap-6">
          <Link
            href="/impressum"
            className="text-ink-soft transition-colors hover:text-background"
          >
            {t.impressum}
          </Link>
          <Link
            href="/datenschutz"
            className="text-ink-soft transition-colors hover:text-background"
          >
            {t.datenschutz}
          </Link>
        </div>
      </div>
    </footer>
  );
}
