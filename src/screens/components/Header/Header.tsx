import React from "react";
import styles from "./Header.module.scss";
import { Logo } from "@/components/Logo/Logo";
import { Icon } from "@/components/Icon/Icon";
import { ButtonLink } from "@/components/ButtonLink/ButtonLink";
import { GooglePlay } from "@/components/Icon/components/iilustrations/GooglePlay";
import { Apple } from "@/components/Icon/components/iilustrations/Apple";

export const Header = () => {
  return (
    <header className={styles.container}>
      <Logo />
      <div className={styles.links}>
        <ButtonLink href="#" target="_blank">
          <GooglePlay />
          Google Play
          <Icon name="arrow-up-right" />
        </ButtonLink>
        <ButtonLink href="#" target="_blank">
          <Apple />
          App Store
          <Icon name="arrow-up-right" />
        </ButtonLink>
      </div>
    </header>
  );
};
