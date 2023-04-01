import React from 'react';
import { useThemeContext } from '../../context/theme';
import { BtnFb, BtnMore, BtnTw } from '../../image/svg-icons/svg-social';
import styles from "./SelectedCard.module.css"

export interface ISelectedCard {
  id: number,
  image: string,
  summary: string,
  title: string
}

const SelectedCard = ({ image, title, summary }: ISelectedCard) => {

  const theme = useThemeContext()
  
    return (
      <div className={theme.theme === 'light' ? styles.container : styles.containerDark}>
        <div className={styles.title}>{title}</div>
          <div className={styles.image}>
            <img className={styles.img} src={image} alt="Couldn't Load Image" />
          </div>
          <div className={styles.text}>
            <p>{summary}</p>
            <div className={styles.btns}>
              <button className={theme.theme === 'light' ? styles.btn : styles.btnDark}>
                <BtnFb />
              </button>
              <button className={theme.theme === 'light' ? styles.btn : styles.btnDark}>
                <BtnTw />
              </button>
              <button className={theme.theme === 'light' ? styles.btn : styles.btnDark}>
                <BtnMore />
              </button>
            </div>
          </div>
      </div>
    )
  }
  
  export default SelectedCard
  