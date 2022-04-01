import React from "react";
import CITATION_DATA from "../../../models/CITATION_DATA";
import MOCK_BLOG from "../../../models/MOCK_BLOG";
import CardBlog from "../../cards/blog/cardBlog";
import CardCitationList from "../../cards/citations/cardCitationlist";
import {
  MyCarousel,
  MyCarouselMobile,
  MyCarouselMobileBlogSection,
} from "../../carousel/carousel";
import SectionPage from "../section";
import styles from "./blog.module.scss";

const Blog = () => {
  const LAST_BLOG_DATA = MOCK_BLOG.slice(MOCK_BLOG.length - 3);

  return (
    <>
      <div className={`${styles.blog__wrapper} wrapper`}>
        <SectionPage
          titleSection="Messages"
          classname={styles.blog}
          urlBtn="/blog"
        >
          <div className={styles.blog__mobile}>
            <MyCarouselMobileBlogSection>
              {LAST_BLOG_DATA.map((cardBlogInfos) => (
                <CardBlog
                  title={cardBlogInfos.title}
                  othor={cardBlogInfos.othor}
                  date={cardBlogInfos.date}
                  description={cardBlogInfos.description}
                  urlBtn="/blog"
                />
              ))}
            </MyCarouselMobileBlogSection>
          </div>
          <div className={styles.blog__desktop}></div>
        </SectionPage>
      </div>
    </>
  );
};

export default Blog;
