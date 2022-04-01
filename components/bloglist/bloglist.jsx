import React from "react";
import styles from "./bloglist.module.scss";

const Bloglist = ({ children }) => {
  return <ul className={styles.bloglist}>{children}</ul>;
};

export default Bloglist;
