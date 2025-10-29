import { Footer } from "@/models/Footer";
import { Header } from "@/models/Header";
import Image from "next/image";
import Link from "next/link";

type LogoProps =
  | { header: Header; footer?: never }
  | { footer: Footer; header?: never };

export function Logo({ header, footer }: LogoProps) {
  const { logo } = header ?? footer;

  if (!logo.image) {
    return <Link href={logo.href}> {logo.label?.label}</Link>;
  }
  return (
    <Link href={logo.href}>
      <Image src={logo.image.url} alt={logo.label?.label ?? ""} />
    </Link>
  );
}
