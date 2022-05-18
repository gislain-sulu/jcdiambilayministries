import React from "react";
import CardAbout from "../../components/cards/about/cardAbout";
import styles from "./about.module.scss";
import { IconDonation } from "../../components/icons/icon";
import MEANSOFACTION_DATA from "../../models/MEANSOFACTION_DATA";
import HeaderPage from "../../components/headerPage/headerPage";
import Breadcrumd from "../../components/breadcrumd/breadcrumd";

const About = () => {
  const data = [
    {
      id: 1,
      title: "notre vision",
      picture: "/assets/icons/Icon_vision.svg",
      subtitle:
        "inspirer l'excellence et accélere l'accomplissement des déstinés",
      icon: IconDonation,
      text: "...je ne pense pas l'avoir saisi, mais je fais une chose : oubliant ce qui est en arrière  et me portant vers ce qui est en avant, je cours vers le but , pour remporter le prix de la vocation céleste",
    },
    {
      id: 2,
      title: "notre mission",
      picture: "/assets/icons/Icon_mission.svg",
      subtitle: "",
      icon: IconDonation,
      text: "Réaliser des œuvres excellentes, produire et diffuser des contenus pertinents pour booster les chrétiens à atteindre des progrès évidents dans tous les domaines de leur vie.",
    },
    {
      id: 3,
      title: "notre but",
      picture: "/assets/icons/Icon_but.svg",
      subtitle: "",
      icon: IconDonation,
      text: "Offrir le ministère de l’apôtre Jean-Clément DIAMBILAY en main d’association aux Églises locales et Églises corps du Christ dans plusieurs nations à travers le monde",
    },
    {
      id: 4,
      title: "NOTRE LEITMOTIVE",
      picture: "/assets/icons/Icon_leitmotiv.svg",

      subtitle: "",
      icon: IconDonation,
      text: "« Avec Dieu nous ferons des exploits et Il écrasera nos ennemis. » (Psaumes 60 : 12)",
    },
  ];

  let numerotation = 1;

  const listBreadcrumd = [
    {
      id: 1,
      href: "/",
      label: "Home",
    },
    {
      id: 2,

      label: "About",
    },
  ];

  return (
    <div className="container">
      <div className={styles.aboutMe}>
        <HeaderPage
          title="A propos de nous"
          isWithFieldSearch={false}
          listOriginUrl={<Breadcrumd list={listBreadcrumd} />}
        />

        <div className={styles.aboutMe__content}>
          <div className={`${styles.aboutMe__content__wrapper} wrapper`}>
            <p className={styles.aboutMe__content__text}>
              <strong className={styles.aboutMe__content__text__strong}>
                JC DIAMBILAY Ministries
              </strong>{" "}
              est une organisation chrétienne fondée par{" "}
              <strong className={styles.aboutMe__content__text__strong}>
                l’apôtre Jean-Clément
              </strong>
              , qui au-delà d’être Visionnaire et Pasteur Principal des églises
              de la Communauté Évangélique{" "}
              <strong className={styles.aboutMe__content__text__strong}>
                Nouvelle Citée de David{" "}
              </strong>
              dans le monde, veut être une bénédiction pour des mil-liers de
              chrétiens du corps du Christ dans les nations.{" "}
              <strong>JC DIAMBILAY</strong> Ministries comp-tent en son sein
              plusieurs branches ou ministères pour réaliser avec succès sa
              vision. <br /> <br />
              <strong className={styles.aboutMe__content__text__strong}>
                <em className={styles.aboutMe__content__text__em}>
                  Qui est-il, l’Apôtre Jean-Clément DIAMBILAY ?
                </em>
              </strong>{" "}
              Fils spirituel du feu{" "}
              <strong className={styles.aboutMe__content__text__strong}>
                Pasteur Albert LUKUSA LUVUNGU
              </strong>
              ,
              <strong>
                il est prédicateur de l’évangile, conférencier international,
                entrepre-neur à succès à la tête de plusieurs entreprises,
                promoteur des jeunes ministères chrétiens, phi-lanthrope engagé,
                promoteur de la Radio et Télévision LA COLOMBE, conseiller des
                hommes d’Etats, etc. Il est marié à Viviane Maniatis DIAMBILAY
                et est père de cinq en-fants, dont quatre garçons et une fille.
              </strong>
            </p>
          </div>
        </div>
        <div className={styles.aboutMe__cardsBox}>
          <div className={`${styles.aboutMe__cardsBox__wrapper} wrapper`}>
            {data.map((infosCard) => (
              <CardAbout
                picture={infosCard.picture}
                title={infosCard.title}
                subtitle={infosCard.subtitle}
                text={infosCard.text}
                icon={infosCard.icon}
              />
            ))}
          </div>
        </div>
        <div className={styles.aboutMe__meansOfAction}>
          <div className={styles.aboutMe__meansOfAction__titleBox}>
            <div
              className={styles.aboutMe__meansOfAction__titleBox__decoration}
            ></div>
            <h2 className={styles.aboutMe__meansOfAction__titleBox__title}>
              nos moyens d'action
            </h2>
          </div>
          <div className={styles.aboutMe__meansOfAction__content}>
            <div
              className={`${styles.aboutMe__meansOfAction__content} wrapper`}
            >
              <ol className={styles.aboutMe__meansOfAction__content__list}>
                {MEANSOFACTION_DATA.map((item) => (
                  <li
                    className={
                      styles.aboutMe__meansOfAction__content__list__item
                    }
                  >
                    {`${numerotation++}.${item}`}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
