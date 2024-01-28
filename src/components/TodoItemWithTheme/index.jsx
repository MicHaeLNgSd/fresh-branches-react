import React from 'react';
import TodoItem from '../TodoItem';
import { ThemeContext } from '../../contexts';

function TodoItemWithTheme(props) {
  return (
    <ThemeContext.Consumer>
      {([theme, setTheme]) => <TodoItem theme={theme} {...props} />}
    </ThemeContext.Consumer>
  );
}

export default TodoItemWithTheme;
