import { getHomePage } from "@/services/fetchPages";

export async function PortfolioSection() {
  const data = await getHomePage();
  console.log("home-page:", data);
  return <div>PortfolioSection </div>;
}
