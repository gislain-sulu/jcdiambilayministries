import React from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import SectionPage from "../section";
import styles from "./blog.module.scss";

const Blog = ({ children }) => {
  return (
    <>
      <div className={`${styles.blog__wrapper} wrapper`}>
        <SectionPage
          titleSection="Messages"
          classname={styles.blog}
          urlBtn="/blog"
        >
          {children}
        </SectionPage>
      </div>
    </>
  );
};

export default Blog;
