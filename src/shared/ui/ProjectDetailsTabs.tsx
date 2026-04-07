import { useLayoutEffect, useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useI18n } from "../i18n/I18nProvider";
import type { Project } from "../types";
import { SkillTag } from "./SkillTag";

type ProjectDetailsTabsProps = {
  project: Project;
};

type ProjectTabKey = "overview" | "implementation";

export function ProjectDetailsTabs({ project }: ProjectDetailsTabsProps) {
  const [activeTab, setActiveTab] = useState<ProjectTabKey>("overview");
  const [contentHeight, setContentHeight] = useState(0);
  const overviewMeasureRef = useRef<HTMLDivElement>(null);
  const implementationMeasureRef = useRef<HTMLDivElement>(null);
  const { t } = useI18n();
  const implementationSummary = `${project.implementation.architecture}`;

  useLayoutEffect(() => {
    const measure = () => {
      const overviewHeight = overviewMeasureRef.current?.offsetHeight ?? 0;
      const implementationHeight = implementationMeasureRef.current?.offsetHeight ?? 0;
      setContentHeight(Math.max(overviewHeight, implementationHeight) + 8);
    };

    measure();
    window.addEventListener("resize", measure);

    return () => window.removeEventListener("resize", measure);
  }, [project]);

  const overviewContent = (
    <div className="mt-6">
      <div className="flex items-start gap-3">
        <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-tealBrand-500/12 text-tealBrand-500">
          <FaArrowRight className="text-xs" aria-hidden="true" />
        </span>
        <p className="max-w-[58ch] text-base leading-8 text-mist-300 md:text-[1.02rem]">
          {project.overview.problem}
        </p>
      </div>

      <div className="mt-5 h-px w-full bg-tealBrand-500/14" />

      <div className="mt-5 flex items-start gap-3">
        <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-tealBrand-500/12 text-tealBrand-500">
          <FaArrowRight className="text-xs" aria-hidden="true" />
        </span>
        <p className="max-w-[58ch] text-base leading-8 text-mist-300 md:text-[1.02rem]">
          {project.overview.solution}
        </p>
      </div>
    </div>
  );

  const implementationContent = (
    <div className="mt-6">
      <div className="flex flex-wrap gap-3">
        {project.technologies.map((technology) => (
          <SkillTag key={`${project.number}-${technology.icon}-${technology.label}`} tag={technology} />
        ))}
      </div>

      <div className="mt-5 h-px w-full bg-tealBrand-500/14" />

      <p className="mt-10 max-w-[58ch] text-base leading-8 text-mist-300 md:text-[1.02rem]">
        {implementationSummary}
      </p>
    </div>
  );

  return (
    <div className="mt-8">
      <div
        className={`relative rounded-[1.75rem] border bg-[linear-gradient(180deg,rgba(17,28,25,0.96),rgba(10,19,17,0.94))] px-5 pb-5 pt-10 shadow-[0_22px_42px_-28px_rgba(0,0,0,0.55)] transition-[border-color,box-shadow] duration-300 ease-out md:px-6 md:pb-6 md:pt-11 ${
          activeTab === "overview"
            ? "border-white/10 shadow-[0_22px_42px_-28px_rgba(0,0,0,0.55)]"
            : "border-tealBrand-500/34 shadow-[0_24px_48px_-28px_rgba(99,245,198,0.18)]"
        }`}
      >
        <div className="absolute left-1/2 top-0 w-[min(calc(100%-1rem),23rem)] -translate-x-1/2 -translate-y-1/2">
          <div className="relative grid w-full grid-cols-2 rounded-full border border-white/8 bg-night-950/90 p-1 shadow-[0_14px_28px_-22px_rgba(0,0,0,0.45)] backdrop-blur-sm">
            <span
              aria-hidden="true"
              className={`absolute bottom-1 top-1 w-[calc(50%-0.25rem)] rounded-full bg-tealBrand-600/85 shadow-[0_12px_24px_-18px_rgba(99,245,198,0.28)] transition-transform duration-300 ease-out ${
                activeTab === "implementation" ? "translate-x-[calc(100%+0.5rem)]" : "translate-x-0"
              }`}
            />
            <button
              type="button"
              onClick={() => setActiveTab("overview")}
              className={`rounded-full px-2 py-2 text-[11px] font-bold leading-none whitespace-nowrap transition sm:px-3 sm:text-[12px] md:px-4 md:text-sm ${
                activeTab === "overview"
                  ? "relative z-10 text-white"
                  : "text-mist-300 hover:text-tealBrand-500"
              }`}
            >
              {t("projects.overview")}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("implementation")}
              className={`rounded-full px-2 py-2 text-[11px] font-bold leading-none whitespace-nowrap transition sm:px-3 sm:text-[12px] md:px-4 md:text-sm ${
                activeTab === "implementation"
                  ? "relative z-10 text-white"
                  : "text-mist-300 hover:text-tealBrand-500"
              }`}
            >
              {t("projects.implementation")}
            </button>
          </div>
        </div>

        <div
          className="relative transition-[min-height] duration-300 ease-out"
          style={{ minHeight: contentHeight ? `${contentHeight}px` : undefined }}
        >
          <div key={activeTab} className="animate-[projectTabReveal_320ms_cubic-bezier(0.22,1,0.36,1)]">
            {activeTab === "overview" ? overviewContent : implementationContent}
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 opacity-0">
          <div ref={overviewMeasureRef} className="max-w-[42rem]">
            {overviewContent}
          </div>
          <div ref={implementationMeasureRef} className="max-w-[42rem]">
            {implementationContent}
          </div>
        </div>
      </div>
    </div>
  );
}
