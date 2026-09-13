export type Language = "ar" | "en";
export type Theme = "dark" | "light";

export interface LocalizedString {
  ar: string;
  en: string;
}

export interface LocalizedList {
  ar: string[];
  en: string[];
}

export interface ServiceItem {
  id: string;
  title: LocalizedString;
  shortDesc: LocalizedString;
  fullDesc: LocalizedString;
  icon: string;
  features: LocalizedList;
  tag: LocalizedString;
}

export interface PortfolioItem {
  id: string;
  title: LocalizedString;
  category: LocalizedString;
  categorySlug: string;
  description: LocalizedString;
  image: string;
  demoUrl?: string;
  client: LocalizedString;
  completionYear: string;
  technologies: string[];
  featured?: boolean;
}

export interface PricingPlan {
  id: string;
  name: LocalizedString;
  price: string;
  badge?: LocalizedString;
  popular?: boolean;
  description: LocalizedString;
  features: LocalizedList;
  ctaText: LocalizedString;
}

export interface AboutStat {
  value: string;
  label: LocalizedString;
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone?: string;
  serviceId?: string;
  message: string;
  createdAt: string;
  status: "new" | "read" | "replied";
}
