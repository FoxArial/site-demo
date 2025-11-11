"use client";

import { IPortfolioProject } from "@/models/PortfolioProject";
import { useCategoryContext } from "../data/contexts/category-context";
import PortfolioCard from "./portfolioCard";

type TPortfolioGridProps = {
  data: IPortfolioProject[];
};

export function PortfolioGrid({ data }: TPortfolioGridProps) {
  const { selectedCategory } = useCategoryContext();

  const filtered = data.filter(
    (item) => item.portfolio_category.name == selectedCategory
  );
  return (
    <div>
      {filtered.map((item) => (
        <div key={item.id}>
          <PortfolioCard {...item} />
        </div>
      ))}
    </div>
  );
}
