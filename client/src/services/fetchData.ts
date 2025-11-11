import { HomePageResponse } from "@/models/HomePage";
import { fetchData } from "./strapiService";
import { GlobalResponse } from "@/models/Global";
import { IPortfolioProjectResponse } from "@/models/PortfolioProject";

export async function getGlobalElements(): Promise<GlobalResponse> {
  return await fetchData<GlobalResponse>("/api/global");
}

export async function getHomePage(): Promise<HomePageResponse> {
  return await fetchData<HomePageResponse>("/api/home-page");
}

export async function getPortfolioProjects(): Promise<IPortfolioProjectResponse> {
  return await fetchData<IPortfolioProjectResponse>("/api/portfolio-projects");
}
