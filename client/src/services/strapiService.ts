const BASE_URL = "http://localhost:1337/";

export async function fetchData(path: string): Promise<object> {
  const url = new URL(path, BASE_URL);

  const response = await fetch(url.href);
  if (!response.ok) {
    throw new Error(`Error fetching ${path}: ${response.status}`);
  }

  const data = await response.json();
  return { ...data.data };
}
