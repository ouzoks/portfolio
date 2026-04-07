import { useI18n } from "../../shared/i18n/I18nProvider";
import { getAboutCapabilities } from "../../shared/config/site";
import { AboutCapabilityCard } from "../../shared/ui/AboutCapabilityCard";
import { Reveal } from "../../shared/ui/Reveal";

export function AboutSection() {
  const { dictionary, t } = useI18n();
  const aboutCapabilities = getAboutCapabilities(dictionary);

  return (
    <section id="about" className="shell relative py-28 md:py-30">
      <div className="about-ambient pointer-events-none absolute -left-20 top-20 h-52 w-52 rounded-full bg-tealBrand-500/16 blur-3xl" />
      <div className="about-ambient-delayed pointer-events-none absolute -right-16 bottom-16 h-56 w-56 rounded-full bg-tealBrand-500/14 blur-3xl" />

      <Reveal className="relative">
        <header className="relative">
          <div className="gap-3">
            <span className="h-1.5 w-1.5 rounded-full" />
            <p className="section-eyebrow">{t("about.eyebrow")}</p>
          </div>

          <div className="mx-auto mt-14 max-w-4xl text-center">
            <h2 className="font-serif text-4xl leading-[1.05] tracking-tight text-mist-50 md:text-6xl lg:text-7xl">
              {t("about.title")}
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-mist-300 md:text-lg">
              {t("about.description")}
            </p>
            <div className="mx-auto mt-7 h-px w-40 bg-tealBrand-500/35" />
          </div>
        </header>
      </Reveal>

      <Reveal className="relative mt-12">
        <div className="grid gap-6 md:grid-cols-2">
          {aboutCapabilities.map((capability, index) => (
            <AboutCapabilityCard
              key={capability.title}
              capability={capability}
              delayMs={index * 130}
            />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
