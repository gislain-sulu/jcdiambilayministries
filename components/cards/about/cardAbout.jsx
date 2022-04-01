import Image from "next/image";
import React from "react";
import styles from "./cardAbout.module.scss";

const CardAbout = ({ picture, title, subtitle, text }) => {
  return (
    <div className={styles.cardAbout}>
      <div className={styles.cardAbout__iconBox}>
        <Image src={picture} width={100} height={100} loading="lazy" />
      </div>
      <h4 className={styles.cardAbout__title}>
        <strong> {title}</strong>
      </h4>
      <h5 className={styles.cardAbout__subtitle}>{subtitle}</h5>
      <p className={styles.cardAbout__text}>{text}</p>
    </div>
  );
};

export default CardAbout;
