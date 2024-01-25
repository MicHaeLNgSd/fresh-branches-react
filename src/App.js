import './App.css';

import React, { Component } from 'react';
import { ThemeContext } from './context';
import Header from './components/Header';
import MainContext from './components/MainContext';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: 'Dark',
    };
  }
  render() {
    const { theme } = this.state;
    return (
      <ThemeContext.Provider value={theme}>
        <Header />
        <MainContext />
        <p>App {theme}</p>
      </ThemeContext.Provider>
    );
  }
}

export default App;
