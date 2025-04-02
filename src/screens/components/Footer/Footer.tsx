import React from "react";
import styles from "./Footer.module.scss";
import { Logo } from "@/components/Logo/Logo";

interface FooterProps {
  children: React.ReactNode;
}

const Footer = ({ children }: FooterProps) => {
  return (
    <footer className={styles.container}>
      <Logo />
      <div className={styles.links}>{children}</div>
    </footer>
  );
};

export default Footer;
