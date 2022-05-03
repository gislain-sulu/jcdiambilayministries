import React, { useState, useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import styles from "./citation.module.scss";

import CardCitation_1 from "../../components/cards/citations/cardCitation_1";
import {
  IconQuote,
  IconQuote_2,
  IconQuote_3,
} from "../../components/icons/icon";
import SectionPage from "../../components/sections/section";
import CardCube from "../../components/cards/cardCube/cardCube";
import CITATION_DATA from "../../models/CITATION_DATA";
import CITATION_LIVRES_DATA from "../../models/CITATION_LIVRES_DATA";
import DECLARATIONS from "../../models/DECLARATIONS_DATA";
import Link from "next/link";
import { useRouter } from "next/router";
import HeaderPage from "../../components/headerPage/headerPage";
import OriginUrl from "../../components/originUrl/originUrl";
import List from "../../components/list/list";
import CardCitationList from "../../components/cards/citations/cardCitationlist";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Spiner from "../../components/spinner/spiner";

const Citation = ({ citations }) => {
  const [citationsData, setCitationsData] = useState([]);
  const [citationsLivresData, setCitationsLivresData] = useState([]);
  const [declarationsData, setDeclarationsData] = useState([]);

  const categoryCitationsData = citations.filter(
    (citation) => citation.attributes.category.data.id === 2
  );
  const categoryCitationsLivreData = citations.filter(
    (citation) => citation.attributes.category.data.id === 1
  );
  const categoryDeclarationsData = citations.filter(
    (citation) => citation.attributes.category.data.id === 3
  );

  const categoryDataFiltered = (category) => {
    if (category.length > 4) {
      return category.slice(0, 4);
    }
    return category;
  };

  const categoryCitationsDataFiltered = categoryDataFiltered(
    categoryCitationsData
  );
  const categoryCitationsLivreDataFiltered = categoryDataFiltered(
    categoryCitationsLivreData
  );
  const categoryDeclarationsDataFiltered = categoryDataFiltered(
    categoryDeclarationsData
  );

  useEffect(() => {
    setCitationsData(categoryCitationsDataFiltered);
  }, []);

  useEffect(() => {
    setCitationsLivresData(categoryCitationsLivreDataFiltered);
  }, []);

  useEffect(() => {
    setDeclarationsData(categoryDeclarationsDataFiltered);
  }, []);

  console.log("categorie1", citationsData);
  console.log("categorie2", citationsLivresData);
  console.log("categorie3", declarationsData);

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };
  const router = useRouter();

  const pathname = router.pathname;

  const formatPathname = pathname.replace("/", "");

  const listLinks = ["home", formatPathname];

  const data = [
    {
      id: 1,
      title: "citations",
      labelId: "citations",
      icon: <IconQuote />,
    },
    {
      id: 2,
      title: "citation livres",
      labelId: "citation_livres",
      icon: <IconQuote_2 />,
    },
    {
      id: 3,
      title: "déclarations prophétique",
      labelId: "declarations_prophetique",
      icon: <IconQuote_3 />,
    },
  ];

  return (
    <div className={styles.citation}>
      <HeaderPage
        title="Citations"
        listOriginUrl={<OriginUrl listItem={listLinks} />}
        isWithFieldSearch={false}
      />
      <div className={styles.citation__content}>
        <div className={`${styles.citation__content} wrapper`}>
          <ul className={styles.citation__content__cardsBox}>
            {data.map((link) => (
              <li
                key={link.id}
                className={styles.citation__content__cardsBox__item}
              >
                <Link href={`#${link.labelId}`}>
                  <a className={styles.citation__content__cardsBox__item__link}>
                    <CardCitation_1 title={link.title} icon={link.icon} />
                  </a>
                </Link>
              </li>
            ))}
          </ul>

          <ul className={styles.citation__content__list}>
            <li>
              <SectionPage
                titleSection="citations"
                classname={`${styles.citation__content__box}`}
                urlBtn="/citations/list"
                uniqId="citations"
              >
                {citationsData.length === 0 ? (
                  <section>
                    <Spiner />
                  </section>
                ) : (
                  <AliceCarousel
                    mouseTracking
                    items={citationsData.map((citation) => {
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
                    responsive={responsive}
                    controlsStrategy="alternate"
                  />
                )}
              </SectionPage>
            </li>
            <li>
              <SectionPage
                titleSection="citations livres"
                classname={`${styles.citation__content__citationLivres}`}
                urlBtn="/citations/list"
                uniqId="citation_livres"
              >
                {citationsLivresData.length === 0 ? (
                  <section>
                    <Spiner />
                  </section>
                ) : (
                  <AliceCarousel
                    mouseTracking
                    items={citationsLivresData.map((citation) => {
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
                    responsive={responsive}
                    controlsStrategy="alternate"
                  />
                )}
              </SectionPage>
            </li>
            <li>
              <SectionPage
                titleSection="Déclarations prophétiques"
                classname={`${styles.citation__content__declarations}`}
                urlBtn="/citations/list"
                uniqId="declarations_prophetique"
              >
                {declarationsData.length === 0 ? (
                  <section>
                    <Spiner />
                  </section>
                ) : (
                  <AliceCarousel
                    mouseTracking
                    items={declarationsData.map((citation) => {
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
                    responsive={responsive}
                    controlsStrategy="alternate"
                  />
                )}
              </SectionPage>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const { API_URL } = process.env;

  const qs = require("qs");
  const query = qs.stringify(
    {
      populate: "*",
    },
    {
      encodeValuesOnly: true,
    }
  );

  try {
    const res = await axios.get(`${API_URL}/citations?${query}`);

    const datas = res.data;

    const { data } = datas;

    // const citations = allcitations.data[0];

    return {
      props: { citations: data },
      revalidate: 1,
    };
  } catch (err) {
    return { err };
  }
};

export default Citation;
