import { Footer } from "@/models/Footer";
import { selectData } from "@/utils/globalElementSelection";
import { Logo } from "@/utils/logoValidation";
import { StrapiImage } from "./custom/strapa-image";
import CustomLink from "./custom/customLink";

export default async function FooterElement() {
  const footer = await selectData<Footer>("footer");
  if (!footer) return <div>Footer not found</div>;

  const { description, infoColumns, links, logo, socialLogos, text } = footer;
  return (
    <footer className="footer-style flex-central">
      <div className="footer-columns main-big-vertical-padding main-side-padding">
        {infoColumns.map((item) => (
          <div key={item.id} className="flex-central">
            <div className="inside">
              <p
                className={`text-${item.title.color} textWeight-${item.title.fontWeight} text-smallTitle footer-columns-title`}
              >
                {item.title.label}
              </p>

              {item.links.map((element) => (
                <ul key={element.id}>
                  <li className="column-li">
                    <CustomLink
                      href={element.href}
                      isExternal={element.isExternal}
                      className={`text-${element.label?.color} textWeight-${element.label?.fontWeight} text-main`}
                    >
                      {element.label?.label}
                    </CustomLink>
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
          <div className="social flex-central width-70">
            <p
              className={`text-${description.color} textWeight-${description.fontWeight} text-main`}
            >
              {description.label}
            </p>
            <ul className="social-elements flex-central">
              {socialLogos.map((element) => {
                return (
                  <li key={element.id} className="social-element ">
                    <CustomLink
                      isExternal={element.isExternal}
                      href={element.href}
                    >
                      {element.image && (
                        <StrapiImage
                          src={element.image?.url}
                          alt={element.label.label}
                          width={25}
                          height={25}
                        />
                      )}
                    </CustomLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="main-side-padding main-small-vertical-padding">
        <ul className="social-elements flex-central">
          {links.map((item) => (
            <CustomLink
              key={item.id}
              href={item.href}
              isExternal={item.isExternal}
              className={`text-${item.label?.color} textWeight-${item.label?.fontWeight} text-main`}
            >
              {item.label?.label}
            </CustomLink>
          ))}
        </ul>
      </div>
      <p
        className={`text-${text.color} textWeight-${text.fontWeight} text-main`}
      >
        {text.label}
      </p>
    </footer>
  );
}
