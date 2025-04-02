import React from "react";
import Footer from "../components/Footer/Footer";
import { ButtonLink } from "@/components/ButtonLink/ButtonLink";
import { Icon } from "@/components/Icon/Icon";
import styles from "./AccountDeletion.module.scss";
import Image from "next/image";

export const AccountDeletion = () => {
  return (
    <>
      <main>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>Exclusão de conta</h1>
          <h2 className={styles.subtitle}>
            Para excluir sua conta e seus dados do Biblets, siga o passo a passo
            abaixo:
          </h2>
        </div>
        <div className={styles.steps}>
          <div className={styles.step}>
            <div className={styles.image}>
              <Image
                fill
                src={"/deletion-1.jpg"}
                alt="Account deletion step 1"
              />
            </div>

            <p className={styles.label}>
              1 - Clique no ícone do perfil no lado superior direito da sua
              tela.
            </p>
          </div>
          <div className={styles.step}>
            <div className={styles.image}>
              <Image
                fill
                objectFit="cover"
                src={"/deletion-2.jpg"}
                alt="Account deletion step 2"
              />
            </div>

            <p className={styles.label}>
              2 - Role a tela para baixo e pressione o link vermelho “Excluir
              sua conta”.
            </p>
          </div>
          <div className={styles.step}>
            <div className={styles.image}>
              <Image
                fill
                objectFit="cover"
                src={"/deletion-3.jpg"}
                alt="Account deletion step 3"
              />
            </div>
            <p className={styles.label}>
              3 - Pressione o botão vermelho &quot;Excluir minha conta&quot;
              para confirmar a exclusão.
            </p>
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
