export interface NavigationLink {
  href: string;
  label: string;
  external?: boolean;
}

export interface DropdownItem extends NavigationLink {
  description?: string;
}

export interface AnimationConfig {
  initial: Record<string, unknown>;
  animate: Record<string, unknown>;
  transition: Record<string, unknown>;
  exit?: Record<string, unknown>;
}

export interface HeroSectionProps {
  className?: string;
}

export interface NavbarProps {
  className?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
}

export interface CompanyInfo {
  name: string;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
  };
} 