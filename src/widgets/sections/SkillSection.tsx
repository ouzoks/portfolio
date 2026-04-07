import { useI18n } from "../../shared/i18n/I18nProvider";
import {
  getCapabilitySentences,
  getSkillCategories,
} from "../../shared/config/site";
import { CapabilitySentenceItem } from "../../shared/ui/CapabilitySentenceItem";
import { Reveal } from "../../shared/ui/Reveal";
import { SkillCategoryGroup } from "../../shared/ui/SkillCategoryGroup";

export function SkillSection() {
  const { dictionary, t } = useI18n();
  const skillCategories = getSkillCategories(dictionary);
  const capabilitySentences = getCapabilitySentences(dictionary);

  return (
    <section id="skills" className="shell py-14 md:py-20" aria-labelledby="skills-heading">
      <Reveal>
        <header className="grid gap-8 border-t border-tealBrand-500/22 pt-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="max-w-xl">
            <p className="section-eyebrow">{t("skills.eyebrow")}</p>
            <h2
              id="skills-heading"
              className="mt-4 font-serif text-4xl leading-[1.02] tracking-tight text-mist-50 md:text-5xl lg:text-6xl"
            >
              {t("skills.title")}
            </h2>
          </div>

          <div className="max-w-2xl lg:pt-2">
            <p className="mt-7 text-base leading-8 text-mist-300 md:text-lg">
              {t("skills.description")}
            </p>
          </div>
        </header>
      </Reveal>

      <div className="mt-14 grid gap-12 xl:grid-cols-[0.8fr_1.2fr]">
        <Reveal className="xl:pr-8" delayMs={80}>
          <div className="themed-scrollbar xl:sticky xl:top-20 xl:max-h-[calc(100svh-5rem)] xl:overflow-y-auto xl:pr-3">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-tealBrand-600">
              {t("skills.coreStack")}
            </p>
            <div className="mt-6 space-y-8">
              {skillCategories.map((category) => (
                <section key={category.title} className="border-t border-tealBrand-500/18 pt-4">
                  <h3 className="text-lg font-semibold uppercase tracking-[0.14em] text-mist-100 md:text-xl">
                    {category.title}
                  </h3>
                  <div className="mt-5">
                    <SkillCategoryGroup tags={category.tags} />
                  </div>
                </section>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delayMs={160}>
          <div>
            <div className="max-w-2xl">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-tealBrand-600">
                {t("skills.notesEyebrow")}
              </p>
              <h4 className="mt-4 font-serif text-3xl leading-tight text-mist-50 md:text-4xl">
                {t("skills.notesTitle")}
              </h4>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:gap-x-6 lg:gap-y-6">
              {capabilitySentences.map((sentence) => (
                <CapabilitySentenceItem key={sentence.number} sentence={sentence} />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
