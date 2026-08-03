import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/site";

function CardBody({ project }: { project: Project }) {
  return (
    <>
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-serif text-3xl sm:text-4xl">{project.client}</h3>
        {project.status === "live" ? (
          <ArrowUpRight
            className="size-6 shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent"
            aria-hidden
          />
        ) : (
          <span className="shrink-0 rounded-full border border-line px-3 py-1 text-xs tracking-wide text-muted">
            Launch in Kürze
          </span>
        )}
      </div>
      <p className="mt-2 text-sm tracking-wide text-accent">{project.sector}</p>
      <p className="mt-5 max-w-xl leading-relaxed text-muted">
        {project.description}
      </p>
      <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs uppercase tracking-widest text-muted">
        <li>{project.year}</li>
        {project.services.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </>
  );
}

export function WorkCard({ project }: { project: Project }) {
  const className =
    "group block border-t border-line py-10 transition-colors sm:py-14";

  if (project.url) {
    return (
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        <CardBody project={project} />
      </a>
    );
  }

  return (
    <div className={className}>
      <CardBody project={project} />
    </div>
  );
}
