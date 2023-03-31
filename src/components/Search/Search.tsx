import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSearchContext } from "../../context/search";
import { useThemeContext } from "../../context/theme";
import styles from "../Header/Header.module.css"


const Search = ( ) => {
  const navigate = useNavigate()

  const theme = useThemeContext()  
  const {value, getValue} = useSearchContext()  

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    getValue?.(e.target.value)
  }

  return (
      <input className={theme.theme === 'light' ? styles.search : styles.searchDark} 
        type="text" 
        placeholder='Search...'  
        onChange={handleSearch}
        onClick={() => navigate('/search')}  
        value={value} 
      />
  )
}

export default Search