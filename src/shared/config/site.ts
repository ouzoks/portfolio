import type { AboutCapability, NavItem, Project } from "../types";

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
    tags: [
      { icon: "react", label: "React" },
      { icon: "typescript", label: "TypeScript" },
      { icon: "javascript", label: "JavaScript (ES6+)" },
      { icon: "tailwind", label: "TailwindCSS" },
      { icon: "materialui", label: "Material UI" },
      { icon: "component_architecture", label: "Component Architecture" },
      { icon: "responsive_ui", label: "Responsive UI" },
      { icon: "clean_code", label: "Clean Code" },
    ],
  },
  {
    number: "02",
    title: "User Experience & Interface Design",
    description:
      "Arayuzlerde sadece gorsel duzeni degil, kullanicinin akista nasil hissettigini de dusunuyorum. Hedefim, **net**, **erisilebilir** ve **yonlendirici** ekranlar tasarlamak.",
    tags: [
      { icon: "ux_ui", label: "UX/UI Thinking" },
      { icon: "wireframe", label: "Wireframing" },
      { icon: "responsive_ui", label: "Responsive UI" },
      { icon: "interaction", label: "Interaction States" },
      { icon: "accessibility", label: "Accessibility" },
      { icon: "design_tokens", label: "Design Consistency" },
    ],
  },
  {
    number: "03",
    title: "API & Backend Integration",
    description:
      "Arayuz ile arka plandaki servislerin sorunsuz iletisim kurmasini sagliyorum. Veri akisinin **guvenilir** olmasi, hata durumlarinin **dogru yonetilmesi** ve kimlik dogrulama surecleri bu alanin **kritik parcalari**.",
    tags: [
      { icon: "rest_api", label: "REST API Integration" },
      { icon: "jwt", label: "JWT Authentication" },
      { icon: "dotnet", label: ".NET API" },
      { icon: "swagger", label: "Swagger" },
      { icon: "data_fetching", label: "Data Fetching" },
      { icon: "frontend_backend", label: "Frontend-Backend Communication" },
    ],
  },
  {
    number: "04",
    title: "Architecture & Product Thinking",
    description:
      "Urunlerin buyudukce dagilmayan, **surdurulebilir** bir yapiya sahip olmasi icin mimari odakli calisiyorum. **Hizli gelistirme** ile uzun vadede **bakim kolayligi** arasinda dogru dengeyi kurmaya calisiyorum.",
    tags: [
      { icon: "reusable_components", label: "Reusable Components" },
      { icon: "design_systems", label: "Design Systems" },
      { icon: "i18n", label: "i18n (Multilingual Apps)" },
      { icon: "scalable_structure", label: "Scalable Frontend Structure" },
      { icon: "user_flow", label: "User Flow Thinking" },
    ],
  },
];
