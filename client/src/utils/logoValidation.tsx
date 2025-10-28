import { Header } from "@/models/Header";
import Image from "next/image";
import Link from "next/link";

export function Logo({ header }: { header: Header }) {
  const { logo } = header;

  if (!logo.image) {
    return <Link href={logo.href}> {logo.label?.label}</Link>;
  }
  return (
    <Link href={logo.href}>
      <Image src={logo.image.url} alt={logo.label?.label ?? ""} />
    </Link>
  );
}
