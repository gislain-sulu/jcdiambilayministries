import React from "react";
import styles from "./home.module.scss";
import Bapteme from "../../components/sections/bapteme/bapteme";
import Blog from "../../components/sections/blog/blog";
import Contact from "../../components/sections/contact/contact";
import SectionCitation from "../../components/sections/citation/citation";
import Image from "next/image";
import Button from "../../components/button/button";
import { IconAmazone, IconLinkExternal } from "../../components/icons/icon";
import { Mycarousel } from "../../components/carousel/carousel";

const Accuiel = ({ posts }) => {
  console.log(posts);
  return (
    <div className={styles.home}>
      <section className={styles.home__headerBox}>
        {/* <Mycarousel> */}
        <div className={styles.home__headerBox__hello}>
          <div className={`${styles.home__headerBox__hello__wrapper} wrapper`}>
            <div className={styles.home__headerBox__hello__content}>
              <div className={styles.home__headerBox__hello__content__textBox}>
                <div className={styles.home__hello}>
                  <h1 className={`${styles.home__hello__title} h1`}>
                    <span className={styles.home__hello__title__hello}>
                      {" "}
                      bienvenu(e) a
                    </span>
                    <span className={styles.home__hello__title__nameSite}>
                      www.jcdiambilayministries.org
                    </span>
                  </h1>
                </div>
              </div>
              <div
                className={styles.home__headerBox__hello__content__pictureBox}
              >
                <Image
                  src="/assets/images/backgrounds/apotre_jean_clement_diambilay_v1.png"
                  width="652"
                  height="829"
                  alt=" Apotre jean clément diambilay"
                  loading="lazy"
                  quality="full"
                  className={styles.home__pictureBox__picture}
                />
              </div>
            </div>
          </div>
        </div>
        {/* 
          <div className={styles.home__headerBox__slider}>
            <div className={styles.home__headerBox__slider__textBox}>
              <div
                className={`${styles.home__headerBox__slider__textBox__wrapper} wrapper`}
              >
                <div
                  className={styles.home__headerBox__slider__textBox__content}
                >
                  <h2
                    className={`${styles.home__headerBox__slider__textBox__content__title} h2`}
                  >
                    <strong
                      className={
                        styles.home__headerBox__slider__textBox__content__title__strong
                      }
                    >
                      nouveau livre
                    </strong>
                    <strong
                      className={
                        styles.home__headerBox__slider__textBox__content__title__strong
                      }
                    >
                      de l'apotre jean clement diambilay
                    </strong>
                  </h2>
                  <p
                    className={`${styles.home__headerBox__slider__textBox__content__subtitle} p`}
                  >
                    <span>disponible en vente</span>
                    <span>
                      dans les librairies et sur toutes les plateformes
                    </span>
                    <span>
                      <IconAmazone />
                    </span>
                  </p>

                  <div
                    className={`${styles.home__headerBox__slider__textBox__content__btnBox} btnBox`}
                  >
                    <Button
                      hrefUrl={`/blog/`}
                      textBtn="passez votre commande"
                      className={
                        styles.home__headerBox__slider__textBox__content__btnBox__btn
                      }
                      icon={<IconLinkExternal />}
                      positionIcon="right"
                    />
                  </div>
                </div>
                <div></div>
              </div>
            </div>
            <div className={styles.home__headerBox__slider__image}>
              <Image
                src="/assets/images/backgrounds/slider/Slider_0.jpg"
                width="2000"
                height="1200"
                quality="full"
                loading="lazy"
                className={styles.home__headerBox__slider__pub__picture}
              />
            </div>
          </div>

          <div className={styles.home__headerBox__slider}>
            <div className={styles.home__headerBox__slider__textBox}>
              <div
                className={`${styles.home__headerBox__slider__textBox__wrapper} wrapper`}
              >
                <div
                  className={styles.home__headerBox__slider__textBox__content}
                >
                  <h2
                    className={`${styles.home__headerBox__slider__textBox__content__title} h2`}
                  >
                    <strong
                      className={
                        styles.home__headerBox__slider__textBox__content__title__strong
                      }
                    >
                      nouveau livre
                    </strong>
                    <strong
                      className={
                        styles.home__headerBox__slider__textBox__content__title__strong
                      }
                    >
                      de l'apotre jean clement diambilay
                    </strong>
                  </h2>
                  <p
                    className={`${styles.home__headerBox__slider__textBox__content__subtitle} p`}
                  >
                    <span>disponible en vente</span>
                    <span>
                      dans les librairies et sur toutes les plateformes
                    </span>
                    <span>
                      <IconAmazone />
                    </span>
                  </p>

                  <div
                    className={`${styles.home__headerBox__slider__textBox__content__btnBox} btnBox`}
                  >
                    <Button
                      hrefUrl={`/blog/`}
                      textBtn="passez votre commande"
                      className={
                        styles.home__headerBox__slider__textBox__content__btnBox__btn
                      }
                      icon={<IconLinkExternal />}
                      positionIcon="right"
                    />
                  </div>
                </div>
                <div></div>
              </div>
            </div>
            <div className={styles.home__headerBox__slider__image}>
              <Image
                src="/assets/images/backgrounds/slider/Slider_1_b.jpg"
                width="2000"
                height="1200"
                quality="full"
                loading="lazy"
                className={styles.home__headerBox__slider__pub__picture}
              />
            </div>
          </div>*/}
        {/* </Mycarousel> */}
      </section>
      <section className={styles.home__content}>
        <Blog />
        <SectionCitation />
        <Bapteme />
        <Contact />
      </section>
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return {
    props: { posts },
  };
}

export default Accuiel;
