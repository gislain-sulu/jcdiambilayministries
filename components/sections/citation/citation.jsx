import React from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import SectionPage from "../section";
import styles from "./citation.module.scss";

const SectionCitation = ({ children }) => {
  return (
    <>
      <div className={`${styles.citation__wrapper} wrapper`}>
        <SectionPage
          titleSection="citations"
          urlBtn="/citations"
          classname={styles.citation}
        >
          {children}
        </SectionPage>
      </div>
    </>
  );
};

export default SectionCitation;
