"use client";

import { LinkItem } from "@/models/GlobalElements";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavbarProps = {
  navItems: LinkItem[];
};

export default function Navbar({ navItems }: NavbarProps) {
  const pathname = usePathname();

  return (
    <nav className="header-right-part ">
      <ul className="header-style">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <li key={item.id}>
              <Link
                href={item.href}
                className={
                  isActive
                    ? "textWeight-bold text-darkTeal active-nav"
                    : `text-${item.label?.color} textWeight-${item.label?.fontWeight}`
                }
              >
                {item.label?.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
