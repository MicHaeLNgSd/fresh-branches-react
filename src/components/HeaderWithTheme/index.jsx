import React from 'react';
import { ThemeContext } from '../../contexts';
import Header from '../Header';

function HeaderWithTheme() {
  return (
    <ThemeContext.Consumer>
      {([theme, setTheme]) => <Header theme={theme} setTheme={setTheme} />}
    </ThemeContext.Consumer>
  );
}

export default HeaderWithTheme;
