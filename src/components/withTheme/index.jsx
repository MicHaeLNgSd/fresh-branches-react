import React from 'react';
import { ThemeContext } from '../../contexts';

function withTheme(Component) {
  function NewComponent(props) {
    return (
      <ThemeContext.Consumer>
        {([theme, setTheme]) => (
          <Component theme={theme} setTheme={setTheme} {...props} />
        )}
      </ThemeContext.Consumer>
    );
  }
  return NewComponent;
}

export default withTheme;
