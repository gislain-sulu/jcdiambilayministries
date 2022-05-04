import React, { useState, useEffect, useContext } from "react";
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
import AppContext from "../../context/AppContext";
import axios from "axios";
import Spiner from "../../components/spinner/spiner";
import CardBlog from "../../components/cards/blog/cardBlog";
import CardCitationList from "../../components/cards/citations/cardCitationlist";
import Link from "next/link";

const Accuiel = () => {
  const [lastMessages, setLastMessages] = useState([]);
  const [lastCitations, setLastCitations] = useState([]);

  const { API_URL } = process.env;

  useEffect(async () => {
    try {
      const res = await axios.get(
        `${API_URL}/messages?pagination[page]=1&pagination[pageSize]=3&populate=*`
      );

      const datas = res.data;

      const { data } = datas;

      setLastMessages(data);
    } catch (err) {
      return { err };
    }
  }, []);

  useEffect(async () => {
    try {
      const res = await axios.get(
        `${API_URL}/citations?pagination[page]=1&pagination[pageSize]=3&populate=*`
      );

      const datas = res.data;

      const { data } = datas;

      setLastCitations(data);
    } catch (err) {
      return { err };
    }
  }, []);

  const value = useContext(AppContext);

  const { name } = value.state;

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
                hrefUrl={`https://www.amazon.fr/Acc%C3%A9l%C3%A9ration-divine-JCD-Jean-Cl%C3%A9ment-Diambilay/dp/B09WQ4SCKP`}
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
                hrefUrl={`https://www.amazon.fr/B%C3%A9n%C3%A9diction-lInd%C3%A9pendance-Financi%C3%A8re-Jean-Cl%C3%A9ment-Diambilay/dp/B09WWFNKHZ/ref=pd_lpo_1?pd_rd_i=B09WWFNKHZ&psc=1`}
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
                  hrefUrl={`https://www.amazon.fr/Acc%C3%A9l%C3%A9ration-divine-JCD-Jean-Cl%C3%A9ment-Diambilay/dp/B09WQ4SCKP`}
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
                  hrefUrl={`https://www.amazon.fr/B%C3%A9n%C3%A9diction-lInd%C3%A9pendance-Financi%C3%A8re-Jean-Cl%C3%A9ment-Diambilay/dp/B09WWFNKHZ/ref=pd_lpo_1?pd_rd_i=B09WWFNKHZ&psc=1`}
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
          <Blog>
            {lastMessages?.length === 0 && (
              <section className={styles.home__content__citation__loaderBox}>
                <div
                  className={styles.home__content__citation__loaderBox__loader}
                >
                  <Spiner />
                </div>
              </section>
            )}

            <AliceCarousel
              mouseTracking
              items={lastMessages?.map(({ attributes }) => (
                <CardBlog
                  key={attributes.id}
                  id={attributes.id}
                  picture={attributes.cover.data.attributes.url}
                  title={attributes.title}
                  author={attributes.author}
                  date={attributes.published_at}
                  description={attributes.description}
                  slug={attributes.Slug}
                />
              ))}
              responsive={responsive}
              controlsStrategy="alternate"
            />
          </Blog>
        </li>
        <li className={styles.home__content__citation}>
          <SectionCitation>
            {lastCitations?.length === 0 && (
              <section className={styles.home__content__citation__loaderBox}>
                <div
                  className={styles.home__content__citation__loaderBox__loader}
                >
                  <Spiner />
                </div>
              </section>
            )}

            <AliceCarousel
              mouseTracking
              items={lastCitations?.map(({ attributes }) => (
                <Link href={attributes.cover.data.attributes.url}>
                  <a target="_blank">
                    <CardCitationList
                      pictureUrl={attributes.cover.data.attributes.url}
                      pictureAlt={attributes.Slug}
                      text={attributes.content}
                    />
                  </a>
                </Link>
              ))}
              responsive={responsive}
              controlsStrategy="alternate"
            />
          </SectionCitation>
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
