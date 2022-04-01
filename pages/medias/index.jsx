import React from "react";
import styles from "./medias.module.scss";
import MEDIA_DATA from "../../models/MEDIA_DATA";
import CardMedia from "../../components/cards/media/cardMedia";

const Medias = () => {
  return (
    <div className={styles.medias}>
      <div className={styles.medias__titleBox}>
        <div className={styles.medias__titleBox__decoration}></div>
        <h2 className={styles.medias__titleBox__title}>medias</h2>
      </div>
      <div className={styles.medias__content}>
        <div className={`${styles.medias__content__wrapper} wrapper`}>
          <main className={styles.medias__content__main}>
            {MEDIA_DATA.map((data) => (
              <CardMedia
                key={data.id}
                picturePrevieuw={data.picture}
                nameMedia={data.name}
              />
            ))}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Medias;
