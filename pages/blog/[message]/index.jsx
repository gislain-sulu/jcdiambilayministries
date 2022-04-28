import React, { useState } from "react";
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
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import Share from "../../share";
import axios from "axios";
import formatDate from "../../../utils/formatDate";

const BlogItem = ({ messagesDataFiltered }) => {
  const [allMessagesDataFiltered, setAllMessagesDataFiltered] =
    useState(messagesDataFiltered);
  const listLinks = [
    "Home",
    "blog",
    `${messagesDataFiltered[0].attributes.Slug}`,
  ];
  console.log("filteres", messagesDataFiltered);

  const router = useRouter();

  if (allMessagesDataFiltered.length === 0) {
    return <p>chargement en cours...</p>;
  }

  return (
    <div className={styles.blog}>
      <HeaderPage
        title="detail article"
        isWithFieldSearch={false}
        listOriginUrl={<OriginUrl listItem={listLinks} />}
      />

      <div className={`${styles.blog__article__wrapper} wrapper`}>
        <article className={styles.blog__article}>
          <header className={styles.blog__article__header}>
            <h1 className={styles.blog__article__title} id="titleArticle">
              {messagesDataFiltered[0].attributes.title}
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
                {formatDate(
                  messagesDataFiltered[0].attributes.createAt,
                  "DD/MM/YYYY à HH:MM"
                )}
              </span>
            </div>
          </header>
          <main className={styles.blog__article__main}>
            <ReactMarkdown>
              {messagesDataFiltered[0].attributes.content}
            </ReactMarkdown>

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
        {/* <article className={styles.blog__article}>
          <ReactMarkdown>{message.attributes.content}</ReactMarkdown>
        </article> */}
      </div>
    </div>
  );
};

// export const getStaticProps = async ({ params }) => {
//   const { message } = params;
//   const res = await fetch(`http://localhost:1337/api/messages?slug=${message}`);
//   const messageData = await res.json();

//   const messageDataFiltered = messageData.data.filter(
//     (data) => data.attributes.Slug === `${message}`
//   );
//   return {
//     props: { messageDataFiltered },
//     revalidate: 10,
//   };
// };

// export async function getStaticPaths() {
//   const res = await fetch(`http://localhost:1337/api/messages`);
//   const messagesData = await res.json();

//   const messages = messagesData.data;

//   const paths = messages?.map(({ attributes }) => ({
//     params: { message: `${attributes.slug}` },
//   }));

//   return {
//     paths,
//     fallback: "blocking",
//   };
// }

export const getStaticProps = async ({ params }) => {
  try {
    const { message } = params;

    const res = await axios.get(
      `https://jcdiambilayministries-backend.herokuapp.com/api/messages?populate=*`
    );

    const datas = res.data;

    const messages = datas.data;

    const messagesDataFiltered = messages.filter(
      (data) => data.attributes.Slug === `${message}`
    );
    return {
      props: { messages, messagesDataFiltered },
      revalidate: 10,
    };
  } catch (err) {
    return { err };
  }
};

export async function getStaticPaths() {
  try {
    const res = await axios.get(
      `https://jcdiambilayministries-backend.herokuapp.com/api/messages?populate=*`
    );

    const datas = res.data;

    const messages = datas.data;

    const paths = messages?.map(({ attributes }) => ({
      params: { message: `${attributes.Slug}` },
    }));

    return {
      paths,
      fallback: "blocking",
    };
  } catch (err) {
    return { err };
  }
}

export default BlogItem;
