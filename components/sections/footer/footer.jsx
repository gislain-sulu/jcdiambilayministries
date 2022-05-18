import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../../button/button";
import CardSectionsLinksFooter from "../../cards/footer/cardSectionsLinksFooter";
import Copyright from "../../copyright/copyright";
import {
  Facebook,
  IconSuscribe,
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
            <Link href="/">
              <a>
                <Image
                  src="/assets/images/logos/locgo_jcdiambilay_white_v1.svg"
                  width={469 / 2}
                  height={102 / 2}
                  loading="eager"
                  alt="logo jcdiambilayministries"
                />
              </a>
            </Link>

            <ul
              className={
                styles.footer__sectionsNewsLetterGroup__socialsMediasBox
              }
            >
              <li>
                <Link href="https://web.facebook.com/Jcdminist">
                  <a target="_blank" title="visiter notre page Facebook">
                    <Facebook />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://mobile.twitter.com/jdiambilay">
                  <a target="_blank" title="visiter notre page Twiter">
                    <Twitter />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://www.youtube.com/channel/UC-5MlpGFchNz8sRwiFQrH5w">
                  <a target="_blank" title="visiter notre chaine Youtube">
                    <Youtube />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/iam_jcdk/?hl=fr">
                  <a target="_blank" title="visiter notre page Intsagram">
                    <Instagram />
                  </a>
                </Link>
              </li>
            </ul>
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
                <label htmlFor="Email">votre email</label>
                <input
                  id="Email"
                  type="email"
                  placeholder="votre email..."
                  name="Email"
                />
                <Button
                  textBtn="S'abonner"
                  icon={<IconSuscribe />}
                  type="submit"
                  className={styles.footer__button}
                  title="button s'abonner"
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
