import { getHomePage } from "@/services/fetchPages";

export async function HeroSection() {
  const data = await getHomePage();
  console.log("home-page:", data);
  return <div>HeroSection</div>;
}
