import { LinkItem, Background, Logo, ButtonLink } from "./GlobalElements";

export interface Header {
  id: number;
  logo: Logo;
  navItems: LinkItem[];
  cta: ButtonLink;
  background?: Background;
}

export type HeaderProps = {
  data: Header;
};
