import type { AboutCapability, CapabilitySentence, NavItem, Project, SkillCategory } from "../types";

export const navItems: NavItem[] = [
  { label: "Hakkimda", href: "#about" },
  { label: "Projeler", href: "#projects" },
  { label: "Galeri", href: "#gallery" },
  { label: "Iletisim", href: "#contact" },
];

export const projects: Project[] = [
  {
    title: "SaaS Dashboard UI",
    description:
      "Gercek zamanli metrikler, rol bazli ekranlar ve performans odakli component mimarisi.",
    stack: "React, TypeScript, Zustand",
  },
  {
    title: "E-Commerce Frontend",
    description:
      "Urun filtreleme, sepet akislarinda hizli etkilesim ve mobil odakli checkout deneyimi.",
    stack: "React, Tailwind, React Router",
  },
  {
    title: "Booking Platform",
    description: "Takvim tabanli rezervasyon akislarinda temiz bilgi mimarisi ve hizli akis.",
    stack: "React, TS, REST API",
  },
];

export const aboutCapabilities: AboutCapability[] = [
  {
    number: "01",
    title: "Frontend Development",
    description:
      "Kullanicilarin rahatca ilerleyebilecegi **modern** ve **olceklenebilir** arayuzler gelistiriyorum. Odagim, deneyimin **sade**, **hizli** ve **anlasilir** olmasi.",
  },
  {
    number: "02",
    title: "User Experience & Interface Design",
    description:
      "Arayuzlerde sadece gorsel duzeni degil, kullanicinin akista nasil hissettigini de dusunuyorum. Hedefim, **net**, **erisilebilir** ve **yonlendirici** ekranlar tasarlamak.",
  },
  {
    number: "03",
    title: "API & Backend Integration",
    description:
      "Arayuz ile arka plandaki servislerin sorunsuz iletisim kurmasini sagliyorum. Veri akisinin **guvenilir** olmasi, hata durumlarinin **dogru yonetilmesi** ve kimlik dogrulama surecleri bu alanin **kritik parcalari**.",
  },
  {
    number: "04",
    title: "Architecture & Product Thinking",
    description:
      "Urunlerin buyudukce dagilmayan, **surdurulebilir** bir yapiya sahip olmasi icin mimari odakli calisiyorum. **Hizli gelistirme** ile uzun vadede **bakim kolayligi** arasinda dogru dengeyi kurmaya calisiyorum.",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    tags: [
      { icon: "html", label: "HTML" },
      { icon: "css", label: "CSS" },
      { icon: "javascript", label: "JavaScript" },
      { icon: "react", label: "React" },
      { icon: "typescript", label: "TypeScript" },
      { icon: "tailwind", label: "Tailwind CSS" },
      { icon: "materialui", label: "Material UI" },
    ],
  },
  {
    title: "Backend",
    tags: [
      { icon: "csharp", label: "C#" },
      { icon: "dotnet_core", label: ".NET Core" },
      { icon: "plsql", label: "PL/SQL" },
      { icon: "mssql", label: "MSSQL" },
    ],
  },
  {
    title: "Tools",
    tags: [
      { icon: "github", label: "GitHub" },
      { icon: "jira", label: "Jira (Temel)" },
      { icon: "ai_tools", label: "AI Tools" },
    ],
  },
];

export const capabilitySentences: CapabilitySentence[] = [
  {
    number: "01",
    text: "Arayüzlerin sadece estetik değil, kullanıcıyı yönlendiren ve akıcı hissettiren yapılar olmasına önem veriyorum.",
    tags: [
      { icon: "responsive_ui", label: "Responsive UI" },
      { icon: "interaction", label: "Interaction" },
      { icon: "accessibility", label: "Accessibility" },
      { icon: "design_systems", label: "Design Systems" },
    ],
  },
  {
    number: "02",
    text: "Yeni özellikler eklendikçe bozulmayan ve geliştirilmeye açık kalan frontend mimarileri kurmaya odaklanırım.",
    tags: [
      { icon: "component_architecture", label: "Component Architecture" },
      { icon: "clean_code", label: "Clean Code" },
      { icon: "scalable_structure", label: "Scalable Structure" },
      { icon: "reusable_components", label: "Reusable Components" },
    ],
  },
  {
    number: "03",
    text: "Deneyimi sadece görsel düzen üzerinden değil, kullanıcı yolculuğu ve karar noktaları üzerinden değerlendirmeyi önemsiyorum.",
    tags: [
      { icon: "ux_ui", label: "UX/UI" },
      { icon: "wireframe", label: "Wireframing" },
      { icon: "user_flow", label: "User Flow" },
    ],
  },
  {
    number: "04",
    text: "Frontend ile backend arasındaki veri akışını güvenli ve sürdürülebilir şekilde kurgulamayı geliştirme sürecinin önemli bir parçası olarak görüyorum.",
    tags: [
      { icon: "rest_api", label: "REST API" },
      { icon: "data_fetching", label: "Data Fetching" },
      { icon: "jwt", label: "JWT" },
      { icon: "swagger", label: "Swagger" },
      { icon: "frontend_backend", label: "Frontend-Backend Communication" },
    ],
  },

];
