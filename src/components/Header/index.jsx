import React from 'react';
import styles from './Header.module.scss';
import CONFIG from '../../config';
import classNames from 'classnames';
const { header, lightTheme, darkTheme, pinkTheme } = styles;
const { THEMES } = CONFIG;

function Header({ theme, setTheme }) {
  const changeTheme = ({ target: { value } }) => {
    setTheme(value);
  };
  const headerClassName = classNames(header, {
    [lightTheme]: theme === THEMES.LIGHT,
    [darkTheme]: theme === THEMES.DARK,
    [pinkTheme]: theme === THEMES.PINK,
  });
  return (
    <header className={headerClassName}>
      <select value={theme} onChange={changeTheme}>
        <option value={THEMES.LIGHT}>LIGHT</option>
        <option value={THEMES.DARK}>DARK</option>
        <option value={THEMES.PINK}>PINK</option>
      </select>
    </header>
  );
}

export default Header;
