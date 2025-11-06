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
    <footer className="footer-style">
      <div className="topFooter footer-columns main-side-padding">
        {infoColumns.map((item) => (
          <div key={item.id} className=" footer-column">
            <div className="inside">
              <p
                className={`text-${item.title.color} textWeight-${item.title.fontWeight} text-smallTitle footer-columns-title`}
              >
                {item.title.label}
              </p>

              {item.links.map((element) => (
                <ul key={element.id}>
                  <li className="column-li">
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
          </div>
        ))}
      </div>
      <div className="middleFooter">
        <div className="middleFooter-content flex-central-space">
          <Logo
            footer={footer}
            className={`text-${logo.label?.color} textWeight-${logo.label?.fontWeight} text-title`}
          />
          <div className="social">
            <p
              className={`text-${description.color} textWeight-${description.fontWeight} text-normal`}
            >
              {description.label}
            </p>
            <ul className="social-elements">
              {socialLogos.map((element) => (
                <li key={element.id} className="social-element">
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
      </div>
      <div className="bottomFooter">
        <ul className="social-elements">
          {links.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`text-${item.label?.color} textWeight-${item.label?.fontWeight} text-normal`}
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
