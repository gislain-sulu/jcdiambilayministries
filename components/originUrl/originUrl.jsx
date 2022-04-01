import Link from "next/link";
import React from "react";
import { IconHome, IconLineFluent, IconNext } from "../icons/icon";
import styles from "./originUrl.module.scss";

const OriginUrl = ({ listItem, className }) => {
  const newListItem = listItem;

  const lastItem = newListItem.pop();

  return (
    <ul className={`${styles.list} ${className}`}>
      <li className={styles.list__item}>
        <span className={styles.list__item__span}>
          <Link href="/">
            <a href="/">
              <IconHome />
            </a>
          </Link>
        </span>
      </li>

      {newListItem.map((item) => (
        <>
          <li className={styles.list__item}>
            <span className={styles.list__item__span}>
              <Link href={`${item.pageLink}`}>
                <a href={`${item.pageLink}`}>{item.page}</a>
              </Link>
            </span>
          </li>
          <li className={styles.list__item}>
            <IconNext />
          </li>
        </>
      ))}

      <li className={styles.list__item}>{lastItem.page}</li>
    </ul>
  );
};

export default OriginUrl;
