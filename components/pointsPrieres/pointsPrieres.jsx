import React from "react";
import styles from "./pointsPrieres.module.scss";

const PointsPrieres = ({ title, listItem }) => {
  let counter = 1;
  return (
    <section className={styles.pointsPrieres}>
      <header className={styles.pointsPrieres__header}>
        <h2 className={styles.pointsPrieres__header__title}>{title}</h2>
      </header>
      <ul className={styles.pointsPrieres__list}>
        {listItem.map((item) => (
          <li className={styles.pointsPrieres__list__item}>
            {" "}
            <span className={styles.pointsPrieres__list__item__span}>
              {counter++}.
            </span>
            <span className={styles.pointsPrieres__list__item__span}>
              {item}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PointsPrieres;
