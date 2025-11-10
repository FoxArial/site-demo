import { PortfolioSectionProps } from "@/models/HomePage";

export async function PortfolioSection(block: PortfolioSectionProps) {
  const { description, project, title } = block;
  return (
    <div className="portfolio-section flex-central  main-horizontal-padding">
      <div className="title width-70">
        <div className="title-header">
          <p
            className={`text-${title.color} textWeight-${title.fontWeight} text-title`}
          >
            {title.label}
          </p>
        </div>
        <div className="title-description">
          <p
            className={`text-${description.color} textWeight-${description.fontWeight} text-smallTitle `}
          >
            {description.label}
          </p>
        </div>
      </div>
      <div className="portfolio-grid"></div>
    </div>
  );
}
