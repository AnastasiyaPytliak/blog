import React, { useEffect, useState } from 'react';
import { api } from './api';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { ThemeContext, useInitThemeContext } from './context/theme';
import Cards from './pages/Cards/Cards';

function App() {
  const themeContextValues = useInitThemeContext()


  return (
    <ThemeContext.Provider value={themeContextValues}>
      <div className="App">
        <Header/>
          <div className="body">
            <Cards />
          </div>
        <Footer/>

      </div>
    </ThemeContext.Provider>
  );
}

export default App;
