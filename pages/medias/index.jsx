import React, { useState, useEffect } from "react";
import styles from "./medias.module.scss";
import MEDIA_DATA from "../../models/MEDIA_DATA";
import CardMedia from "../../components/cards/media/cardMedia";
import HeaderPage from "../../components/headerPage/headerPage";
import Spiner from "../../components/spinner/spiner";
import Breadcrumd from "../../components/breadcrumd/breadcrumd";

const Medias = () => {
  const [mediasData, setMediasData] = useState([]);

  useEffect(() => {
    setMediasData(MEDIA_DATA);
  }, []);

  const listBreadcrumd = [
    {
      id: 1,
      href: "/",
      label: "Home",
    },
    {
      id: 2,

      label: "Medias",
    },
  ];

  return (
    <div className={styles.medias}>
      <HeaderPage
        title="Medias"
        isWithFieldSearch={false}
        listOriginUrl={<Breadcrumd list={listBreadcrumd} />}
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
