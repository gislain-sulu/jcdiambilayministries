import Image from "next/image";
import React from "react";
import {
  Facebook,
  IconQuote_4,
  IconWhatsapp,
  Instagram,
} from "../../icons/icon";
import styles from "./cardCitationlist.module.scss";

const CardCitationList = ({ pictureUrl, pictureAlt, text }) => {
  return (
    <div className={styles.cardCitationlist}>
      <div className={styles.cardCitationlist__pictureBox}>
        <Image
          src={pictureUrl}
          alt={pictureAlt}
          width="300px"
          height="300px"
          loading="lazy"
          className={styles.cardCitationlist__pictureBox__picture}
        />
      </div>
      <blockquote className={styles.cardCitationlist__modal}>
        <span className={styles.cardCitationlist__modal__icon}>
          <IconQuote_4 />
        </span>
        <span className={styles.cardCitationlist__modal__textBox}>
          <p className={styles.cardCitationlist__modal__textBox__text}>
            {text}
          </p>
        </span>
        <span className={styles.cardCitationlist__modal__author}>
          <cite className={styles.cardCitationlist__modal__author__cite}>
            Jean Clément Diambilay
          </cite>
        </span>
        <div className={styles.cardCitationlist__modal__socialsMedias}>
          <span
            className={styles.cardCitationlist__modal__socialsMedias__label}
          >
            {" "}
            partager sur:{" "}
          </span>
          <div
            className={styles.cardCitationlist__modal__socialsMedias__content}
          >
            <Facebook />
            <Instagram />
            <IconWhatsapp />
          </div>
        </div>
      </blockquote>
    </div>
  );
};

export default CardCitationList;
