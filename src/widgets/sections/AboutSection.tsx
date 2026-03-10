import { aboutCapabilities, aboutCapabilitySummary } from "../../shared/config/site";
import { AboutCapabilityCard } from "../../shared/ui/AboutCapabilityCard";

const layoutClasses = [
  "md:col-span-2",
  "md:mr-8 md:-translate-y-4",
  "md:ml-8 md:translate-y-2",
];

export function AboutSection() {
  return (
    
    <section id="about" className="shell relative py-28 md:py-30">
      <div className="about-ambient pointer-events-none absolute -left-20 top-20 h-52 w-52 rounded-full bg-tealBrand-500/16 blur-3xl" />
      <div className="about-ambient-delayed pointer-events-none absolute -right-16 bottom-16 h-56 w-56 rounded-full bg-tealBrand-500/14 blur-3xl" />

      <header className="relative">
        <div className="inline-flex items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-tealBrand-500" />
          <p className="section-eyebrow">WHAT I DO</p>
        </div>

        <div className="mx-auto mt-4 max-w-4xl text-center">
          <h2 className="font-serif text-4xl leading-[1.05] tracking-tight text-ink-900 md:text-6xl lg:text-7xl">
            Here&apos;s what I work on day to day.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-ink-700 md:text-lg">
            Building scalable interfaces, connecting systems, and turning ideas into working
            products. I connect technical decisions with product outcomes, so the work is not only
            clean but also meaningful.
          </p>
          <div className="mx-auto mt-7 h-px w-40 bg-tealBrand-500/35" />
        </div>
      </header>

      <div className="relative mt-12 grid gap-6 md:grid-cols-2">
        {aboutCapabilities.map((capability, index) => (
          <AboutCapabilityCard
            key={capability.title}
            capability={capability}
            className={layoutClasses[index]}
            delayMs={index * 130}
          />
        ))}
      </div>
      <article className="about-reveal summary-spotlight relative mt-16 rounded-[1.8rem] border border-[#7bbf8a]/35 bg-[linear-gradient(145deg,rgba(255,255,255,0.95),rgba(232,255,238,0.9))] p-6 shadow-[0_20px_44px_-26px_rgba(17,17,17,0.5)] md:p-8">
        <svg
          className="summary-orbit absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <rect className="summary-orbit-track" x="0.8" y="0.8" width="98.4" height="98.4" rx="8.5" />
          <rect
            className="summary-orbit-runner"
            x="0.8"
            y="0.8"
            width="98.4"
            height="98.4"
            rx="8.5"
            pathLength="360"
          />
        </svg>


        <div className="grid gap-4 text-sm leading-7 text-ink-700 md:grid-cols-3 md:text-base">
          <p className="summary-item rounded-2xl border border-tealBrand-500/20 bg-white/75 p-4">
            <strong className="block text-[11px] uppercase tracking-[0.12em] text-tealBrand-600">
              What I Care About
            </strong>
            {aboutCapabilitySummary.whatICareAbout}
          </p>
          <p className="summary-item rounded-2xl border border-tealBrand-500/20 bg-white/75 p-4">
            <strong className="block text-[11px] uppercase tracking-[0.12em] text-tealBrand-600">
              Typical Tools
            </strong>
            {aboutCapabilitySummary.typicalTools}
          </p>
          <p className="summary-item rounded-2xl border border-tealBrand-500/20 bg-white/75 p-4">
            <strong className="block text-[11px] uppercase tracking-[0.12em] text-tealBrand-600">
              Practical Impact
            </strong>
            {aboutCapabilitySummary.practicalImpact}
          </p>
        </div>
      </article>
    </section>
  );
}
