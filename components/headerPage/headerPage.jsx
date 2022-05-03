import axios from "axios";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { IconSearch } from "../icons/icon";
import Spiner from "../spinner/spiner";
import styles from "./headerPage.module.scss";

const HeaderPage = ({
  title,
  placeholder,
  textHelper,
  listOriginUrl,
  isWithFieldSearch = true,
  classname,
  termSearchField = "",
  handleSearchInput,
  datasFilteredSearch,
  pathname,
}) => {
  console.log("datasFilter", datasFilteredSearch);
  // const DATA_MOCK = [
  //   {
  //     id: 1,
  //     title: "je suis entraion d'apprendre la programation",
  //   },
  //   {
  //     id: 2,
  //     title:
  //       "un algo est une suite logique pour aboutir à un resultat en programmation",
  //   },
  //   {
  //     id: 3,
  //     title: "le congo est un pays benit",
  //   },
  //   {
  //     id: 4,
  //     title: "Rwhanda est un pays qui fait la guerre aux autres pays",
  //   },
  //   {
  //     id: 4,
  //     title: "la programmation est l'art de manipuler les données",
  //   },
  //   {
  //     id: 5,
  //     title: "nous avons les memes besoins mais pas les memes valeurs",
  //   },
  // ];
  const [term, setTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  // const dataFiltered = () =>
  //   DATA_MOCK.filter((data) => data.title.toLowerCase().includes(term));

  // useEffect(() => {
  //   setFilteredData();
  // }, [term]);

  useEffect(() => {
    setTerm(termSearchField);
  }, [termSearchField]);

  console.log("term", term);

  // const handleChange = (e) => {
  //   setTerm(e.target.value);
  // };
  return (
    <section>
      {isWithFieldSearch ? (
        <header className={`${styles.headerPage} h1 }`}>
          <h1 className={styles.headerPage__titleBox}>
            <span className={styles.headerPage__titleBox__decoration}></span>
            <span className={styles.headerPage__titleBox__title}>{title}</span>
          </h1>

          <div className={styles.headerPage__searchBox}>
            <form className={styles.headerPage__form}>
              <div className={styles.headerPage__form__fielSearchBox}>
                <span
                  className={styles.headerPage__form__fielSearchBox__iconBox}
                >
                  <IconSearch />
                </span>

                <input
                  type="text"
                  placeholder={`${placeholder} ...`}
                  className={styles.headerPage__form__fielSearchBox__input}
                  onChange={handleSearchInput}
                />
              </div>
            </form>

            <section
              className={
                term.length <= 1
                  ? `${styles.headerPage__searchBox__collections}`
                  : `${styles.headerPage__searchBox__collections__active}`
              }
            >
              {term.length === 1 && <Spiner />}
              {term.length >= 2 && (
                <ul
                  className={
                    styles.headerPage__searchBox__collections__activeBox
                  }
                >
                  {datasFilteredSearch.length === 0 && (
                    <li>Pas de resultat correspondant à votre demande</li>
                  )}

                  {pathname === "/blog" &&
                    datasFilteredSearch.map(({ attributes }) => (
                      <li>
                        <Link href={`/blog/${attributes.Slug}`}>
                          <a>{attributes.title}</a>
                        </Link>
                      </li>
                    ))}

                  {/* {term.length >= 2 &&
                  filtrereddata.map((data) => <li> {data.title}</li>)} */}
                </ul>
              )}
            </section>
          </div>
          <div className={styles.headerPage__textHelper}>
            <small>
              exemple:
              <strong className={styles.headerPage__textHelper__strong}>
                {textHelper}
              </strong>
              ...
            </small>
          </div>
        </header>
      ) : (
        <header className={styles.headerPage}>
          <h1 className={styles.headerPage__titleBox}>
            <span className={styles.headerPage__titleBox__decoration}></span>
            <span className={styles.headerPage__titleBox__title}>{title}</span>
          </h1>
        </header>
      )}

      <div className="wrapper">
        <div className={styles.origineUrl}>{listOriginUrl}</div>
      </div>
    </section>
  );
};

export default HeaderPage;
