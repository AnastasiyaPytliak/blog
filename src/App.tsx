import React from 'react';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Search from './pages/Search/Search';
import Cards from './pages/Cards/Cards';
import { CurrentCard } from './pages/CurrentCard/CurrentCard';
import Footer from './components/Footer/Footer';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { ThemeContext, useInitThemeContext } from './context/theme';
import { SearchContext, useInitSearchContext } from './context/search';
import { ContentContext, useInitContentContext } from './context/content';
import './App.css';

function App() {

  const themeContextValues = useInitThemeContext()
  const searchContextValues = useInitSearchContext()
  const contentContextValues = useInitContentContext()

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={themeContextValues}>
      <SearchContext.Provider value={searchContextValues}>
      <ContentContext.Provider value={contentContextValues}>
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
      </ContentContext.Provider>
      </SearchContext.Provider>
      </ThemeContext.Provider>
    </BrowserRouter>
  )
}

export default App;
