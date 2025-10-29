export function getStrapiURL(): string {
  return process.env.NEXT_PUBLIC_STRAPI_URL ?? "http://localhost:1337";
}
const BASE_URL = getStrapiURL();
export async function fetchData<T>(path: string): Promise<T> {
  const response = await fetch(BASE_URL + path);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${path}: ${response.status}`);
  }
  return await response.json();
}
