import React from "react";
import FOOTER_LINKS_DATA from "../../../models/FOOTER_LINKS_DATA";
import ListLinks from "../../listLinks/listLinks";
import styles from "./cardSectionsLinksFooter.module.scss";

const CardSectionsLinksFooter = () => {
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

export default CardSectionsLinksFooter;
