import { HomePageResponse } from "@/models/HomePage";
import { fetchData } from "./strapiService";
import { GlobalResponse } from "@/models/Global";

export async function getGlobalElements(): Promise<GlobalResponse> {
  return await fetchData<GlobalResponse>("/api/global");
}

export async function getHomePage(): Promise<HomePageResponse> {
  return await fetchData<HomePageResponse>("/api/home-page");
}
