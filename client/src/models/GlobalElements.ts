export interface TextLabel {
  id: number;
  label: string;
  fontWeight: "normal" | "bold";
  color: string;
}

export interface ImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
}

export interface ImageData {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats?: {
    thumbnail?: ImageFormat;
    small?: ImageFormat;
    medium?: ImageFormat;
    large?: ImageFormat;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: object | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface LinkItem {
  id: number;
  href: string;
  isExternal: boolean;
  label: TextLabel | null;
}

export interface Logo extends LinkItem {
  image?: ImageData | null;
}

export interface ButtonLink {
  id: number;
  href: string;
  theme: "orange" | "lavender" | "peacoat";
  isExternal: boolean;
  label: TextLabel;
}

export interface Background {
  color?: string;
  image?: ImageData;
  standartColors?: "white" | "whiteSmoke";
}
