import Link from "next/link";
import React from "react";
import styles from "./listLinks.module.scss";

const ListLinks = ({ links }) => {
  const getHrefLink = (link) => link.toLowerCase().replace(" ", "-");

  return (
    <ul className={styles.listLinks}>
      {links.map((link) => (
        <li className={styles.listLinks__item}>
          <Link href={getHrefLink(link)}>
            <a className={styles.listLinks__item__link}>{link}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default ListLinks;
