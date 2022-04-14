import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import CITATION_DATA from "../../../models/CITATION_DATA";
import CardCube from "../../cards/cardCube/cardCube";
import SectionPage from "../section";
import styles from "./citation.module.scss";

const SectionCitation = () => {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  return (
    <>
      <div className={`${styles.citation__wrapper} wrapper`}>
        <SectionPage
          titleSection="citations"
          urlBtn="/citation"
          classname={styles.citation}
        >
          <AliceCarousel
            mouseTracking
            items={CITATION_DATA.map((citation) => (
              <CardCube
                pictureUrl={citation.picture}
                pictureAlt={citation.author}
              />
            ))}
            responsive={responsive}
            controlsStrategy="alternate"
          />
        </SectionPage>
      </div>
    </>
  );
};

export default SectionCitation;
