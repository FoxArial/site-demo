import { Header } from "@/models/Header";
import { selectData } from "@/utils/globalElementSelection";
import { Logo } from "@/utils/logoValidation";
import Link from "next/link";
import ButtonCustom from "./custom/cta";

export default async function HeaderElement() {
  const header = await selectData<Header>("header");
  if (!header) return <div>Header not found</div>;

  return (
    <header className="header-style">
      <Logo
        header={header}
        className={`text-${header.logo.label?.color} textWeight-${header.logo.label?.fontWeight} text-bigTitle`}
      />
      <nav>
        <ul>
          {header.navItems.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                className={`text-${item.label?.color} textWeight-${item.label?.fontWeight}`}
              >
                {item.label?.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <ButtonCustom
        href={header.cta.href}
        label={header.cta.label.label}
        theme={`button-${header.cta.theme}`}
        color={`text-${header.cta.label.color}`}
        weight={`textWeight-${header.cta.label.fontWeight}`}
        width="9rem"
      />
    </header>
  );
}
