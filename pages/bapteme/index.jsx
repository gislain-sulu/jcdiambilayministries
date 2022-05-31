import React from "react";
import styles from "./bapteme.module.scss";
import HeaderPage from "../../components/headerPage/headerPage";
import Breadcrumd from "../../components/breadcrumd/breadcrumd";
import Link from "next/link";

const Organisation = () => {
  const listBreadcrumd = [
    {
      id: 1,
      href: "/",
      label: "Home",
    },
    {
      id: 2,

      label: "Comment récevoir  jesus",
    },
  ];

  return (
    <div className={styles.bapteme}>
      <HeaderPage
        title="Comment recevoir jesus"
        isWithFieldSearch={false}
        listOriginUrl={<Breadcrumd list={listBreadcrumd} />}
      />
      <div className={styles.bapteme__content}>
        <div className={`${styles.bapteme__content__wrapper} wrapper`}>
          <p className={styles.bapteme__content__intro}>
            Votre engagement envers Jésus-Christ est la décision la plus
            importante que vous prendrez dans votre vie. On peut dire que le
            plus long voyage commence par un seul pas. Commencez votre voyage et
            associez-vous à Dieu pour changer votre vie. Ceci n'est que le début
          </p>
          <div className={styles.bapteme__content__p1}>
            <h3 className={styles.bapteme__content__p1__title}>
              Que signifie être sauvé ?
            </h3>
            <br />
            <p className={styles.bapteme__content__p1__content}>
              Le salut n'est pas une doctrine confessionnelle ou un héritage
              familial. C'est une expérience personnelle. Si vous avez le
              moindre doute sur votre salut, faites la prière du salut (voir
              prière ci-dessous). Premièrement, vous devez vous repentir de vos
              péchés ! Considérez votre vie et tout ce qu'elle contient qui
              attristerait Dieu.  <br /> <br />
              Deuxièmement, prenez un moment pour demander au Seigneur Jésus de
              faire partie de chaque jour de votre vie. Au moment où vous êtes
              prêt, récitez la prière de salut suivante et votre nom sera écrit
              dans le Livre de Vie de l'Agneau. Personne ne peut l'effacer. Vous
              êtes à Lui. Vous passerez l'éternité avec le Père céleste.
            </p>
          </div>
          <div className={styles.bapteme__content__p2}>
            <h3 className={styles.bapteme__content__p2__title}>
              Faites cette simple prière
            </h3>
            <br />
            <blockquote className={styles.bapteme__content__p2__content}>
              « Seigneur, je Te demande de me pardonner tous mes péchés, connus
              et inconnus. Je Te demande de m'accepter comme tien et d'écrire
              mon nom dans le livre de vie de l'Agneau. À partir de ce jour, je
              lirai Ta Parole et j'y obéirai. À cause du sang de la Croix, je
              suis maintenant pardonné. Mes péchés sont ensevelis dans la mer de
              l'oubli, dont Tu ne te souviendra plus jamais contre moi. Je suis
              maintenant un enfant de Dieu et Jésus-Christ est le Seigneur de ma
              vie. Amen. »
            </blockquote>
          </div>

          <div className={styles.bapteme__content__p3}>
            <h3 className={styles.bapteme__content__p3__title}>
              Nous sommes là pour vous !
            </h3>
            <br />
            <ul className={styles.bapteme__content__p3__content}>
              <li>
                Si vous avez besoin de nous parler, n'hésitez pas à nous appeler
                au <a href="tel:+243827011111">+243 827 011 111</a>
              </li>
              <li>
                Si vous souhaitez que nous vous aidions à trouver une bonne
                église dans laquelle prier et servir le Seigneur, appelez-nous
                ou écrivez-nous.
              </li>
              <li>
                Si vous souhaitez que nous priions avec vous, veuillez cliquer
                sur ce{" "}
                <Link href="/contact">
                  <a> lien</a>
                </Link>
                 et nous faire part de votre sujet de prière.
              </li>
              <li>
                Si vous souhaitez nous envoyer votre témoignage, veuillez
                cliquer sur ce{" "}
                <Link href="/contact">
                  <a> lien</a>
                </Link>
                 pour le faire {" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Organisation;
