import React from "react";
import { loadPosts } from "../../lib/fetch-books";
import styles from "./books.module.scss";
import { IconDonation } from "../../components/icons/icon";
import SectionPage from "../../components/sections/section";
import CardBook_1 from "../../components/cards/books/cardBook_1";
import MyCarousel from "../../components/carousel/carousel";

const Books = () => {
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

  return (
    <div className={styles.books}>
      <div className={styles.books__titleBox}>
        <div className={styles.books__titleBox__decoration}></div>
        <h1 className={styles.books__titleBox__title}>
          {" "}
          <span>jc diambilay </span> <span> books</span>{" "}
        </h1>
      </div>
      <div className={styles.books__content}>
        <div className={`${styles.books__content__wrapper} wrapper`}>
          <div className={styles.books__content__intro}>
            <p className={styles.books__content__intro__text}>
              <strong className={styles.books__content__intro__text__strong}>
                Une envie de lecture?
              </strong>{" "}
              Consultez nos sélections Thématiques
            </p>
          </div>
          <div className={styles.books__content__newsBooksCollection}>
            <SectionPage
              titleSection="dernieres parutions"
              classname={`${styles.books__content__newsBooksCollection__box}`}
            >
              <CardBook_1 />
              <CardBook_1 />
            </SectionPage>
          </div>
          <div className={styles.books__content__collectionCielOuvert}>
            <SectionPage
              titleSection="collection ciel ouvert"
              classname={`${styles.books__content__collectionCielOuvert__box}`}
            >
              <CardBook_1 />
              <CardBook_1 />
            </SectionPage>
          </div>

          <div className={styles.books__content__pointsVentes}>
            <h3 className={styles.books__content__pointsVentes__title}>
              Nos points de vente
            </h3>
            <table
              className={styles.books__content__pointsVentes__table}
              summary="un tableau listant l'ensemble de points de vente des livres de l'apotre jean clement diambilay"
            >
              <thead
                className={styles.books__content__pointsVentes__table__head}
              >
                <tr>
                  <th>Villes/Pays</th>
                  <th>Points de vente</th>
                  <th>Noms</th>
                  <th>Contact</th>
                </tr>
              </thead>
              <tbody
                className={styles.books__content__pointsVentes__table__body}
              >
                <tr>
                  <td>Lubumbashi / RD Congo</td>
                  <td>Librairie MAM</td>
                  <td>Lubumbashi / RD Congo</td>
                  <td>+243 000 000 000</td>
                </tr>
                <tr>
                  <td>Kinshasa / RD Congo</td>
                  <td>Ecki Pulbications</td>
                  <td>Lubumbashi / RD Congo</td>
                  <td>+243 000 000 000</td>
                </tr>
                <tr>
                  <td>Abijan / Cote d’Ivoire</td>
                  <td>Librairie Paulas</td>
                  <td>Lubumbashi / RD Congo</td>
                  <td>+243 000 000 000</td>
                </tr>
                <tr>
                  <td>Boma / RD Congo</td>
                  <td>Librairie GOM</td>
                  <td>Lubumbashi / RD Congo</td>
                  <td>+243 000 000 000</td>
                </tr>
                <tr>
                  <td>Libreville / Gabon</td>
                  <td>Librairie Peroru</td>
                  <td>Lubumbashi / RD Congo</td>
                  <td>+243 000 000 000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
