import { RenderBlock } from "@/components/home/blocks";
import { getHomePage } from "@/services/fetchPages";

export default async function HomeRoute() {
  const data = await getHomePage();
  if (!data) return "No data";
  return <div>{data.data.content.map((item) => RenderBlock(item))}</div>;
}
