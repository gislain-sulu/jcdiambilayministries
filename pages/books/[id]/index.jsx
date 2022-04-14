import React from "react";
import styles from "./bookDetail.module.scss";
import CardBookDetail from "../../../components/cards/bookDetail/cardBookDetail";
import SectionPage from "../../../components/sections/section";
import CardBook_1 from "../../../components/cards/books/cardBook_1";
import { ArrowNext, IconHome } from "../../../components/icons/icon";
import Link from "next/link";
import HeaderPage from "../../../components/headerPage/headerPage";
import OriginUrl from "../../../components/originUrl/originUrl";

const BookDetail = () => {
  const listLinks = ["home", "books", "tttttttt"];
  return (
    <div className={styles.bookDetail}>
      <HeaderPage
        title="detail livre"
        isWithFieldSearch={false}
        listOriginUrl={<OriginUrl listItem={listLinks} />}
      />
      <div className={styles.bookDetail__content}>
        <div className={`${styles.bookDetail__content__wrapper} wrapper`}>
          <div className={styles.bookDetail__content__bookDetailBox}>
            <CardBookDetail />
          </div>
        </div>
      </div>
      <div className={`wrapper`}>
        <SectionPage titleSection="Dernières parutions">
          {/* <CardBook_1 /> */}
        </SectionPage>
      </div>
      <div className={`wrapper`}>
        <SectionPage titleSection="ces livres peuvent aussi vous interessez">
          {/* <CardBook_1 /> */}
        </SectionPage>
      </div>
    </div>
  );
};

export default BookDetail;
