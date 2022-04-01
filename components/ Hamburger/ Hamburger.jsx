import React from "react";
import styles from "./ Hamburger.module.scss";

const Hamburger = ({ isActive }) => {
  return (
    <div className={isActive ? styles.hamburgerActive : styles.hamburger}>
      <div className={styles.hamburger__box}>
        <div className={styles.hamburger__box__inner}></div>
      </div>
    </div>
  );
};
export default Hamburger;
