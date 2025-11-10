import { ContactUsSectionProps } from "@/models/HomePage";
import { StrapiImage } from "../custom/strapa-image";
import Form from "../custom/form";

export function ContactUsSection(block: ContactUsSectionProps) {
  const { background, description, form, title } = block;
  return (
    <div className="contact-us-section">
      <div className="contact-info gap-between contact-us-padding">
        <p
          className={`text-${title.color} textWeight-${title.fontWeight} text-bigTitle `}
        >
          {title.label}
        </p>
        <div className="contact-info-description">
          {description.map((item) => (
            <p
              key={item.id}
              className={`text-${item.color} textWeight-${item.fontWeight} text-smallTitle `}
            >
              {item.label}
            </p>
          ))}
        </div>
        {background.image && (
          <div className="info-bg">
            <StrapiImage
              src={background.image.url}
              fill={true}
              className="contact-bg"
            />
          </div>
        )}
      </div>
      <div className="contact-form contact-us-padding">
        <Form data={form} />
      </div>
    </div>
  );
}
