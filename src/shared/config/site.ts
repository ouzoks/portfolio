import type {
  AboutCapability,
  AboutCapabilityTag,
  CapabilitySentence,
  Education,
  EducationContent,
  EducationMeta,
  Experience,
  NavItem,
  Project,
  ProjectContent,
  ProjectMeta,
  SkillCategory,
} from "../types";
import fitnesstaskproject from "../assets/fitnesstaskproject.png";
import isiklogo from "../assets/isiklogo.png";
import portfolio from "../assets/portfolio.png";
import rusturkproject from "../assets/rusturkproject.png";
import type { Messages } from "../i18n/types";

const cloneTags = (tags: readonly AboutCapabilityTag[]): AboutCapabilityTag[] =>
  tags.map((tag) => ({ ...tag }));

const projectMeta: ProjectMeta[] = [
  {
    imageSrc: rusturkproject,
    repoUrl: "",
    repoPrivate: true,
    liveDemoUrl: "https://portfolio-cms-demo.example.com",
    technologies: [
      { icon: "react", label: "React" },
      { icon: "materialui", label: "Material UI" },
      { icon: "dotnet_core", label: ".NET Core" },
      { icon: "mssql", label: "MSSQL" },
    ],
  },
  {
    imageSrc: fitnesstaskproject,
    repoUrl: "https://github.com/ouzoks/Fitness-Task-Tracking-System",
    technologies: [
      { icon: "react", label: "React" },
      { icon: "materialui", label: "Material UI" },
      { icon: "dotnet_core", label: ".NET Core" },
      { icon: "mssql", label: "MSSQL" },
    ],
  },
  {
    imageSrc: portfolio,
    repoUrl: "https://github.com/ouzoks/portfolio",
    technologies: [
      { icon: "react", label: "React" },
      { icon: "typescript", label: "TypeScript" },
      { icon: "tailwind", label: "Tailwind CSS" },
    ],
  },
] as const;

export const getNavItems = (dictionary: Messages): NavItem[] => [
  { label: dictionary.nav.about, href: "#about" },
  { label: dictionary.nav.skills, href: "#skills" },
  { label: dictionary.nav.projects, href: "#projects" },
  { label: dictionary.nav.experience, href: "#experience" },
  { label: dictionary.nav.contact, href: "#contact" },
];

const getProjectContent = (dictionary: Messages): ProjectContent[] =>
  dictionary.content.projects.map((project) => ({
    ...project,
  }));

export const getProjects = (dictionary: Messages): Project[] =>
  getProjectContent(dictionary).map((content, index) => ({
    ...content,
    ...projectMeta[index],
    technologies: cloneTags(projectMeta[index].technologies),
  }));

export const getAboutCapabilities = (dictionary: Messages): AboutCapability[] => [
  ...dictionary.content.aboutCapabilities,
];

export const getSkillCategories = (dictionary: Messages): SkillCategory[] =>
  dictionary.content.skillCategories.map((category) => ({
    ...category,
    tags: cloneTags(category.tags),
  }));

export const getCapabilitySentences = (
  dictionary: Messages,
): CapabilitySentence[] => [
  ...dictionary.content.capabilitySentences.map((sentence) => ({
    ...sentence,
    tags: cloneTags(sentence.tags),
  })),
];

export const getExperiences = (dictionary: Messages): Experience[] => [
  ...dictionary.content.experiences,
];

const getEducationContent = (dictionary: Messages): EducationContent => ({
  ...dictionary.content.education,
});

export const getEducation = (dictionary: Messages): Education => ({
  ...getEducationContent(dictionary),
  ...educationMeta,
});

const educationMeta: EducationMeta = {
  logoSrc: isiklogo,
};
