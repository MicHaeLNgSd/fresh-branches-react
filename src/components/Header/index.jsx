import React from 'react';
import Navigation from '../Navigation';
import './style.css';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <h1>Our site</h1>
        <Navigation />
      </header>
    );
  }
}

export default Header;
