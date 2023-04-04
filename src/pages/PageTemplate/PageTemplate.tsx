import React from "react"
import { useThemeContext } from '../../context/theme';
import { useNavigate } from "react-router-dom";
import styles from "./PageTemplate.module.css"

interface IPageTemplate {
  children: React.ReactNode,
  title: string,
  linkName: string,
  post: string
}

const PageTemplate = ({ children, title, linkName, post }: IPageTemplate ) => {

  const theme = useThemeContext()
  const navigate = useNavigate()

  return (
    <div className={theme.theme === 'light' ? styles.container : styles.containerDark}>
      <div className={styles.namePage}>
        <p className={theme.theme === 'light' ? styles.link : styles.linkDark} onClick={() => navigate('/posts')}>{linkName}</p>
        <span>{post}</span>
        <div className={styles.title}>{title}</div>
      </div>
      <div className={styles.body}>{children}</div>
    </div>
  )
}

export default PageTemplate
