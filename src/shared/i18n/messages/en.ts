import type { Messages } from "../types";

export const en = {
  nav: {
    about: "What I Do",
    skills: "How I Work",
    projects: "Projects",
    experience: "Experience",
    contact: "Contact",
    mainMenu: "Main menu",
    mobileMenu: "Mobile menu",
    menuButton: "Menu",
  },
  hero: {
    name: "OĞUZ ÖKSÜZÖMER",
    openProfile: "Open profile details",
    location: "Istanbul, Turkey",
    role: "Junior Software Engineer",
    intro: "Hello, welcome to my website.",
    summary:
      "If I were to briefly describe what I do, I turn complex ideas into clearer outcomes and make user scenarios practical and usable.",
    purpose:
      "My goal is to build thoughtful and sustainable interfaces and features that help users move through a flow without getting lost.",
  },
  about: {
    eyebrow: "WHAT I DO",
    title: "What do I work on day to day?",
    description:
      "When developing an idea or a product, I focus not only on how it looks but also on whether it works properly, how data moves across systems, and which core areas help build a sustainable architecture.",
  },
  skills: {
    eyebrow: "SKILLS & TECHNOLOGIES",
    title: "Technologies, tools, and my working style",
    description:
      "This section brings together the technologies I actively use in my daily workflow and the way I approach development. My goal is not only to show which tools I use, but also how I think while building products.",
    coreStack: "Core Stack",
    notesEyebrow: "Working Notes",
    notesTitle: "Small details that explain how I work",
  },
  projects: {
    eyebrow: "FEATURED PROJECTS",
    title: "Selected projects",
    repo: "GitHub Repo",
    liveDemo: "Live Demo",
    overview: "Overview",
    implementation: "Implementation",
  },
  experiences: {
    eyebrow: "EXPERIENCE",
    title: "My journey so far",
  },
  education: {
    aria: "Education",
    label: "Education",
  },
  contact: {
    title: "CONTACT",
    description:
      "We can work together on frontend-focused projects to build new products, improve existing interfaces, and push user experience forward.",
  },
  footer: {
    copyright: "© 2026 Oğuz. All rights reserved.",
  },
  content: {
    aboutCapabilities: [
      {
        number: "01",
        title: "Frontend Development",
        description:
          "I build **modern** and **scalable** interfaces that help users move forward comfortably. My focus is on keeping the experience **clean**, **fast**, and **clear**.",
      },
      {
        number: "02",
        title: "User Experience & Interface Design",
        description:
          "I think not only about visual structure, but also about how users feel as they move through a flow. My goal is to design screens that are **clear**, **accessible**, and **guiding**.",
      },
      {
        number: "03",
        title: "API & Backend Integration",
        description:
          "I make sure the interface communicates smoothly with the services behind it. Reliable data flow, **proper error handling**, and authentication flows are **critical parts** of this work.",
      },
      {
        number: "04",
        title: "Architecture & Product Thinking",
        description:
          "I work with an architectural mindset so products can grow without becoming messy and remain **sustainable** over time. I try to balance **speed of development** with **long-term maintainability**.",
      },
    ],
    skillCategories: [
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
          { icon: "jira", label: "Jira (Basic)" },
          { icon: "ai_tools", label: "AI Tools" },
        ],
      },
    ],
    capabilitySentences: [
      {
        number: "01",
        text: "I care about interfaces being not only aesthetic, but also intuitive and fluid for the user.",
        tags: [
          { icon: "responsive_ui", label: "Responsive UI" },
          { icon: "interaction", label: "Interaction" },
          { icon: "accessibility", label: "Accessibility" },
          { icon: "design_systems", label: "Design Systems" },
        ],
      },
      {
        number: "02",
        text: "I focus on building frontend architectures that stay maintainable and open to growth as new features are added.",
        tags: [
          { icon: "component_architecture", label: "Component Architecture" },
          { icon: "clean_code", label: "Clean Code" },
          { icon: "scalable_structure", label: "Scalable Structure" },
          { icon: "reusable_components", label: "Reusable Components" },
        ],
      },
      {
        number: "03",
        text: "I evaluate experience not only through visual layout, but also through user journey and decision points.",
        tags: [
          { icon: "ux_ui", label: "UX/UI" },
          { icon: "wireframe", label: "Wireframing" },
          { icon: "user_flow", label: "User Flow" },
        ],
      },
      {
        number: "04",
        text: "I see designing secure and sustainable data flow between frontend and backend as a core part of the development process.",
        tags: [
          { icon: "rest_api", label: "REST API" },
          { icon: "data_fetching", label: "Data Fetching" },
          { icon: "jwt", label: "JWT" },
          { icon: "swagger", label: "Swagger" },
          { icon: "frontend_backend", label: "Frontend-Backend Communication" },
        ],
      },
    ],
    projects: [
      {
        number: "01",
        title: "RUS&TURK CLUB",
        summary:
          "A social platform that brings Russian women and Turkish men together in a trustworthy environment built around serious relationships.",
        imageLabel: "Rus&Turk Club preview",
        overview: {
          problem:
            "I designed the platform to offer a clearer experience where users could build more meaningful and serious relationships. I simplified profile, matching, and communication flows to create a structure that feels easier to understand.",
          solution:
            "To strengthen the sense of trust and quality, I built a controlled and minimal interface free from unnecessary complexity. I also optimized information presentation and interaction areas to support more intentional connections.",
        },
        implementation: {
          architecture:
            "While building a modular interface with React and Material UI, I worked on a secure and scalable system powered by .NET Core and MSSQL, handling user management, data flow, authentication, role-based access, and API integrations.",
        },
      },
      {
        number: "02",
        title: "Fitness Task Tracking System",
        summary:
          "A fitness tracking system designed to bring task management, calorie tracking, and progress analysis into one platform through role-based structure and real-time data flow.",
        imageLabel: "Fitness tracking system preview",
        overview: {
          problem:
            "Users needed a way to manage workout tasks, track calorie data accurately, and monitor their progress continuously without friction.",
          solution:
            "I simplified the flow by combining weekly programs and calorie calculation into a single structure. Personalized interfaces made the experience more tailored and progress tracking more efficient.",
        },
        implementation: {
          architecture:
            "I structured tasks, calorie tracking, and role-specific layouts with a modular architecture. I also improved system control by making admin logs and user actions easier to monitor, keeping the overall flow efficient and maintainable.",
        },
      },
      {
        number: "03",
        title: "Portfolio Website",
        summary:
          "A personal portfolio website built with a modern interface and interactive components to present my projects, experience, and technical skills with a strong focus on performance and user experience.",
        imageLabel: "Portfolio website preview",
        overview: {
          problem:
            "I needed a structure where I could present my personal projects and technical skills through a simple, fast, and distraction-free interface.",
          solution:
            "I built a component-based structure that brings project showcases, timeline, and communication areas together in one system. This created a more consistent experience while making content easier to reach.",
        },
        implementation: {
          architecture:
            "I balanced performance and user experience by building responsive layouts, motion, and components in a modular structure. The overall system relies on clean and reusable patterns for better efficiency.",
        },
      },
    ],
    experiences: [
      {
        period: "May 2023 - July 2023",
        role: "Software Engineer",
        company: "F8 Bilişim ve Danışmanlık Hizmetleri",
        employmentType: "Part-time",
        description:
          "I focused on PL/SQL queries, procedures, and reporting flows. On the IFS ERP platform, I contributed to more controlled and traceable data-driven processes through custom developments tailored to business needs.",
      },
      {
        period: "September 2024",
        role: "Software Intern",
        company: "F8 Bilişim ve Danışmanlık Hizmetleri",
        employmentType: "Full-time",
        description:
          "I supported implementation processes by examining system-to-system integration flows on the Dell Boomi platform. I also gained experience in making technical documentation more readable and presenting those integrations in a clearer format.",
      },
      {
        period: "September 2025",
        role: "Software Intern",
        company: "BNTPRO Bilgi ve İletişim Hizmetleri A.Ş.",
        employmentType: "Full-time",
        description:
          "I worked with Linux systems including RHEL and CentOS administration, basic security configurations, and server operations. At the same time, I worked on PHP Laravel applications in MVC architecture, along with 2FA, role-based authorization, and security modules.",
      },
      {
        period: "2026 - Present",
        role: "Freelance Frontend Developer",
        company: "Independent Work",
        employmentType: "Freelance",
        description:
          "Through my own projects and different product ideas, I continue improving myself in frontend development, UI thinking, API integration, and product experience. Working on real scenarios helps me deepen both my technical and product-oriented perspective.",
      },
    ],
    education: {
      school: "Işık University",
      period: "2020 - 2025",
      degree: "Software Engineering",
    },
  },
} satisfies Messages;
