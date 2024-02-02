import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts';

function withTheme(Component) {
  function NewComponent(props) {
    const [theme, setTheme] = useContext(ThemeContext);
    return <Component theme={theme} setTheme={setTheme} {...props} />;
  }
  return NewComponent;
}

export default withTheme;
