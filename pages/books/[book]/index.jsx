import React from "react";
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

const BookDetail = ({ books, booksDataFiltered }) => {
  console.log("books", books);
  console.log("booksFile", booksDataFiltered);

  const { url } =
    booksDataFiltered[0].attributes.cover.data.attributes.formats.large;
  const {
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
    Slug,
  } = booksDataFiltered[0].attributes;

  console.log("slug=", Slug);

  const newsBooksParutions = books.filter(
    (book) => book.attributes.Slug !== Slug
  );

  console.log("newsBooksParutions:", newsBooksParutions);

  const listLinks = ["home", "books", `${Slug}`];
  return (
    <div className={styles.bookDetail}>
      <HeaderPage
        title="detail livre"
        isWithFieldSearch={false}
        listOriginUrl={<OriginUrl listItem={listLinks} />}
      />
      <div className={styles.bookDetail__content}>
        <div className={`${styles.bookDetail__content__wrapper} wrapper`}>
          <div className={styles.bookDetail__content__bookDetailBox}>
            {booksDataFiltered.length === 0 ? (
              <p>chargement en cours</p>
            ) : (
              <CardBookDetail
                src={url}
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
            )}
          </div>
        </div>
      </div>
      <div className={`wrapper`}>
        <SectionPage titleSection="Dernières parutions">
          {newsBooksParutions.map((book) => {
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
        </SectionPage>
      </div>
      <div className={`wrapper`}>
        <SectionPage titleSection="ces livres peuvent aussi vous interessez">
          {newsBooksParutions.map((book) => {
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
        </SectionPage>
      </div>
    </div>
  );
};

export const getStaticProps = async ({ params }) => {
  try {
    const { book } = params;

    const res = await axios.get(
      `https://jcdiambilayministries-backend.herokuapp.com/api/books?populate=*`
    );

    const datas = res.data;

    const books = datas.data;

    const booksDataFiltered = books.filter(
      (data) => data.attributes.Slug === `${book}`
    );
    return {
      props: { books, booksDataFiltered },
      revalidate: 10,
    };
  } catch (err) {
    return { err };
  }
};

export async function getStaticPaths() {
  try {
    const res = await axios.get(
      `https://jcdiambilayministries-backend.herokuapp.com/api/books?populate=*`
    );

    const datas = res.data;

    const books = datas.data;

    const paths = books?.map(({ attributes }) => ({
      params: { book: `${attributes.Slug}` },
    }));

    return {
      paths,
      fallback: "blocking",
    };
  } catch (err) {
    return { err };
  }
}

export default BookDetail;
