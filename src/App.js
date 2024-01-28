import { getTodo } from './api';
import TodoList from './components/TodoList';
import DataLoader from './components/DataLoader';
import { ThemeContext } from './contexts';
import { Component } from 'react';
import CONFIG from './config';
import HeaderWithTheme from './components/HeaderWithTheme';
const { THEMES } = CONFIG;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: THEMES.LIGHT,
    };
  }

  componentDidMount() {
    const localTheme = window.localStorage.getItem('theme');
    localTheme && this.setState({ theme: localTheme });
  }

  componentDidUpdate(prevProps) {
    const { theme } = this.state;
    if (theme !== prevProps.theme) {
      localStorage.setItem('theme', theme);
    }
  }

  setTheme = (newTheme) => {
    this.setState({ theme: newTheme });
  };

  render() {
    return (
      <>
        <ThemeContext.Provider value={[this.state.theme, this.setTheme]}>
          <HeaderWithTheme />
          <DataLoader loadData={getTodo}>{(data) => <TodoList data={data} />}</DataLoader>
        </ThemeContext.Provider>
      </>
    );
  }
}

export default App;
