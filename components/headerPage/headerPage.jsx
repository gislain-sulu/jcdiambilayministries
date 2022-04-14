import React from "react";
import { IconSearch } from "../icons/icon";
import styles from "./headerPage.module.scss";

const HeaderPage = ({
  title,
  placeholder,
  textHelper,
  listOriginUrl,
  isWithFieldSearch = true,
  classname,
}) => {
  return (
    <section>
      {isWithFieldSearch ? (
        <header className={`${styles.headerPage} h1 }`}>
          <h1 className={styles.headerPage__titleBox}>
            <span className={styles.headerPage__titleBox__decoration}></span>
            <span className={styles.headerPage__titleBox__title}>{title}</span>
          </h1>

          <div className={styles.headerPage__searchBox}>
            <form className={styles.headerPage__form}>
              <div className={styles.headerPage__form__fielSearchBox}>
                <span
                  className={styles.headerPage__form__fielSearchBox__iconBox}
                >
                  <IconSearch />
                </span>

                <input
                  type="text"
                  placeholder={`${placeholder} ...`}
                  className={styles.headerPage__form__fielSearchBox__input}
                />
              </div>
            </form>
          </div>
          <div className={styles.headerPage__textHelper}>
            <small>
              exemple:
              <strong className={styles.headerPage__textHelper__strong}>
                {textHelper}
              </strong>
              ...
            </small>
          </div>
        </header>
      ) : (
        <header className={styles.headerPage}>
          <h1 className={styles.headerPage__titleBox}>
            <span className={styles.headerPage__titleBox__decoration}></span>
            <span className={styles.headerPage__titleBox__title}>{title}</span>
          </h1>
        </header>
      )}

      <div className="wrapper">
        <div className={styles.origineUrl}>{listOriginUrl}</div>
      </div>
    </section>
  );
};

export default HeaderPage;
