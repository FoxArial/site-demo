import { getHomePage } from "../services/fetchPages";
export default async function HomeRoute() {
  const data = await getHomePage();
  return (
    <div>
      {data.title}
      {data.description}
    </div>
  );
}
