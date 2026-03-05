import { projects } from "../../shared/config/site";
import { PhotoPlaceholder } from "../../shared/ui/PhotoPlaceholder";

export function ProjectsSection() {
  return (
    <section id="projects" className="shell py-16">
      <p className="section-eyebrow">Selected Work</p>
      <h2 className="section-title">One cikan projeler</h2>
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="overflow-hidden rounded-3xl border border-black/20 bg-sand-50"
          >
            <PhotoPlaceholder
              label="Project Image Placeholder"
              className="min-h-[190px] rounded-none border-x-0 border-t-0"
            />
            <div className="p-5">
              <h3 className="text-2xl">{project.title}</h3>
              <p className="mt-3 leading-7 text-ink-700">{project.description}</p>
              <small className="mt-4 inline-block font-bold text-tealBrand-500">{project.stack}</small>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
