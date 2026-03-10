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

export type AboutCapability = {
  title: string;
  description: string;
  tags: string[];
};

export type AboutCapabilitySummary = {
  whatICareAbout: string;
  typicalTools: string;
  practicalImpact: string;
};
