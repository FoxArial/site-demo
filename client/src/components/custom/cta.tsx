import Link from "next/link";

type ButtonProps = {
  theme: string;
  href: string;
  color: string;
  weight: string;
  width: string;
  label: string;
};

export default function ButtonCustom({
  theme,
  href,
  color,
  weight,
  width,
  label,
}: ButtonProps) {
  return (
    <div className={`${theme} button-style`} style={{ width: width }}>
      <Link href={href} className={`${color} ${weight}`}>
        {label}
      </Link>
    </div>
  );
}
