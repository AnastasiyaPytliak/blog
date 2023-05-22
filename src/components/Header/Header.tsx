import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useThemeContext } from '../../context/theme';
import logo from '../../image/logo.png'
import noneAuth from '../../image/none-auth.png'
import Search from '../Search/Search';
import styles from "./Header.module.css"


const Header = () => {
  const [open, setOpen] = useState(false)

  const theme = useThemeContext()
  const navigate = useNavigate()

  const user = localStorage.getItem('username')
  const auth = localStorage.getItem('auth')

  const handleBurgerMenuClick = () => {
    setOpen(!open)
  }

  const handleSignOut = () => {
    navigate('/signin')
    setOpen(open)
    localStorage.setItem('username', 'Sign In')
    localStorage.setItem('auth', 'false')
  }

  return (
      <div className={theme.theme === 'light' ? styles.wrapper : styles.wrapperDark}>

        <div className={styles.logo}>
          <img src={logo} alt="" onClick={() => navigate('/posts')} />
          <div className={!open ? styles.burgerMenu : styles.burgerMenuOpen} onClick={handleBurgerMenuClick}></div>
        </div>

        <div className={open ? `${theme.theme === 'light' ? styles.container :styles.containerDark}  ${styles.active}` 
          : theme.theme === 'light' ? styles.container :styles.containerDark}>
          <Search />
          <div className={styles.user} >
            <img src={noneAuth} alt="" onClick={() => navigate('/signin')}/>
            <p className={styles.username} onClick={handleBurgerMenuClick}>{user}</p>
          </div>

          <div className={styles.theme}>
            <p>Dark theme</p>
            <label className={styles.switch}>
              <input type="checkbox" className={styles.switchInput} onClick={() => theme.changeThemeFunc?.()} 
              checked={theme.theme === 'light' ? false : true}/>
              <span className={styles.switchSlider}></span>
            </label>
          </div>

          {auth === 'true' ? 
          <button className={open ? theme.theme === 'light' ? styles.out :styles.outDark : styles.outNone}onClick={handleSignOut}>Log Out</button> 
          : ''}
        </div>
      </div>
  )
}

export default Header
