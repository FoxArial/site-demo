import { getHomePage } from "../services/fetchPages";
export default async function HomeRoute() {
  const data = await getHomePage();
  console.log(data);
  return <div></div>;
}
