import React from "react"
import styles from "./PageTemplate.module.css"
import { useThemeContext } from '../../context/theme';

interface IPageTemplate {
  children: React.ReactNode;
  title: string;
  linkName: string;
}

const PageTemplate = ({ children, title, linkName }: IPageTemplate ) => {

  const theme = useThemeContext()

  return (
    <div className={theme.theme === 'light' ? styles.container : styles.containerDark}>
      <div className={styles.namePage}>
        <a className={theme.theme === 'light' ? styles.link : styles.linkDark} href="#" >{linkName}</a>
        <div className={styles.title}>{title}</div>
      </div>
      <div className={styles.body}>{children}</div>
    </div>
  )
}

export default PageTemplate