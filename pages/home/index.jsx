import React, { useContext } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import styles from "./home.module.scss";
import Bapteme from "../../components/sections/bapteme/bapteme";
import Blog from "../../components/sections/blog/blog";
import Contact from "../../components/sections/contact/contact";
import SectionCitation from "../../components/sections/citation/citation";
import Image from "next/image";
import Button from "../../components/button/button";
import { IconAmazone, IconLinkExternal } from "../../components/icons/icon";
import book_acceleration_divine from "../../public/assets/images/sliders/slide__acceleration_divine_web.jpg";
import book_benediction_independance_financiere from "../../public/assets/images/sliders/slide__benediction_independance_financiere_web.jpg";
import AppContext from "../../context/AppContext";

const Accuiel = () => {
  const value = useContext(AppContext);

  const { name } = value.state;

  console.log(name);

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  const itemsMobile = [
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
    </div>,
    <div className={styles.home__mobile__slider}>
      <div className={styles.home__mobile__slider__pictureBox}>
        <Image
          src="https://res.cloudinary.com/personnal/image/upload/v1650930890/slide_acceleratioon_divine_mobile_v_bzjbxu.jpg"
          alt="cover du livre accélération divine"
          loading="lazy"
          quality="full"
          className={styles.home__pictureBox__picture}
          layout="fill"
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
                de l'Apôtre Jean-Clément Diambilay
              </strong>
            </h2>
            <p
              className={`${styles.home__mobile__slider__textBox__content__subtitle} p`}
            >
              disponible en vente dans <strong>les librairies </strong> et sur
              toutes les plateformes <strong>amazone</strong>
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
    </div>,

    <div className={styles.home__mobile__slider}>
      <div className={styles.home__mobile__slider__pictureBox}>
        <Image
          src="https://res.cloudinary.com/personnal/image/upload/v1650931143/slide_benediction_independance_financiere_v1_rjp4ny.jpg"
          alt="cover du livre bénédiction de l'indépendance financière"
          loading="lazy"
          quality="full"
          className={styles.home__pictureBox__picture}
          layout="fill"
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
                de l'Apôtre Jean-clément Diambilay
              </strong>
            </h2>
            <p
              className={`${styles.home__mobile__slider__textBox__content__subtitle} p`}
            >
              disponible en vente dans <strong>les librairies </strong> et sur
              toutes les plateformes <strong>amazone</strong>
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
    </div>,
  ];

  const itemsDesktop = [
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
          ></div>
        </div>
      </div>
    </div>,
    <div className={styles.home__headerBox__slider}>
      <div className={styles.home__headerBox__slider__textBox}>
        <div
          className={`${styles.home__headerBox__slider__textBox__wrapper} wrapper`}
        >
          <div className="wrapper">
            <div className={styles.home__headerBox__slider__textBox__content}>
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
                  de l'Apôtre Jean-Clément Diambilay
                </strong>
              </h2>
              <p
                className={`${styles.home__headerBox__slider__textBox__content__subtitle} p`}
              >
                <span>disponible en vente</span>
                <span>dans les librairies et sur toutes les plateformes</span>
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
          src="https://res.cloudinary.com/personnal/image/upload/v1650932594/slide__acceleration_divine_web_emm92z.jpg"
          quality="full"
          loading="lazy"
          className={styles.home__headerBox__slider__image__picture}
          layout="fill"
        />
      </div>
    </div>,

    <div className={styles.home__headerBox__slider}>
      <div className={styles.home__headerBox__slider__textBox}>
        <div
          className={`${styles.home__headerBox__slider__textBox__wrapper} wrapper`}
        >
          <div className="wrapper">
            <div className={styles.home__headerBox__slider__textBox__content}>
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
                  de l'Apôtre Jean-Clément Diambilay
                </strong>
              </h2>
              <p
                className={`${styles.home__headerBox__slider__textBox__content__subtitle} p`}
              >
                <span>disponible en vente</span>
                <span>dans les librairies et sur toutes les plateformes</span>
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
          src="https://res.cloudinary.com/personnal/image/upload/v1650932793/slide__benediction_independance_financiere_web_i6qqvc.jpg"
          quality="full"
          loading="lazy"
          className={styles.home__headerBox__slider__image__picture}
          layout="fill"
        />
      </div>
    </div>,
  ];

  return (
    <div className={styles.home}>
      <section className={styles.home__mobile}>
        <AliceCarousel
          autoPlay
          autoPlayControls
          autoPlayStrategy="none"
          autoPlayInterval={2000}
          animationDuration={1000}
          animationType="fadein"
          infinite
          touchTracking={true}
          disableDotsControls
          disableButtonsControls
          items={itemsMobile}
          controlsStrategy="alternate"
        />
      </section>
      <section className={styles.home__headerBox}>
        <AliceCarousel
          autoPlay
          autoPlayControls
          autoPlayStrategy="none"
          autoPlayInterval={2000}
          animationDuration={1000}
          animationType="fadein"
          infinite
          touchTracking={true}
          disableDotsControls
          disableButtonsControls
          items={itemsDesktop}
          controlsStrategy="alternate"
        />
      </section>
      <ul className={styles.home__content}>
        <li className={styles.home__content__blog}>
          <Blog />
        </li>
        <li className={styles.home__content__citation}>
          <SectionCitation />
        </li>
        <li className={styles.home__content__bapteme}>
          <Bapteme />
        </li>
        <li className={styles.home__content__contact}>
          <Contact />
        </li>
      </ul>
    </div>
  );
};

export default Accuiel;
