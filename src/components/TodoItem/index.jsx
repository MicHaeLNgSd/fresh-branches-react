import React, { useContext } from 'react';
import styles from './TodoItem.module.scss';
import classNames from 'classnames';
import CONFIG from '../../config';
import { ThemeContext } from '../../contexts';
const { THEMES } = CONFIG;
const { todoItem, lightTheme, darkTheme, pinkTheme } = styles;

function TodoItem({ info: { userId, title, completed } }) {
  const [theme] = useContext(ThemeContext);
  const fullClassName = classNames(todoItem, {
    [lightTheme]: theme === THEMES.LIGHT,
    [darkTheme]: theme === THEMES.DARK,
    [pinkTheme]: theme === THEMES.PINK,
  });
  return (
    <li>
      <article className={fullClassName}>
        <input type="checkbox" checked={completed} readOnly />
        <p>
          User{userId}:{title}
        </p>
      </article>
    </li>
  );
}

export default TodoItem;
