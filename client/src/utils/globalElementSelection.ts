import { Footer } from "@/models/Footer";
import { Header } from "@/models/Header";
import { getGlobalElements } from "@/services/fetchData";

export async function selectData<T extends Header | Footer>(
  element: "header" | "footer"
): Promise<T | null> {
  try {
    const data = await getGlobalElements();
    const elementData = data.data[element];
    return elementData as T;
  } catch (err) {
    console.log("Failed to fetch data:", err);
    return null;
  }
}
