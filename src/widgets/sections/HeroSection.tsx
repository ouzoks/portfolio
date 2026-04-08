import { useState } from "react";
import { useI18n } from "../../shared/i18n/I18nProvider";
import profilePicture from "../../shared/assets/profile-picture.png";
import { PhotoPlaceholder } from "../../shared/ui/PhotoPlaceholder";
import { Reveal } from "../../shared/ui/Reveal";

function renderHighlightedText(text: string) {
  return text.split(/(\*\*.*?\*\*)/g).map((part, index) => {
    const isHighlighted = part.startsWith("**") && part.endsWith("**");

    if (!isHighlighted) {
      return <span key={index}>{part}</span>;
    }

    return (
      <strong key={index} className="font-semibold text-tealBrand-500">
        {part.slice(2, -2)}
      </strong>
    );
  });
}

export function HeroSection() {
  const [showBioCard, setShowBioCard] = useState(false);
  const { t } = useI18n();
  const text = t("hero.name");

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <Reveal className="pointer-events-none absolute inset-0 flex items-center overflow-hidden" delayMs={280}>
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className="mx-20 text-[90px] font-extrabold tracking-widest text-white/90 md:text-[140px]"
            >
              {text}
            </span>
          ))}
        </div>
      </Reveal>

      <div className="relative z-10 flex w-full items-center justify-center px-4">
        <Reveal delayMs={80} yOffset={18}>
          <button
            type="button"
            onClick={() => setShowBioCard((prev) => !prev)}
            className={`group relative z-20 cursor-pointer rounded-full border-4 border-white p-2 shadow-xl transition-transform duration-1000 ease-out ${
              showBioCard ? "translate-x-0 min-[1181px]:-translate-x-[25rem]" : "translate-x-0"
            }`}
            aria-expanded={showBioCard}
            aria-controls="hero-bio-card"
            aria-label={t("hero.openProfile")}
          >
            <PhotoPlaceholder
              label="profile-picture"
              src={profilePicture}
              className="h-72 w-72 rounded-full object-cover transition duration-300 group-hover:scale-[1.03] group-hover:ring-8 group-hover:ring-tealBrand-500/60 group-hover:shadow-[0_0_0_14px_rgba(99,245,198,0.28)] md:h-80 md:w-80"
            />
          </button>
        </Reveal>

        <article
          id="hero-bio-card"
          className={`pointer-events-none absolute left-1/2 top-1/2 z-30 w-[min(94vw,700px)] -translate-y-1/2 rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(18,30,28,0.88),rgba(10,19,17,0.82))] p-5 text-left shadow-[0_24px_54px_-28px_rgba(0,0,0,0.62)] backdrop-blur-xl transition-all duration-1000 ease-out md:p-8 ${
            showBioCard
              ? "-translate-x-1/2 min-[1181px]:-translate-x-[20%] scale-100 opacity-100"
              : "-translate-x-1/2 min-[1181px]:-translate-x-[20%] scale-95 opacity-0"
          }`}
        >
          <p className="leading-relaxed text-lg text-mist-300">
            {renderHighlightedText(t("hero.intro"))}
            <br />
            <br />
            {renderHighlightedText(t("hero.summary"))}
            <br />
            <br />
            {renderHighlightedText(t("hero.purpose"))}
          </p>
        </article>
      </div>

      <Reveal className="absolute bottom-6 left-5 z-10" delayMs={420} yOffset={16}>
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-mist-200/80 md:text-xs">
          {t("hero.location")}
        </p>
      </Reveal>
      <Reveal className="absolute bottom-6 right-5 z-10" delayMs={480} yOffset={16}>
        <p className="max-w-[12ch] text-right text-xl font-extrabold uppercase leading-tight text-mist-50 md:text-4xl">
          {t("hero.role")}
        </p>
      </Reveal>
    </section>
  );
}
