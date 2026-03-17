import { projects } from "../../shared/config/site";
import { ProjectShowcaseItem } from "../../shared/ui/ProjectShowcaseItem";

export function ProjectsSection() {
  return (
    <section id="projects" className="shell py-20">
      <p className="section-eyebrow">Selected Work</p>
      <h2 className="section-title">One cikan projeler</h2>
      <div className="mt-10 space-y-12">
        {projects.map((project, index) => (
          <ProjectShowcaseItem
            key={project.title}
            project={project}
            align={index % 2 === 1 ? "right" : "left"}
          />
        ))}
      </div>
    </section>
  );
}
