import React from "react";
import styles from "./organisation.module.scss";
import CardOrganisation from "../../components/cards/organisation/cardOrganisation";
import ORGANISATION_PAGE_DATA from "../../models/ORGANISATION_PAGE_DATA";

const Organisation = () => {
  return (
    <div className={styles.organisation}>
      <div className={styles.organisation__titleBox}>
        <div className={styles.organisation__titleBox__decoration}></div>
        <h2 className={styles.organisation__titleBox__title}>
          notre organisation
        </h2>
      </div>
      <div className={styles.organisation__content}>
        <div className={`${styles.organisation__content__wrapper} wrapper`}>
          {ORGANISATION_PAGE_DATA.map((data) => (
            <CardOrganisation title={data.title} text={data.text} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Organisation;
