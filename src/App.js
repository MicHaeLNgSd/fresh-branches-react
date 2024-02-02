import { getTodo } from './api';
import TodoList from './components/TodoList';
import useDataLoader from './components/DataLoader';
import { ThemeContext } from './contexts';
import { useEffect, useState } from 'react';
import CONFIG from './config';
import Header from './components/Header';
const { THEMES } = CONFIG;

function App() {
  const [theme, setTheme] = useState(THEMES.LIGHT);
  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme && setTheme(localTheme);
  }, []);

  function setNewTheme(newTheme) {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  }

  const data = useDataLoader(getTodo);
  return (
    <>
      <ThemeContext.Provider value={[theme, setNewTheme]}>
        <Header />
        <TodoList data={data} />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
