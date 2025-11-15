import { PortfolioSectionProps } from "@/models/HomePage";
import { PortfolioGrid } from "../custom/portfolio-grid";
import { PortfolioNav } from "../custom/portfolio-nav";
import CategoryContextProvider from "../data/contexts/category-context";
import { getPortfolioProjects } from "@/services/fetchData";

export async function PortfolioSection(block: PortfolioSectionProps) {
  const projects = await getPortfolioProjects();
  const projectsData = projects.data;
  const { description, portfolio_categories, title } = block;
  return (
    <div className="portfolio-section flex-central  main-big-vertical-padding">
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
      <div className="portfolio-category">
        <CategoryContextProvider categories={portfolio_categories}>
          <PortfolioNav data={portfolio_categories} />
          <PortfolioGrid data={projectsData} />
        </CategoryContextProvider>
      </div>
    </div>
  );
}
