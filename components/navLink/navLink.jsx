import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useContext } from "react";
import AppContext from "../../context/AppContext";
import { IconNext } from "../icons/icon";
import styles from "./navLink.module.scss";

const NavLink = ({ tabLinkList /* tabLinkList is a array  */, isIconNext }) => {
  const [active, setactive] = useState("/home");

  const router = useRouter();
  const context = useContext(AppContext);
  const { activeHambourgerBtn } = context.state;
  const { closeHambourgerBtn } = context.state;

  console.log(activeHambourgerBtn);

  const activeLink = (item) => {
    setactive(item);
    closeHambourgerBtn(false);
    router.push(item);
  };

  return (
    <nav className={styles.navlink} role="navigation">
      <ul className={styles.navlink__box}>
        {tabLinkList.map((link) => (
          <li
            className={`
          
          ${
            active === link.link
              ? `${styles.navlink__box__active}`
              : `${styles.navlink__box__item}`
          }
          `}
            key={link.id}
            onClick={() => activeLink(link.link)}
          >
            <Link href={link.link}>
              <a
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
      </ul>
    </nav>
  );
};
export default NavLink;
