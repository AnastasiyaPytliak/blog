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
        <div className={styles.logo} onClick={() => navigate('/posts')}>
          <img src={logo} alt="" />
          <div className={!open ? styles.burgerMenu : styles.burgerMenuOpen} onClick={handleBurgerMenuClick}></div>
        </div>
        <div className={open ? `${styles.container}  ${styles.active}` : styles.container}>
          <Search />
          <div className={styles.user} >
            <img src={noneAuth} alt="" onClick={() => navigate('/signin')}/>
            <p className={styles.username} onClick={handleBurgerMenuClick}>{auth ? user : user}</p>
          </div>
          {auth === 'true' ? <button className={open ? styles.outNone : styles.out} onClick={handleSignOut}>Log out</button> : ''}
        </div>
      </div>
  )
}

export default Header
