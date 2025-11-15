import { InfoSectionProps } from "@/models/HomePage";
import { StrapiImage } from "../custom/strapa-image";

export function InfoSection(block: InfoSectionProps) {
  const { card, background } = block;
  return (
    <div className="info-section flex-central">
      <div className="info-container flex-central-space main-big-vertical-padding gap-between">
        {card.map((item) => (
          <div key={item.id} className="info-itemss">
            <div className="title-header">
              <p
                className={`text-${item.title.color} textWeight-${item.title.fontWeight} text-bigTitle `}
              >
                {item.title.label}
              </p>
            </div>
            <div className="title-description">
              <p
                className={`text-${item.description.color} textWeight-${item.description.fontWeight} text-title `}
              >
                {item.description.label}
              </p>
            </div>
          </div>
        ))}
      </div>
      {background.image && (
        <div className="info-bg">
          <StrapiImage src={background.image.url} fill={true} />
        </div>
      )}
    </div>
  );
}
