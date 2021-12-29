import React, {useEffect} from 'react';
import TabContent from "../TabContent/TabContent";
import styles from "./Tabs.module.css"
import {TabsList} from "../../interfaces/Tab";
import {ContentList} from "../../interfaces/Con";

interface Props {
  items: TabsList
}

const Tabs: React.FC<Props> = ({items}) => {

  const [section, setSection] = React.useState(() => ({title: ""}))
  const [active, setActive] = React.useState<string | null>(null);
  const [content, setContent] = React.useState<ContentList>([])

  useEffect(() => {
    fetch(`https://content.guardianapis.com/search?q=${section.title}&api-key=test`)
      .then(response => response.json())
      .then(result => setContent(result.response.results))
      .catch((err) => console.log('Failed to fetch', err));
  }, [section])


  const getOnTabClick = (id: string, sectionId: string) => () => {
    setActive(id)
    setSection((stay) => ({...stay, title: sectionId}))
  }


  return (
    <div className={styles["content"]}>
      <div className={styles["tab"]}>
        {items.map(({id, sectionName, sectionId}) =>
          (<button key={id}
              className={[styles[`tabLinks`], id === active ? styles['active'] : ''].join(' ').trim()}
              onClick={getOnTabClick(id, sectionId)}
            >{sectionName}</button>
          )
        )}
      </div>
      {active && <TabContent content={content}/>}
    </div>
  );
};

export default Tabs;