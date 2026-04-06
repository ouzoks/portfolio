import { education } from "../../shared/config/site";

export function EducationSection() {
  return (
    <section className="shell py-8 md:py-10" aria-label="Education">
      <div className="mx-auto max-w-4xl rounded-[1.6rem] border border-tealBrand-500/18 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(245,255,247,0.88))] p-4 shadow-[0_18px_36px_-30px_rgba(17,17,17,0.24)] transition duration-300 ease-out hover:border-tealBrand-500/45 hover:shadow-[0_0_0_1px_rgba(34,197,94,0.16),0_0_28px_rgba(34,197,94,0.18)] md:p-5">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            {education.logoSrc ? (
              <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl border border-tealBrand-500/14 bg-white/90 p-2">
                <img src={education.logoSrc} alt={education.school} className="h-full w-full object-contain" />
              </div>
            ) : null}

            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-tealBrand-600">
                Education
              </p>
              <p className="mt-1 text-lg font-semibold leading-tight text-ink-900 md:text-xl">
                {education.school}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-1 md:items-end">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-tealBrand-600">
              {education.period}
            </p>
            <p className="text-base leading-tight text-ink-700 md:text-lg">
              {education.degree}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
