import React, { useContext } from 'react';
import { ThemeContext } from '../../context';

function Header() {
  const theme = useContext(ThemeContext);
  return <p>Header: {theme}</p>;
}

export default Header;
