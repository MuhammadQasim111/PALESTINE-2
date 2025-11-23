import { ReactNode } from "react";

export interface NavItem {
  label: string;
  path: string;
}

export interface TravelPackage {
  id: string;
  title: string;
  price: string;
  duration: string;
  features: string[];
  isPopular?: boolean;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
}

export interface AppIdea {
  id: string;
  name: string;
  trend: string;
  description: string;
  features: string[];
  icon: ReactNode;
}

export interface Stat {
  label: string;
  value: string;
  trend?: string;
}