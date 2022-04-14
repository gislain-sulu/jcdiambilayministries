import React from "react";
import styles from "./organisation.module.scss";
import CardOrganisation from "../../components/cards/organisation/cardOrganisation";
import ORGANISATION_PAGE_DATA from "../../models/ORGANISATION_PAGE_DATA";
import HeaderPage from "../../components/headerPage/headerPage";
import OriginUrl from "../../components/originUrl/originUrl";
import { useRouter } from "next/router";

const Organisation = () => {
  const router = useRouter();

  const pathname = router.pathname;

  const formatPathname = pathname.replace("/", "");

  const listLinks = ["home", formatPathname];

  return (
    <div className={styles.organisation}>
      <HeaderPage
        title="Notre Organisation"
        isWithFieldSearch={false}
        listOriginUrl={<OriginUrl listItem={listLinks} />}
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
