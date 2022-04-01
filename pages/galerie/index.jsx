import React from "react";
import styles from "./galerie.module.scss";
import GALERY_DATA from "../../models/GALERY_DATA";
import CardGalery from "../../components/cards/galery/cardGalery";
import Link from "next/link";

const Galery = () => {
  const getPicture = (pictureName) => {
    if (pictureName === "") {
      return "/assets/images/galery/default_previeuw.jpg";
    } else {
      return `/assets/images/galery/${pictureName}`;
    }
  };
  return (
    <div className={styles.galerie}>
      <div className={styles.galerie__titleBox}>
        <div className={styles.galerie__titleBox__decoration}></div>
        <h2 className={styles.galerie__titleBox__title}>galerie photo</h2>
      </div>
      <div className={styles.galerie__content}>
        <div className={`${styles.galerie__content__wrapper} wrapper`}>
          <ul className={styles.galerie__content__main}>
            {GALERY_DATA.map((data) => (
              <li className={styles.galerie__content__main__item}>
                <Link href="/">
                  <a className={styles.galerie__content__main__item__link}>
                    <CardGalery
                      picturePrevieuw={getPicture(data.picturePrevieuwName)}
                      albumName={data.album_name}
                      datePublication={data.date_publication}
                    />
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Galery;
