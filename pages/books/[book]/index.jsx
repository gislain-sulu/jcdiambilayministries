import React, { useState, useEffect } from "react";
import styles from "./bookDetail.module.scss";
import CardBookDetail from "../../../components/cards/bookDetail/cardBookDetail";
import SectionPage from "../../../components/sections/section";
import CardBook_1 from "../../../components/cards/books/cardBook_1";
import { ArrowNext, IconHome } from "../../../components/icons/icon";
import Link from "next/link";
import HeaderPage from "../../../components/headerPage/headerPage";
import OriginUrl from "../../../components/originUrl/originUrl";
import CardBook from "../../../components/cards/books/cardBook";
import axios from "axios";
import formatDescription from "../../../utils/formatDescription";
import Spiner from "../../../components/spinner/spiner";
import { useRouter } from "next/router";
import AliceCarousel from "react-alice-carousel";

const BookDetail = ({ books, newBooksDataFiltered }) => {
  const [book, setBook] = useState([]);
  const [booksFilteredData, setbooksFilteredData] = useState([]);

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };
  console.log("newBooksData", newBooksDataFiltered);

  // const newsBooks = () => {
  //   if (book.length !== 1) {
  //     return booksFilteredData.filter(
  //       (book) => book.attributes.id !== book[0].attributes.id
  //     );
  //   }
  //   return;
  // };

  const router = useRouter();

  // console.log("newsBooks", newsBooks());
  const { API_URL } = process.env;

  useEffect(async () => {
    try {
      const res = await axios.get(
        `${API_URL}/books?pagination[page]=1&pagination[pageSize]=3&populate=*`
      );

      const datas = res.data;

      const { data } = datas;

      setbooksFilteredData(data);
    } catch (err) {
      return { err };
    }
  }, []);

  useEffect(() => {
    setBook(books);
  }, [router.query.book]);

  const listLinks = ["home", `${router.query.book}`];
  return (
    <div className={styles.bookDetail}>
      <HeaderPage
        title="detail livre"
        isWithFieldSearch={false}
        listOriginUrl={<OriginUrl listItem={listLinks} />}
      />
      <div className="wrapper">
        <ul className={styles.bookDetail__content}>
          <li className={styles.bookDetail__content__cardDetailBox}>
            {book.length === 0 ? (
              <section>
                <Spiner />
              </section>
            ) : (
              book.map((book) => {
                const {
                  id,
                  cover,
                  title,
                  price,
                  url_amazone,
                  description,
                  editor,
                  createdAt,
                  format,
                  nbre_pages,
                  weight,
                  language,
                  isbn,
                  ean,
                } = book.attributes;

                return (
                  <CardBookDetail
                    key={id}
                    src={cover.data.attributes.url}
                    title={title}
                    price={price}
                    linkAmazone={url_amazone}
                    description={description}
                    editor={editor}
                    dateCreate={createdAt}
                    format={format}
                    nbrePages={nbre_pages}
                    poid={weight}
                    language={language}
                    isbn={isbn}
                    ean={ean}
                  />
                );
              })
            )}
          </li>
          <li className={styles.bookDetail__content__sectionNewsParutionsBox}>
            <SectionPage
              titleSection="Dernières parutions"
              urlBtn="/books/list"
              withButton={true}
            >
              {newBooksDataFiltered.length === 0 ? (
                <section>
                  <Spiner />
                </section>
              ) : (
                <AliceCarousel
                  mouseTracking
                  items={newBooksDataFiltered.map((book) => {
                    const { cover, title, description, Slug } = book.attributes;
                    const { url } = cover.data.attributes.formats.thumbnail;

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
                  responsive={responsive}
                  controlsStrategy="alternate"
                />
              )}
            </SectionPage>
          </li>
          <li className={styles.bookDetail__content__sectionOthorsBooksBox}>
            <SectionPage
              titleSection="ces livres peuvent aussi vous interessez"
              classname={`${styles.bookDetail__content__othersBooks}`}
              urlBtn="/books/list"
            >
              {newBooksDataFiltered.length === 0 ? (
                <section>
                  <Spiner />
                </section>
              ) : (
                <AliceCarousel
                  mouseTracking
                  items={newBooksDataFiltered.map((book) => {
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
                  responsive={responsive}
                  controlsStrategy="alternate"
                />
              )}
            </SectionPage>
          </li>
        </ul>
      </div>
    </div>
  );
};

export const getStaticProps = async ({ params }) => {
  const { book } = params;

  const qs = require("qs");
  const query = qs.stringify(
    {
      filters: {
        slug: book,
      },
      populate: "*",
    },
    {
      encodeValuesOnly: true,
    }
  );

  try {
    const { API_URL } = process.env;

    const res = await axios.get(`${API_URL}/books?${query}`);
    const resBooks = await axios.get(`${API_URL}/books?populate=*`);

    const datas = res.data;
    const datasBooks = resBooks.data;

    const books = datas.data;
    const newBooksData = datasBooks.data;

    const newBooksDataFiltered = newBooksData.filter(
      (book) => book.attributes.Slug !== books[0].attributes.Slug
    );

    return {
      props: { books, newBooksDataFiltered },
      revalidate: 10,
    };
  } catch (err) {
    return { err };
  }
};

export async function getStaticPaths() {
  const { API_URL } = process.env;
  try {
    const res = await axios.get(`${API_URL}/books?populate=*`);

    const datas = res.data;

    const books = datas.data;

    const paths = books?.map(({ attributes }) => ({
      params: { book: `${attributes.Slug}` },
    }));

    return {
      paths,
      fallback: false,
    };
  } catch (err) {
    return { err };
  }
}

export default BookDetail;
