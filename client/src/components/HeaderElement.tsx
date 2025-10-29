import { Header } from "@/models/Header";
import { selectData } from "@/utils/globalElementSelection";
import { Logo } from "@/utils/logoValidation";
import Link from "next/link";

export default async function HeaderElement() {
  const header = await selectData<Header>("header");
  if (!header) return <div>Header not found</div>;

  return (
    <header>
      <Logo header={header} />
      <nav>
        {header.navItems.map((item) => (
          <Link key={item.id} href={item.href}>
            {item.label?.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
