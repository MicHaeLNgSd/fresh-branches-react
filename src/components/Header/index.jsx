import React, { Component } from 'react';
import { ThemeContext } from '../../context';

class Header extends Component {
  render() {
    return (
      <ThemeContext.Consumer>{(value) => <p>Header: {value}</p>}</ThemeContext.Consumer>
    );
  }
}

export default Header;
