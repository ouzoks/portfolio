import { useState } from "react";
import type { Project } from "../types";
import { SkillTag } from "./SkillTag";

type ProjectDetailsTabsProps = {
  project: Project;
};

type ProjectTabKey = "overview" | "implementation";

export function ProjectDetailsTabs({ project }: ProjectDetailsTabsProps) {
  const [activeTab, setActiveTab] = useState<ProjectTabKey>("overview");

  return (
    <div className="mt-8">
      <div className="inline-flex rounded-full border border-tealBrand-500/18 bg-white/80 p-1">
        <button
          type="button"
          onClick={() => setActiveTab("overview")}
          className={`rounded-full px-4 py-2 text-sm font-bold transition ${
            activeTab === "overview"
              ? "bg-tealBrand-500 text-white shadow-soft"
              : "text-ink-700 hover:text-tealBrand-600"
          }`}
        >
          Overview
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("implementation")}
          className={`rounded-full px-4 py-2 text-sm font-bold transition ${
            activeTab === "implementation"
              ? "bg-tealBrand-500 text-white shadow-soft"
              : "text-ink-700 hover:text-tealBrand-600"
          }`}
        >
          Implementation
        </button>
      </div>

      {activeTab === "overview" ? (
        <div className="mt-6 space-y-5">
          <div className="border-t border-tealBrand-500/18 pt-4">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-tealBrand-600">
              Problem
            </p>
            <p className="mt-2 text-base leading-8 text-ink-700">{project.overview.problem}</p>
          </div>
          <div className="border-t border-tealBrand-500/18 pt-4">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-tealBrand-600">
              Solution
            </p>
            <p className="mt-2 text-base leading-8 text-ink-700">{project.overview.solution}</p>
          </div>
          <div className="border-t border-tealBrand-500/18 pt-4">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-tealBrand-600">
              User Value
            </p>
            <p className="mt-2 text-base leading-8 text-ink-700">{project.overview.impact}</p>
          </div>
        </div>
      ) : (
        <div className="mt-6 space-y-5">
          <div className="border-t border-tealBrand-500/18 pt-4">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-tealBrand-600">
              Tech Stack
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {project.technologies.map((technology) => (
                <SkillTag
                  key={`${project.number}-${technology.icon}-${technology.label}`}
                  tag={technology}
                />
              ))}
            </div>
          </div>
          <div className="border-t border-tealBrand-500/18 pt-4">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-tealBrand-600">
              Architecture Decisions
            </p>
            <p className="mt-2 text-base leading-8 text-ink-700">
              {project.implementation.architecture}
            </p>
          </div>
          <div className="border-t border-tealBrand-500/18 pt-4">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-tealBrand-600">
              API / Performance
            </p>
            <p className="mt-2 text-base leading-8 text-ink-700">
              {project.implementation.apiPerformance}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
