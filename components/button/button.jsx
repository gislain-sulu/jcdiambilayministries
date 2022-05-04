import React from "react";
import Link from "next/link";
import styles from "./button.module.scss";

const Button = ({
  hrefUrl = "/",
  textBtn,
  className,
  icon = false,
  positionIcon = "left",
  type = "none",
}) => {
  if (icon === "none") {
    return (
      <button type={type} className={`${styles.btn} ${className}`}>
        <span>
          <Link href={hrefUrl}>
            <a className={styles.btn__link}>{textBtn}</a>
          </Link>
        </span>
      </button>
    );
  }
  if (positionIcon === "right") {
    return (
      icon && (
        <button
          type={type}
          className={`${styles.btn} ${className}`}
          // onClick={onClick}
        >
          <span>
            <Link href={hrefUrl}>
              <a className={styles.btn__link}>
                <span>{textBtn}</span>
                <span>{icon}</span>
              </a>
            </Link>
          </span>
          {/* <span className={styles.btn__icon}>{icon}</span> */}
        </button>
      )
    );
  }
  return (
    icon && (
      <button type={type} className={`${styles.btn} ${className}`}>
        {/* <span className={styles.btn__icon}></span> */}
        <span>
          <Link href={hrefUrl}>
            <a className={styles.btn__link}>
              <span className={styles.btn__link__icon}>{icon}</span>
              <span className={styles.btn__link__text}>{textBtn}</span>
            </a>
          </Link>
        </span>
      </button>
    )
  );
};

export default Button;
