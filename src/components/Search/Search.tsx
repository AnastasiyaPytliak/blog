import React from "react";
import { useNavigate } from "react-router-dom";
import { useSearchContext } from "../../context/search";
import { useThemeContext } from "../../context/theme";
import styles from "../Header/Header.module.css"

const Search = ( ) => {
  const {value, getValue} = useSearchContext()

  const theme = useThemeContext()  
  const navigate = useNavigate()

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    getValue?.(e.target.value)
  }

  const handleSubmitSearch = (e :any) => {
    e.preventDefault()
    navigate('/search')
  }

  const handleClearSearch = (e: any) => {
    e.preventDefault()
    getValue?.('')
  }

  return (
    <form className={styles.form} onSubmit={handleSubmitSearch}>
      <input className={theme.theme === 'light' ? styles.search : styles.searchDark} 
        type="text" 
        placeholder='Search...'  
        onChange={handleSearch} 
        value={value} 
      />
      <span className={theme.theme === 'light' ? styles.button : styles.buttonDark} onClick={handleClearSearch}></span>
    </form>
  )
}

export default Search
