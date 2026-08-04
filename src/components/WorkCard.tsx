import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/site";

function BrowserFrame({ project }: { project: Project }) {
  const host = project.url ? new URL(project.url).host : null;

  return (
    <div className="overflow-hidden rounded-t-xl border border-b-0 border-line bg-surface shadow-[0_-1px_0_rgba(23,22,19,0.02),0_24px_60px_-30px_rgba(23,22,19,0.35)]">
      {/* Browser-Chrome */}
      <div className="flex items-center gap-3 border-b border-line bg-background px-4 py-2.5 sm:px-5 sm:py-3">
        <span className="flex gap-1.5" aria-hidden>
          <span className="size-2.5 rounded-full bg-foreground/15" />
          <span className="size-2.5 rounded-full bg-foreground/15" />
          <span className="size-2.5 rounded-full bg-foreground/15" />
        </span>
        {host && (
          <span className="mx-auto flex items-center gap-2 rounded-full bg-surface px-4 py-1 text-[11px] tracking-wide text-muted">
            {project.status === "live" && (
              <span className="size-1.5 rounded-full bg-live" aria-hidden />
            )}
            {host}
          </span>
        )}
        <span className="w-14" aria-hidden />
      </div>
      <div className="overflow-hidden">
        <Image
          src={project.image}
          alt={`Screenshot der Website von ${project.client}`}
          width={1440}
          height={900}
          sizes="(min-width: 1440px) 1240px, (min-width: 640px) 90vw, 100vw"
          className="w-full transition-transform duration-700 ease-out group-hover:scale-[1.015]"
        />
      </div>
    </div>
  );
}

function CardBody({ project, index }: { project: Project; index: number }) {
  return (
    <>
      <div className="p-6 sm:p-10 lg:p-12">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-muted">
              {String(index + 1).padStart(2, "0")} — {project.sector}
            </p>
            <h3 className="mt-4 font-display text-4xl font-semibold tracking-tight font-expanded sm:text-5xl lg:text-6xl">
              {project.client}
            </h3>
          </div>
          {project.status === "live" ? (
            <span className="grid size-12 shrink-0 place-items-center rounded-full border border-line transition-all duration-300 group-hover:border-foreground group-hover:bg-foreground group-hover:text-background sm:size-14">
              <ArrowUpRight
                className="size-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 sm:size-6"
                aria-hidden
              />
            </span>
          ) : (
            <span className="shrink-0 rounded-full border border-line px-3 py-1 text-xs tracking-wide text-muted">
              Launch in Kürze
            </span>
          )}
        </div>
        <div className="mt-8 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <p className="max-w-xl leading-relaxed text-muted">
            {project.description}
          </p>
          <ul className="flex shrink-0 flex-wrap gap-2">
            {[project.year, ...project.services].map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-line px-3.5 py-1.5 text-xs uppercase tracking-widest text-muted"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="px-4 sm:px-10 lg:px-12">
        <BrowserFrame project={project} />
      </div>
    </>
  );
}

export function WorkCard({ project, index }: { project: Project; index: number }) {
  const className =
    "group block overflow-hidden rounded-3xl border border-line bg-surface transition-shadow duration-500 hover:shadow-[0_32px_90px_-32px_rgba(23,22,19,0.3)]";

  if (project.url) {
    return (
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        <CardBody project={project} index={index} />
      </a>
    );
  }

  return (
    <div className={className}>
      <CardBody project={project} index={index} />
    </div>
  );
}
