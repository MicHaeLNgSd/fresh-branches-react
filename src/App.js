import './App.css';
import React, { useEffect } from 'react';
import {
  Link,
  Route,
  BrowserRouter as Router,
  Switch,
  useHistory,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  );
}

function Home() {
  return <div>Home</div>;
}

function About() {
  return <div>About</div>;
}

function NotFoundPage() {
  const history = useHistory();
  useEffect(() => {
    setTimeout(() => history.push('/'), 5000);
  });
  return <div>404 Not Found</div>;
}

export default App;
