import Image from "next/image";
import React from "react";
import styles from "./cardMedia.module.scss";

function CardMedia({ picturePrevieuw, nameMedia }) {
  return (
    <div className={styles.cardMedia}>
      <div className={styles.cardMedia__pictureBox}>
        <Image
          layout="responsive"
          src={picturePrevieuw}
          alt={nameMedia}
          loading="lazy"
          width={177.25}
          height={177.5}
        />
      </div>
      <div className={styles.cardMedia__nameMediaBox}>
        <h4 className={styles.cardMedia__nameMediaBox__name}> {nameMedia}</h4>
      </div>
    </div>
  );
}

export default CardMedia;
