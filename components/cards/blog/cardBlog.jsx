import Image from "next/image";
import React from "react";
import Button from "../../button/button";
import { ArrowNext } from "../../icons/icon";
import styles from "./cardBlog.module.scss";

const CardBlog = ({ id, title, othor, date, description }) => {
  const getDesciption = (desc) => {
    return `${desc.toLowerCase().slice(0, 150)}...`;
  };
  return (
    <div className={styles.CardBlog}>
      <div className={styles.CardBlog__header}>{/* <Image /> */}</div>
      <h4 className={styles.CardBlog__title}>{title}</h4>
      <small className={styles.CardBlog__subtitle}>
        <span>{othor}</span> <span>|</span> <span> {date}</span>
      </small>
      <div className={styles.CardBlog__content}>
        {getDesciption(description)}
      </div>
      <div className={styles.CardBlog__footer}>
        <Button
          hrefUrl={`/blog/${id}`}
          textBtn="lire plus"
          className={styles.CardBlog__footer__button}
          icon={<ArrowNext />}
          positionIcon="right"
        />
      </div>
    </div>
  );
};
export default CardBlog;
