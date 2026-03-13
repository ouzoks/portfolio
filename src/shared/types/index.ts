export type NavItem = {
  label: string;
  href: string;
};

export type StatItem = {
  value: string;
  label: string;
};

export type Project = {
  title: string;
  description: string;
  stack: string;
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
