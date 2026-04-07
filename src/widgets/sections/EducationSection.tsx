import { education } from "../../shared/config/site";
import { Reveal } from "../../shared/ui/Reveal";

export function EducationSection() {
  return (
    <section className="shell py-8 md:py-10" aria-label="Eğitim">
      <Reveal>
        <div className="mx-auto max-w-4xl rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(17,29,26,0.96),rgba(10,19,17,0.94))] p-4 shadow-[0_20px_42px_-30px_rgba(0,0,0,0.56)] transition duration-300 ease-out hover:border-tealBrand-500/45 hover:shadow-[0_0_0_1px_rgba(99,245,198,0.14),0_0_28px_rgba(99,245,198,0.18)] md:p-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              {education.logoSrc ? (
                <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur-sm">
                  <img src={education.logoSrc} alt={education.school} className="h-full w-full object-contain" />
                </div>
              ) : null}

              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-tealBrand-600">
                  Eğitim
                </p>
                <p className="mt-1 text-lg font-semibold leading-tight text-mist-50 md:text-xl">
                  {education.school}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-1 md:items-end">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-tealBrand-600">
                {education.period}
              </p>
              <p className="text-base leading-tight text-mist-300 md:text-lg">
                {education.degree}
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
