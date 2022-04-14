import React from "react";
import styles from "./blog.module.scss";
import Image from "next/image";
import {
  Facebook,
  IconDate,
  IconUser,
  Instagram,
  Linkedin,
  Twitter,
  IconNext,
  IconPrev,
} from "../../../components/icons/icon";
import OriginUrl from "../../../components/originUrl/originUrl";
import PointsPrieres from "../../../components/pointsPrieres/pointsPrieres";
import Button from "../../../components/button/button";
import { useRouter } from "next/router";
import HeaderPage from "../../../components/headerPage/headerPage";

const BlogItem = () => {
  const router = useRouter();
  console.log(router.pathname);

  const links = [
    { page: "accueil", pageLink: "/" },
    { page: "blog", pageLink: "accueil/blog" },
    { page: "article", pageLink: "accueil/blog/ar" },
  ];

  const POINS_PRIERES_MOCK = [
    "Seigneur Dieu tout puissant, je te remercie et te rends grâce en ce jour pour tout ce que tu enseignes, et pour toutes ces choses au sujet desquelles tu nous ouvres les yeux chaque jour. Merci pour cette parole que tu me fais comprendre en ce jour.",
    "Seigneur, je viens humblement devant toi me repentir de tout orgueil et toute présomption avec laquelle j’ai pu traiter des personnes que tu as envoyées vers moi pour me bénir et me soutenir. Je me repends de les avoir regardé à l’apparence et non selon la sagesse. Pardonne ma folie, et délivre-moi de tout orgueil au nom de Jésus.",
    "Seigneur ouvre mes yeux spirituels afin que je puisse reconnaitre de bons partenaires, des personnes qui seront réellement pour moi des facteurs de succès. Ouvre ainsi mes yeux afin que je puisse les reconnaitre, quelle que soit leur apparence.",
    "Seigneur dirige mes pas vers les bonnes connexions pour promouvoir mes affaires, au nom de Jésus.",
  ];

  return (
    <div className={styles.blog}>
      <HeaderPage
        title="detail article"
        isWithFieldSearch={false}
        // listOriginUrl={<OriginUrl listItem={listLinks} />}
      />

      <div className={`${styles.blog__article__wrapper} wrapper`}>
        <article className={styles.blog__article}>
          <header className={styles.blog__article__header}>
            <h1 className={styles.blog__article__title} id="titleArticle">
              Garder son coeur pur , c'est aussi pardonner aux autres leurs
              offences
            </h1>
            <q className={styles.blog__article__subtitle}>
              Pardonnez nous nos offenses, comme nous aussi nous pardonnons à
              ceux qui nous ont offensés.
              <cite className={styles.blog__article__subtitle__cite}>
                {" "}
                Mathieu 6:12
              </cite>
            </q>
            <div className={styles.blog__article__infosBox}>
              <span className={styles.blog__article__infosBox__icon}>
                <IconUser />
              </span>
              <span className={styles.blog__article__infosBox__author}>
                jean clément diambilay
              </span>
              <span className={styles.blog__article__infosBox__separator}>
                |
              </span>
              <span className={styles.blog__article__infosBox__icon}>
                <IconDate />
              </span>
              <span className={styles.blog__article__infosBox__date}>
                publie le: 23/10/2020 - 04:09
              </span>
            </div>
          </header>
          <main className={styles.blog__article__main}>
            <div className={styles.blog__article__pictureBox}>
              <Image
                src={"/assets/images/blog/photo_article_1.png"}
                width={667}
                height={834}
              />
            </div>
            <div className={styles.blog__article__text}>
              <p>
                Vous ne pouvez prétendre être des disciples du Seigneur si vous
                ne pardonnez pas à ceux qui vous ont offensé. Le manque de
                pardon est un poison qui souille votre âme, vos pensées,
                cor-rompt votre cœur et vous amène peu à peu à poser des actes
                pour vous venger. En effet, un jargon populaire affirme que « la
                vengeance est un plat qui se mange froid ». Si la vengeance est
                comparé à un plat, c’est bien parce qu’elle se prépare comme on
                prépare un plat. Tout d’abord, on décide du menu, ensuite on
                recherche et sélectionne minutieusement les in-grédients
                nécessaire à la préparation, on apprête ces ingrédients, on les
                met tous ensemble pour les faire cuire et ensuite on laisse le
                temps au repas de se refroidir. Tout ceci inclus le facteur
                temps et pendant ce temps, nos forces, notre savoir-faire et
                toute notre attention et notre in-ventivité sont mobilisés dans
                la préparation du plat. Eh bien, il en est de même pour la
                ven-geance. <br /> <br />
                Chaque fois qu’il y’a manque de pardon, il y’a à côté intention
                de vengeance, même si vous ne vous en rendez pas compte ou si
                vous ne voulez pas vous l’avouer. C’est parfois parce que l’on
                n’a pas l’occasion de remettrai la pièce de l’acte subie que
                l’on ne se venge pas, sinon le manque de pardon conduit
                inévitablement à terme à se rendre justice soi-même. On
                s’imagine des scénarios par lesquelles on fait payer à la
                personne le mal qu’elle nous a fait, ou alors on s’imagine voir
                la personne vivre une situation délicate. <br /> <br />
                Le manque de pardon crée aussi en vous des maux de l’âme qui
                souille votre homme intérieur, notamment le cœur à travers
                l’amertume, le ressentiment, la colère, la rancune, la rancœur,
                l’aigreur et autant de sentiments de douleur qui enroule votre
                cœur dans un étau, l’empêchant de bénéficier de la visitation de
                Saint Esprit et de vivre l’amour de Dieu. Le manque de par-don
                vous empêche également d’être en joie et de vous réjouir pour
                les autres, au point même d’en arriver à haïr ceux qui vous ont
                offensé, mais aussi à haïr tous ceux qui se trouve autour de ces
                personnes. Le manque de pardon dans les cas extrêmes vous
                conduit même à haïr tous ceux qui sont joyeux autour de vous.
                <br />
                Lorsque vous pardonnez, pensez en vous car vous vous libérez ou
                du moins donner la possibi-lité et la permission à Dieu de vous
                libérer de la douleur de ce qui vous été infligé que vous
                revivez sans cesse. Vous lui donnez aussi la capacité de vous
                pardonner en retour car vous non plus vous n’êtes pas blanc
                comme neige vis-à-vis des autres personnes ou même de cette
                per-sonne car les torts sont rarement à cent pour cent dans un
                seul camp.
              </p>
            </div>
            <div className={styles.blog__article__pointsPrieres}>
              <PointsPrieres
                title="points de prières pour batir des bonnes connexions d'affaires"
                listItem={POINS_PRIERES_MOCK}
              />
            </div>

            <div className={styles.blog__article__socialsMedias}>
              <span className={styles.blog__article__socialsMedias__label}>
                partager sur :
              </span>
              <span className={styles.blog__article__socialsMedias__content}>
                <Facebook />
                <Twitter />
                <Instagram />
                <Linkedin />
              </span>
            </div>
            <div className={styles.blog__article__prevNextBox}>
              <div className={styles.blog__article__prevNextBox__prev}>
                <Button
                  hrefUrl={`/blog`}
                  textBtn="precedent"
                  className={styles.blog__article__prevNextBox__prev__button}
                  icon={<IconPrev />}
                  positionIcon="left"
                />
              </div>
              <div className={styles.blog__article__prevNextBox__next}>
                <Button
                  hrefUrl={`/blog`}
                  textBtn="suivant"
                  className={styles.blog__article__prevNextBox__next__button}
                  icon={<IconNext />}
                  positionIcon="right"
                />
              </div>
            </div>
          </main>
        </article>
      </div>
    </div>
  );
};

export default BlogItem;
