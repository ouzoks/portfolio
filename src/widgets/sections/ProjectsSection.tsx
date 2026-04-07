import { useI18n } from "../../shared/i18n/I18nProvider";
import { getProjects } from "../../shared/config/site";
import { ProjectShowcaseItem } from "../../shared/ui/ProjectShowcaseItem";
import { Reveal } from "../../shared/ui/Reveal";

export function ProjectsSection() {
  const { dictionary, t } = useI18n();
  const projects = getProjects(dictionary);

  return (
    <section id="projects" className="shell py-20">
      <Reveal>
        <p className="section-eyebrow">{t("projects.eyebrow")}</p>
        <h2 className="my-10 text-center section-title">{t("projects.title")}</h2>
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
