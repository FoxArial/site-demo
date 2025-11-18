import FadeSection from "@/components/custom/fadeSection";
import { BlockMapProps, RenderBlock } from "@/components/home/blocks";
import { getHomePage } from "@/services/fetchData";

export default async function HomeRoute() {
  const data = await getHomePage();
  if (!data) return "No data";
  return (
    <div>
      {data.data.content.map((item: BlockMapProps, index) => {
        return index > 0 ? (
          <FadeSection key={item.id}>{RenderBlock(item)}</FadeSection>
        ) : (
          RenderBlock(item)
        );
      })}
    </div>
  );
}
