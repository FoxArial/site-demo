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

export async function postData<T>(path: string, userData: unknown): Promise<T> {
  try {
    const response = await fetch(BASE_URL + path, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: userData ? JSON.stringify({ data: userData }) : undefined,
    });

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`Failed to POST ${path}: ${response.status} ${errText}`);
    }
    const data = (await response.json()) as T;
    console.dir(data, { depth: null });
    return data;
  } catch (error) {
    console.error("Contact Service Error:", error);
    throw error;
  }
}
