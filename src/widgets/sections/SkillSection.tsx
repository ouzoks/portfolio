import { capabilitySentences, skillCategories } from "../../shared/config/site";
import { CapabilitySentenceItem } from "../../shared/ui/CapabilitySentenceItem";
import { SkillCategoryGroup } from "../../shared/ui/SkillCategoryGroup";

export function SkillSection() {
  return (
    <section className="shell py-14 md:py-20" aria-labelledby="skills-heading">
      <header className="grid gap-8 border-t border-tealBrand-500/22 pt-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="max-w-xl">
          <p className="section-eyebrow">Skills & Technologies</p>
          <h2
            id="skills-heading"
            className="mt-4 font-serif text-4xl leading-[1.02] tracking-tight text-ink-900 md:text-5xl lg:text-6xl"
          >
            Teknolojiler, araçlar ve çalışma pratiğim
          </h2>
        </div>

        <div className="max-w-2xl lg:pt-2">
          <p className="text-base leading-8 text-ink-700 md:text-lg mt-7">
            Günlük üretim sürecimde aktif olarak kullandığım teknolojileri ve geliştirme yaklaşımımı bu alanda bir araya getirdim.
Amacım sadece hangi araçları kullandığımı değil, ürün geliştirirken nasıl düşündüğümü de sade bir dille göstermek.
          </p>
        </div>
      </header>

      <div className="mt-14 grid gap-12 xl:grid-cols-[0.8fr_1.2fr]">
        <div className="xl:pr-8">
          <div className="themed-scrollbar xl:sticky xl:top-20 xl:max-h-[calc(100svh-5rem)] xl:overflow-y-auto xl:pr-3">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-tealBrand-600">
              Core Stack
            </p>
            <div className="mt-6 space-y-8">
              {skillCategories.map((category) => (
                <section key={category.title} className="border-t border-tealBrand-500/18 pt-4">
                  <h3 className="text-lg font-semibold uppercase tracking-[0.14em] text-ink-900 md:text-xl">
                    {category.title}
                  </h3>
                  <div className="mt-5">
                    <SkillCategoryGroup tags={category.tags} />
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="max-w-2xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-tealBrand-600">
              Capability Notes
            </p>
            <h4 className="mt-4 font-serif text-3xl leading-tight text-ink-900 md:text-4xl">
             Nasıl çalıştığımı anlatan küçük detaylar
            </h4>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:gap-x-6 lg:gap-y-6">
            {capabilitySentences.map((sentence) => (
              <CapabilitySentenceItem key={sentence.number} sentence={sentence} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
