"use client";

import { IPortfolioCategories } from "../../../models/PortfolioCategories";
import React, { createContext, useContext, useState } from "react";

type TCategoryContext = {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
};

export const CategoryContext = createContext<TCategoryContext | undefined>(
  undefined
);

interface CategoryContextProviderProps extends React.PropsWithChildren {
  categories: IPortfolioCategories[];
}

export default function CategoryContextProvider({
  categories,
  children,
}: CategoryContextProviderProps) {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].name);

  return (
    <CategoryContext.Provider value={{ selectedCategory, setSelectedCategory }}>
      {children}
    </CategoryContext.Provider>
  );
}

export function useCategoryContext() {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error("useCategory must be used within CategoryContextProvider");
  }
  return context;
}
