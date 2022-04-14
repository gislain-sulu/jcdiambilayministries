import Image from "next/image";
import React from "react";
import Button from "../../button/button";
import {
  Facebook,
  IconLinkExternal,
  IconWhatsapp,
  Instagram,
} from "../../icons/icon";
import styles from "./cardBookDetail.module.scss";

const CardBookDetail = () => {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };
  return (
    <div className={styles.cardBookDetail}>
      <div className={styles.cardBookDetail__pictureBox}>
        <Image
          src="/assets/images/livres/cover/acceleration_divine.jpg"
          width="100"
          height="100"
          loading="lazy"
          layout="fill"
          objectFit="contain"
          className={styles.cardBookDetail__pictureBox__picture}
        />
      </div>
      <div className={styles.cardBookDetail__content}>
        <h3 className={styles.cardBookDetail__content__title}>
          accélération divine
        </h3>
        <h4 className={styles.cardBookDetail__content__subtitle}>
          <span
            className={styles.cardBookDetail__content__subtitle__label}
          ></span>
          <span className={styles.cardBookDetail__content__subtitle__author}>
            {" "}
            De jean clément diambilay
          </span>
        </h4>
        <div className={styles.cardBookDetail__content__priceBox}>
          <span className={styles.cardBookDetail__content__priceBox__price}>
            {" "}
            20.00 ${" "}
          </span>
          <span className={styles.cardBookDetail__content__priceBox__btnBox}>
            <Button
              hrefUrl={`/blog/`}
              textBtn="commander"
              className={
                styles.cardBookDetail__content__priceBox__btnBox__button
              }
              icon={<IconLinkExternal />}
              positionIcon="right"
            />
          </span>
        </div>

        <div className={styles.cardBookDetail__content__description}>
          Quatrième de couverture Ferdinand Brun, vieux monsieur bougon qui
          passe son temps à embêter ses voisins, perd sa chienne, Daisy. Il est
          dé- vasté. Juliette, une fillette, et sa grand-mère Béatrice,
          passionnée d'informatique à 93 ans, le forcent à se remettre d'aplomb
          et à changer.
        </div>
        <div className={styles.cardBookDetail__content__main}>
          <table className={styles.cardBookDetail__table}>
            <div className={styles.cardBookDetail__table__group}>
              <tr className={styles.cardBookDetail__table__group__row}>
                <td className={styles.cardBookDetail__table__group__row__data}>
                  Editeurs
                </td>
                <td className={styles.cardBookDetail__table__group__row__data}>
                  ECKI publications
                </td>
              </tr>
              <tr className={styles.cardBookDetail__table__group__row}>
                <td className={styles.cardBookDetail__table__group__row__data}>
                  date de parution
                </td>
                <td className={styles.cardBookDetail__table__group__row__data}>
                  Décembre 2022
                </td>
              </tr>
              <tr className={styles.cardBookDetail__table__group__row}>
                <td className={styles.cardBookDetail__table__group__row__data}>
                  format
                </td>
                <td className={styles.cardBookDetail__table__group__row__data}>
                  14cm x 21cm
                </td>
              </tr>
              <tr className={styles.cardBookDetail__table__group__row}>
                <td className={styles.cardBookDetail__table__group__row__data}>
                  Nombre pages
                </td>
                <td className={styles.cardBookDetail__table__group__row__data}>
                  128 pages
                </td>
              </tr>
            </div>
            <div className={styles.cardBookDetail__table__group}>
              <tr className={styles.cardBookDetail__table__group__row}>
                <td className={styles.cardBookDetail__table__group__row__data}>
                  Poids
                </td>
                <td className={styles.cardBookDetail__table__group__row__data}>
                  128 pages
                </td>
              </tr>
              <tr className={styles.cardBookDetail__table__group__row}>
                <td className={styles.cardBookDetail__table__group__row__data}>
                  langues
                </td>
                <td className={styles.cardBookDetail__table__group__row__data}>
                  Français
                </td>
              </tr>
              <tr className={styles.cardBookDetail__table__group__row}>
                <td className={styles.cardBookDetail__table__group__row__data}>
                  ISBN
                </td>
                <td className={styles.cardBookDetail__table__group__row__data}>
                  978-2-7499-4559-0
                </td>
              </tr>
              <tr className={styles.cardBookDetail__table__group__row}>
                <td className={styles.cardBookDetail__table__group__row__data}>
                  EAN
                </td>
                <td className={styles.cardBookDetail__table__group__row__data}>
                  9782749945590
                </td>
              </tr>
            </div>
          </table>
        </div>
        <div className={styles.cardBookDetail__content__socialsMedias}>
          <div className={styles.cardBookDetail__content__socialsMedias__label}>
            partager sur:
          </div>
          <div
            className={styles.cardBookDetail__content__socialsMedias__content}
          >
            <Facebook />
            <Instagram />
            <IconWhatsapp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBookDetail;
