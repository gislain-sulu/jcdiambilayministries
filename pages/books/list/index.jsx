import React, { useState, useEffect } from "react";
import styles from "./bookslist.module.scss";

import Link from "next/link";
import CardBlog from "../../../components/cards/blog/cardBlog";
import MOCK_BLOG from "../../../models/MOCK_BLOG";
import CardBook from "../../../components/cards/books/cardBook";
import HeaderPage from "../../../components/headerPage/headerPage";
import OriginUrl from "../../../components/originUrl/originUrl";
import List from "../../../components/list/list";
import axios from "axios";
import formatDescription from "../../../utils/formatDescription";
import Spiner from "../../../components/spinner/spiner";
import InfiniteScroll from "react-infinite-scroll-component";

const Bookslist = ({ data, total, booksSearchAll }) => {
  const [books, setBooks] = useState([]);
  const [allBooksLength, setAllBooksLength] = useState(total);
  const [hasMore, setHasMore] = useState(true);

  const [term, setTerm] = useState("");
  const [filteredBooksSearch, setFilteredBooksSearch] = useState([]);

  useEffect(() => {
    const booksFilteredSearchTerm = booksSearchAll.filter(({ attributes }) =>
      attributes.title.includes(term)
    );
    setFilteredBooksSearch(booksFilteredSearchTerm);
  }, [term]);

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  const { API_URL } = process.env;

  const getMoreBooks = async () => {
    const res = await axios.get(
      `${API_URL}/books?pagination[start]=${books.length}&pagination[limit]=5&populate=*`
    );

    const newBooks = res.data;

    const { data } = newBooks;

    setBooks((books) => [...books, ...data]);
  };

  useEffect(() => {
    setHasMore(allBooksLength > books.length ? true : false);
  }, [books]);

  const listLinks = ["home", "books", "list"];

  console.log("data", data);
  console.log("total", total);

  return (
    <div className={styles.bookslist}>
      <HeaderPage
        title="Rechercher un livre de l'Apôtre Jean Clément Diambilay"
        placeholder="Tapez un titre du livre"
        textHelper="accélératon divine"
        listOriginUrl={<OriginUrl listItem={listLinks} />}
        termSearchField={term}
        handleSearchInput={handleChange}
        datasFilteredSearch={filteredBooksSearch}
        pathname="/books/list"
      />

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
          <div className={styles.bookslist__content__separator}> </div>
          <div className={styles.bookslist__content__list}>
            <InfiniteScroll
              dataLength={books.length}
              next={getMoreBooks}
              hasMore={hasMore}
              loader={
                <h4>
                  <Spiner />
                </h4>
              }
              endMessage={
                <p style={{ textAlign: "center" }}>
                  <b>Yay! vous avez affiché tout les livres</b>
                </p>
              }
            >
              <List>
                {books.map((book) => {
                  const { cover, title, description, Slug } = book.attributes;
                  const { url } = cover.data.attributes.formats.small;

                  return (
                    <CardBook
                      key={book.id}
                      picture={url}
                      alt={title}
                      title={title}
                      description={formatDescription(description, 80)}
                      slug={Slug}
                    />
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

export const getServerSideProps = async () => {
  try {
    const { API_URL } = process.env;

    const res = await axios.get(
      `${API_URL}/books?pagination[start]=0&pagination[limit]=5&populate=*`
    );
    const resAllBooks = await axios.get(`${API_URL}/books?populate=*`);

    const books = res.data;
    const allBooks = resAllBooks.data;

    const { data, meta } = books;

    const { total } = meta.pagination;

    const booksSearchAll = allBooks.data;

    return {
      props: { data, total, booksSearchAll },
    };
  } catch (err) {
    return { err };
  }
};

export default Bookslist;
