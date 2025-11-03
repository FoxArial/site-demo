import { TechnologiesSectionProps } from "@/models/HomePage";
import { Carousel } from "../custom/carousel";

export async function TechnologiesSection(block: TechnologiesSectionProps) {
  const { title, description, technologies } = block;
  return (
    <div className="flex-central gap-between-big techno-section main-horizontal-padding">
      <div className="title width-70">
        <div className="title-header">
          {title.map((item) => (
            <span
              key={item.id}
              className={`text-${item.color} textWeight-${item.fontWeight} text-title`}
            >
              {item.label}{" "}
            </span>
          ))}
        </div>
        <div className="title-description">
          <p
            className={`text-${description.color} textWeight-${description.fontWeight} text-smallTitle `}
          >
            {description.label}
          </p>
        </div>
      </div>
      <Carousel arr={technologies} />
    </div>
  );
}
