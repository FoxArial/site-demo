import Link from "next/link";

type ButtonProps = {
  theme: string;
  href: string;
  text: string;
  weight: string;
  width: string;
  label: string;
};

export default function ButtonCustom({
  theme,
  href,
  text,
  weight,
  width,
  label,
}: ButtonProps) {
  return (
    <div className={`button-${theme} button-style`} style={{ width: width }}>
      <Link href={href} className={`text-${text} textWeight-${weight}`}>
        {label}
      </Link>
    </div>
  );
}
