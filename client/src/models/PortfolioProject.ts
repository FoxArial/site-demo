import { Background, IPagination, LinkItem, TextLabel } from "./GlobalElements";
import { IPortfolioCategories } from "./PortfolioCategories";

export interface IPortfolioProject {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  dbTitle: string;
  title: TextLabel;
  description: TextLabel;
  background: Background;
  link: LinkItem;
  portfolio_category: IPortfolioCategories;
}

export interface IPortfolioProjectResponse {
  data: IPortfolioProject[];
  meta: {
    pagination: IPagination;
  };
}
