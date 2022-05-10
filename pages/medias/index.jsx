import React, { useState, useEffect } from "react";
import styles from "./medias.module.scss";
import MEDIA_DATA from "../../models/MEDIA_DATA";
import CardMedia from "../../components/cards/media/cardMedia";
import HeaderPage from "../../components/headerPage/headerPage";
import OriginUrl from "../../components/originUrl/originUrl";
import { useRouter } from "next/router";
import Spiner from "../../components/spinner/spiner";

const Medias = () => {
  const [mediasData, setMediasData] = useState([]);

  useEffect(() => {
    setMediasData(MEDIA_DATA);
  }, []);

  const router = useRouter();

  const pathname = router.pathname;

  const formatPathname = pathname.replace("/", "");

  const listLinks = ["home", formatPathname];

  return (
    <div className={styles.medias}>
      <HeaderPage
        title="Medias"
        isWithFieldSearch={false}
        listOriginUrl={<OriginUrl listItem={listLinks} />}
      />

      <div className={styles.medias__content}>
        <div className={`${styles.medias__content__wrapper} wrapper`}>
          <main className={styles.medias__content__main}>
            {mediasData.length === 0 && <Spiner />}
            {mediasData.map((data) => (
              <CardMedia
                key={data.id}
                picturePrevieuw={data.picture}
                nameMedia={data.name}
              />
            ))}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Medias;
