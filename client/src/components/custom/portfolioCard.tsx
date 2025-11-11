import { Background, LinkItem, TextLabel } from "@/models/GlobalElements";
import Link from "next/link";
import CustomLink from "./customLink";
import { StrapiImage } from "./strapa-image";

type TPortfolioCardProps = {
  title: TextLabel;
  description: TextLabel;
  background: Background;
  link: LinkItem;
};

export default function PortfolioCard({ ...data }: TPortfolioCardProps) {
  const { title, description, background, link } = data;
  return (
    <CustomLink href={link.href} isExternal={link.isExternal}>
      <div className="title">
        <div className="title-header">
          <p
            className={`text-${title.color} textWeight-${title.fontWeight} text-title`}
          >
            {title.label}
          </p>
        </div>
        <div className="title-description">
          <p
            className={`text-${description.color} textWeight-${description.fontWeight} text-smallTitle `}
          >
            {description.label}
          </p>
        </div>
      </div>
      <div className="portfolioCard-bg">
        {background.image && (
          <StrapiImage
            src={background.image.url}
            fill={true}
            className="bg-full-screen"
          />
        )}
      </div>
    </CustomLink>
  );
}
