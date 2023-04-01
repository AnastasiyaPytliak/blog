import React from "react";
import { useThemeContext } from "../../context/theme";
import { useContentContext } from "../../context/content";
import styles from "./Tabs.module.css"

const Tabs = () => {

  const theme = useThemeContext()
  const content = useContentContext()

  if (theme.theme === 'light')
    return (
      <div className={styles.container}>
        <div className={`${styles.tab} ${content.content === 'Articles' ? styles.active : ''}`} onClick={() => content.getContent?.()}>Articles</div>
        <div className={`${styles.tab} ${content.content === 'News' ? styles.active : ''}`} onClick={() => content.getContent?.()}>News</div>
      </div>
    )
  else {
    return (
      <div className={styles.containerDark}>
        <div className={`${styles.tab} ${content.content === 'Articles' ? styles.activeDark : ''}`} onClick={() => content.getContent?.()}>Articles</div>
        <div className={`${styles.tab} ${content.content === 'News' ? styles.activeDark : ''}`} onClick={() => content.getContent?.()}>News</div>
      </div>
    )
  }
}

export default Tabs