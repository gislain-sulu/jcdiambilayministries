import React from "react";
import Button from "../../button/button";
import styles from "./bapteme.module.scss";

const Bapteme = () => {
  return (
    <section className={styles.bapteme}>
      <div className={`${styles.bapteme__wrapper} wrapper`}>
        <h2 className={styles.bapteme__title}>
          donnez votre vie à jesus-christ
        </h2>
        <p className={styles.bapteme__question}>
          Êtes-vous prêt à découvrir comment Le recevoir comme Seigneur et
          Sauveur ?
        </p>
        <Button
          hrefUrl={`/blog/`}
          textBtn="Comment recevoir Jésus"
          className={styles.bapteme__button}
          icon="none"
        />
      </div>
    </section>
  );
};

export default Bapteme;
