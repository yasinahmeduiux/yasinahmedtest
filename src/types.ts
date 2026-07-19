export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  category: "UI/UX Design" | "Mobile App" | "Web Design" | "Branding";
  imageUrl: string;
}

export interface ServiceCard {
  id: string;
  title: string;
  description: string;
  icon: string;
  bulletPoints: string[];
}

export interface ServicePackage {
  title: string;
  price: string;
  tag?: string;
  subtitle: string;
  description: string;
  features: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  icon?: string;
}

export interface CourseModule {
  id: number;
  title: string;
  subtitle: string;
  objectives: string[];
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
}
