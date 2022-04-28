import React, { useState, useEffect } from "react";
import styles from "./citationlist.module.scss";
import Button from "../../../components/button/button";
import { IconSearch } from "../../../components/icons/icon";
import Link from "next/link";
import CardBlog from "../../../components/cards/blog/cardBlog";
import MOCK_BLOG from "../../../models/MOCK_BLOG";
import HeaderPage from "../../../components/headerPage/headerPage";
import OriginUrl from "../../../components/originUrl/originUrl";
import CITATION_DATA from "../../../models/CITATION_DATA";
import CardCitationList from "../../../components/cards/citations/cardCitationlist";
import List from "../../../components/list/list";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Spiner from "../../../components/spinner/spiner";

const Citationlist = ({ data, total }) => {
  const [citations, setCitations] = useState(data);
  const [allCitationsLength, setAllCitationsLength] = useState(total);
  const [hasMore, setHasMore] = useState(true);

  console.log("citations", citations);
  console.log("metas", total);

  const { API_URL } = process.env;

  const getMoreCitations = async () => {
    const res = await axios.get(
      `${API_URL}/citations?pagination[start]=${citations.length}&pagination[limit]=5&populate=*`
    );

    const newCitations = res.data;

    const { data } = newCitations;

    setCitations((citation) => [...citation, ...data]);
  };

  useEffect(() => {
    setHasMore(allCitationsLength > citations.length ? true : false);
  }, [citations]);

  const listLinks = ["home", "citations", "list"];

  return (
    <div className={styles.citationlist}>
      <HeaderPage
        title="Rechercher une citation de l'Apôtre Jean-Clément Diambilay"
        placeholder="Tapez un mot"
        textHelper="Dieu"
        listOriginUrl={<OriginUrl listItem={listLinks} />}
        classname={styles.blog__title}
      />

      <section className={styles.citationlist__content}>
        <div className={`${styles.citationlist__content__wrapper} wrapper`}>
          <div className={styles.citationlist__content__filterBox}>
            <span className={styles.citationlist__content__filterBox__label}>
              FILTRE:
            </span>
            <ul className={styles.citationlist__content__filterBox__list}>
              <li
                className={styles.citationlist__content__filterBox__list__item}
              >
                <Link href="/">citations</Link>
              </li>
              <li
                className={styles.citationlist__content__filterBox__list__item}
              >
                <Link href="/">déclarations </Link>
              </li>
            </ul>
          </div>
          <div className={styles.citationlist__content__list}>
            <InfiniteScroll
              dataLength={citations.length}
              next={getMoreCitations}
              hasMore={hasMore}
              loader={
                <h4>
                  <Spiner />
                </h4>
              }
              endMessage={
                <p style={{ textAlign: "center" }}>
                  <b>Yay! vous avez affiché toutes les citations</b>
                </p>
              }
            >
              <List>
                {citations.map((citation) => {
                  const { Slug, content } = citation.attributes;

                  const { url } = citation.attributes.cover.data.attributes;
                  return (
                    <Link href={url}>
                      <a target="_blank">
                        <CardCitationList
                          pictureUrl={url}
                          pictureAlt={Slug}
                          text={content}
                        />
                      </a>
                    </Link>
                  );
                })}
              </List>
            </InfiniteScroll>
          </div>
        </div>
      </section>
    </div>
  );
};

export const getServerSideProps = async () => {
  // https://jcdiambilayministries-backend.herokuapp.com/api/citations?pagination[start]=0&pagination[limit]=12&populate=*

  // const qs = require("qs");
  // const query = qs.stringify(
  //   {
  //     pagination: {
  //       start: 1,
  //       pageSize: 5,
  //     },
  //   },
  //   {
  //     encodeValuesOnly: true,
  //   }
  // );

  try {
    const { API_URL } = process.env;

    const res = await axios.get(
      `${API_URL}/citations?pagination[start]=0&pagination[limit]=5&populate=*`
    );

    const citations = res.data;

    const { data, meta } = citations;

    const { total } = meta.pagination;

    console.log(meta);

    return {
      props: { data, total },
    };
  } catch (err) {
    return { err };
  }
};

export default Citationlist;

// import React, { useState, useEffect } from "react";
// import styles from "./citationlist.module.scss";
// import Button from "../../../components/button/button";
// import { IconSearch } from "../../../components/icons/icon";
// import Link from "next/link";
// import CardBlog from "../../../components/cards/blog/cardBlog";
// import MOCK_BLOG from "../../../models/MOCK_BLOG";
// import HeaderPage from "../../../components/headerPage/headerPage";
// import OriginUrl from "../../../components/originUrl/originUrl";
// import CITATION_DATA from "../../../models/CITATION_DATA";
// import CardCitationList from "../../../components/cards/citations/cardCitationlist";
// import List from "../../../components/list/list";
// import axios from "axios";
// import InfiniteScroll from "react-infinite-scroll-component";

// const Citationlist = ({ data, numberOfcitations, numberPage }) => {
//   const [citations, setcitations] = useState(data);
//   const [numberOfCitation, setNumberOfCitations] = useState(numberOfcitations);
//   const [numberPagination, setNumberPage] = useState(numberPage);
//   const [hasMore, setHasMore] = useState(true);

//   console.log("citations", citations, "citationLength", citations.length);

//   console.log("pagination", numberOfcitations, numberPage);

//   const getMoreCitations = async () => {
//     // const qs = require("qs");

//     // const query = qs.stringify(
//     //   {
//     //     pagination: {
//     //       page: 2,
//     //       pageSize: 5,
//     //     },
//     //   },
//     //   {
//     //     encodeValuesOnly: true,
//     //   }
//     // );

//     const { API_URL } = process.env;

//     const res = await axios.get(
//       // `${API_URL}/citations?${query}`

//       `${API_URL}/citations?pagination[page]=${numberPagination}&pagination[pageSize]=10`
//     );

//     const citations = res.data;

//     const { data } = citations;

//     setcitations((citations) => [...citations, ...data]);
//   };

//   useEffect(() => {
//     setNumberPage((page) => page + 1);
//     setHasMore(numberOfCitation - 5 > citations.length ? true : false);
//   }, [citations]);

//   const listLinks = ["home", "citations", "list"];

//   // console.log("citations", citations);

//   return (
//     <div className={styles.citationlist}>
//       <HeaderPage
//         title="Rechercher une citation de l'Apôtre Jean-Clément Diambilay"
//         placeholder="Tapez un mot"
//         textHelper="Dieu"
//         listOriginUrl={<OriginUrl listItem={listLinks} />}
//         classname={styles.blog__title}
//       />

//       <section className={styles.citationlist__content}>
//         <div className={`${styles.citationlist__content__wrapper} wrapper`}>
//           <div className={styles.citationlist__content__filterBox}>
//             <span className={styles.citationlist__content__filterBox__label}>
//               FILTRE:
//             </span>
//             <ul className={styles.citationlist__content__filterBox__list}>
//               <li
//                 className={styles.citationlist__content__filterBox__list__item}
//               >
//                 <Link href="/">citations</Link>
//               </li>
//               <li
//                 className={styles.citationlist__content__filterBox__list__item}
//               >
//                 <Link href="/">déclarations </Link>
//               </li>
//             </ul>
//           </div>
//           <div className={styles.citationlist__content__list}>
//             <List>
//               <InfiniteScroll
//                 dataLength={citations.length}
//                 next={getMoreCitations}
//                 hasMore={hasMore}
//                 loader={<h4>loading...</h4>}
//                 endMessage={
//                   <p style={{ textAlign: "center" }}>
//                     <b>Yay! you have seen it all</b>
//                   </p>
//                 }
//               >
//                 {citations.map((citation) => {
//                   const { Slug, content } = citation.attributes;

//                   // const { url } = citation.attributes.cover.data.attributes;
//                   return (
//                     <Link href="/">
//                       <a>
//                         <CardCitationList
//                           pictureUrl="/public/assets/images/citations/citations/citation_2.jpg"
//                           pictureAlt={Slug}
//                           text={content}
//                         />
//                       </a>
//                     </Link>
//                   );
//                 })}
//               </InfiniteScroll>
//             </List>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export const getStaticProps = async () => {
//   const qs = require("qs");
//   const query = qs.stringify(
//     {
//       pagination: {
//         start: 1,
//         pageSize: 5,
//       },
//     },
//     {
//       encodeValuesOnly: true,
//     }
//   );

//   try {
//     const { API_URL } = process.env;

//     const res = await axios.get(
//       `${API_URL}/citations?${query}`
//       // `${API_URL}/citations?pagination[page]=2&pagination[pageSize]=10`
//     );

//     const citations = res.data;

//     const { data, meta } = citations;

//     const numberOfcitations = meta.pagination.total;
//     const numberPage = meta.pagination.page;

//     return {
//       props: { data, numberOfcitations, numberPage },
//     };
//   } catch (err) {
//     return { err };
//   }
// };

// export default Citationlist;
