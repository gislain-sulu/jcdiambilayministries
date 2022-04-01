import Image from "next/image";
import React from "react";
import styles from "./cardCitation_2.module.scss";

const CardCitation_2 = ({ picture, text }) => {
  return (
    <div className={styles.cardCitation}>
      <div className={styles.cardCitation__pictureBox}>
        <span className={styles.cardCitation__picture}>
          <Image
            // src="/assets/images/citations/citations/citation_1.jpg"
            src={picture}
            width="300"
            height="300"
            loading="lazy"
            alt="citation de jean clement diambilay"
          />
        </span>
      </div>
      {/* <p className={styles.cardCitation__text}>{text}</p> */}
    </div>
  );
};

export default CardCitation_2;
