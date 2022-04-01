import Image from "next/image";
import React from "react";
import Button from "../../button/button";
import CardSectionsLinksFooter from "../../cards/footer/cardSectionsLinksFooter";
import Copyright from "../../copyright/copyright";
import SearchForm from "../../forms/search/search";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "../../icons/icon";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footer__wrapper} wrapper`}>
        <div className={styles.footer__sectionsLinksGroup}>
          <CardSectionsLinksFooter />
        </div>
        <div className={styles.footer__sectionsNewsLetterGroup}>
          <div
            className={styles.footer__sectionsNewsLetterGroup__socialsMedias}
          >
            <Image
              src="/assets/images/logos/locgo_jcdiambilay_white_v1.svg"
              width={469 / 2}
              height={102 / 2}
              loading="lazy"
            />
            <div
              className={
                styles.footer__sectionsNewsLetterGroup__socialsMediasBox
              }
            >
              <span
                className={
                  styles.footer__sectionsNewsLetterGroup__socialsMediasBox__item
                }
              >
                <Facebook />
              </span>
              <span
                className={
                  styles.footer__sectionsNewsLetterGroup__socialsMediasBox__item
                }
              >
                <Twitter />
              </span>
              <span
                className={
                  styles.footer__sectionsNewsLetterGroup__socialsMediasBox__item
                }
              >
                <Instagram />
              </span>
              <span
                className={
                  styles.footer__sectionsNewsLetterGroup__socialsMediasBox__item
                }
              >
                <Linkedin />
              </span>
              <span
                className={
                  styles.footer__sectionsNewsLetterGroup__socialsMediasBox__item
                }
              >
                <Youtube />
              </span>
            </div>
          </div>
          <div className={styles.footer__sectionsNewsLetterGroup__newLetterBox}>
            <span
              className={
                styles.footer__sectionsNewsLetterGroup__newLetterBox__text
              }
            >
              Rejoignez notre newsletter hebdomadaire par e-mail pour recevoir
              des nouvelles, des événements et d'autres annonces sur ce qui se
              passe dans notre Ministères.
            </span>
            <div
              className={
                styles.footer__sectionsNewsLetterGroup__newLetterBox__form
              }
            >
              <form>
                <input type="email" placeholder="votre email..." />
                <Button
                  textBtn="s'abonner"
                  icon="none"
                  type="submit"
                  className={styles.footer__button}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer__copyrightBox}>
        <div className={`${styles.footer__wrapper} wrapper`}>
          <Copyright classname={styles.footer__copyright} />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
