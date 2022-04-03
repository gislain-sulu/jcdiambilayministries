import Link from "next/link";
import React from "react";
import { IconNext } from "../icons/icon";
import styles from "./navLink.module.scss";

const NavLink = ({ tabLinkList /* tabLinkList is a array  */, isIconNext }) => {
  return (
    <nav className={styles.navlink} role="navigation">
      <ul className={styles.navlink__box}>
        {tabLinkList.map((link) => (
          <li className={styles.navlink__box__item} key={link.id}>
            <Link href={link.link}>
              <a
                href={link.link}
                className={styles.navlink__box__item__link}
                title={link.textLink}
              >
                {isIconNext ? (
                  <span className={styles.navlink__box__item__link__icon}>
                    {<IconNext />}
                    {link.textLink}
                  </span>
                ) : (
                  <span className={styles.navlink__box__item__link__text}>
                    {link.textLink}
                  </span>
                )}
              </a>
            </Link>
          </li>
        ))}
        {/* <li className={styles.navlink__Box__item}>
          <Link href={hrefUrl}>
            <a className={styles.navlink__Box__item__link}>{textLink}</a>
          </Link>
        </li> */}
      </ul>
    </nav>
  );
};
export default NavLink;
