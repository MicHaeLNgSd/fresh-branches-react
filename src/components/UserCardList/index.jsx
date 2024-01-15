import UserCard from '../UserCard';
import './../../reset.css';
import './style.css';
import React from 'react';

class UserCardList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        { id: 0, name: 'Анна', isMale: false },
        { id: 1, name: 'Олексій', isMale: true },
        { id: 2, name: 'Марія', isMale: false },
        { id: 3, name: 'Іван', isMale: true },
        { id: 4, name: 'Юлія', isMale: false },
      ],
    };
  }
  removeUser = (id) => {
    const { users } = this.state;
    const newUsers = users.filter((u) => id !== u.id);
    this.setState({ users: newUsers });
  };
  render() {
    const { users } = this.state;
    const userComponents = users.map((u) => (
      <UserCard key={u.id} user={u} removeUser={this.removeUser} />
    ));

    return <ul id="userCardList">{userComponents}</ul>;
  }
}
export default UserCardList;
