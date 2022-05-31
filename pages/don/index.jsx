import React from "react";
import styles from "./don.module.scss";
import HeaderPage from "../../components/headerPage/headerPage";
import Breadcrumd from "../../components/breadcrumd/breadcrumd";
import Button from "../../components/button/button";

const Don = () => {
  const listBreadcrumd = [
    {
      id: 1,
      href: "/",
      label: "Home",
    },
    {
      id: 2,

      label: "Faire un Don",
    },
  ];

  return (
    <div className={styles.don}>
      <HeaderPage
        title="Faire un Don"
        isWithFieldSearch={false}
        listOriginUrl={<Breadcrumd list={listBreadcrumd} />}
      />

      <div className={styles.don__content}>
        <section className={styles.don__content__box}>
          <div className={`${styles.don__content__wrapper} wrapper`}>
            <div className={styles.don__content__box__card}>
              <h3 className={styles.don__content__box__card__title}>
                Aidez à soutenir JC Diambilay Ministries
              </h3>
              <br />
              <p className={styles.don__content__box__card__description}>
                Les personnes dans le besoin partout dans le monde sont aidées
                de manière pratique tout en écoutant le message de Jésus qui
                change la vie lorsque vous faites un don financier pour soutenir
                les actions de JC Diambilay Ministries.
              </p>
              <br />
              <em className={styles.don__content__box__card__em}>
                Montant du don :
              </em>
              <br /> <br />
              <div className={styles.don__content__box__card__pricesBox}>
                <Button
                  hrefUrl={`/transaction`}
                  textBtn="10 $"
                  className={styles.don__button}
                  icon="none"
                />
                <Button
                  hrefUrl={`/transaction`}
                  textBtn="50 $"
                  className={styles.don__button}
                  icon="none"
                />
                <Button
                  hrefUrl={`/transaction`}
                  textBtn="100 $"
                  className={styles.don__button}
                  icon="none"
                />
                <Button
                  hrefUrl={`/transaction`}
                  textBtn="500 $"
                  className={styles.don__button}
                  icon="none"
                />
                <Button
                  hrefUrl={`/transaction`}
                  textBtn="1000 $"
                  className={styles.don__button}
                  icon="none"
                />
                <Button
                  hrefUrl={`/transaction`}
                  textBtn="5000 $"
                  className={styles.don__button}
                  icon="none"
                />
                <Button
                  hrefUrl={`/transaction`}
                  textBtn="10 000 $"
                  className={styles.don__button}
                  icon="none"
                />
              </div>
            </div>
          </div>
        </section>
        <div className={`${styles.don__content__wrapper} wrapper`}>
          <section className={styles.don__content__mission}>
            <p className={styles.don__content__mission__p}>
              Merçi d'avoir donné aujourd’hui ! 
            </p>
            <h3 className={styles.don__content__mission__title}>
              NOTRE MISSION
            </h3>
            <em className={styles.don__content__mission__subtitle}>
              Inspirer l’excellence – Accélérer les destinées
            </em>{" "}
            <p className={styles.don__content__mission__p}>
              JC Diambilay Ministries est appelée à partager l'Evangile, à
              former des nations et à étendre l'amour du Christ. Grâce aux
              médias, nous enseignons aux gens comment appliquer la vérité
              biblique à tous les aspects de leur vie et les incitons à servir
              le monde qui les entoure. Par l'intermédiaire de notre branche de
              missions nous fournissons une aide humanitaire mondiale,
              nourrissons les affamés, habillons les pauvres, sauvons et élevons
              les femmes et les filles, et tendons la main aux personnes de tous
              âges et de tous horizons.  JC Diambilay Ministries est construit
              sur une base de foi, d'intégrité et de partisans dévoués qui
              partagent cet appel.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Don;
