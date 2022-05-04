import Link from "next/link";
import React from "react";
import styles from "./copyright.module.scss";

const Copyright = () => {
  return (
    <div className={styles.copyright}>
      <p className={styles.copyright__content}>
        <span>
          Copyright &copy; 2022 Tous droits réservés | Ce modèle est fait par
        </span>
        <Link
          href="mailTo:gislain.sulu@gmail.com"
          className={styles.copyright__content__link}
        >
          <a>Qualis Web&Apps</a>
        </Link>
      </p>
    </div>
  );
};

export default Copyright;
