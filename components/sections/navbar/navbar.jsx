import React from "react";
import HEADER_DATA from "../../../models/header_data";
import SearchForm from "../../forms/search/search";
import NavLink from "../../navLink/navLink";
import styles from "./navbar.module.scss";

const Navbar = () => {
  return (
    <section className={styles.navbar}>
      <div className={`${styles.navbar__wrapper} wrapper`}>
        <div className={styles.navbar__navlinks}>
          <NavLink tabLinkList={HEADER_DATA} />
        </div>
        {/* <div className={styles.navbar__searchBox}>
          <SearchForm placeholder="Rechercher..." classname="formSearch" />
        </div> */}
      </div>
    </section>
  );
};

export default Navbar;
