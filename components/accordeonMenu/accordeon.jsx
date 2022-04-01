import React from "react";
import HEADER_BTN_DATA from "../../models/HEADER_BTN_DATA";
import HEADER_DATA from "../../models/header_data";
import getLinkIcon from "../../utils/getLinksIcon";
import Button from "../button/button";
import { IconNext } from "../icons/icon";
import NavLink from "../navLink/navLink";
import styles from "./accordeon.module.scss";

const AccordeonMenu = () => {
  return (
    <div className={styles.accordeonMenu}>
      <div className={styles.accordeonMenu__listLinksMenus}>
        <NavLink tabLinkList={HEADER_DATA} isIconNext={true} />
      </div>

      <ul className={styles.accordeonMenu__listLinksBtn}>
        {HEADER_BTN_DATA.map((link) => (
          <li>
            <Button
              hrefUrl={`/${link}`}
              textBtn={link}
              className={styles.accordeonMenu__btn}
              icon={getLinkIcon(link)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AccordeonMenu;
