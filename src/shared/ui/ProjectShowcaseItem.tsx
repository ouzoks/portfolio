import type { Project } from "../types";
import { PhotoPlaceholder } from "./PhotoPlaceholder";
import { ProjectDetailsTabs } from "./ProjectDetailsTabs";

type ProjectShowcaseItemProps = {
  project: Project;
  align: "left" | "right";
};

function ProjectActionLink({
  href,
  label,
  variant = "secondary",
}: {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
}) {
  const baseClassName =
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-bold transition duration-200";

  const variantClassName =
    variant === "primary"
      ? "bg-tealBrand-500 text-white shadow-soft hover:-translate-y-0.5 hover:bg-tealBrand-600"
      : "border border-tealBrand-500/30 bg-white text-ink-800 hover:-translate-y-0.5 hover:border-tealBrand-500/55 hover:text-tealBrand-600";

  return (
    <a href={href} target="_blank" rel="noreferrer" className={`${baseClassName} ${variantClassName}`}>
      {label}
    </a>
  );
}

export function ProjectShowcaseItem({ project, align }: ProjectShowcaseItemProps) {
  const isImageRight = align === "right";

  return (
    <article className="grid gap-8 border-t border-tealBrand-500/18 pt-8 lg:grid-cols-2 lg:items-center lg:gap-12">
      <div className={isImageRight ? "lg:order-2" : undefined}>
        <PhotoPlaceholder
          label={project.imageLabel}
          className="min-h-[280px] rounded-[1.8rem] border-tealBrand-500/22 bg-[linear-gradient(135deg,rgba(34,197,94,0.14),rgba(255,255,255,0.94))] md:min-h-[360px]"
        />
      </div>

      <div className={isImageRight ? "lg:order-1" : undefined}>
        <span className="text-sm font-bold tracking-[0.18em] text-tealBrand-600">{project.number}</span>
        <h3 className="mt-4 text-3xl leading-tight text-ink-900 md:text-4xl">{project.title}</h3>
        <p className="mt-5 max-w-[58ch] text-base leading-8 text-ink-700 md:text-lg">
          {project.summary}
        </p>
        <ProjectDetailsTabs project={project} />

        <div className="mt-8 flex flex-wrap gap-3">
          <ProjectActionLink href={project.repoUrl} label="GitHub Repo" />
          {project.liveDemoUrl ? (
            <ProjectActionLink href={project.liveDemoUrl} label="Live Demo" variant="primary" />
          ) : null}
        </div>
      </div>
    </article>
  );
}
