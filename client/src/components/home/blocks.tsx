import {
  ContactUsSectionProps,
  HeroSectionProps,
  PortfolioSectionProps,
  ServicesSectionProps,
  TechnologiesSectionProps,
} from "@/models/HomePage";
import { ContactUsSection } from "./ContactUsSection";
import { HeroSection } from "./HeroSection";
import { PortfolioSection } from "./PortfolioSection";
import { ServicesSection } from "./ServicesSection";
import { TechnologiesSection } from "./TechnologiesSection";

export const blocksMap = {
  "blocks.first-section": HeroSection,
  "blocks.technologies-section": TechnologiesSection,
  "blocks.services-section": ServicesSection,
  "blocks.portfolio-section": PortfolioSection,
  "blocks.contact-us-section": ContactUsSection,
} as const;

export type BlockMapProps =
  | ({ __component: "blocks.first-section" } & HeroSectionProps)
  | ({ __component: "blocks.technologies-section" } & TechnologiesSectionProps)
  | ({ __component: "blocks.services-section" } & ServicesSectionProps)
  | ({ __component: "blocks.portfolio-section" } & PortfolioSectionProps)
  | ({ __component: "blocks.contact-us-section" } & ContactUsSectionProps);
