import React from "react";
import styles from "./citationlist.module.scss";
import Button from "../../../components/button/button";
import { IconSearch } from "../../../components/icons/icon";
import Link from "next/link";
import Bloglist from "../../../components/bloglist/bloglist";
import CardBlog from "../../../components/cards/blog/cardBlog";
import MOCK_BLOG from "../../../models/MOCK_BLOG";

const Citationlist = () => {
  return (
    <div className={styles.citationlist}>
      <section className={styles.citationlist__section}>
        <div className={`${styles.citationlist__section__wrapper} wrapper`}>
          <header className={styles.citationlist__section__header}>
            <h1 className={styles.citationlist__section__header__title}>
              Rechercher une citation de l'Apôtre Jean-Clément Diambilay
            </h1>
            <div className={styles.citationlist__section__header__searchBox}>
              <form className={styles.citationlist__form}>
                <div className={styles.citationlist__form__fielSearchBox}>
                  <input
                    type="text"
                    placeholder="Tapez un mot ..."
                    className={styles.citationlist__form__fielSearchBox__input}
                  />
                </div>
                <div className={styles.citationlist__form__btnBox}>
                  <Button
                    hrefUrl={`/`}
                    textBtn=""
                    className={styles.citationlist__form__btnBox__btn}
                    icon={<IconSearch />}
                    type="submit"
                  />
                </div>
              </form>
            </div>
            <div className={styles.citationlist__section__header__textHelper}>
              <small>
                exemple:
                <strong
                  className={
                    styles.citationlist__section__header__textHelper__strong
                  }
                >
                  {" "}
                  Dieu{" "}
                </strong>
                ...
              </small>
            </div>
          </header>
        </div>
      </section>
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
