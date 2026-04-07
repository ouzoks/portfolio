import { projects } from "../../shared/config/site";
import { ProjectShowcaseItem } from "../../shared/ui/ProjectShowcaseItem";
import { Reveal } from "../../shared/ui/Reveal";

export function ProjectsSection() {
  return (
    <section id="projects" className="shell py-20">
      <Reveal>
        <p className="section-eyebrow">ÖNE ÇIKAN PROJELER</p>
        <h2 className="my-10 text-center section-title">Seçili projeler</h2>
      </Reveal>
      <div className="mt-10 space-y-12">
        {projects.map((project, index) => (
          <Reveal key={project.title} delayMs={index * 90}>
            <ProjectShowcaseItem project={project} align={index % 2 === 1 ? "right" : "left"} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
