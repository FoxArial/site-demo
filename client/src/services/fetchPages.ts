import { HomePage } from "@/models/homePage";
import { fetchData } from "./strapiService";

export async function getHomePage(): Promise<HomePage> {
  return fetchData<HomePage>("/api/home-page");
}
