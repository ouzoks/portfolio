import { skillCategories } from "../../shared/config/site";
import { SkillCategoryGroup } from "../../shared/ui/SkillCategoryGroup";

export function SkillSection() {
  return (
    <section className="shell py-12 md:py-16" aria-labelledby="skills-heading">
      <header className="max-w-3xl">
        <p className="section-eyebrow">Skills & Technologies</p>
        <h2
          id="skills-heading"
          className="mt-4 font-serif text-4xl leading-[1.05] tracking-tight text-ink-900 md:text-5xl"
        >
          Teknolojiler ve kullandigim araclar
        </h2>
      </header>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr_0.8fr] lg:gap-12">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="border-t border-tealBrand-500/18 pt-5"
            >
              <h3 className="text-lg font-semibold uppercase tracking-[0.12em] text-ink-900 md:text-xl">
                {category.title}
              </h3>
              <div className="mt-5">
                <SkillCategoryGroup tags={category.tags} />
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
