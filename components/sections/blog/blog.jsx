import axios from "axios";
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import MOCK_BLOG from "../../../models/MOCK_BLOG";
import CardBlog from "../../cards/blog/cardBlog";
import SectionPage from "../section";
import styles from "./blog.module.scss";

const Blog = ({ children }) => {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

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
