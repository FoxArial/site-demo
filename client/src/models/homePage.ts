import {
  Background,
  ButtonLink,
  FormElement,
  LinkItem,
  TextLabel,
  ImageData,
} from "./GlobalElements";

export interface TechnoCard {
  id: number;
  image: ImageData;
  description: TextLabel;
}

export interface ServiceCard {
  id: number;
  image: ImageData;
  title: TextLabel;
  description: TextLabel;
  button: ButtonLink;
}

interface InfoCard {
  id: number;
  title: TextLabel;
  description: TextLabel;
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
  __component: "blocks.first-section";
  id: number;
  title: TextLabel[];
  cta: ButtonLink[];
  description: TextLabel;
  background: Background;
}

export interface TechnologiesSectionProps {
  __component: "blocks.technologies-section";
  id: number;
  title: TextLabel[];
  description: TextLabel;
  technologies: TechnoCard[];
}

export interface ServicesSectionProps {
  __component: "blocks.services-section";
  id: number;
  title: TextLabel;
  description: TextLabel;
  services: ServiceCard[];
}

export interface InfoSectionProps {
  __component: "blocks.info-section";
  id: number;
  card: InfoCard[];
  background: Background;
}

export interface PortfolioSectionProps {
  __component: "blocks.portfolio-section";
  id: number;
  title: TextLabel;
  description: TextLabel;
  project: PortfolioCard[];
}

export interface ContactUsSectionProps {
  __component: "blocks.contact-us-section";
  id: number;
  title: TextLabel;
  description: TextLabel[];
  form: FormElement;
  background: Background;
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
