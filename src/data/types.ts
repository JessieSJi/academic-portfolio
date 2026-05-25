export type SectionId =
  | "关于我"
  | "教育背景"
  | "工作经历"
  | "项目经历"
  | "论文成果"
  | "服务与荣誉"
  | "学术链接";

export interface NavItem {
  id: SectionId;
  label: SectionId;
}

export interface StatItem {
  label: string;
  value: string;
}

export interface AboutBlock {
  heading: string;
  summary: string;
  highlights: string[];
  skillTags: string[];
  portraitAlt: string;
  stats: StatItem[];
}

export interface EducationEntry {
  id: string;
  period: string;
  degree: string;
  school: string;
  location: string;
  detail?: string;
}

export interface WorkEntry {
  id: string;
  period: string;
  role: string;
  organization: string;
  location: string;
  summary: string;
  bullets: string[];
}

export interface ProjectEntry {
  id: string;
  title: string;
  role: string;
  summary: string;
  outcomes: string[];
}

export interface PublicationPatent {
  id: string;
  year: string;
  type: "期刊" | "会议";
  title: string;
  venue: string;
  contributors: string;
  tags: string[];
  href?: string;
  featured?: boolean;
}

export interface ServiceHonor {
  id: string;
  year: string;
  title: string;
  organization: string;
  category: string;
}

export interface LinkItem {
  label: string;
  href: string;
  note: string;
}

export interface Profile {
  locale: "zh" | "en";
  name: string;
  nameAlt?: string;
  role: string;
  affiliation: string;
  tagline: string;
  about: AboutBlock;
  education: EducationEntry[];
  work: WorkEntry[];
  projects: ProjectEntry[];
  publicationsPatents: PublicationPatent[];
  serviceHonors: ServiceHonor[];
  links: LinkItem[];
  navItems: NavItem[];
  footer: string;
}
