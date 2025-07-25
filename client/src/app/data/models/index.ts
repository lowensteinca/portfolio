// reusable initerfaces & dataabase mapping
import * as ENUMS from '../enums';
import { ContactType } from '../enums';

// app/interfaces/portfolio.interface.ts
export interface Project {
  _id?: string;
  name: string;
  description: string;
  technologies: string[];
  color: string;
  demoUrl?: string;
  sourceUrl?: string;
  status: 'completed' | 'in-progress' | 'planned';
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ContactSubmission {
  name: string;
  email?: string;
  subject: string;
  message: string;
  timestamp: Date;
}

export interface Technology {
  name: string;
  level: number;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'other';
  proficiency: number; // 1-100
}

export interface ContactMessage {
  _id?: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: 'new' | 'read' | 'replied';
  createdAt: Date;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface SiteSection {
  contents?: { sections: SiteSection[] };
  content?: string | string[];
  label?: string;
  options?: any;
  id?: any;
}

export interface SiteContent {
  id: string;
  page: string;
  section?: string;
  position?: string;
  bulletpoints?: string[];
  tag?: string;
  title?: SiteSection | string;
  subtitle?: SiteSection | string;
  body: SiteSection;
  footer?: SiteSection;
  images?: string[];
  links?: SiteSection | string[];
  lastupdated?: string;
  approved?: boolean;
  header?: SiteSection;
  subheader?: SiteSection;
}

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  education: string;
  practiceProfile: string;
  professionalAssociations: string[];
  communityInvolvement: string[];
  imageUrl: string;
}

export interface SectionNav {
  display: string;
  value: string;
  order: number;
}

export interface Section {
  label: string;
  id: number;
  options: object;
  route?: string;
}

export interface SkillMetric {
  standalone?: boolean;
  comments?: string;
  context?: number;
  group?: string[];
  rating: number;
  years: number;
  name: string;
  id?: number;
}

export interface EducationMetric {
  extracurriculars?: string;
  alternative?: boolean;
  institution: string;
  specialty?: string;
  year_i?: number;
  year_f?: number;
  degree: string;
  years: string;
  field: string;
}

export interface TimelineEvent {
  id: number;
  name: string;
  date: string;
  description: string;
}

export interface ContactSubmission {
  idkey?: string;
  email?: string;
  message: string;
  lastName: string;
  firstName: string;
}

export interface BlogPost {
  id: string;
  date: Date;
  slug: string;
  title: string;
  views?: number;
  content: string;
  subtitle?: string;
}

export interface ProjectSummary {
  id: number;
  title: string;
  dates: string;
  company: string;
  summary: string;
  logo?: string;
}

export const Enums = ENUMS;

export interface ChatMessage {
  user: string;
  message: string;
  timestamp: number;
}

export interface EventData {
  type: ENUMS.EventType;
  payload?: any;
}

export interface PageRoute {
  anchor: string;
  label: string;
  options?: any;
}

export interface NavRoute {
  active: boolean;
  path?: string,
  label: string;
  options?: any;
}

export interface SiteModule {
  name: string;
  title: string;
  summary: string;
  subinfo: string;
  icon?: string;
  lastUpdated?: Date;
  public: boolean;
  contents: string[];
  options?: object;
}

export interface ContactMethod {
  type: ContactType;
  label: string;
  at: string;
}

export interface Engineer {
  name: string;
  title: string;
  intro?: string;
  opentowork?: boolean;
  opentofeedback?: boolean;
  contacts: ContactMethod[];
  contact: Map<string, ContactMethod> | any;
  career?: TimelineEvent[];
  skillsets?: SkillMetric[];
  education?: any[];
  workexp?: Experience[];
}

export interface Experience {
  position: string;
  company: string;
  period: string;
  highlights: string[];
}

export interface Education {
  degree: string;
  school: string;
  year: string;
}

// app/interfaces/portfolio.interface.ts
export interface Project {
  _id?: string;
  name: string;
  description: string;
  technologies: string[];
  color: string;
  demoUrl?: string;
  sourceUrl?: string;
  status: 'completed' | 'in-progress' | 'planned';
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'other';
  proficiency: number; // 1-100
}

export interface ContactMessage {
  _id?: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: 'new' | 'read' | 'replied';
  createdAt: Date;
}
