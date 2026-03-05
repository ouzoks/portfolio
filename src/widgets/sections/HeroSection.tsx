import { PhotoPlaceholder } from "../../shared/ui/PhotoPlaceholder";
import profilePicture from "../../shared/assets/profile-picture.png";

export function HeroSection() {
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

      {/* Photo */}
      <div className="relative z-10">
        <div className="border-4 border-white rounded-full p-2">
          <PhotoPlaceholder
            label="profile-picture"
            src={profilePicture}
            className="w-52 h-52 md:w-72 md:h-72 rounded-full object-cover"
          />
        </div>
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
