import './../../reset.css';
import './style.css';
import React from 'react';

class UserCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      user: { id, name, isMale },
      removeUser,
    } = this.props;

    return (
      <li className="userCardItem">
        <article className="userCard">
          <div className="cardHeader">
            <button className="cardCloseBtn" onClick={() => removeUser(id)}>
              x
            </button>
          </div>
          <img
            className="userImage"
            src="https://discourse.disneyheroesgame.com/uploads/default/original/3X/7/5/75b8e54268b741e4211fa45a1514e664d8b1595e.jpeg"
            alt="userImg"
          />
          <div className="contentContainer">
            <h3 className="name">{name}</h3>
            <p className="gender">{!isMale && 'wo'}man</p>
          </div>
        </article>
      </li>
    );
  }
}
export default UserCard;
