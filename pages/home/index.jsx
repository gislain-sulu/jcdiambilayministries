import React from "react";
import styles from "./home.module.scss";
import Bapteme from "../../components/sections/bapteme/bapteme";
import Blog from "../../components/sections/blog/blog";
import Contact from "../../components/sections/contact/contact";
import SectionCitation from "../../components/sections/citation/citation";
import Image from "next/image";
import Button from "../../components/button/button";
import { IconAmazone, IconLinkExternal } from "../../components/icons/icon";
import { MyCarousel } from "../../components/carousel/carousel";

const Accuiel = () => {
  return (
    <div className={styles.home}>
      <section className={styles.home__mobile}>
        <MyCarousel>
          <div className={styles.home__mobile__hello}>
            <div className={styles.home__mobile__hello__textBox}>
              <div className="wrapper">
                <h1 className={styles.home__mobile__hello__textBox__title}>
                  <span>bienvenu(e) a</span>
                  <span>www.jcdiambilayministries.org</span>
                </h1>
              </div>
            </div>

            <div className={styles.home__mobile__hello__pictureBox}></div>
          </div>
          <div className={styles.home__mobile__slider}>
            <div className={styles.home__mobile__slider__pictureBox}>
              <Image
                src="/assets/images/mobile/slider_mobile_3.jpg"
                layout="fill"
                alt=" Apotre jean clément diambilay"
                loading="lazy"
                quality="full"
                className={styles.home__pictureBox__picture}
              />
            </div>
            <div className={styles.home__mobile__slider__textBox}></div>
          </div>
          <div className={styles.home__mobile__slider}>
            <div className={styles.home__mobile__slider__pictureBox}>
              <Image
                src="/assets/images/mobile/slide_acceleratioon_divine_mobile_v.jpg"
                layout="fill"
                alt=" Apotre jean clément diambilay"
                loading="lazy"
                quality="full"
                className={styles.home__pictureBox__picture}
              />
            </div>

            <div className={styles.home__mobile__slider__textBox}>
              <div
                className={`${styles.home__mobile__slider__textBox__wrapper} wrapper`}
              >
                <div className={styles.home__mobile__slider__textBox__content}>
                  <h2
                    className={`${styles.home__mobile__slider__textBox__content__title} h2`}
                  >
                    <strong
                      className={
                        styles.home__mobile__slider__textBox__content__title__strong
                      }
                    >
                      nouveau livre
                    </strong>
                    <strong
                      className={
                        styles.home__mobile__slider__textBox__content__title__strong
                      }
                    >
                      de l'apôtre jean clement diambilay
                    </strong>
                  </h2>
                  <p
                    className={`${styles.home__mobile__slider__textBox__content__subtitle} p`}
                  >
                    disponible en vente dans <strong>les librairies </strong> et
                    sur toutes les plateformes <strong>amazone</strong>
                  </p>

                  <div
                    className={`${styles.home__mobile__slider__textBox__content__btnBox} btnBox`}
                  >
                    <Button
                      hrefUrl={`/blog/`}
                      textBtn="passez votre commande"
                      className={
                        styles.home__mobile__slider__textBox__content__btnBox__btn
                      }
                      icon={<IconLinkExternal />}
                      positionIcon="right"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.home__mobile__slider}>
            <div className={styles.home__mobile__slider__pictureBox}>
              <Image
                src="/assets/images/mobile/slide_benediction_independance_financiere_v1.jpg"
                layout="fill"
                alt=" Apotre jean clément diambilay"
                loading="lazy"
                quality="full"
                className={styles.home__pictureBox__picture}
              />
            </div>

            <div className={styles.home__mobile__slider__textBox}>
              <div
                className={`${styles.home__mobile__slider__textBox__wrapper} wrapper`}
              >
                <div className={styles.home__mobile__slider__textBox__content}>
                  <h2
                    className={`${styles.home__mobile__slider__textBox__content__title} h2`}
                  >
                    <strong
                      className={
                        styles.home__mobile__slider__textBox__content__title__strong
                      }
                    >
                      nouveau livre
                    </strong>
                    <strong
                      className={
                        styles.home__mobile__slider__textBox__content__title__strong
                      }
                    >
                      de l'apôtre jean clement diambilay
                    </strong>
                  </h2>
                  <p
                    className={`${styles.home__mobile__slider__textBox__content__subtitle} p`}
                  >
                    disponible en vente dans <strong>les librairies </strong> et
                    sur toutes les plateformes <strong>amazone</strong>
                  </p>

                  <div
                    className={`${styles.home__mobile__slider__textBox__content__btnBox} btnBox`}
                  >
                    <Button
                      hrefUrl={`/blog/`}
                      textBtn="passez votre commande"
                      className={
                        styles.home__mobile__slider__textBox__content__btnBox__btn
                      }
                      icon={<IconLinkExternal />}
                      positionIcon="right"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.home__mobile__slider}>
            <div className={styles.home__mobile__slider__pictureBox}>
              <Image
                src="/assets/images/mobile/slider_mobile_2.jpg"
                width="1000%"
                height="1000%"
                alt=" Apotre jean clément diambilay"
                loading="lazy"
                quality="full"
                className={styles.home__pictureBox__picture}
              />
            </div>
            <div className={styles.home__mobile__slider__textBox}></div>
          </div>
        </MyCarousel>
      </section>
      <section className={styles.home__headerBox}>
        <MyCarousel>
          <div className={styles.home__headerBox__hello}>
            <div
              className={`${styles.home__headerBox__hello__wrapper} wrapper`}
            >
              <div className={styles.home__headerBox__hello__content}>
                <div
                  className={styles.home__headerBox__hello__content__textBox}
                >
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
                ></div>
              </div>
            </div>
          </div>
          <div className={styles.home__headerBox__slider}>
            <div className={styles.home__headerBox__slider__textBox}>
              <div
                className={`${styles.home__headerBox__slider__textBox__wrapper} wrapper`}
              >
                <div className="wrapper">
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
                        de l'apôtre jean clement diambilay
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
            </div>
            <div className={styles.home__headerBox__slider__image}>
              <Image
                src="/assets/images/sliders/slide__acceleration_divine_web.jpg"
                width="1600"
                height="900"
                quality="full"
                loading="lazy"
                className={styles.home__headerBox__slider__image__picture}
              />
            </div>
          </div>

          <div className={styles.home__headerBox__slider}>
            <div className={styles.home__headerBox__slider__textBox}>
              <div
                className={`${styles.home__headerBox__slider__textBox__wrapper} wrapper`}
              >
                <div className="wrapper">
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
                        de l'apôtre jean clement diambilay
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
            </div>

            <div className={styles.home__headerBox__slider__image}>
              <Image
                src="/assets/images/sliders/slide__benediction_independance_financiere_web.jpg"
                width="1600"
                height="900"
                quality="full"
                loading="lazy"
                className={styles.home__headerBox__slider__image__picture}
              />
            </div>
          </div>
        </MyCarousel>
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

export default Accuiel;
