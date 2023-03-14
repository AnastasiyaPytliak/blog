import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { ThemeContext, useInitThemeContext } from './context/theme';

function App() {

  const themeContextValues = useInitThemeContext()
  

  return (
    <ThemeContext.Provider value={themeContextValues}>
      <div className="App">
        <Header />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
