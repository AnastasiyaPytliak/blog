import React, { useState }  from 'react';
import { useNavigate } from 'react-router-dom';
import { useThemeContext } from '../../context/theme';
import styles from "./SelectedCard.module.css"

export interface ISelectedCard {
  id: number,
  image: string,
  summary: string,
  title: string
}

const SelectedCard = ({ id, image, title, summary }: ISelectedCard) => {

  const theme = useThemeContext()

  
    return (
      <div className={theme.theme === 'light' ? styles.container : styles.containerDark} >
        <div className={theme.theme === 'light' ? styles.wrapper : styles.wrapperDark} >
          <div className={styles.image}>
            <img className={styles.img} src={image} alt="Couldn't Load Image" />
          </div>
          <div className={styles.text}>
            <div className={theme.theme === 'light' ? styles.date : styles.dateDark}>{summary}</div>
            <div className={styles.title}>{title}</div>
          </div>
        </div>
      </div>
    )
  }
  
  export default SelectedCard