export interface Skill {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Service {
  title: string;
  description: string;
  features: string[];
}

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  url?: string;
  features: {
    title: string;
    description: string;
  }[];
}

export interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  value: string;
}

export interface NavigationItem {
  id: string;
  label: string;
}

export interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}
