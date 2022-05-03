import React, { useState, useEffect } from "react";
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
import Router, { useRouter } from "next/router";
import HeaderPage from "../../../components/headerPage/headerPage";
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import Share from "../../share";
import axios from "axios";
import formatDate from "../../../utils/formatDate";
import Spiner from "../../../components/spinner/spiner";

const BlogItem = ({ messages }) => {
  const [allMessagesDataFiltered, setAllMessagesDataFiltered] = useState([]);

  const router = useRouter();
  useEffect(() => {
    setAllMessagesDataFiltered(messages);
  }, [router.query.message]);

  const listLinks = ["Home", "blog"];

  if (allMessagesDataFiltered.length === 0) {
    return (
      <div className={styles.blog}>
        <div className={`${styles.blog__article__wrapper} wrapper`}>
          <div className={styles.blog__spinnerBox}>
            <Spiner />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.blog}>
      <HeaderPage
        title="detail article"
        isWithFieldSearch={false}
        listOriginUrl={<OriginUrl listItem={listLinks} />}
      />

      <div className={`${styles.blog__article__wrapper} wrapper`}>
        {allMessagesDataFiltered.map((post) => (
          <article className={styles.blog__article}>
            <header className={styles.blog__article__header}>
              <h1 className={styles.blog__article__title} id="titleArticle">
                {post.attributes.title}
              </h1>

              <div className={styles.blog__article__infosBox}>
                <span className={styles.blog__article__infosBox__icon}>
                  <IconUser />
                </span>
                <span className={styles.blog__article__infosBox__author}>
                  Jean-Clément Diambilay
                </span>
                <span className={styles.blog__article__infosBox__separator}>
                  |
                </span>
                <span className={styles.blog__article__infosBox__icon}>
                  <IconDate />
                </span>
                <span className={styles.blog__article__infosBox__date}>
                  Publié le:
                  {formatDate(post.attributes.createAt, "DD/MM/YYYY à HH:MM")}
                </span>
              </div>
            </header>
            <main className={styles.blog__article__main}>
              <ReactMarkdown>{post.attributes.content}</ReactMarkdown>

              <div className={styles.blog__article__socialsMedias}>
                <span className={styles.blog__article__socialsMedias__label}>
                  partager sur :
                </span>
                <span className={styles.blog__article__socialsMedias__content}>
                  <Share
                    url="https://www.sharethis.com"
                    // title={message.attributes.title}
                    // description={message.attributes.description}
                  />
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
        ))}
      </div>
    </div>
  );
};

export const getStaticProps = async ({ params }) => {
  const { message } = params;

  const qs = require("qs");
  const query = qs.stringify(
    {
      filters: {
        slug: message,
      },
      populate: "*",
    },
    {
      encodeValuesOnly: true,
    }
  );

  try {
    const { API_URL } = process.env;

    const res = await axios.get(`${API_URL}/messages?${query}`);

    const datas = res.data;

    const messages = datas.data;

    return {
      props: { messages },
      revalidate: 10,
    };
  } catch (err) {
    return { err };
  }
};

export async function getStaticPaths() {
  const { API_URL } = process.env;
  try {
    const res = await axios.get(`${API_URL}/messages?populate=*`);

    const messages = res.data;

    const articles = messages.data;

    const paths = articles?.map(({ attributes }) => ({
      params: { message: `${attributes.Slug}` },
    }));

    return {
      paths,
      fallback: false,
    };
  } catch (err) {
    return { err };
  }
}

export default BlogItem;
