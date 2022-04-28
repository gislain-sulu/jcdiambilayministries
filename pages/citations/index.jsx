import React, { useState } from "react";
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

const Citation = (citations) => {
  console.log("citations", citations);

  const [allCitations, setAllCitations] = useState(citations);

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
                titleSection="citation"
                classname={`${styles.citation__content__box}`}
                urlBtn="/citationlist2"
                uniqId="citations"
              >
                <AliceCarousel
                  mouseTracking
                  items={CITATION_DATA.map((citation) => (
                    <Link href="/">
                      <a>
                        <CardCitationList
                          pictureUrl={citation.picture}
                          pictureAlt={citation.name}
                          text={citation.citation}
                        />
                      </a>
                    </Link>
                  ))}
                  responsive={responsive}
                  controlsStrategy="alternate"
                />
              </SectionPage>
            </li>
            <li>
              <SectionPage
                titleSection="citation livres"
                classname={`${styles.citation__content__citationLivres}`}
                urlBtn="/citationlist2"
                uniqId="citation_livres"
              >
                {CITATION_LIVRES_DATA.map((data) => (
                  <CardCube pictureUrl={data.picture} imageAlt={data.name} />
                ))}
              </SectionPage>
            </li>
            <li>
              <SectionPage
                titleSection="Déclaration prophétiques"
                classname={`${styles.citation__content__declarations}`}
                urlBtn="/citationlist2"
                uniqId="declarations_prophetique"
              >
                {DECLARATIONS.map((data) => (
                  <CardCube pictureUrl={data.picture} imageAlt={data.name} />
                ))}
              </SectionPage>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  try {
    const res = await axios.get(`${process.env.API_URL}/citations?populate=*`);

    const datas = res.data;

    const citations = datas.data;

    return {
      props: { citations },
      revalidate: 1,
    };
  } catch (err) {
    return { err };
  }
};

export default Citation;
