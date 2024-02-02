import React, { useContext } from 'react';
import { ThemeContext } from '../../../context';

function Sidebar() {
  const theme = useContext(ThemeContext);
  return <p>Sidebar: {theme}</p>;
}

export default Sidebar;
