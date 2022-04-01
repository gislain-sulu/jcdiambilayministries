import React from "react";
import styles from "./cardCitation_1.module.scss";

const CardCitation_1 = ({ icon, title }) => {
  return (
    <div className={styles.cardCitation}>
      <div className={styles.cardCitation__iconBox}>
        <span className={styles.cardCitation__icon}>{icon}</span>
      </div>
      <h4 className={styles.cardCitation__title}>{title}</h4>
    </div>
  );
};

export default CardCitation_1;
