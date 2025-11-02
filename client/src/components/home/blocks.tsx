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

export type BlockMapProps =
  | ({ __component: "blocks.first-section" } & HeroSectionProps)
  | ({ __component: "blocks.technologies-section" } & TechnologiesSectionProps)
  | ({ __component: "blocks.services-section" } & ServicesSectionProps)
  | ({ __component: "blocks.portfolio-section" } & PortfolioSectionProps)
  | ({ __component: "blocks.contact-us-section" } & ContactUsSectionProps);

export function RenderBlock(block: BlockMapProps) {
  switch (block.__component) {
    case "blocks.first-section":
      return <HeroSection key={block.id} {...block} />;

    case "blocks.technologies-section":
      return <TechnologiesSection key={block.id} {...block} />;

    case "blocks.services-section":
      return <ServicesSection key={block.id} {...block} />;

    case "blocks.portfolio-section":
      return <PortfolioSection key={block.id} {...block} />;

    case "blocks.contact-us-section":
      return <ContactUsSection key={block.id} {...block} />;

    default:
      return null;
  }
}
