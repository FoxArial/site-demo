import { getHomePage } from "@/services/fetchPages";

export async function TechnologiesSection() {
  const data = await getHomePage();
  console.log("home-page:", data);
  return <div>TechnologiesSection </div>;
}
