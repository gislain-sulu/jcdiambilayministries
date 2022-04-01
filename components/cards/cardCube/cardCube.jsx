import Image from "next/image";
import React from "react";
import styles from "./cardCube.module.scss";

const CardCube = ({ pictureUrl, imageAlt }) => {
  return (
    <div className={styles.cardCube}>
      <div className={styles.cardCube__imgBox}>
        <Image
          src={pictureUrl}
          alt={imageAlt}
          width="300"
          height="300"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default CardCube;
