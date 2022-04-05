import React from "react";
import "./search.module.scss";

const Search = () => {
  return (
    <form className={styles.citationlist__form}>
      <div className={styles.citationlist__form__fielSearchBox}>
        <input
          type="text"
          placeholder="Tapez un mot ..."
          className={styles.citationlist__form__fielSearchBox__input}
        />
      </div>
      <div className={styles.citationlist__form__btnBox}>
        <Button
          hrefUrl={`/`}
          textBtn=""
          className={styles.citationlist__form__btnBox__btn}
          icon={<IconSearch />}
          type="submit"
        />
      </div>
    </form>
  );
};

export default Search;
