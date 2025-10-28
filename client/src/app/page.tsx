import { getGlobalElements } from "../services/fetchPages";
export default async function HomeRoute() {
  const data = await getGlobalElements();
  console.log(data);
  return <div></div>;
}
