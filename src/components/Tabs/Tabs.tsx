import React from "react";
import { useThemeContext } from "../../context/theme";
import { useContentContext } from "../../context/content";
import styles from "./Tabs.module.css"

const Tabs = () => {

  const theme = useThemeContext()
  const content = useContentContext()

    return (
      <div className={theme.theme === 'light' ? styles.container : styles.containerDark}>

        <div className={`${styles.tab} 
          ${content.content === 'Articles' ? theme.theme === 'light' ? styles.active : styles.activeDark : ''}`} 
            onClick={() => content.getContent?.()}>Articles</div>

        <div className={`${styles.tab} 
          ${content.content === 'News' ? theme.theme === 'light' ? styles.active : styles.activeDark : ''}`} 
          onClick={() => content.getContent?.()}>News</div>
          
      </div>
    )
}

export default Tabs