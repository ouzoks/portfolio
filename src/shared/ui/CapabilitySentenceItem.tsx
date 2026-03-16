import type { CapabilitySentence } from "../types";
import { SkillCategoryGroup } from "./SkillCategoryGroup";

type CapabilitySentenceItemProps = {
  sentence: CapabilitySentence;
};

export function CapabilitySentenceItem({ sentence }: CapabilitySentenceItemProps) {
  return (
    <article className="group relative overflow-hidden rounded-[1.6rem] border border-tealBrand-500/14 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(246,255,248,0.9))] p-6 shadow-[0_20px_40px_-32px_rgba(17,17,17,0.4)] transition duration-300 ease-out hover:-translate-y-1 hover:border-tealBrand-500/28 hover:shadow-[0_24px_50px_-30px_rgba(16,185,129,0.22)] md:p-7">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.14),transparent_34%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative flex items-start gap-4">
        <span className="inline-flex min-w-12 justify-start text-sm font-bold tracking-[0.18em] text-tealBrand-600">
          {sentence.number}
        </span>
        <div className="flex-1">
          <p className="max-w-[58ch] text-[1rem] leading-8 text-ink-800 md:text-[1.05rem]">
            {sentence.text}
          </p>

          <div className="mt-5 h-[2px] w-12 rounded-full bg-tealBrand-500/70 transition-[width] duration-300 ease-out group-hover:w-20" />
        </div>
      </div>

      <div className="relative mt-6 md:pl-16">
        <SkillCategoryGroup tags={sentence.tags} />
      </div>
    </article>
  );
}
