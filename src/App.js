import { getTodo } from './api';
import TodoList from './components/TodoList';
import useDataLoader from './components/DataLoader';
import { ThemeContext } from './contexts';
import { useEffect, useState } from 'react';
import CONFIG from './config';
import withTheme from './components/withTheme';
import Header from './components/Header';
const { THEMES } = CONFIG;

function App() {
  const [theme, setTheme] = useState(THEMES.LIGHT);
  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme && setTheme(localTheme);
  }, []);

  useEffect(() => {
    setTheme((theme) => {
      localStorage.setItem('theme', theme);
      return theme;
    });
  }, [theme]);

  const HeaderWithTheme = withTheme(Header);
  const data = useDataLoader(getTodo);
  return (
    <>
      <ThemeContext.Provider value={[theme, setTheme]}>
        <HeaderWithTheme />
        <TodoList data={data} />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
