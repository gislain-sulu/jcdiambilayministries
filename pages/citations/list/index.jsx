import React, { useState, useEffect } from "react";
import styles from "./citationlist.module.scss";
import Link from "next/link";
import HeaderPage from "../../../components/headerPage/headerPage";
import CardCitationList from "../../../components/cards/citations/cardCitationlist";
import List from "../../../components/list/list";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Spiner from "../../../components/spinner/spiner";
import Breadcrumd from "../../../components/breadcrumd/breadcrumd";

const Citationlist = ({ data, total, citationsSearchAll }) => {
  const [citations, setCitations] = useState([]);
  const [allCitationsLength, setAllCitationsLength] = useState(total);
  const [hasMore, setHasMore] = useState(true);

  const [term, setTerm] = useState("");
  const [filteredCitationsSearch, setFilteredCitationsSearch] = useState([]);

  useEffect(() => {
    const citationsFilteredSearchTerm = citationsSearchAll.filter(
      ({ attributes }) => attributes.content.includes(term)
    );
    setFilteredCitationsSearch(citationsFilteredSearchTerm);
  }, [term]);

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  const { API_URL } = process.env;

  const getMoreCitations = async () => {
    const res = await axios.get(
      `${API_URL}/citations?pagination[start]=${citations.length}&pagination[limit]=5&populate=*`
    );

    const newCitations = res.data;

    const { data } = newCitations;

    setCitations((citation) => [...citation, ...data]);
  };

  useEffect(() => {
    setHasMore(allCitationsLength > citations.length ? true : false);
  }, [citations]);

  const listBreadcrumd = [
    {
      id: 1,
      href: "/",
      label: "Home",
    },
    {
      id: 2,
      href: "/citations",

      label: "Citations",
    },
    {
      id: 3,
      label: "List",
    },
  ];

  return (
    <div className={styles.citationlist}>
      <HeaderPage
        title="Rechercher une citation de l'Apôtre Jean-Clément Diambilay"
        placeholder="Tapez un mot"
        textHelper="Dieu"
        listOriginUrl={<Breadcrumd list={listBreadcrumd} />}
        classname={styles.blog__title}
        termSearchField={term}
        handleSearchInput={handleChange}
        datasFilteredSearch={filteredCitationsSearch}
        pathname="/citations/list"
      />

      <section className={styles.citationlist__content}>
        <div className={`${styles.citationlist__content__wrapper} wrapper`}>
          <div className={styles.citationlist__content__filterBox}>
            <span className={styles.citationlist__content__filterBox__label}>
              FILTRE:
            </span>
            <ul className={styles.citationlist__content__filterBox__list}>
              <li
                className={styles.citationlist__content__filterBox__list__item}
              >
                <Link href="/">citations</Link>
              </li>
              <li
                className={styles.citationlist__content__filterBox__list__item}
              >
                <Link href="/">déclarations </Link>
              </li>
            </ul>
          </div>
          <div className={styles.citationlist__content__list}>
            <InfiniteScroll
              dataLength={citations.length}
              next={getMoreCitations}
              hasMore={hasMore}
              loader={
                <h4>
                  <Spiner />
                </h4>
              }
              endMessage={
                <p style={{ textAlign: "center" }}>
                  <b>Yay! vous avez affiché toutes les citations</b>
                </p>
              }
            >
              <List>
                {citations.map((citation) => {
                  const { Slug, content } = citation.attributes;

                  const { url } = citation.attributes.cover.data.attributes;
                  return (
                    <Link href={url}>
                      <a target="_blank">
                        <CardCitationList
                          pictureUrl={url}
                          pictureAlt={Slug}
                          text={content}
                        />
                      </a>
                    </Link>
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
      `${API_URL}/citations?pagination[start]=0&pagination[limit]=5&populate=*`
    );
    const resAllCitations = await axios.get(`${API_URL}/citations?populate=*`);

    const citations = res.data;
    const allcitations = resAllCitations.data;

    const { data, meta } = citations;

    const { total } = meta.pagination;

    const citationsSearchAll = allcitations.data;

    return {
      props: { data, total, citationsSearchAll },
    };
  } catch (err) {
    return { err };
  }
};

export default Citationlist;
