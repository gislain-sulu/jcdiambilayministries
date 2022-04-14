import React from "react";
import styles from "./citationlist.module.scss";
import Button from "../../../components/button/button";
import { IconSearch } from "../../../components/icons/icon";
import Link from "next/link";
import Bloglist from "../../../components/bloglist/bloglist";
import CardBlog from "../../../components/cards/blog/cardBlog";
import MOCK_BLOG from "../../../models/MOCK_BLOG";
import HeaderPage from "../../../components/headerPage/headerPage";
import OriginUrl from "../../../components/originUrl/originUrl";

const Citationlist = () => {
  const listLinks = ["home", "citations", "list"];

  return (
    <div className={styles.citationlist}>
      <HeaderPage
        title="Rechercher une citation de l'Apôtre Jean-Clément Diambilay"
        placeholder="Tapez un mot"
        textHelper="Dieu"
        listOriginUrl={<OriginUrl listItem={listLinks} />}
        classname={styles.blog__title}
      />

      <section className={styles.citationlist__content}>
        <div className={`${styles.citationlist__content__wrapper} wrapper`}>
          <div className={styles.citationlist__content__filterBox}>
            <span className={styles.citationlist__content__filterBox__label}>
              FILTRE:
            </span>
            <ul className={styles.citationlist__content__filterBox__list}>
              <li
                className={styles.citationlist__content__filterBox__list__item}
              >
                <Link href="/">citations</Link>
              </li>
              <li
                className={styles.citationlist__content__filterBox__list__item}
              >
                <Link href="/">déclarations </Link>
              </li>
            </ul>
          </div>
          <div className={styles.citationlist__content__list}>
            <Bloglist>
              {MOCK_BLOG.map((citationlist) => (
                <li key={citationlist.id}>
                  <CardBlog
                    id={citationlist.id}
                    title={citationlist.title}
                    othor={citationlist.othor}
                    date={citationlist.date}
                    description={citationlist.description}
                  />
                </li>
              ))}
            </Bloglist>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Citationlist;
