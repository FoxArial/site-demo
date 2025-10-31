import { blocksMap } from "@/components/home/blocks";
import { getHomePage } from "@/services/fetchPages";

export default async function HomeRoute() {
  const data = await getHomePage();
  console.log(data);
  return (
    <div>
      {data.data.content.map((item) => {
        const Component = blocksMap[item.__component as keyof typeof blocksMap];
        if (!Component) {
          console.warn(`No component found for ${item.__component}`);
          return null;
        }
        return <Component key={item.id} {...item} />;
      })}
    </div>
  );
}
