import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import MOCK_BLOG from "../../../models/MOCK_BLOG";
import CardBlog from "../../cards/blog/cardBlog";
import SectionPage from "../section";
import styles from "./blog.module.scss";

const Blog = () => {
  const LAST_BLOG_DATA = MOCK_BLOG.slice(MOCK_BLOG.length - 3);

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
            items={LAST_BLOG_DATA.map((cardBlogInfos) => (
              <CardBlog
                title={cardBlogInfos.title}
                othor={cardBlogInfos.othor}
                date={cardBlogInfos.date}
                description={cardBlogInfos.description}
                urlBtn="/blog"
              />
            ))}
            responsive={responsive}
            controlsStrategy="alternate"
          />
        </SectionPage>
      </div>
    </>
  );
};

export default Blog;
