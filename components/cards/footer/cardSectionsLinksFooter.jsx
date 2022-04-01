import React from "react";
import FOOTER_LINKS_DATA from "../../../models/FOOTER_LINKS_DATA";
import LINKS_FOOTER from "../../../models/LINKS_FOOTER";
import ListLinks from "../../listLinks/listLinks";
import styles from "./cardSectionsLinksFooter.module.scss";

const CardSectionsLinksFooter = () => {
  console.log(FOOTER_LINKS_DATA);
  return (
    <>
      {FOOTER_LINKS_DATA.map((sectionLinkGroup) => (
        <div
          key={sectionLinkGroup.id}
          className={styles.cardSectionsLinksFooter}
        >
          <div className={styles.cardSectionsLinksFooter__titleBox}>
            <div
              className={styles.cardSectionsLinksFooter__titleBox__decoration}
            ></div>

            <div>
              <h3
                key={sectionLinkGroup.id}
                className={styles.cardSectionsLinksFooter__titleBox__title}
              >
                {sectionLinkGroup.title.toUpperCase()}
              </h3>
            </div>
          </div>
          <div className={styles.cardSectionsLinksFooter__ListLinks}>
            <ListLinks links={sectionLinkGroup.list_links} />
          </div>
        </div>
      ))}
    </>
  );
};

{
  /* {LINKS_FOOTER.map((link) => {
        return (
          <div className={styles.cardSectionsLinksFooter}>
            <div className={styles.cardSectionsLinksFooter__titleBox}>
              <div
                className={styles.cardSectionsLinksFooter__titleBox__decoration}
              ></div>

              <div>
                <h3 className={styles.cardSectionsLinksFooter__titleBox__title}>
                  {link.title.toUpperCase()}
                </h3>
              </div>
            </div>
            <div className={styles.cardSectionsLinksFooter__ListLinks}>
              <ListLinks links={link.links} />
            </div>
          </div>
        );
      })} */
}

//   {LINKS_FOOTER.map((link) => {
//       return (
//         <div className={styles.cardSectionsLinksFooter}>
//       <div className={styles.cardSectionsLinksFooter__titleBox}>
//         <div
//           className={styles.cardSectionsLinksFooter__titleBox__decoration}
//         >
//           .
//         </div>
//         <div>
//           <h3 className={styles.cardSectionsLinksFooter__titleBox__title}>
//             A PROPOS DE NOUS
//           </h3>
//         </div>
//         </div>
//         <div className={styles.cardSectionsLinksFooter__ListLinks}>

//         <ListLinks links={links} />

//               </div>
//               </div>
//     );
//   })}

export default CardSectionsLinksFooter;
