import React from "react";
import styles from "./organisation.module.scss";
import CardOrganisation from "../../components/cards/organisation/cardOrganisation";
import ORGANISATION_PAGE_DATA from "../../models/ORGANISATION_PAGE_DATA";
import HeaderPage from "../../components/headerPage/headerPage";
import Breadcrumd from "../../components/breadcrumd/breadcrumd";

const Organisation = () => {
  const listBreadcrumd = [
    {
      id: 1,
      href: "/",
      label: "Home",
    },
    {
      id: 2,

      label: "Organisation",
    },
  ];

  return (
    <div className={styles.organisation}>
      <HeaderPage
        title="Notre Organisation"
        isWithFieldSearch={false}
        listOriginUrl={<Breadcrumd list={listBreadcrumd} />}
      />

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
