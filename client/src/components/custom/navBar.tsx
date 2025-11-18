"use client";

import { ButtonLink, LinkItem } from "../../models/GlobalElements";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ButtonCustom from "./cta";

type NavbarProps = {
  navItems: LinkItem[];
  cta: ButtonLink;
};

export default function Navbar({ navItems, cta }: NavbarProps) {
  const [isMobile, setMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    function handleResize() {
      setMobile(window.innerWidth <= 900);
    }
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const pathname = usePathname();

  return (
    <nav className="header-right-part">
      {!isMobile ? (
        <div className="header-style flex-central-space">
          <ul className="header-nav-style flex-central-space header-right-part">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className={`${
                      isActive
                        ? "textWeight-bold text-darkTeal active-nav"
                        : `text-${item.label?.color} textWeight-${item.label?.fontWeight} nav-link`
                    }`}
                  >
                    {item.label?.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <ButtonCustom
            href={cta.href}
            label={cta.label.label}
            theme={cta.theme}
            text={cta.label.color}
            weight={cta.label.fontWeight}
            width="12rem"
          />
        </div>
      ) : (
        <>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`nav-hamburger ${isOpen ? "active" : ""}`}
          >
            <span />
            <span />
            <span />
          </button>
          <div className={`nav-hamburger-list ${isOpen ? "open" : ""}`}>
            <div className="humburger-inside-btn">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`nav-hamburger ${isOpen ? "active" : ""}`}
              >
                <span />
                <span />
                <span />
              </button>
            </div>
            <ul className="header-nav-style flex-central-space">
              {navItems.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <li key={item.id}>
                    <Link
                      href={item.href}
                      className={`${
                        isActive
                          ? "textWeight-bold text-darkTeal active-nav"
                          : `text-${item.label?.color} textWeight-${item.label?.fontWeight} nav-link`
                      }`}
                    >
                      {item.label?.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <ButtonCustom
              href={cta.href}
              label={cta.label.label}
              theme={cta.theme}
              text={cta.label.color}
              weight={cta.label.fontWeight}
              width="12rem"
            />
          </div>
        </>
      )}
    </nav>
  );
}
