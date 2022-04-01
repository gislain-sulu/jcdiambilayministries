import Image from "next/image";
import React from "react";
import Button from "../../button/button";
import { IconBook, IconEye } from "../../icons/icon";
import styles from "./cardBook_1.module.scss";

const CardBook_1 = () => {
  return (
    <div className={styles.book}>
      <div className={styles.book__pictureBox}>
        <Image
          layout="responsive"
          src="/assets/images/livres/cover/acceleration_divine.jpg"
          alt="acceleration divine"
          loading="lazy"
          width={194}
          height={289}
        />
      </div>
      <div className={styles.book__modal}>
        <span className={styles.book__modal__iconBox}>
          <IconBook />
        </span>
        <h4 className={styles.book__modal__title}>acceleration divine</h4>
        <span className={styles.book__modal__format}>Grand format</span>
        <span className={styles.book__modal__othor}>
          jean clément diambilay
        </span>
        <span className={styles.book__modal__price}>20.000 $</span>
        <span className={styles.book__modal__btnBox}>
          <Button
            hrefUrl={`/blog/`}
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
