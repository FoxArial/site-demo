import { Header } from "@/models/Header";
import { selectData } from "@/utils/globalElementSelection";
import { Logo } from "@/utils/logoValidation";
import ButtonCustom from "./custom/cta";
import Navbar from "./custom/navBar";

export default async function HeaderElement() {
  const header = await selectData<Header>("header");
  if (!header) return <div>Header not found</div>;
  const { navItems, logo, cta } = header;
  return (
    <header className="header-style padding-header">
      <Logo
        header={header}
        className={`text-${logo.label?.color} textWeight-${logo.label?.fontWeight} text-bigTitle`}
      />
      <div className="header-right-part header-style">
        <Navbar navItems={navItems} />
        <ButtonCustom
          href={cta.href}
          label={cta.label.label}
          theme={cta.theme}
          text={cta.label.color}
          weight={cta.label.fontWeight}
          width="12rem"
        />
      </div>
    </header>
  );
}
