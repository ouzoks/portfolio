import { skillCategories } from "../../shared/config/site";
import { SkillCategoryGroup } from "../../shared/ui/SkillCategoryGroup";

export function SkillSection() {
  return (
    <section className="shell py-8 md:py-12" aria-labelledby="skills-heading">
<p className="section-eyebrow">Skills & Technologies</p>

      <div className="mt-12 rounded-[2rem] border border-tealBrand-500/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(244,255,246,0.92))] p-6 shadow-[0_24px_52px_-34px_rgba(17,17,17,0.26)] md:p-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-x-10 lg:gap-y-10">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="border-b border-tealBrand-500/18 pb-8 last:border-b-0 last:pb-0"
            >
              <h3 className="text-xl leading-tight text-ink-900 md:text-2xl">
                {category.title}
              </h3>
              <div className="mt-5">
                <SkillCategoryGroup tags={category.tags} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
