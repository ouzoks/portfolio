import type { AboutCapabilityTag } from "../types";

export type MessageTag = {
  icon: AboutCapabilityTag["icon"];
  label: string;
};

export type Messages = {
  nav: {
    about: string;
    skills: string;
    projects: string;
    experience: string;
    contact: string;
    mainMenu: string;
    mobileMenu: string;
    menuButton: string;
  };
  hero: {
    name: string;
    openProfile: string;
    location: string;
    role: string;
    intro: string;
    summary: string;
    purpose: string;
  };
  about: {
    eyebrow: string;
    title: string;
    description: string;
  };
  skills: {
    eyebrow: string;
    title: string;
    description: string;
    coreStack: string;
    notesEyebrow: string;
    notesTitle: string;
  };
  projects: {
    eyebrow: string;
    title: string;
    repo: string;
    repoPrivate: string;
    liveDemo: string;
    overview: string;
    implementation: string;
  };
  experiences: {
    eyebrow: string;
    title: string;
  };
  education: {
    aria: string;
    label: string;
  };
  contact: {
    title: string;
    description: string;
  };
  footer: {
    copyright: string;
  };
  content: {
    aboutCapabilities: {
      number: string;
      title: string;
      description: string;
    }[];
    skillCategories: {
      title: string;
      tags: MessageTag[];
    }[];
    capabilitySentences: {
      number: string;
      text: string;
      tags: MessageTag[];
    }[];
    projects: {
      number: string;
      title: string;
      summary: string;
      imageLabel: string;
      overview: {
        problem: string;
        solution: string;
      };
      implementation: {
        architecture: string;
      };
    }[];
    experiences: {
      period: string;
      role: string;
      company: string;
      employmentType: string;
      description: string;
    }[];
    education: {
      school: string;
      period: string;
      degree: string;
    };
  };
};
