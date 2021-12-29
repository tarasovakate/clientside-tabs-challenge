import React from 'react';
import styles from "./TabContent.module.css"
import {ContentList} from "../../interfaces/Con";

interface Props {
  content: ContentList
}


const TabContent: React.FC<Props> = ({content}) => {

  return (
    <div className={styles["tabContent"]}>
      {content.map((item,index) => (
          <div key={item.id} className={styles["tab-panel-container"]}>
            <div>
              <div className={styles["list-item"]}>
                <span>{index+1}.</span> <a className={styles["link"]} href={item.webUrl}>{item.webTitle}</a>
              </div>
            </div>
          </div>
          ))}
    </div>
  );
};

export default TabContent;


