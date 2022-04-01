import React from "react";
import styles from "./cardmeansOfAction.module.scss";

const CardmeansOfAction = ({ children }) => {
  return <ol className={styles.cardmeansOfAction}>{children}</ol>;
};

export default CardmeansOfAction;
