import type { IconType } from "react-icons";
import {
  FaBezierCurve,
  FaCheckCircle,
  FaCubes,
  FaDatabase,
  FaExchangeAlt,
  FaKey,
  FaLayerGroup,
  FaMobileAlt,
  FaMousePointer,
  FaProjectDiagram,
  FaRegCompass,
  FaServer,
  FaSitemap,
} from "react-icons/fa";
import { IoLanguage } from "react-icons/io5";
import { SiDotnet, SiJavascript, SiMui, SiReact, SiSwagger, SiTailwindcss, SiTypescript } from "react-icons/si";
import type { AboutCapabilityTag } from "../types";

type SkillTagProps = {
  tag: AboutCapabilityTag;
};

const skillIcons: Record<AboutCapabilityTag["icon"], IconType> = {
  react: SiReact,
  typescript: SiTypescript,
  javascript: SiJavascript,
  tailwind: SiTailwindcss,
  materialui: SiMui,
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
    <span className="inline-flex items-center gap-2 rounded-full border border-tealBrand-500/25 bg-white px-4 py-2 text-sm font-semibold text-ink-800 shadow-[0_10px_24px_-18px_rgba(17,17,17,0.35)] transition duration-200 hover:-translate-y-0.5 hover:border-tealBrand-500/45 hover:text-tealBrand-600">
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-tealBrand-500/10 text-tealBrand-600">
        <Icon className="text-sm" aria-hidden="true" />
      </span>
      {tag.label}
    </span>
  );
}
