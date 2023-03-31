import React, { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { SearchContext, useInitSearchContext } from './context/search';
import { ThemeContext, useInitThemeContext } from './context/theme';
import Cards from './pages/Cards/Cards';
import Search from './pages/Search/Search';


function App() {

  const themeContextValues = useInitThemeContext()
  const searchContextValues = useInitSearchContext()

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={themeContextValues}>
      <SearchContext.Provider value={searchContextValues}>
        <div className="App">
          <Header/>
            <div className="body">
            <Routes>
              <Route path="/" element={<Navigate replace to="/posts" />} />
              <Route path='/posts'>
              <Route index element={<Cards />}></Route>
              </Route>
              <Route path='/search' element={<Search />} />
            </Routes>
            </div>
          <Footer/>
        </div>
      </SearchContext.Provider>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;

