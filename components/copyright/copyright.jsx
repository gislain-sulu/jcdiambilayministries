import React from "react";
import styles from "./copyright.module.scss";

const Copyright = ({ classname }) => {
  return (
    <div className={`${classname} styles.copyright`}>
      <p className={styles.copyright__content}>
        Copyright &copy; 2022 Tous droits réservés | Ce modèle est fait par
        Qualis Web&Apps
      </p>
    </div>
  );
};

export default Copyright;
