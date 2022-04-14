import Image from "next/image";
import React from "react";
import { IconBook, IconEye } from "../../icons/icon";
import styles from "./cardBook.module.scss";
import bookPicture from "../../../public/assets/images/books/cover_acceleration_divine_book.jpg";
import Button from "../../button/button";

const CardBook = () => {
  return (
    <div className={styles.cardBook}>
      <div className={styles.cardBook__boxBackground}></div>
      <div className={styles.cardBook__pictureBox}>
        <div className={styles.cardBook__pictureBox__picture}>
          <Image
            src={bookPicture}
            alt="cover book accélération divine"
            placeholder="blur"
          />
        </div>
      </div>
      <div className={styles.cardBook__content}>
        <h4 className={styles.cardBook__content__title}>
          La bénédiction de l'indépendance financiere
          <span>
            <IconBook />
          </span>
        </h4>
        <span className={styles.cardBook__content__subtitle}>
          De jean clément diambilay
        </span>
        <div className={styles.cardBook__content__likeBox}></div>
        <p className={styles.cardBook__content__description}>
          des principes divins pour accélérer votre destinée à un rythme
          beaucoup plus rapide
        </p>
        <div className={styles.cardBook__content__btnBox}>
          <Button
            hrefUrl="/"
            textBtn="voir detail"
            className={styles.cardBook__content__btnBox__btn}
            icon={<IconEye />}
          />
        </div>
      </div>
    </div>
  );
};
export default CardBook;
0;
