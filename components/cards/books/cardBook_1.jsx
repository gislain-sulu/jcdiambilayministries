import Image from "next/image";
import React from "react";
import Button from "../../button/button";
import { IconBook, IconEye } from "../../icons/icon";
import styles from "./cardBook_1.module.scss";

const CardBook_1 = ({ src, alt, title, format, author, price, urlBtn }) => {
  return (
    <div className={styles.book}>
      <div className={styles.book__pictureBox}>
        <Image
          className={styles.book__pictureBox__picture}
          layout="fill"
          src={src}
          alt={alt}
          loading="lazy"
        />
      </div>
      <div className={styles.book__modal}>
        <span className={styles.book__modal__iconBox}>
          <IconBook />
        </span>
        <h4 className={styles.book__modal__title}>{title}</h4>
        <span className={styles.book__modal__format}>{format}</span>
        <span className={styles.book__modal__othor}>{author}</span>
        <span className={styles.book__modal__price}>{price} US</span>
        <span className={styles.book__modal__btnBox}>
          <Button
            hrefUrl={urlBtn}
            textBtn="voir detail"
            className={styles.book__modal__btnBox__button}
            icon={<IconEye />}
          />
        </span>
      </div>
    </div>
  );
};

export default CardBook_1;
