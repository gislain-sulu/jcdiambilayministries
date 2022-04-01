import Image from "next/image";
import React from "react";
import MyCarousel from "../../carousel/carousel";
import styles from "./acceuil.module.scss";

const Acceuil = () => {
  return (
    <section className={styles.acceuil}>
      <div className={styles.acceuil__header}>
        <MyCarousel>
          <div className={styles.acceuil__header__slider__home}>
            <div
              className={`${styles.acceuil__header__slider__wrapper} wrapper`}
            >
              <div className={styles.acceuil__titleBox}>
                <h1 className={` h1 ${styles.acceuil__title}`}>
                  <span className={styles.acceuil__title__hello}>
                    bienvenue a
                  </span>{" "}
                  <br />
                  <span className={styles.acceuil__title__nameSite}>
                    www.jcdiambilayministries.org
                  </span>
                </h1>
                <span className={` h1 ${styles.acceuil__picture}`}>
                  <Image
                    src="/assets/images/backgrounds/apotre_jean_clement_diambilay.png"
                    width="666"
                    height="1000"
                    alt=" Apotre jean clément diambilay"
                    loading="lazy"
                    quality="full"
                  />
                </span>
              </div>
            </div>
          </div>

          <div className={styles.acceuil__header__slider__pub}>
            <Image
              src="/assets/images/backgrounds/slider/Slider_1.jpg"
              width="2000"
              height="500"
              quality="full"
            />
          </div>
          <div className={styles.acceuil__header__slider__pub}>
            <Image
              src="/assets/images/backgrounds/slider/Slider.jpg"
              width="2000"
              height="500"
              quality="100"
            />
          </div>
        </MyCarousel>
      </div>
    </section>
  );
};

export default Acceuil;
