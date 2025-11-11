import Link, { LinkProps } from "next/link";
import React from "react";

interface ICustomLinkProps extends React.PropsWithChildren, LinkProps {
  isExternal: boolean;
  className?: string;
}

export default function CustomLink({
  href,
  isExternal,
  children,
  className,
  ...props
}: ICustomLinkProps) {
  if (isExternal) {
    return (
      <Link href={href} target="_blank" className={className} {...props}>
        {children}
      </Link>
    );
  }
  return (
    <Link href={href} className={className} {...props}>
      {children}
    </Link>
  );
}
