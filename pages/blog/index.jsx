import React from "react";
import styles from "./blog.module.scss";

import Button from "../../components/button/button";
import { IconSearch } from "../../components/icons/icon";
import Link from "next/link";
import Bloglist from "../../components/bloglist/bloglist";
import CardBlog from "../../components/cards/blog/cardBlog";
import MOCK_BLOG from "../../models/MOCK_BLOG";

const Blog = () => {
  return (
    <div className={styles.blog}>
      <section className={styles.blog__section}>
        <div className={`${styles.blog__section__wrapper} wrapper`}>
          <header className={styles.blog__section__header}>
            <h1 className={styles.blog__section__header__title}>
              Rechercher un article de l'Apôtre Jean-Clément Diambilay
            </h1>
            <div className={styles.blog__section__header__searchBox}>
              <form className={styles.blog__form}>
                <div className={styles.blog__form__fielSearchBox}>
                  <input
                    type="text"
                    placeholder="Tapez un titre ..."
                    className={styles.blog__form__fielSearchBox__input}
                  />
                </div>
                <div className={styles.blog__form__btnBox}>
                  <Button
                    hrefUrl={`/`}
                    textBtn=""
                    className={styles.blog__form__btnBox__btn}
                    icon={<IconSearch />}
                    type="submit"
                  />
                </div>
              </form>
            </div>
            <div className={styles.blog__section__header__textHelper}>
              <small>
                exemple:
                <strong
                  className={styles.blog__section__header__textHelper__strong}
                >
                  garder son coeur pur
                </strong>
                ...
              </small>
            </div>
          </header>
        </div>
      </section>
      <section className={styles.blog__content}>
        <div className={`${styles.blog__content__wrapper} wrapper`}>
          <div className={styles.blog__content__filterBox}>
            <span className={styles.blog__content__filterBox__label}>
              FILTRE:
            </span>
            <ul className={styles.blog__content__filterBox__list}>
              <li className={styles.blog__content__filterBox__list__item}>
                <Link href="/">tout</Link>
              </li>
              <li className={styles.blog__content__filterBox__list__item}>
                <Link href="/">récents </Link>
              </li>
            </ul>
          </div>
          <div className={styles.blog__content__list}>
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

export default Blog;
