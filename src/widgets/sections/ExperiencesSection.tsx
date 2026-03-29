import { experiences } from "../../shared/config/site";
import { ExperienceTimelineItem } from "../../shared/ui/ExperienceTimelineItem";

export function ExperiencesSection() {
  return (
    <section id="experience" className="shell py-20">
      <div className="mx-auto max-w-3xl text-center">
        <p className="section-eyebrow">Experience</p>
        <h2 className="section-title">Calisma yolculugum</h2>
      </div>

      <div className="relative mt-14 space-y-12 md:space-y-16">
        <div className="pointer-events-none absolute bottom-0 left-[0.65rem] top-0 w-px bg-tealBrand-500/30 md:left-1/2 md:-translate-x-1/2" />
        {experiences.map((experience, index) => (
          <ExperienceTimelineItem
            key={`${experience.company}-${experience.period}`}
            experience={experience}
            align={index % 2 === 1 ? "right" : "left"}
          />
        ))}
      </div>
    </section>
  );
}
