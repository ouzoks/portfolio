import type { IconType } from "react-icons";
import {
  FaBezierCurve,
  FaBolt,
  FaCheckCircle,
  FaCubes,
  FaDatabase,
  FaExchangeAlt,
  FaGithub,
  FaKey,
  FaLayerGroup,
  FaMobileAlt,
  FaMousePointer,
  FaProjectDiagram,
  FaPuzzlePiece,
  FaRegCompass,
  FaRobot,
  FaServer,
  FaSitemap,
} from "react-icons/fa";
import { IoLanguage } from "react-icons/io5";
import {
  SiCss,
  SiDotnet,
  SiHtml5,
  SiJavascript,
  SiJira,
  SiMui,
  SiReact,
  SiSharp,
  SiSwagger,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import type { AboutCapabilityTag } from "../types";

type SkillTagProps = {
  tag: AboutCapabilityTag;
};

const skillIcons: Record<AboutCapabilityTag["icon"], IconType> = {
  html: SiHtml5,
  css: SiCss,
  react: SiReact,
  typescript: SiTypescript,
  javascript: SiJavascript,
  tailwind: SiTailwindcss,
  materialui: SiMui,
  csharp: SiSharp,
  dotnet_core: SiDotnet,
  plsql: FaDatabase,
  mssql: FaDatabase,
  github: FaGithub,
  jira: SiJira,
  ai_tools: FaRobot,
  productivity: FaBolt,
  problem_solving: FaPuzzlePiece,
  component_architecture: FaCubes,
  responsive_ui: FaMobileAlt,
  clean_code: FaCheckCircle,
  ux_ui: FaRegCompass,
  wireframe: FaBezierCurve,
  accessibility: FaCheckCircle,
  interaction: FaMousePointer,
  design_tokens: FaLayerGroup,
  rest_api: FaServer,
  jwt: FaKey,
  dotnet: SiDotnet,
  swagger: SiSwagger,
  data_fetching: FaDatabase,
  frontend_backend: FaExchangeAlt,
  reusable_components: FaCubes,
  design_systems: FaSitemap,
  i18n: IoLanguage,
  scalable_structure: FaLayerGroup,
  user_flow: FaProjectDiagram,
};

export function SkillTag({ tag }: SkillTagProps) {
  const Icon = skillIcons[tag.icon];

  return (
    <span className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-[linear-gradient(180deg,rgba(18,30,28,0.94),rgba(10,20,18,0.92))] px-4 py-2.5 text-sm font-semibold text-mist-100 shadow-[0_16px_32px_-26px_rgba(0,0,0,0.55)] transition duration-300 ease-out hover:-translate-y-0.5 hover:border-tealBrand-500/45 hover:bg-[linear-gradient(180deg,rgba(20,36,32,0.96),rgba(11,23,20,0.94))] hover:shadow-[0_20px_36px_-24px_rgba(99,245,198,0.22)] hover:text-white">
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-tealBrand-500/20 bg-tealBrand-500/12 text-tealBrand-500">
        <Icon className="text-sm" aria-hidden="true" />
      </span>
      {tag.label}
    </span>
  );
}
