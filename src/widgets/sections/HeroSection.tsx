import { useState } from "react";
import { PhotoPlaceholder } from "../../shared/ui/PhotoPlaceholder";
import profilePicture from "../../shared/assets/profile-picture.png";

export function HeroSection() {
  const [showBioCard, setShowBioCard] = useState(false);
  const text = "OGUZ OKSUZOMER";

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">

      {/* Marquee */}
      <div className="absolute inset-0 flex items-center overflow-hidden pointer-events-none">

        {/* Track */}
        <div className="flex animate-marquee whitespace-nowrap">

          {/* içerik */}
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className="mx-20 text-[90px] md:text-[140px] font-extrabold tracking-widest text-white/90"
            >
              {text}
            </span>
          ))}

        </div>
      </div>

      {/* Photo + Bio Card */}
      <div className="relative z-10 flex w-full items-center justify-center px-4">
        <button
          type="button"
          onClick={() => setShowBioCard((prev) => !prev)}
          className={`group relative z-20 cursor-pointer rounded-full border-4 border-white p-2 shadow-xl transition-transform duration-1000 ease-out ${
            showBioCard ? "translate-x-0 md:-translate-x-[25rem]" : "translate-x-0"
          }`}
          aria-expanded={showBioCard}
          aria-controls="hero-bio-card"
          aria-label="Profil detaylarini ac"
        >
          <PhotoPlaceholder
            label="profile-picture"
            src={profilePicture}
            className="h-72 w-72 rounded-full object-cover transition duration-300 group-hover:scale-[1.03] group-hover:ring-8 group-hover:ring-tealBrand-500/60 group-hover:shadow-[0_0_0_14px_rgba(34,197,94,0.28)] md:h-80 md:w-80"
          />
        </button>

        <article
          id="hero-bio-card"
          className={`pointer-events-none absolute left-1/2 top-1/2 z-30 w-[min(94vw,700px)] -translate-y-1/2 rounded-2xl border border-black/10 bg-white/95 p-5 text-left shadow-2xl backdrop-blur-sm transition-all duration-1000 ease-out md:p-8 ${
            showBioCard
              ? "-translate-x-1/2 md:-translate-x-[20%] scale-100 opacity-100"
              : "-translate-x-1/2 md:-translate-x-[20%] scale-95 opacity-0"
          }`}
        >
          <p className="text-sm leading-7 text-black md:text-base">
            Frontend agırlıklı calısan, React ve .NET ekosistemine hakim bir yazılım muhendisiyim.
            React.js ve Material UI kullanarak modern, olceklenebilir ve clean-code prensiplerine
            uygun arayuzler gelistirdim. REST API entegrasyonları, JWT tabanlı kimlik dogrulama ve
            frontend-backend baglantıları konusunda deneyim sahibiyim.
          </p>
        </article>
      </div>

      <p className="absolute bottom-6 left-5 z-10 text-[11px] font-semibold uppercase tracking-[0.14em] text-black/70 md:text-xs">
        Istanbul, Turkiye
      </p>
      <p className="absolute bottom-6 right-5 z-10 max-w-[12ch] text-right text-xl font-extrabold uppercase leading-tight text-black md:text-4xl">
        Junior Software Engineer
      </p>

    </section>
  );
}
