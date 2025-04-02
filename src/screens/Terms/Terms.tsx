import React from "react";
import Footer from "../components/Footer/Footer";
import { ButtonLink } from "@/components/ButtonLink/ButtonLink";
import { Icon } from "@/components/Icon/Icon";
import styles from "./Terms.module.scss";

export const Terms = () => {
  return (
    <>
      <main>
        <h1 className={styles.title}>Termos de uso</h1>
        <div className={styles.Terms}>
          <p>
            Lorem ipsum dollor aset amet lorem ipsum dollor aset amet lorem
            ipsum dollor aset amet lorem ipsum dollor aset amet lorem ipsum
            dollor aset amet lorem ipsum dollor aset amet lorem ipsum dollor
            aset amet lorem ipsum dollor aset amet lorem ipsum dollor aset amet
            lorem ipsum dollor aset amet lorem ipsum dollor aset amet lorem
            ipsum dollor aset amet lorem ipsum dollor aset amet lorem ipsum
            dollor aset amet lorem ipsum dollor aset amet lorem ipsum dollor
            aset amet lorem ipsum dollor aset amet lorem ipsum dollor aset amet
            lorem
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            laborum velit debitis odio, autem porro vero ea vel corrupti officia
            esse corporis iusto ipsa dolore nesciunt temporibus adipisci fuga
            asperiores.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            laborum velit debitis odio, autem porro vero ea vel corrupti officia
            esse corporis iusto ipsa dolore nesciunt temporibus adipisci fuga
            asperiores.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            laborum velit debitis odio, autem porro vero ea vel corrupti officia
            esse corporis iusto ipsa dolore nesciunt temporibus adipisci fuga
            asperiores.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            laborum velit debitis odio, autem porro vero ea vel corrupti officia
            esse corporis iusto ipsa dolore nesciunt temporibus adipisci fuga
            asperiores.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            laborum velit debitis odio, autem porro vero ea vel corrupti officia
            esse corporis iusto ipsa dolore nesciunt temporibus adipisci fuga
            asperiores.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            laborum velit debitis odio, autem porro vero ea vel corrupti officia
            esse corporis iusto ipsa dolore nesciunt temporibus adipisci fuga
            asperiores.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            laborum velit debitis odio, autem porro vero ea vel corrupti officia
            esse corporis iusto ipsa dolore nesciunt temporibus adipisci fuga
            asperiores.
          </p>
        </div>
      </main>
      <Footer>
        <ButtonLink href="/">
          Início
          <Icon name="arrow-up-right" />
        </ButtonLink>
      </Footer>
    </>
  );
};
