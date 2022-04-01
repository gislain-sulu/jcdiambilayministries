import React from "react";
import styles from "./articleBlog.module.scss";

const ArticleBlog = ({
  titleArticle,
  subtitleArticle,
  datePublication,
  textBlog,
}) => {
  return (
    <article className={styles.articleBlog}>
      <h2 className={styles.articleBlog__title}>{titleArticle}</h2>
      <h3 className={styles.articleBlog__subtitle}>{subtitleArticle}</h3>
      <span className={styles.articleBlog__date}>
        publié le : {datePublication}
      </span>
      <p>{textBlog}</p>
    </article>
  );
};

export default ArticleBlog;
