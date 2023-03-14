import React, { useState } from 'react';
import { useThemeContext } from '../../context/theme';

import styles from "./Footer.module.css"

const Footer = () => {

  const theme = useThemeContext()
  
    return (
        <div className={theme.theme === 'light' ? styles.wrapper: styles.wrapperDark}>
          <div className={styles.copyright}>
            ©2022 Blogolog
          </div>
          <div className={styles.theme}>
            <p>Dark theme</p>
            <label className={styles.switch}>
              <input type="checkbox" className={styles.switchInput} onClick={() => theme.changeThemeFunc?.()}/>
              <span className={styles.switchSlider}></span>
            </label>
          </div>
        </div>
    )
  }
  
  export default Footer