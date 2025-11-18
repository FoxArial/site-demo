"use client";
import { IPortfolioCategories } from "../../models/PortfolioCategories";
import { useCategoryContext } from "../data/contexts/category-context";

interface IPortfolioNavParams {
  data: IPortfolioCategories[];
}

export function PortfolioNav(data: IPortfolioNavParams) {
  const itemsData = data.data;
  const { selectedCategory, setSelectedCategory } = useCategoryContext();
  return (
    <div className="nav-categories">
      <ul className="gap-between">
        {itemsData.map((item) => {
          const isActive = selectedCategory === item.name;

          return (
            <li
              key={item.id}
              onClick={() => setSelectedCategory(item.name)}
              className={`${
                isActive
                  ? "textWeight-bold text-white active-section"
                  : "text-darkTeal textWeight-normal categories-category"
              }`}
            >
              {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
