import type { NavItem, Project, StatItem } from "../types";

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
