import { ButtonLink } from "@/components/ButtonLink/ButtonLink";
import Footer from "../components/Footer/Footer";
import styles from "./Home.module.scss";
import { Icon } from "@/components/Icon/Icon";

export const Home = () => {
  return (
    <>
      <main>
        <h1 className={styles.title}>
          Com o <strong>Biblets</strong>, você cria{" "}
          <strong>histórias bíblicas personalizadas</strong> com{" "}
          <strong>inteligência artificial</strong> para ensinar e divertir seus
          filhos enquanto os guia <strong>no caminho certo</strong>.
        </h1>
        <div className={styles.hero}></div>
      </main>
      <Footer>
        <ButtonLink href="/privacy-policies">
          Políticas de privacidade
          <Icon name="arrow-up-right" />
        </ButtonLink>
      </Footer>
    </>
  );
};
