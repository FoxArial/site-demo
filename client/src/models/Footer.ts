import { LinkItem, TextLabel, ImageData, Logo } from "./GlobalElements";

export interface InfoColumn {
  id: number;
  title: TextLabel;
  links: LinkItem[];
}

export interface SocialLogo {
  id: number;
  href: string;
  isExternal: boolean;
  label: TextLabel;
  image?: ImageData;
}

export interface Footer {
  id: number;
  infoColumns: InfoColumn[];
  logo: Logo;
  description: TextLabel;
  socialLogos: SocialLogo[];
  links: LinkItem[];
  text: TextLabel;
}
