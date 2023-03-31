import React, { useState } from 'react';
import { useThemeContext } from '../../context/theme';
import logo from '../../image/logo.png'
import noneAuth from '../../image/none-auth.png'
import Search from '../Search/Search';
import styles from "./Header.module.css"


const Header = () => {

const theme = useThemeContext()  
const [open, setOpen] = useState(false)

const handleBurgerMenuClick = () => {
  setOpen(!open)
}

  return (
      <div className={theme.theme === 'light' ? styles.wrapper : styles.wrapperDark}>
        <div className={styles.logo}>
          <img src={logo} alt="" />
          <div className={!open ? styles.burgerMenu : styles.burgerMenuOpen} onClick={handleBurgerMenuClick}></div>
          </div>
          <div className={open ? `${styles.container}  ${styles.active}` : styles.container}>
              <Search />
              <div className={styles.user}>
                <img src={noneAuth} alt="" />
                <p className={styles.username}>Sign In</p>
              </div>
        </div>
      </div>
  )
}

export default Header