import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./notFound.module.scss";

export default function NotFound() {
  return (
    <div className="wrapper">
      <div className={styles.notFound}>
        <section className={styles.notFound__textBox}>
          <h2 className={styles.notFound__textBox__title}>
            OOPS! page en cours de maintenance
          </h2>
          <p className={styles.notFound__textBox__subtitle}>
            Veuillez y revenir prochainement...
          </p>
          <p className={styles.notFound__textBox__linksLabel}>
            Les liens suivants peuvent vous interessez:
          </p>
          <ul className={styles.notFound__textBox__LinksBox}>
            <li>
              <Link href="/books">
                <a>Livres</a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a>Messages textes</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>A propos</a>
              </Link>
            </li>
          </ul>
        </section>
        <section className={styles.notFound__pictureBox}>
          <Image
            src="https://res.cloudinary.com/personnal/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1652696866/jcdiambilayministries/pageNotFoundJcdiambilayMinistries_okcv4r.jpg"
            layout="intrinsic"
            width={500}
            height={500}
            alt="page notFound jcdiambilayministries"
            loading="lazy"
          />
        </section>
      </div>
    </div>
  );
}
