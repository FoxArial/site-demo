import { ServiceCard } from "@/models/HomePage";
import { StrapiImage } from "./strapa-image";
import ButtonCustom from "./cta";
type ServiceCardCompProps = {
  item: ServiceCard;
};

export function ServiceCardComp({ item }: ServiceCardCompProps) {
  const { image, description, button, title } = item;
  return (
    <div className="serviceCard flex-central gap-between">
      <div className="serviceCard flex-central">
        <StrapiImage src={image.url} height={200} width={200} />
        <div className="title">
          <div className="title-header">
            <p
              className={`text-${title.color} textWeight-${title.fontWeight} text-smallTitle`}
            >
              {title.label}
            </p>
          </div>
          <div className="title-description">
            <p
              className={`text-${description.color} textWeight-${description.fontWeight} text-normal `}
            >
              {description.label}
            </p>
          </div>
        </div>
      </div>
      <ButtonCustom
        href={button.href}
        label={button.label.label}
        theme={button.theme}
        text={button.label.color}
        weight={button.label.fontWeight}
        width="9rem"
      />
    </div>
  );
}
