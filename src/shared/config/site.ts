import type { AboutCapability, AboutCapabilitySummary, NavItem, Project, StatItem } from "../types";

export const navItems: NavItem[] = [
  { label: "Hakkimda", href: "#about" },
  { label: "Projeler", href: "#projects" },
  { label: "Galeri", href: "#gallery" },
  { label: "Iletisim", href: "#contact" },
];

export const heroStats: StatItem[] = [
  { value: "4+", label: "Yil Deneyim" },
  { value: "18", label: "Tamamlanan Proje" },
  { value: "95%", label: "Musteri Memnuniyeti" },
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
    title: "Frontend Development",
    description:
      "Modern ve olceklenebilir kullanici arayuzleri gelistiriyorum. Odagim, kullanicinin akista kaybolmadan hizli ve temiz bir deneyim yasamasi.",
    tags: [
      "React",
      "TypeScript",
      "JavaScript (ES6+)",
      "TailwindCSS",
      "Material UI",
      "Component Architecture",
      "Responsive UI",
      "Clean Code",
    ],
  },
  {
    title: "API & Backend Integration",
    description:
      "Frontend ile backend sistemleri arasinda guvenilir veri akisi kuruyorum. Hata durumlarini ve kimlik dogrulamayi urun deneyiminin parcasi olarak ele aliyorum.",
    tags: [
      "REST API Integration",
      "JWT Authentication",
      ".NET API",
      "Swagger",
      "Data Fetching",
      "Frontend-Backend Communication",
    ],
  },
  {
    title: "Architecture & Product Thinking",
    description:
      "Urunlerin surdurulebilir ve olceklenebilir olmasi icin mimari odakli calisiyorum. Kisa vadeli hiz ile uzun vadeli bakim maliyeti arasinda dogru dengeyi kuruyorum.",
    tags: [
      "Reusable Components",
      "Design Systems",
      "i18n (Multilingual Apps)",
      "Scalable Frontend Structure",
      "User Flow Thinking",
    ],
  },
];

export const aboutCapabilitySummary: AboutCapabilitySummary = {
  whatICareAbout:
    "Kullanici deneyimini bozmayan teknik kararlar, surdurulebilir kod yapisi ve sistemler arasi guvenilir iletisim.",
  typicalTools:
    "React, TypeScript, TailwindCSS, Material UI, REST API, JWT, Swagger, design tokens ve performans odakli tooling.",
  practicalImpact:
    "Daha hizli teslimat, daha az teknik borc, daha stabil release sureci ve buyurken dagilmayan urun mimarisi.",
};
