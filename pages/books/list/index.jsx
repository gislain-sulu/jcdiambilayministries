import React from "react";
import styles from "./bookslist.module.scss";

import Button from "../../../components/button/button";
import { IconSearch } from "../../../components/icons/icon";
import Link from "next/link";
import Bloglist from "../../../components/bloglist/bloglist";
import CardBlog from "../../../components/cards/blog/cardBlog";
import MOCK_BLOG from "../../../models/MOCK_BLOG";

const Bookslist = () => {
  return (
    <div className={styles.bookslist}>
      <section className={styles.bookslist__section}>
        <div className={`${styles.bookslist__section__wrapper} wrapper`}>
          <header className={styles.bookslist__section__header}>
            <h1 className={styles.bookslist__section__header__title}>
              Rechercher un livre de l'Apôtre Jean-Clément Diambilay
            </h1>
            <div className={styles.bookslist__section__header__searchBox}>
              <form className={styles.bookslist__form}>
                <div className={styles.bookslist__form__fielSearchBox}>
                  <input
                    type="text"
                    placeholder="Tapez un titre du livre ..."
                    className={styles.bookslist__form__fielSearchBox__input}
                  />
                </div>
                <div className={styles.bookslist__form__btnBox}>
                  <Button
                    hrefUrl={`/`}
                    textBtn=""
                    className={styles.bookslist__form__btnBox__btn}
                    icon={<IconSearch />}
                    type="submit"
                  />
                </div>
              </form>
            </div>
            <div className={styles.bookslist__section__header__textHelper}>
              <small>
                exemple:
                <strong
                  className={
                    styles.bookslist__section__header__textHelper__strong
                  }
                >
                  accélération divine
                </strong>
                ...
              </small>
            </div>
          </header>
        </div>
      </section>
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
          <div className={styles.bookslist__content__list}>
            <Bloglist>
              {MOCK_BLOG.map((blog) => (
                <li key={blog.id}>
                  <CardBlog
                    id={blog.id}
                    title={blog.title}
                    othor={blog.othor}
                    date={blog.date}
                    description={blog.description}
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

export default Bookslist;
