import { Header } from "./Header";
import { Footer } from "./Footer";

export interface GlobalData {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  header: Header;
  footer: Footer;
}

export interface GlobalResponse {
  data: GlobalData;
  meta: Record<string, unknown>;
}
