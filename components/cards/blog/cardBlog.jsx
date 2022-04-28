import Image from "next/image";
import Link from "next/link";
import React from "react";
import formatDate from "../../../utils/formatDate";
import formatDescription from "../../../utils/formatDescription";
import Button from "../../button/button";
import { ArrowNext } from "../../icons/icon";
import styles from "./cardBlog.module.scss";

const CardBlog = ({ id, picture, title, author, date, description, slug }) => {
  return (
    <div className={styles.CardBlog}>
      <div className={styles.CardBlog__header}>
        <Image src={picture} alt={title} width="300" height="250" />
      </div>
      <h4 className={styles.CardBlog__title}>
        <Link href={`/blog/${slug}`}>
          <a lassName={styles.CardBlog__title__link}> {title}</a>
        </Link>
      </h4>

      <small className={styles.CardBlog__subtitle}>
        <span>{author ? author : "Par l'Apôtre Jean-Clément Diambilay"}</span>{" "}
        <span>|</span> <span>{formatDate(date, "DD/MM/YYYY à HH : MM")}</span>
      </small>
      <div className={styles.CardBlog__content}>
        {formatDescription(description, 150)}
      </div>
      <div className={styles.CardBlog__footer}>
        <Button
          hrefUrl={`/blog/${slug}`}
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
