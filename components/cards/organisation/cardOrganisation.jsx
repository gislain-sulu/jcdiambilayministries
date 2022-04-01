import React from "react";
import styles from "./cardOrganisation.module.scss";

const CardOrganisation = ({ title, text }) => {
  return (
    <div className={styles.cardOrganisation}>
      <h4 className={styles.cardOrganisation__title}>{title}</h4>
      <p className={styles.cardOrganisation__text}>{text}</p>
    </div>
  );
};

export default CardOrganisation;
