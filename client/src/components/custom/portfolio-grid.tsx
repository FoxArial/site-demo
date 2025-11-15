"use client";

import { IPortfolioProject } from "@/models/PortfolioProject";
import { useCategoryContext } from "../data/contexts/category-context";
import PortfolioCard from "./portfolioCard";
import { useState } from "react";

type TPortfolioGridProps = {
  data: IPortfolioProject[];
};

export function PortfolioGrid({ data }: TPortfolioGridProps) {
  const { selectedCategory } = useCategoryContext();
  const [showAll, setShowAll] = useState(false);

  const filtered = data.filter(
    (item) => item.portfolio_category.name == selectedCategory
  );
  const visibleItems = showAll ? filtered : filtered.slice(0, 8);
  return (
    <div className="portfolio-wrapper">
      <div className="card-grid">
        {visibleItems.map((item) => (
          <PortfolioCard key={item.id} {...item} />
        ))}
      </div>
      {filtered.length > 8 && (
        <button
          className="show-more-btn"
          onClick={() => setShowAll((prev) => !prev)}
        >
          {showAll ? "Hide" : "Show All"}
        </button>
      )}
    </div>
  );
}
