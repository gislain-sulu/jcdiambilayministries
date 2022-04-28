import React from "react";
import styles from "./spiner.module.scss";

const Spiner = () => {
  return (
    <div className={styles.ellipsis}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Spiner;
