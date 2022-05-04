import React from "react";
import styles from "./contact.module.scss";
import Image from "next/image";
import HeaderPage from "../../components/headerPage/headerPage";
import OriginUrl from "../../components/originUrl/originUrl";
import { useRouter } from "next/router";
import Button from "../../components/button/button";
import {
  ArrowNext,
  Facebook,
  IconContact,
  IconNext,
  IconPlace,
  IconSocialsMedias,
  IconTelephone,
  Instagram,
  Twitter,
  Youtube,
} from "../../components/icons/icon";
import Link from "next/link";

const Contact = () => {
  const router = useRouter();

  const pathname = router.pathname;

  const formatPathname = pathname.replace("/", "");

  const listLinks = ["home", formatPathname];

  return (
    <div className={styles.contact}>
      <HeaderPage
        title="Contact"
        isWithFieldSearch={false}
        listOriginUrl={<OriginUrl listItem={listLinks} />}
      />
      <div className={`${styles.contact__wrapper} wrapper`}>
        <div className={styles.contact__intro}>
          <p className={styles.contact__intro__text}>
            <strong className={styles.contact__intro__text__strong}>
              Ecrivez-nous , appellez-nous ,visitez-nous{" "}
            </strong>
            pour en savoir plus sur{" "}
            <strong className={styles.contact__intro__text__strong}>
              jcdiambilayministries.org
            </strong>
          </p>
        </div>
      </div>
      <div className={`${styles.contact__wrapper} wrapper`}>
        <ul className={styles.contact__content}>
          <li className={styles.contact__content__formBox}>
            <form action="" className={styles.contact__form}>
              <div className={styles.contact__form__box}>
                <input
                  type="text"
                  className={styles.contact__form__box__name}
                  name="noms"
                  placeholder="Tapez votre nom"
                  required={true}
                />
              </div>
              <div className={styles.contact__form__box}>
                <input
                  type="email"
                  className={styles.contact__form__box__email}
                  placeholder="Tapez votre adresse email valide"
                  required={true}
                />
              </div>
              <div className={styles.contact__form__box}>
                <input
                  type="tel"
                  className={styles.contact__form__box__telephone}
                  placeholder="Tapez votre numero télephonique"
                  required={true}
                />
              </div>
              <div className={styles.contact__form__box}>
                <textarea
                  className={styles.contact__form__box__message}
                  name="message"
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="votre message ici..."
                ></textarea>
              </div>
              <div className={styles.contact__form__box}>
                <Button
                  textBtn="envoyer"
                  className={styles.contact__form__box__btn}
                  icon={<ArrowNext />}
                  positionIcon="right"
                  type="submit"
                />
              </div>
            </form>
          </li>
          <li className={styles.contact__content__addressBox}>
            <div className={styles.contact__content__addressBox__cardBox}>
              <ul
                className={
                  styles.contact__content__addressBox__cardBox__content
                }
              >
                <li
                  className={
                    styles.contact__content__addressBox__cardBox__content__addressBox
                  }
                >
                  <div
                    className={
                      styles.contact__content__addressBox__cardBox__content__addressBox__content
                    }
                  >
                    <ul>
                      <li>
                        <h4>
                          <span>
                            <IconTelephone />
                          </span>
                          <span>telephones</span>
                        </h4>
                      </li>
                      <li>
                        <a href="tel:+243810674444">(+243) 81 067 44 44</a>
                        <a href="tel:+243810674444">(+243) 81 067 44 44</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li
                  className={
                    styles.contact__content__addressBox__cardBox__content__place
                  }
                >
                  <h4>
                    <span>
                      <IconPlace />
                    </span>
                    <span>adresse</span>
                  </h4>
                  <address>
                    N°289 Olamba , Quartier Mikonga ,Commune Nsele Kinshasa
                    RDCongo
                  </address>
                </li>
                <li
                  className={
                    styles.contact__content__addressBox__cardBox__content__reseauxsociaux
                  }
                >
                  <h4>
                    <span>
                      <IconSocialsMedias />
                    </span>
                    <span>reseaux sociaux</span>
                  </h4>
                  <div>
                    <ul>
                      <li>
                        <Link href="https://web.facebook.com/Jcdminist">
                          <a target="_blank">
                            <Facebook />
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="https://mobile.twitter.com/jdiambilay">
                          <a target="_blank">
                            <Twitter />
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="https://www.youtube.com/channel/UC-5MlpGFchNz8sRwiFQrH5w">
                          <a target="_blank">
                            <Youtube />
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="https://www.instagram.com/iam_jcdk/?hl=fr">
                          <a target="_blank">
                            <Instagram />
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
{
}
export default Contact;
