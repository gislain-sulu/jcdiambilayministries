import React from "react";
import Button from "../button/button";
import styles from "./section.module.scss";
import { ArrowNext } from "../icons/icon";

const SectionPage = ({
  titleSection,
  children,
  classname,
  withButton = true,
  urlBtn = "/",
  uniqId,
}) => {
  return (
    <section className={styles.sectionPage} id={uniqId}>
      <header className={styles.sectionPage__header}>
        <h2 className={styles.sectionPage__header__title}>{titleSection}</h2>
        {withButton && (
          <span className={styles.sectionPage__header__btnBox}>
            <Button
              hrefUrl={urlBtn}
              textBtn="voir plus"
              className={styles.sectionPage__header__btnBox__button}
              icon={<ArrowNext />}
              positionIcon="right"
            />
          </span>
        )}
      </header>
      <div className={`${styles.sectionPage__content} ${classname}`}>
        {children}
      </div>
    </section>
  );
};

export default SectionPage;
