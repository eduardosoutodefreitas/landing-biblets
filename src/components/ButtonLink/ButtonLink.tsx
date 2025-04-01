import React, { AnchorHTMLAttributes } from "react";
import styles from "./ButtonLink.module.scss";
import Link from "next/link";

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  href: string;
}

export const ButtonLink = ({ children, href, ...props }: ButtonLinkProps) => {
  return (
    <Link className={styles.container} href={href} {...props}>
      {children}
    </Link>
  );
};
