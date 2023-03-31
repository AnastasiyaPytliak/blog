import React from "react"
import styles from "./PageTemplate.module.css"
import { useThemeContext } from '../../context/theme';
import { useNavigate } from "react-router-dom";

interface IPageTemplate {
  children: React.ReactNode;
  title: string;
  linkName: string;
}

const PageTemplate = ({ children, title, linkName }: IPageTemplate ) => {

  const theme = useThemeContext()
  const navigate = useNavigate()

  return (
    <div className={theme.theme === 'light' ? styles.container : styles.containerDark}>
      <div className={styles.namePage}>
        <a className={theme.theme === 'light' ? styles.link : styles.linkDark} href="#" onClick={() => navigate('/posts')} >{linkName}</a>
        <div className={styles.title}>{title}</div>
      </div>
      <div className={styles.body}>{children}</div>
    </div>
  )
}

export default PageTemplate