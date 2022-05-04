import React, { useState, useEffect } from "react";
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
import InfiniteScroll from "react-infinite-scroll-component";
import Spiner from "../../components/spinner/spiner";

const Blog = ({ data, total }) => {
  const [messages, setmessages] = useState([]);
  const [allMessagesLength, setAllMessagesLength] = useState(total);
  const [term, setTerm] = useState("");
  const [filteredMessagesSearch, setFilteredMessagesSearch] = useState([]);

  useEffect(() => {
    const messagesFilteredSearchTerm = data.filter(({ attributes }) =>
      attributes.title.includes(term)
    );
    setFilteredMessagesSearch(messagesFilteredSearchTerm);
  }, [term]);

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  const [hasMore, setHasMore] = useState(true);

  const { API_URL } = process.env;

  const getMoreCitations = async () => {
    const res = await axios.get(
      `${API_URL}/messages?pagination[start]=${messages.length}&pagination[limit]=5&populate=*`
    );

    const newMessages = res.data;

    const { data } = newMessages;

    setmessages((message) => [...message, ...data]);
  };

  useEffect(() => {
    setHasMore(allMessagesLength > messages.length ? true : false);
  }, [messages]);

  useEffect(() => {
    setmessages(data);
  }, [messages]);

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
        termSearchField={term}
        handleSearchInput={handleChange}
        datasFilteredSearch={filteredMessagesSearch}
        pathname="/blog"
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
            <InfiniteScroll
              dataLength={messages.length}
              next={getMoreCitations}
              hasMore={hasMore}
              loader={
                <h4>
                  <Spiner />
                </h4>
              }
              endMessage={
                <p style={{ textAlign: "center" }}>
                  <b>Yay! vous avez affiché tout les articles</b>
                </p>
              }
            >
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
            </InfiniteScroll>
          </div>
        </div>
      </section>
    </div>
  );
};

export const getStaticProps = async () => {
  const { API_URL } = process.env;
  try {
    const res = await axios.get(`${API_URL}/messages?populate=*`);

    const messages = res.data;

    const { data, meta } = messages;

    const { total } = meta.pagination;

    return {
      props: { data, total },
      revalidate: 1,
    };
  } catch (err) {
    return { err };
  }
};

export default Blog;
