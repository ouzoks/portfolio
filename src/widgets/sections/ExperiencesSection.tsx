import { useI18n } from "../../shared/i18n/I18nProvider";
import { getExperiences } from "../../shared/config/site";
import { ExperienceTimelineItem } from "../../shared/ui/ExperienceTimelineItem";
import { Reveal } from "../../shared/ui/Reveal";

export function ExperiencesSection() {
  const { dictionary, t } = useI18n();
  const experiences = getExperiences(dictionary);

  return (
    <section id="experience" className="shell py-20">
      <Reveal>
        <p className="section-eyebrow">{t("experiences.eyebrow")}</p>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="section-title">{t("experiences.title")}</h2>
        </div>
      </Reveal>

      <div className="relative mt-14 space-y-12 md:space-y-16">
        <div className="pointer-events-none absolute bottom-0 left-[0.65rem] top-0 w-px bg-tealBrand-500/30 md:left-1/2 md:-translate-x-1/2" />
        {experiences.map((experience, index) => (
          <Reveal key={`${experience.company}-${experience.period}`} delayMs={index * 90}>
            <ExperienceTimelineItem experience={experience} align={index % 2 === 1 ? "right" : "left"} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
