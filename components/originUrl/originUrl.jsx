import Link from "next/link";
import React from "react";
import { IconHome, IconLineFluent, IconNext } from "../icons/icon";
import styles from "./originUrl.module.scss";

const OriginUrl = ({ listItem, className }) => {
  const lastItem = listItem[listItem.length - 1];

  const FirstItemLength = listItem.shift();
  const LastItemLength = listItem.pop();

  const getLink = (item) => {
    if (item === "citations") {
      return "/citations";
    }
    if (item === "books") {
      return "/books";
    }
    return item;
  };

  return (
    <ul className={`${styles.list} ${className}`}>
      <li className={styles.list__item}>
        <span className={styles.list__item__span}>
          <Link href="/">
            <a>
              <IconHome /> Home
            </a>
          </Link>
        </span>
      </li>
      {listItem.map((item) => (
        <li className={styles.list__item}>
          <IconNext />
          <span className={styles.list__item__span}>
            <Link href={getLink(item)}>
              <a>{item}</a>
            </Link>
          </span>
        </li>
      ))}
      <IconNext /> <li className={styles.list__item}>{lastItem}</li>
    </ul>
  );
};

export default OriginUrl;
