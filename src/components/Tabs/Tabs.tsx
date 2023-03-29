import React from "react";
import styles from "./Tabs.module.css"
import { useThemeContext } from "../../context/theme";

interface ITabs {
  content: string,
  changeContent: (content: string) => void
}

const Tabs = ( { content, changeContent } :ITabs ) => {

  const theme = useThemeContext()

  const toggleTab = () => {
    if(content === 'Articles') {
      changeContent('News')
    } else if (content === 'News') {
      changeContent('Articles')
    }
}

  if (theme.theme === 'light')
    return (
      <div className={styles.container}>
        <div className={`${styles.tab} ${content === 'Articles' ? styles.active : ''}`} onClick={toggleTab}>Articles</div>
        <div className={`${styles.tab} ${content === 'News' ? styles.active : ''}`} onClick={toggleTab}>News</div>
      </div>
    )
  else {
    return (
      <div className={styles.containerDark}>
        <div className={`${styles.tab} ${content === 'Articles' ? styles.activeDark : ''}`} onClick={toggleTab}>Articles</div>
        <div className={`${styles.tab} ${content === 'News' ? styles.activeDark : ''}`} onClick={toggleTab}>News</div>
      </div>
    )
  }
}

export default Tabs