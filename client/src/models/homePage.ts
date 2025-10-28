export interface HomePage {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  ["key"]: Record<string, unknown>;
}

export interface HomePageResponse {
  data: HomePage;
  meta: Record<string, unknown>;
}
