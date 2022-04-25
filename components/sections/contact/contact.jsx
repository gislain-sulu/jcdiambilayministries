import React from "react";
import Button from "../../button/button";
import styles from "./contact.module.scss";

const Contact = () => {
  return (
    <section className={styles.contact}>
      <div className={`${styles.contact__wrapper} wrapper`}>
        <h2 className={styles.contact__title}>
          AVEZ-VOUS BESOIN DE <strong>CONSEILS</strong> , DE{" "}
          <strong>PRIERE</strong> OU DESIREZ-VOUS NOUS FAIRE DES SUGGESTIONS.
        </h2>

        <Button
          hrefUrl={`/blog/`}
          textBtn="Contactez-nous"
          className={styles.contact__button}
          icon="none"
        />
      </div>
    </section>
  );
};
export default Contact;
