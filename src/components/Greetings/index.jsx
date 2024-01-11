import React from 'react';

class Greetings extends React.Component {
  render() {
    const { user } = this.props;
    return <h1>Hello, {user.name}!</h1>;
  }
}

// function Greetings(props) {
//   const { user } = props;
//   return <h1>Hello, {user.name}!</h1>;
// }

export default Greetings;
