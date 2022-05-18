import React, { useState, useEffect } from "react";
import styles from "./blog.module.scss";
import { IconDate, IconUser, IconPrev } from "../../../components/icons/icon";
import Button from "../../../components/button/button";
import ReactMarkdown from "react-markdown";
import Share from "../../share";
import axios from "axios";
import formatDate from "../../../utils/formatDate";
import Spiner from "../../../components/spinner/spiner";
import Breadcrumd from "../../../components/breadcrumd/breadcrumd";
import { useRouter } from "next/router";

const BlogItem = ({ messages }) => {
  const [allMessagesDataFiltered, setAllMessagesDataFiltered] = useState([]);

  const router = useRouter();

  useEffect(() => {
    setAllMessagesDataFiltered(messages);
  }, [router.query.message]);

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

  const listBreadcrumd = [
    {
      id: 1,
      href: "/",
      label: "Home",
    },
    {
      id: 2,
      href: "/blog",

      label: "blog",
    },
    {
      id: 2,

      label:
        allMessagesDataFiltered.length >= 1 &&
        allMessagesDataFiltered[0].attributes.title,
    },
  ];

  return (
    <div className={styles.blog}>
      {allMessagesDataFiltered.map((post) => (
        <article className={styles.blog__article}>
          <header className={styles.blog__article__header}>
            <div className="wrapper">
              <div className={styles.blog__article__header__box}>
                <h1 className={styles.blog__article__title} id="titleArticle">
                  {post.attributes.title}
                </h1>

                <div className={styles.blog__article__infosBox}>
                  <span className={styles.blog__article__infosBox__icon}>
                    <IconUser />
                  </span>
                  <span className={styles.blog__article__infosBox__author}>
                    Apôtre Jean-Clément Diambilay
                  </span>
                  <span className={styles.blog__article__infosBox__separator}>
                    |
                  </span>
                  <span className={styles.blog__article__infosBox__icon}>
                    <IconDate />
                  </span>
                  <span className={styles.blog__article__infosBox__date}>
                    {formatDate(post.attributes.createAt, "DD/MM/YYYY ")}
                  </span>
                </div>
              </div>
            </div>
          </header>

          <div className="wrapper">
            <div className={styles.blog__article__breadcrumd}>
              {<Breadcrumd list={listBreadcrumd} />}
            </div>
          </div>

          <div className="wrapper">
            <main className={styles.blog__article__main}>
              <ReactMarkdown>{post.attributes.content}</ReactMarkdown>

              <div className={styles.blog__article__socialsMedias}>
                <span className={styles.blog__article__socialsMedias__label}>
                  partager sur :
                </span>
                <span className={styles.blog__article__socialsMedias__content}>
                  <Share
                    url="www.google.fr"
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
              </div>
            </main>
          </div>
        </article>
      ))}
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
