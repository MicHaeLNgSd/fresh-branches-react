import React, { Component } from 'react';
import { ThemeContext } from '../../../context';

class Sidebar extends Component {
  render() {
    return (
      <ThemeContext.Consumer>{(value) => <p>Sidebar: {value}</p>}</ThemeContext.Consumer>
    );
  }
}

export default Sidebar;
