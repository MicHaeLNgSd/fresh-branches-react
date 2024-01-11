import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

/*
// //Class component
// class Heading extends React.Component {
//   render() {
//     //()=> react elem or component
//     return <h1>Some heading</h1>;
//   }
// }
// const HeadingClass = <Heading />;

// //Functional component
// function Paragraph(text = 'gdrgdrg') {
//   return <p>{text}</p>;
// }
*/
/*
class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <h1>Our site</h1>
        <Navigation />
        <Navigation />
        <Navigation />
        <Navigation />
      </header>
    );
  }
}

class Navigation extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </nav>
    );
  }
}

class Main extends React.Component {
  render() {
    return (
      <main>
        <h2>H2</h2>
        <p>lorem</p>
      </main>
    );
  }
}
*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
  </>
);
// root.render(
//   <React.StrictMode>
//     <Header />
//   </React.StrictMode>
// );
