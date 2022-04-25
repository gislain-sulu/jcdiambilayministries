import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import formatDate from "../../../utils/formatDate";
import Button from "../../button/button";
import {
  Facebook,
  IconLinkExternal,
  IconWhatsapp,
  Instagram,
} from "../../icons/icon";
import styles from "./cardBookDetail.module.scss";

const CardBookDetail = ({
  src,
  title,
  author = "Jean-clément diambilay",
  price,
  linkAmazone,
  description,
  editor,
  dateCreate,
  format,
  nbrePages,
  poid,
  language,
  isbn,
  ean,
}) => {
  const router = useRouter();

  const getAmazoneUrl = () => {
    router.push(linkAmazone);
  };

  return (
    <div className={styles.cardBookDetail}>
      <div className={styles.cardBookDetail__pictureBox}>
        <Image
          src={src}
          alt={`cover du livre ${title}`}
          loading="lazy"
          layout="fill"
          objectFit="contain"
          className={styles.cardBookDetail__pictureBox__picture}
        />
      </div>
      <div className={styles.cardBookDetail__content}>
        <h3 className={styles.cardBookDetail__content__title}>{title}</h3>
        <h4 className={styles.cardBookDetail__content__subtitle}>
          <span
            className={styles.cardBookDetail__content__subtitle__label}
          ></span>
          <span className={styles.cardBookDetail__content__subtitle__author}>
            {" "}
            {author}
          </span>
        </h4>
        <div className={styles.cardBookDetail__content__priceBox}>
          <span className={styles.cardBookDetail__content__priceBox__price}>
            {price} $
          </span>
          <span className={styles.cardBookDetail__content__priceBox__btnBox}>
            <Button
              // hrefUrl={`${linkAmazone}`}
              textBtn="commander"
              className={
                styles.cardBookDetail__content__priceBox__btnBox__button
              }
              icon={<IconLinkExternal />}
              positionIcon="right"
              onClick={() => getAmazoneUrl()}
            />
          </span>
        </div>

        <div className={styles.cardBookDetail__content__description}>
          {description}
        </div>
        <div className={styles.cardBookDetail__content__main}>
          <table className={styles.cardBookDetail__table}>
            <div className={styles.cardBookDetail__table__group}>
              <tr className={styles.cardBookDetail__table__group__row}>
                <td className={styles.cardBookDetail__table__group__row__data}>
                  Editeurs
                </td>
                <td className={styles.cardBookDetail__table__group__row__data}>
                  {editor}
                </td>
              </tr>
              <tr className={styles.cardBookDetail__table__group__row}>
                <td className={styles.cardBookDetail__table__group__row__data}>
                  date de parution
                </td>
                <td className={styles.cardBookDetail__table__group__row__data}>
                  {formatDate(dateCreate, "YYYY")}
                </td>
              </tr>
              <tr className={styles.cardBookDetail__table__group__row}>
                <td className={styles.cardBookDetail__table__group__row__data}>
                  format
                </td>
                <td className={styles.cardBookDetail__table__group__row__data}>
                  {format}
                </td>
              </tr>
              <tr className={styles.cardBookDetail__table__group__row}>
                <td className={styles.cardBookDetail__table__group__row__data}>
                  Nombre pages
                </td>
                <td className={styles.cardBookDetail__table__group__row__data}>
                  {nbrePages}
                </td>
              </tr>
            </div>
            <div className={styles.cardBookDetail__table__group}>
              <tr className={styles.cardBookDetail__table__group__row}>
                <td className={styles.cardBookDetail__table__group__row__data}>
                  Poids
                </td>
                <td className={styles.cardBookDetail__table__group__row__data}>
                  {poid} g
                </td>
              </tr>
              <tr className={styles.cardBookDetail__table__group__row}>
                <td className={styles.cardBookDetail__table__group__row__data}>
                  langues
                </td>
                <td className={styles.cardBookDetail__table__group__row__data}>
                  {language}
                </td>
              </tr>
              <tr className={styles.cardBookDetail__table__group__row}>
                <td className={styles.cardBookDetail__table__group__row__data}>
                  ISBN
                </td>
                <td className={styles.cardBookDetail__table__group__row__data}>
                  {isbn}
                </td>
              </tr>
              <tr className={styles.cardBookDetail__table__group__row}>
                <td className={styles.cardBookDetail__table__group__row__data}>
                  EAN
                </td>
                <td className={styles.cardBookDetail__table__group__row__data}>
                  {ean}
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
