import React from "react";
import styles from "./biographie.module.scss";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "../../components/icons/icon";

const Biographie = () => {
  return (
    <div className={styles.biographie}>
      <div className={styles.biographie__titleBox}>
        <h2 className={styles.biographie__titleBox__title}>biographie</h2>
      </div>
      <div className={styles.biographie__content}>
        <div className={`${styles.biographie__content__wrapper} wrapper`}>
          <div className={styles.biographie__content__pictureBox}>
            <Image
              src="/assets/images/jcdiambilay_portrait.png"
              width="667px"
              height="838px"
              className={styles.biographie__content__pictureBox__picture}
              loading="lazy"
              alt="Apôtre Jean Clément Diambilay"
            />
          </div>
          <h3 className={styles.biographie__content__titleBox}>
            <span className={styles.biographie__content__titleBox__libele}>
              Apôtre
            </span>{" "}
            <br />
            <span className={styles.biographie__content__titleBox__name}>
              Jean-Clèment DIAMBILAY
            </span>
          </h3>
          <main className={styles.biographie__content__main}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
              minima modi, temporibus saepe natus ipsum ipsam commodi, labore
              veritatis ratione necessitatibus, impedit possimus. Porro ullam
              impedit incidunt laboriosam, vero maiores. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Corrupti neque consectetur
              delectus nulla culpa atque praesentium fugit, ipsam cumque
              <br />
              cupiditate ea asperiores officiis aut iste non numquam harum
              voluptatum. Deserunt. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Error, beatae est sit officiis nisi corrupti
              possimus qui dolore vel labore rem aliquid dolorem porro neque
              cumque reiciendis temporibus libero quos. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Maiores ipsa quidem dolorem.
              Enim architecto, sed tempore impedit non debitis libero quibusdam
              molestias tempora voluptatem praesentium modi velit quisquam,
              dolorum reprehenderit! Lorem ipsum dolor, sit amet
              <br />
              consectetur adipisicing elit. Inventore necessitatibus quis at
              quidem? Accusantium a quidem esse rem ut hic quae provident!
              Aperiam dicta, incidunt tempore voluptates vitae doloribus
              asperiores? Delectus accusantium atque quam architecto consectetur
              modi? Illum corrupti nisi quis deleniti consequatur nesciunt
              numquam officiis magnam quas quam recusandae, aliquam aut culpa in
              velit deserunt? Eligendi modi cupiditate harum? Asperiores tenetur
              deserunt ab ut dolorem, vitae iure necessitatibus debitis sequi
              sed unde eum at, quidem incidunt est odit ea. Nisi deserunt
              possimus illo repudiandae non repellat ullam quae distinctio! Ex
              amet exercitationem pariatur sint fuga blanditiis ea! Enim minima
              animi maiores rerum inventore asperiores deserunt sunt pariatur!
              Officia, nesciunt esse sint neque maxime blanditiis fugit maiores
              quam sit et.
            </p>
          </main>
          <div className={styles.biographie__content__socialsMedias}>
            <Facebook />
            <Twitter />
            <Instagram />
            <Linkedin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biographie;
