import React, { useState } from 'react';
import logo from '../../image/logo.png'
import noneAuth from '../../image/none-auth.png'
import styles from "./Header.module.css"


const Header = () => {

const [open, setOpen] = useState(false)

const handleBurgerMenuClick = () => {
  setOpen(!open)
}

  return (
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <img src={logo} alt="" />
          <div className={!open ? styles.burgerMenu : styles.burgerMenuOpen} onClick={handleBurgerMenuClick}></div>
          </div>
          <div className={open ? (styles.container + " " + styles.active) : styles.container}>
              <input className={styles.search} type="text" placeholder='Search...'/>
              <div className={styles.user}>
                <img src={noneAuth} alt="" />
                <p className={styles.username}>Sign In</p>
              </div>
        </div>
      </div>
  )
}

export default Header