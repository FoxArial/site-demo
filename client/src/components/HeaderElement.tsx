import { Header } from "@/models/Header";
import { selectData } from "@/utils/globalElementSelection";
import { Logo } from "@/utils/logoValidation";
import Navbar from "./custom/navBar";

export default async function HeaderElement() {
  const header = await selectData<Header>("header");
  if (!header) return <div>Header not found</div>;
  const { navItems, logo, cta } = header;
  return (
    <header className="header-style flex-central-space main-side-padding">
      <Logo
        header={header}
        className={`text-${logo.label?.color} textWeight-${logo.label?.fontWeight} text-bigTitle`}
      />
      <Navbar navItems={navItems} cta={cta} />
    </header>
  );
}
