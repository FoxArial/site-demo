import { Footer } from "@/models/Footer";
import { selectData } from "@/utils/globalElementSelection";
import { Logo } from "@/utils/logoValidation";
import Link from "next/link";
import { StrapiImage } from "./custom/strapa-image";

export default async function FooterElement() {
  const footer = await selectData<Footer>("footer");
  if (!footer) return <div>Footer not found</div>;

  return (
    <footer>
      <div className="topFooter">
        {footer.infoColumns.map((item) => (
          <div key={item.id}>
            <h3>{item.title.label}</h3>

            {item.links.map((element) => (
              <ul key={element.id}>
                <li>
                  <Link href={element.href}>{element.label?.label}</Link>
                </li>
              </ul>
            ))}
          </div>
        ))}
      </div>
      <div className="middleFooter">
        <Logo footer={footer} />
        <div className="social">
          <p> {footer.description.label}</p>
          <ul>
            {footer.socialLogos.map((element) => (
              <li key={element.id}>
                <Link href={element.href}>
                  {element.image?.url ? (
                    <StrapiImage
                      src={element.image?.url}
                      alt={element.label.label}
                      width={25}
                      height={25}
                    />
                  ) : (
                    <span>{element.label.label}</span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bottomFooter">
        <ul>
          {footer.links.map((item) => (
            <Link key={item.id} href={item.href}>
              {item.label?.label}
            </Link>
          ))}
        </ul>
      </div>
      <p>{footer.text.label}</p>
    </footer>
  );
}
