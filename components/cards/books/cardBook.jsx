import Image from "next/image";
import React from "react";
import { IconBook, IconEye, IconUser } from "../../icons/icon";
import styles from "./cardBook.module.scss";
import bookPicture from "../../../public/assets/images/books/cover_acceleration_divine_book.jpg";
import Button from "../../button/button";

const CardBook = ({
  picture,
  alt,
  title,
  author = "Jean-clément Diambilay",
  description,
  slug,
  onClick,
}) => {
  return (
    <div className={styles.cardBook}>
      <div className={styles.cardBook__pictureBox}>
        <Image
          src={picture}
          alt={` cover du livre ${alt}`}
          width="200"
          height="300"
        />

        {/* <img src={picture} alt={alt} /> */}
      </div>
      <div className={styles.cardBook__content}>
        <h4 className={styles.cardBook__content__titleBox}>
          <span className={styles.cardBook__content__titleBox__title}>
            {title.length > 50 ? `${title.slice(0, 50)}...` : `${title}`}
          </span>
          <span className={styles.cardBook__content__titleBox__icon}>
            <IconBook />
          </span>
        </h4>
        <div className={styles.cardBook__content__subtitle}>
          <span className={styles.cardBook__content__subtitle__icon}>
            <IconUser />
          </span>
          <span className={styles.cardBook__content__subtitle__author}>
            {author}
          </span>
        </div>
        <div className={styles.cardBook__content__likeBox}></div>
        <p className={styles.cardBook__content__description}>{description}</p>
        <div className={styles.cardBook__content__btnBox}>
          <Button
            hrefUrl={`/books/${slug}`}
            textBtn="voir detail"
            className={styles.cardBook__content__btnBox__btn}
            icon={<IconEye />}
            onClick={onClick}
          />
        </div>
      </div>
    </div>
  );
};
export default CardBook;
