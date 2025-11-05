import { Footer } from "@/models/Footer";
import { selectData } from "@/utils/globalElementSelection";
import { Logo } from "@/utils/logoValidation";
import Link from "next/link";
import { StrapiImage } from "./custom/strapa-image";

export default async function FooterElement() {
  const footer = await selectData<Footer>("footer");
  if (!footer) return <div>Footer not found</div>;

  const { description, infoColumns, links, logo, socialLogos, text } = footer;
  return (
    <footer className="topFooter footer-style main-side-padding">
      <div className="footer-columns">
        {infoColumns.map((item) => (
          <div key={item.id}>
            <p
              className={`text-${item.title.color} textWeight-${item.title.fontWeight} text-smallTitle footer-columns-title`}
            >
              {item.title.label}
            </p>

            {item.links.map((element) => (
              <ul key={element.id}>
                <li>
                  <Link
                    href={element.href}
                    className={`text-${element.label?.color} textWeight-${element.label?.fontWeight} text-normal`}
                  >
                    {element.label?.label}
                  </Link>
                </li>
              </ul>
            ))}
          </div>
        ))}
      </div>
      <div className="middleFooter flex-central-space">
        <Logo
          footer={footer}
          className={`text-${logo.label?.color} textWeight-${logo.label?.fontWeight} text-title`}
        />
        <div className="social flex-central-space">
          <p
            className={`text-${description.color} textWeight-${description.fontWeight} text-normal`}
          >
            {description.label}
          </p>
          <ul className="flex-central-space">
            {socialLogos.map((element) => (
              <li key={element.id}>
                <Link href={element.href}>
                  {element.image && (
                    <StrapiImage
                      src={element.image?.url}
                      alt={element.label.label}
                      width={25}
                      height={25}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bottomFooter">
        <ul>
          {links.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`text-${item.label?.color} textWeight-${item.label?.fontWeight} text-smallTitle`}
            >
              {item.label?.label}
            </Link>
          ))}
        </ul>
      </div>
      <p
        className={`text-${text.color} textWeight-${text.fontWeight} text-normall`}
      >
        {text.label}
      </p>
    </footer>
  );
}
