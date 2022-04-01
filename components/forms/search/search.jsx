import React from "react";
import styles from "./search.module.scss";
const SearchForm = ({ placeholder, classname }) => {
  return (
    <form className={` ${styles.form} ${styles.searchForm}`}>
      <div
        className={` ${styles.form__container}  ${styles.SearchForm__container}`}
      >
        <input
          type="search"
          placeholder={placeholder}
          className={`${styles.form__control} ${classname}`}
        />
      </div>
    </form>
  );
};

export default SearchForm;
