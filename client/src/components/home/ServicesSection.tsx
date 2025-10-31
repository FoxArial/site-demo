import { getHomePage } from "@/services/fetchPages";

export async function ServicesSection() {
  const data = await getHomePage();
  console.log("home-page:", data);
  return <div>ServicesSection </div>;
}
