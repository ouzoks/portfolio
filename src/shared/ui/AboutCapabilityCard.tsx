import { cn } from "../lib/cn";
import type { AboutCapability } from "../types";

type AboutCapabilityCardProps = {
  capability: AboutCapability;
  className?: string;
  delayMs?: number;
};

export function AboutCapabilityCard({ capability, className, delayMs = 0 }: AboutCapabilityCardProps) {
  return (
    <article
      className={cn(
        "about-reveal group relative overflow-hidden rounded-[1.8rem] border border-[#7bbf8a]/35 bg-[linear-gradient(145deg,rgba(255,255,255,0.9),rgba(236,255,240,0.76))] p-6 shadow-[0_16px_36px_-24px_rgba(17,17,17,0.55)] backdrop-blur-sm transition duration-500 hover:-translate-y-1.5 hover:border-tealBrand-500/45 hover:shadow-[0_24px_52px_-22px_rgba(17,17,17,0.45)] md:p-8",
        className,
      )}
      style={{ animationDelay: `${delayMs}ms` }}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-[linear-gradient(180deg,rgba(255,255,255,0.45),transparent)]" />

      <div className="relative">
        <h3 className="max-w-[22ch] text-2xl md:text-[1.8rem]">{capability.title}</h3>

        <div className="mt-5 grid gap-6 md:grid-cols-[1.15fr_0.85fr] md:items-start">
          <p className="max-w-[62ch] leading-7 text-ink-700">{capability.description}</p>

          <div className="flex flex-wrap justify-start gap-2 md:justify-end">
            {capability.tags.map((tag, index) => (
              <span
                key={tag}
                className="rounded-xl border border-tealBrand-500/35 bg-white/95 px-3.5 py-2 text-sm font-semibold text-tealBrand-600 transition duration-300 group-hover:scale-[1.04] group-hover:bg-tealBrand-500/12"
                style={{ transitionDelay: `${index * 25}ms` }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
