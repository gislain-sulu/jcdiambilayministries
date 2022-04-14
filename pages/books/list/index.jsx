import React from "react";
import styles from "./bookslist.module.scss";

import Button from "../../../components/button/button";
import { IconSearch } from "../../../components/icons/icon";
import Link from "next/link";
import Bloglist from "../../../components/bloglist/bloglist";
import CardBlog from "../../../components/cards/blog/cardBlog";
import MOCK_BLOG from "../../../models/MOCK_BLOG";
import CardBook from "../../../components/cards/books/cardBook";
import HeaderPage from "../../../components/headerPage/headerPage";
import OriginUrl from "../../../components/originUrl/originUrl";

const Bookslist = () => {
  const listLinks = ["home", "books", "list"];
  return (
    <div className={styles.bookslist}>
      <HeaderPage
        title="Rechercher un livre de l'Apôtre Jean Clément Diambilay"
        placeholder="Tapez un titre du livre"
        textHelper="accélératon divine"
        listOriginUrl={<OriginUrl listItem={listLinks} />}
      />

      <section className={styles.bookslist__content}>
        <div className={`${styles.bookslist__content__wrapper} wrapper`}>
          <div className={styles.bookslist__content__filterBox}>
            <span className={styles.bookslist__content__filterBox__label}>
              FILTRE:
            </span>
            <ul className={styles.bookslist__content__filterBox__list}>
              <li className={styles.bookslist__content__filterBox__list__item}>
                <Link href="/">tout</Link>
              </li>
              <li className={styles.bookslist__content__filterBox__list__item}>
                <Link href="/">dernières parutions </Link>
              </li>
            </ul>
          </div>
          <div className={styles.bookslist__content__separator}> </div>
          <div className={styles.bookslist__content__list}>
            <CardBook />
            <CardBook />
            <CardBook />
            <CardBook />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bookslist;
