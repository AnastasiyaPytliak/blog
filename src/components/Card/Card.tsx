import React, { useState }  from 'react';
import { useThemeContext } from '../../context/theme';
import styles from "./Card.module.css"

export interface ICard {
  id: number,
  image: string,
  date: string,
  title: string
}

const Card = ({ image, date, title }: ICard) => {

  const theme = useThemeContext()
  
    return (
      <div className={theme.theme === 'light' ? styles.container : styles.containerDark}>
        <div className={theme.theme === 'light' ? styles.wrapper : styles.wrapperDark}>
          <div className={styles.image}>
            <img className={styles.img} src={image} alt="Couldn't Load Image" />
          </div>
          <div className={styles.text}>
            <div className={theme.theme === 'light' ? styles.date : styles.dateDark}>{date}</div>
            <div className={styles.title}>{title}</div>
          </div>
        </div>
      </div>
    )
  }
  
  export default Card