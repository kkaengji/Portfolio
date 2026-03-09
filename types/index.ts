export interface Project {
  id: string;
  label: string;
  title: string;
  description: string;
  tags: Tag[];
  link?: string;
}

export interface Tag {
  name: string;
  variant?: "blue" | "green" | "default";
}

export interface Skill {
  name: string;
  level: string;
  percentage: number;
  variant?: "default" | "green" | "yellow";
}

export interface TimelineItem {
  year: string;
  title: string;
  subtitle: string;
  icon: string;
  active?: boolean;
}

export interface ContactItem {
  icon: string;
  label: string;
  value: string;
  href: string;
}

export interface NavItem {
  href: string;
  icon: string;
  label: string;
}
