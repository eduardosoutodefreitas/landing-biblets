import { ButtonLink } from "@/components/ButtonLink/ButtonLink";
import Footer from "../components/Footer/Footer";
import styles from "./Home.module.scss";
import { Icon } from "@/components/Icon/Icon";
import Image from "next/image";

export const Home = () => {
  return (
    <>
      <main className={styles.container}>
        <h1 className={styles.title}>
          Com o <strong>Biblets</strong>, você cria{" "}
          <strong>histórias bíblicas personalizadas</strong> com{" "}
          <strong>inteligência artificial</strong> para ensinar e divertir seus
          filhos enquanto os guia <strong>no caminho certo</strong>.
        </h1>
        <div className={styles.hero}>
          <div className={styles.illustration}>
            <Image alt="Hero illustration" src={"/hero.png"} fill />
          </div>
          <div className={styles["hero-right"]}>
            <div className={styles.mockups}>
              <Image alt="Mockups" src={"/mockups.png"} fill />
            </div>
            <div className={styles.downloads}>
              <div className={styles.btn} />
              <div className={styles.btn} />
            </div>
          </div>
        </div>
      </main>
      <Footer>
        <ButtonLink href="/privacy-policies">
          Políticas de privacidade
          <Icon name="arrow-up-right" />
        </ButtonLink>
        <ButtonLink href="/terms-of-use">
          Termos de uso
          <Icon name="arrow-up-right" />
        </ButtonLink>
      </Footer>
    </>
  );
};
