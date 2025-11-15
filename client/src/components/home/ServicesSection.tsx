import { ServicesSectionProps } from "@/models/HomePage";
import { ServiceCardComp } from "../custom/service-card";
export async function ServicesSection(block: ServicesSectionProps) {
  const { title, description, services } = block;
  return (
    <div className="flex-central services-section main-big-vertical-padding gap-between">
      <div className="title width-70">
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
      <div className="card-info gap-between">
        {services.map((item) => (
          <ServiceCardComp key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
