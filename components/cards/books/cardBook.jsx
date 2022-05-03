import Image from "next/image";
import React from "react";
import { IconBook, IconEye } from "../../icons/icon";
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
      <div className={styles.cardBook__boxBackground}></div>
      <div className={styles.cardBook__pictureBox}>
        <div className={styles.cardBook__pictureBox__picture}>
          {/* <Image src={picture} alt={` cover du livre ${alt}`} layout="fill" /> */}

          <img src={picture} alt={alt} />
        </div>
      </div>
      <div className={styles.cardBook__content}>
        <h4 className={styles.cardBook__content__title}>
          {title.length > 50 ? `${title.slice(0, 50)}...` : `${title}`}
          <span>
            <IconBook />
          </span>
        </h4>
        <span className={styles.cardBook__content__subtitle}>{author}</span>
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
