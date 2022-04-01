import React from "react";
import CITATION_DATA from "../../../models/CITATION_DATA";
import CardButton from "../../cards/cardButton/cardButton";
import CardCube from "../../cards/cardCube/cardCube";
import CardCitationList from "../../cards/citations/cardCitationlist";
import { MyCarousel, MyCarouselMobile } from "../../carousel/carousel";
import SectionPage from "../section";
import styles from "./citation.module.scss";

const SectionCitation = () => {
  return (
    <>
      <div className={`${styles.citation__wrapper} wrapper`}>
        <SectionPage
          titleSection="citations"
          urlBtn="/citation"
          classname={styles.citation}
        >
          <div className={`${styles.citation__mobile}`}>
            <MyCarouselMobile>
              {CITATION_DATA.map((citation) => (
                <CardCube
                  pictureUrl={citation.picture}
                  pictureAlt={citation.author}
                />
              ))}
            </MyCarouselMobile>
          </div>
          <div className={`${styles.citation__desktop}`}>
            <MyCarousel>
              <div className={styles.citation__slider}>
                {CITATION_DATA.map((citation) => (
                  <CardCitationList
                    pictureUrl={citation.picture}
                    pictureAlt={citation.author}
                    text={citation.citation}
                  />
                ))}
              </div>
              <div className={styles.citation__slider}>
                {CITATION_DATA.map((citation) => (
                  <CardCitationList
                    pictureUrl={citation.picture}
                    pictureAlt={citation.author}
                    text={citation.citation}
                  />
                ))}
              </div>
            </MyCarousel>
          </div>
        </SectionPage>
      </div>
    </>
  );
};

export default SectionCitation;
