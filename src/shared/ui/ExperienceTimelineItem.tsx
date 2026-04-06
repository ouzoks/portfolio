import type { Experience } from "../types";

type ExperienceTimelineItemProps = {
  experience: Experience;
  align: "left" | "right";
};

export function ExperienceTimelineItem({
  experience,
  align,
}: ExperienceTimelineItemProps) {
  const isRight = align === "right";

  return (
    <article className="relative grid gap-3 md:grid-cols-[minmax(0,1fr)_3rem_minmax(0,1fr)] md:items-center md:gap-4">
      {/* Mobile period */}
      <div className="ml-8 md:hidden">
        <p className="text-sm font-bold uppercase leading-tight tracking-[0.18em] text-tealBrand-600">
          {experience.period}
        </p>
      </div>

      {/* Left side card */}
      {!isRight && (
        <div className="md:col-start-1 md:justify-self-end md:max-w-[32rem]">
          <div className="ml-8 rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(17,29,26,0.96),rgba(10,19,17,0.94))] p-6 shadow-[0_20px_42px_-30px_rgba(0,0,0,0.56)] transition duration-300 ease-out hover:border-tealBrand-500/45 hover:shadow-[0_0_0_1px_rgba(99,245,198,0.14),0_0_28px_rgba(99,245,198,0.18)] md:ml-0">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-tealBrand-600">
              {experience.company} · {experience.employmentType}
            </p>

            <h3 className="mt-3 text-2xl leading-tight text-mist-50 md:text-3xl">
              {experience.role}
            </h3>

            <p className="mt-4 text-base leading-8 text-mist-300 md:text-lg">
              {experience.description}
            </p>
          </div>
        </div>
      )}

      {/* Timeline center */}
      <div className="absolute bottom-0 left-[0.65rem] top-0 w-px bg-transparent md:static md:col-start-2 md:flex md:w-auto md:items-center md:justify-center">
        <span className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-night-950 bg-tealBrand-500 shadow-[0_0_0_8px_rgba(99,245,198,0.14)] md:static md:translate-x-0 md:translate-y-0" />
      </div>

      {/* Right side card */}
      {isRight && (
        <div className="md:col-start-3 md:justify-self-start md:max-w-[32rem]">
          <div className="ml-8 rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(17,29,26,0.96),rgba(10,19,17,0.94))] p-6 shadow-[0_20px_42px_-30px_rgba(0,0,0,0.56)] transition duration-300 ease-out hover:border-tealBrand-500/45 hover:shadow-[0_0_0_1px_rgba(99,245,198,0.14),0_0_28px_rgba(99,245,198,0.18)] md:ml-0">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-tealBrand-600">
              {experience.company} · {experience.employmentType}
            </p>

            <h3 className="mt-3 text-2xl leading-tight text-mist-50 md:text-3xl">
              {experience.role}
            </h3>

            <p className="mt-4 text-base leading-8 text-mist-300 md:text-lg">
              {experience.description}
            </p>
          </div>
        </div>
      )}

      {/* Desktop period */}
      <div
        className={`hidden md:flex md:items-center md:row-start-1 ${
          isRight
            ? "md:col-start-1 md:justify-self-end md:pr-6"
            : "md:col-start-3 md:justify-self-start md:pl-6"
        }`}
      >
        <p className="text-sm font-bold uppercase leading-tight tracking-[0.18em] text-tealBrand-600 whitespace-nowrap">
          {experience.period}
        </p>
      </div>
    </article>
  );
}
