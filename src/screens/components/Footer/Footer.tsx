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
      {children}
    </footer>
  );
};

export default Footer;
