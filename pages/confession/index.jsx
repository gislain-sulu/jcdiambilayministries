import React from "react";
import styles from "./confession.module.scss";
import Image from "next/image";

const Confession = () => {
  return (
    <div className={styles.confession}>
      <div className={styles.confession__titleBox}>
        <div className={styles.confession__titleBox__decoration}></div>
        <h2 className={styles.confession__titleBox__title}>
          confession de foi
        </h2>
      </div>
      <div className={styles.confession__content}>
        <div className={`${styles.confession__content__wrapper} wrapper`}>
          <div className={styles.confession__content__pictureBox}>
            <Image
              src="/assets/images/confession_de_foi.png"
              width="667px"
              height="300px"
              className={styles.confession__content__pictureBox__picture}
              loading="lazy"
            />
          </div>
          <main className={styles.confession__content__main}>
            <ol className={styles.confession__content__main__list}>
              <li className={styles.confession__content__main__list__item}>
                1. Nous croyons que <strong> la Bible</strong> est{" "}
                <strong>
                  la seule Parole de Dieu inspirée, infaillible et faisant
                  autorité suprême
                </strong>{" "}
                .
              </li>
              <li className={styles.confession__content__main__list__item}>
                2. Nous croyons qu’il y a{" "}
                <strong>
                  un seul Dieu , existant éternellement en trois personnes : le
                  Père, le Fils et le Saint-Esprit.
                </strong>
              </li>
              <li className={styles.confession__content__main__list__item}>
                3.{" "}
                <strong>
                  {" "}
                  Nous croyons dans la divinité de notre Seigneur Jésus-Christ,
                  dans Sa naissance virginale, Sa vie sans péché, Ses miracles,
                  Sa mort expiatoire par Son sang versé, Sa résurrection
                  corporelle, Son ascension à la droite du Père, et dans Son
                  retour personnel en puissance et en gloire.
                </strong>
              </li>
              <li className={styles.confession__content__main__list__item}>
                4.{" "}
                <strong>
                  {" "}
                  Nous croyons que pour le salut de l’homme perdu et pécheur, la
                  régénération par le Saint-Esprit est ab- solument essentielle.
                </strong>
              </li>
              <li className={styles.confession__content__main__list__item}>
                5.{" "}
                <strong>
                  {" "}
                  Nous croyons au ministère actuel du Saint-Esprit par lequel le
                  chrétien est rendu capable de vivre une vie pieuse.
                </strong>
              </li>
              <li className={styles.confession__content__main__list__item}>
                6.{" "}
                <strong>
                  Nous croyons dans la résurrection corporelle ; la vie
                  éternelle pour les justes et le châtiment éternel pour les
                  méchants.
                </strong>
              </li>
              <li className={styles.confession__content__main__list__item}>
                7.{" "}
                <strong>
                  {" "}
                  Nous croyons en l’unité spirituelle des croyants en notre
                  Seigneur Jésus-Christ.
                </strong>
              </li>
            </ol>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Confession;
