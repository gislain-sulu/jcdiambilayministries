import React from "react";
import styles from "./blog.module.scss";

import Button from "../../components/button/button";
import { IconSearch } from "../../components/icons/icon";
import Link from "next/link";
import Bloglist from "../../components/bloglist/bloglist";
import CardBlog from "../../components/cards/blog/cardBlog";
import MOCK_BLOG from "../../models/MOCK_BLOG";
import HeaderPage from "../../components/headerPage/headerPage";
import OriginUrl from "../../components/originUrl/originUrl";
import { useRouter } from "next/router";

const Blog = () => {
  const router = useRouter();

  const pathname = router.pathname;

  const formatPathname = pathname.replace("/", "");

  const listLinks = ["home", formatPathname];

  return (
    <div className={styles.blog}>
      <HeaderPage
        title="Rechercher un article de l'Apôtre Jean-Clément Diambilay"
        placeholder="Tapez un titre"
        textHelper="garder son coeur pur"
        listOriginUrl={<OriginUrl listItem={listLinks} />}
        classname={styles.blog__title}
      />

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
