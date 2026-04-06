import { cn } from "../lib/cn";
import type { AboutCapability } from "../types";

type AboutCapabilityCardProps = {
  capability: AboutCapability;
  className?: string;
  delayMs?: number;
};

function renderHighlightedText(text: string) {
  return text.split(/(\*\*.*?\*\*)/g).map((part, index) => {
    const isHighlighted = part.startsWith("**") && part.endsWith("**");

    if (!isHighlighted) {
      return <span key={index}>{part}</span>;
    }

    return (
      <strong key={index} className="font-semibold text-tealBrand-600">
        {part.slice(2, -2)}
      </strong>
    );
  });
}

export function AboutCapabilityCard({ capability, className, delayMs = 0 }: AboutCapabilityCardProps) {
  return (
    <article
      className={cn(
        "about-reveal group relative min-h-[20rem] overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(18,30,28,0.96),rgba(10,19,17,0.94))] p-6 shadow-[0_24px_48px_-30px_rgba(0,0,0,0.58)] transition duration-500 hover:-translate-y-1.5 hover:border-tealBrand-500/45 hover:shadow-[0_28px_64px_-30px_rgba(99,245,198,0.2)] border-opacity-100 md:min-h-[22rem] md:p-8 xl:min-h-[23rem]",
        className,
      )}
      style={{ animationDelay: `${delayMs}ms` }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.02),transparent_45%,rgba(34,197,94,0.03))]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(34,197,94,0.22),transparent_30%)] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" />
      <div className="pointer-events-none absolute right-6 top-2 text-[7rem] font-bold leading-none tracking-[-0.08em] text-white/5 transition-all duration-500 ease-out group-hover:text-tealBrand-500/30 group-hover:drop-shadow-[0_0_26px_rgba(99,245,198,0.2)] md:right-8 md:text-[9rem]">
        {capability.number}
      </div>

      <div className="relative flex h-full flex-col">
        <span className="text-sm font-bold tracking-[0.18em] text-tealBrand-600">
          {capability.number}
        </span>
        <h3 className="mt-8 max-w-[14ch] text-3xl leading-[1.05] tracking-tight text-mist-50 md:text-[3rem]">
          {capability.title}
        </h3>

        <div className="mt-auto pt-14">
          <p className="max-w-[32rem] text-base leading-8 text-mist-300 md:text-[1.05rem]">
            {renderHighlightedText(capability.description)}
          </p>

          <div className="mt-8 h-[3px] w-12  mx-auto rounded-full bg-tealBrand-500/85 transition-[width] duration-500 ease-out group-hover:w-24" />
        </div>
      </div>
    </article>
  );
}
