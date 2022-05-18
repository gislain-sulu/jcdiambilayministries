import Image from "next/image";
import React from "react";
import styles from "./cardGalery.module.scss";

const CardGalery = ({ picturePrevieuw, albumName, datePublication }) => {
  return (
    <div className={styles.cardGalery}>
      <div className={styles.cardGalery__picturePrevieuw}>
        <Image src={picturePrevieuw} loading="lazy" width={300} height={300} />
      </div>
      <h4 className={styles.cardGalery__albumName}>{albumName}</h4>
      <div className={styles.cardGalery__datePublication}>
        <span>Publiées le: |</span> <span>{datePublication}</span>
      </div>
    </div>
  );
};

export default CardGalery;
