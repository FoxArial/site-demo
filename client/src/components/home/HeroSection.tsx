import { HeroSectionProps } from "@/models/HomePage";
import { StrapiImage } from "../custom/strapa-image";
import ButtonCustom from "../custom/cta";

export function HeroSection(block: HeroSectionProps) {
  const { title, description, background, cta } = block;
  return (
    <div className="flex-central hero-section">
      <div className="title gap-between">
        <div className="title-header">
          {title.map((item) => (
            <p
              key={item.id}
              className={`text-${item.color} textWeight-${item.fontWeight} text-bigTitle`}
            >
              {item.label}
            </p>
          ))}
        </div>
        <div className="title-description">
          <p
            className={`text-${description.color} textWeight-${description.fontWeight} text-smallTitle `}
          >
            {description.label}
          </p>
        </div>
        <div className="title-cta flex-central">
          {cta.map((item) => (
            <ButtonCustom
              key={item.id}
              href={item.href}
              text={item.label.color}
              theme={item.theme}
              label={item.label.label}
              weight={item.label.fontWeight}
              width="15rem"
            />
          ))}
        </div>
      </div>

      {background.image && (
        <div className="bg-full-screen">
          <StrapiImage src={background.image.url} fill={true} />
        </div>
      )}
    </div>
  );
}
