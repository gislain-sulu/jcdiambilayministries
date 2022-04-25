import React from "react";
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

const BlogItem = () => {
  const listLinks = ["Home", "blog  "];

  const router = useRouter();

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
              {/* {message.attributes.title} */}
            </h1>

            <div className={styles.blog__article__infosBox}>
              <span className={styles.blog__article__infosBox__icon}>
                {/* <IconUser /> */}
              </span>
              <span className={styles.blog__article__infosBox__author}>
                jean clément diambilay
              </span>
              <span className={styles.blog__article__infosBox__separator}>
                |
              </span>
              <span className={styles.blog__article__infosBox__icon}>
                {/* <IconDate /> */}
              </span>
              <span className={styles.blog__article__infosBox__date}>
                Publié le:
                {/* <Moment format="  DD / MM / YYYY  à  HH:mm">
                  {message.attributes.createdAt}
                </Moment> */}
              </span>
            </div>
          </header>
          <main className={styles.blog__article__main}>
            {/* <ReactMarkdown>{message.attributes.content}</ReactMarkdown> */}

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

export default BlogItem;
