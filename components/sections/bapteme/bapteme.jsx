import React from "react";
import Button from "../../button/button";
import styles from "./bapteme.module.scss";

const Bapteme = ({ posts }) => {
  console.log(posts);
  return (
    <section className={styles.bapteme}>
      <div className={`${styles.bapteme__wrapper} wrapper`}>
        <h2 className={styles.bapteme__title}>
          donnez votre vie à jesus christ
        </h2>
        <p className={styles.bapteme__question}>
          Êtes-vous prêt à découvrir comment Le recevoir comme Seigneur et
          Sauveur ?
        </p>
        <Button
          hrefUrl={`/blog/`}
          textBtn="Comment recevoir Jésus"
          className={styles.bapteme__button}
          icon="none"
        />
      </div>
    </section>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return {
    props: { posts },
  };
}

export default Bapteme;
