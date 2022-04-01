import React, { useState } from "react";
import styles from "./header.module.scss";
import Image from "next/image";
import HEADER_BTN_DATA from "../../models/HEADER_BTN_DATA";
import Button from "../button/button";
import Link from "next/link";
import Hamburger from "../ Hamburger/ Hamburger";
import getLinkIcon from "../../utils/getLinksIcon";
import AccordeonMenu from "../accordeonMenu/accordeon";

const Header = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => setHamburgerOpen(!hamburgerOpen);

  return (
    <section className={styles.headerBox}>
      <header className={styles.header}>
        <div className={`${styles.header__wrapper} wrapper`}>
          <div className={styles.header__navbrandBox}>
            <div className={styles.header__navbrandBox__navbrand}>
              <Link href="/">
                <a>
                  <Image
                    src="/logo_jean_clement_diambilay_,ministries-01.svg"
                    alt="logo jc diambilay ministries"
                    width={469 / 3}
                    height={102 / 3}
                    loading="eager"
                  />
                </a>
              </Link>
            </div>
            <div className={styles.header__navbrandBox__slogan}>
              <p className={styles.header__navbrandBox__slogan__text}>
                <strong>
                  {" "}
                  Inspirer l'excellence - Accélerer les destinées
                </strong>
              </p>
            </div>
          </div>
          <div className={styles.header__hamburger} onClick={toggleHamburger}>
            <Hamburger isActive={hamburgerOpen} />
          </div>
          <div className={styles.header__buttonsBox}>
            <aside className={styles.header__aside}>
              {HEADER_BTN_DATA.map((link) => (
                <Button
                  hrefUrl={`/${link}`}
                  textBtn={link}
                  className={styles.header__aside__btn}
                  icon={getLinkIcon(link)}
                />
              ))}
            </aside>
          </div>
        </div>
      </header>
      <div
        className={
          hamburgerOpen
            ? styles.headerBox__accordeonMenu__active
            : styles.headerBox__accordeonMenu
        }
      >
        <AccordeonMenu />
      </div>
    </section>
  );
};

export default Header;
