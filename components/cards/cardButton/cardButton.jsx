import React from "react";
import { IconQuote } from "../../icons/icon";
import styles from "./cardButton.module.scss";

const CardButton = () => {
  return (
    <div className={styles.cardButton}>
      <div className={styles.cardButton__icon}>
        <IconQuote />
      </div>
      <strong className={styles.cardButton__content}>
        voir plus des citations
      </strong>
    </div>
  );
};

export default CardButton;
