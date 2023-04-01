import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useThemeContext } from '../../context/theme';
import styles from "./Card.module.css"

export interface ICard {
  id: number,
  image: string,
  date: string,
  title: string
}

const Card = ({ id, image, date, title }: ICard) => {

  const theme = useThemeContext()
  const navigate = useNavigate()
  
    return (
      <div className={theme.theme === 'light' ? styles.container : styles.containerDark} onClick={() => navigate(`${id}`)}>
        <div className={theme.theme === 'light' ? styles.wrapper : styles.wrapperDark}>
          <div className={styles.image}>
            <img className={styles.img} src={image} alt="" />
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
  