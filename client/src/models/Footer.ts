import { LinkItem, TextLabel, ImageData } from "./GlobalElements";

export interface InfoColumn {
  id: number;
  title: TextLabel;
  links: LinkItem[];
}

export interface SocialLogo {
  id: number;
  href: string;
  isExternal: boolean;
  title?: TextLabel | null;
  image?: ImageData;
}

export interface Footer {
  id: number;
  infoColumns: InfoColumn[];
  logo: LinkItem;
  description: TextLabel;
  socialLogos: SocialLogo[];
  links: LinkItem[];
  text: TextLabel;
}
