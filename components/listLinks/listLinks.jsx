import Link from "next/link";
import React from "react";
import { IconNext } from "../icons/icon";
import styles from "./listLinks.module.scss";

const ListLinks = ({ links }) => {
  return (
    <ul className={styles.listLinks}>
      {links.map((link) => (
        <li key={link.id} className={styles.listLinks__item}>
          <Link href={link.url}>
            <a className={styles.listLinks__item__link}>
              <span className={styles.listLinks__item__link__icon}>
                {<IconNext />}
              </span>
              <span className={styles.listLinks__item__link__text}>
                {" "}
                {link.label}{" "}
              </span>{" "}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default ListLinks;
