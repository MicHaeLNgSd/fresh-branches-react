import './App.css';

import React, { useState } from 'react';
import { ThemeContext } from './context';
import Header from './components/Header';
import MainContext from './components/MainContext';

function App() {
  const [theme] = useState('Light');
  return (
    <ThemeContext.Provider value={theme}>
      <Header />
      <MainContext />
      <p>App {theme}</p>
    </ThemeContext.Provider>
  );
}

export default App;
