import { StrapiImage } from "@/components/custom/strapa-image";
import { Footer } from "@/models/Footer";
import { Header } from "@/models/Header";
import Link from "next/link";

type LogoProps =
  | { header: Header; footer?: never; className?: string }
  | { footer: Footer; header?: never; className?: string };

export function Logo({ header, footer, className }: LogoProps) {
  const { logo } = header ?? footer;

  if (!logo.image) {
    return (
      <Link href={logo.href} className={className}>
        {logo.label?.label}
      </Link>
    );
  }
  return (
    <Link href={logo.href}>
      <StrapiImage
        src={logo.image.url}
        alt={logo.label?.label ?? ""}
        className={className}
      />
    </Link>
  );
}
