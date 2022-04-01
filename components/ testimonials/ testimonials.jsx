import Image from "next/image";
import React from "react";
import styles from "./ testimonials.module.scss";

const Testimonials = ({ pictureUrl, cite, textBlockquote }) => {
  return (
    <blockquote className={styles.testimonial}>
      <div className={styles.testimonial__header}>
        <span className={styles.testimonial__header__picture}>
          <Image src={pictureUrl} width={300} height={300} />
        </span>
        <span className={styles.testimonial__header__cite}>
          <cite>{cite}</cite>
        </span>
      </div>

      <div className={styles.testimonial__content}>
        <p>{textBlockquote}</p>
      </div>
    </blockquote>
  );
};

export default Testimonials;
