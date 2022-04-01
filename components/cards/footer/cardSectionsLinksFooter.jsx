import React from "react";
import LINKS_FOOTER from "../../../models/LINKS_FOOTER";
import ListLinks from "../../listLinks/listLinks";
import styles from "./cardSectionsLinksFooter.module.scss";

const CardSectionsLinksFooter = () => {
  return (
    <>
      {LINKS_FOOTER.map((link) => {
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
      })}
    </>
  );
};

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
