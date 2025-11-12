import { Background, LinkItem, TextLabel } from "@/models/GlobalElements";
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
    <CustomLink
      href={link.href}
      isExternal={link.isExternal}
      className="portfolioCard-card"
    >
      <div className="portfolioCard-title">
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
      <div className="portfolio-image">
        {background.image && (
          <StrapiImage src={background.image.url} fill={true} />
        )}
      </div>
    </CustomLink>
  );
}
