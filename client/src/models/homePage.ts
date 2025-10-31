import {
  Background,
  ButtonLink,
  FormElement,
  LinkItem,
  TextLabel,
} from "./GlobalElements";

interface TechnoCard {
  id: number;
  image: ImageData;
  description: TextLabel;
}

interface ServiceCard {
  id: number;
  image: ImageData;
  title: TextLabel;
  description: TextLabel;
  button: ButtonLink;
}

interface PortfolioCard {
  id: number;
  title: TextLabel;
  description: TextLabel;
  background: Background;
  link: LinkItem;
}

type ContentBlock =
  | HeroSectionProps
  | TechnologiesSectionProps
  | ServicesSectionProps
  | PortfolioSectionProps
  | ContactUsSectionProps;

export interface HeroSectionProps {
  __component: string;
  id: number;
  title: TextLabel;
  cta: ButtonLink;
  description: TextLabel;
  background: Background;
}

export interface TechnologiesSectionProps {
  __component: string;
  id: number;
  title: TextLabel;
  description: TextLabel;
  technologies: TechnoCard[];
}

export interface ServicesSectionProps {
  __component: string;
  id: number;
  title: TextLabel;
  description: TextLabel;
  services: ServiceCard[];
}

export interface PortfolioSectionProps {
  __component: string;
  id: number;
  title: TextLabel;
  description: TextLabel;
  project: PortfolioCard[];
}

export interface ContactUsSectionProps {
  __component: string;
  id: number;
  title: TextLabel;
  description: TextLabel;
  fotm: FormElement;
}

export interface HomePage {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  content: ContentBlock[];
}

export interface HomePageResponse {
  data: HomePage;
  meta: Record<string, unknown>;
}
