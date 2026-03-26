export type NavItem = {
  label: string;
  href: string;
};

export type StatItem = {
  value: string;
  label: string;
};

export type Project = {
  number: string;
  title: string;
  summary: string;
  technologies: AboutCapabilityTag[];
  repoUrl: string;
  liveDemoUrl?: string;
  imageLabel: string;
  overview: {
    problem: string;
    solution: string;
    impact: string;
  };
  implementation: {
    architecture: string;
    apiPerformance: string;
  };
};

export type AboutCapabilityTag = {
  icon:
    | "html"
    | "css"
    | "react"
    | "typescript"
    | "javascript"
    | "tailwind"
    | "materialui"
    | "csharp"
    | "dotnet_core"
    | "plsql"
    | "mssql"
    | "github"
    | "jira"
    | "ai_tools"
    | "productivity"
    | "problem_solving"
    | "component_architecture"
    | "responsive_ui"
    | "clean_code"
    | "ux_ui"
    | "wireframe"
    | "accessibility"
    | "interaction"
    | "design_tokens"
    | "rest_api"
    | "jwt"
    | "dotnet"
    | "swagger"
    | "data_fetching"
    | "frontend_backend"
    | "reusable_components"
    | "design_systems"
    | "i18n"
    | "scalable_structure"
    | "user_flow";
  label: string;
};

export type AboutCapability = {
  number: string;
  title: string;
  description: string;
};

export type SkillCategory = {
  title: string;
  tags: AboutCapabilityTag[];
};

export type CapabilitySentence = {
  number: string;
  text: string;
  tags: AboutCapabilityTag[];
};
