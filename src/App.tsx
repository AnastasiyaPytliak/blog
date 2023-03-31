import React from 'react';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { SearchContext, useInitSearchContext } from './context/search';
import { ThemeContext, useInitThemeContext } from './context/theme';
import Cards from './pages/Cards/Cards';
import { CurrentCard } from './pages/CurrentCard/CurrentCard';
import Search from './pages/Search/Search';


function App() {

  const themeContextValues = useInitThemeContext()
  const searchContextValues = useInitSearchContext()

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={themeContextValues}>
      <SearchContext.Provider value={searchContextValues}>
        <div className="app">
          <Header/>
            <div className="body">
            <Routes>
              <Route path='/search' element={<Search />} />
              <Route path="/" element={<Navigate replace to="/posts" />} />
              <Route path='/posts'>
              <Route index element={<Cards />}></Route>
                <Route element={
                  <PrivateRoute root='/posts' dependency={true}>
                    <CurrentCard />
                  </PrivateRoute>
                  } path=':id' /> 
              </Route>
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

