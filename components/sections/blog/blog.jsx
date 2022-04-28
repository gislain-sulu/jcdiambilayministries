import axios from "axios";
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import MOCK_BLOG from "../../../models/MOCK_BLOG";
import CardBlog from "../../cards/blog/cardBlog";
import SectionPage from "../section";
import styles from "./blog.module.scss";

const Blog = ({ messages }) => {
  console.log(messages);

  // const LAST_BLOG_DATA = messages.slice(MOCK_BLOG.length - 3);

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  return (
    <>
      <div className={`${styles.blog__wrapper} wrapper`}>
        <SectionPage
          titleSection="Messages"
          classname={styles.blog}
          urlBtn="/blog"
        >
          <AliceCarousel
            mouseTracking
            // items={LAST_BLOG_DATA.map((cardBlogInfos) => (
            //   <CardBlog
            //     title={cardBlogInfos.title}
            //     othor={cardBlogInfos.othor}
            //     date={cardBlogInfos.date}
            //     description={cardBlogInfos.description}
            //     urlBtn="/blog"
            //   />
            // ))}
            responsive={responsive}
            controlsStrategy="alternate"
          />
        </SectionPage>
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  try {
    const res = await axios.get(
      `https://jcdiambilayministries-backend.herokuapp.com/api/messages?populate=*`
    );

    const datas = res.data;

    const messages = datas.data;

    return {
      props: { messages },
      revalidate: 1,
    };
  } catch (err) {
    return { err };
  }
};

export default Blog;
