import React from "react";
import styles from "./blog.module.scss";

import Button from "../../components/button/button";
import { IconSearch } from "../../components/icons/icon";
import Link from "next/link";
import Bloglist from "../../components/list/list";
import CardBlog from "../../components/cards/blog/cardBlog";
import MOCK_BLOG from "../../models/MOCK_BLOG";
import HeaderPage from "../../components/headerPage/headerPage";
import OriginUrl from "../../components/originUrl/originUrl";
import { useRouter } from "next/router";
import axios from "axios";
import List from "../../components/list/list";

const Blog = ({ messages }) => {
  console.log(messages);
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
            <List>
              {messages.map((blog) => {
                const { url } =
                  blog.attributes.cover.data.attributes.formats.small;

                return (
                  <li key={blog.attributes.id}>
                    <CardBlog
                      id={blog.id}
                      title={blog.attributes.title}
                      date={blog.attributes.updatedAt}
                      description={blog.attributes.description}
                      slug={blog.attributes.Slug}
                      picture={url}
                    />
                  </li>
                );
              })}
            </List>
          </div>
        </div>
      </section>
    </div>
  );
};

export const getStaticProps = async () => {
  try {
    const res = await axios.get(
      `https://jcdiambilayministries-backend.herokuapp.com/api/messages?populate=*`
    );

    const datas = res.data;

    const messages = datas.data;

    return {
      props: { messages },
      revalidate: 1,
    };
  } catch (err) {
    return { err };
  }
};

export default Blog;
