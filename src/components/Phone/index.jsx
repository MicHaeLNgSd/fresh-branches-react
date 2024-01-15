import React from 'react';
import './style.css';
class Phone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: false,
    };
  }

  handleToggle = () => {
    const { isOn } = this.state;
    this.setState({
      isOn: !isOn,
    });
  };

  render() {
    const {
      phone: { color, price, isFavorite, id },
      toggleFavorite,
    } = this.props;
    const { isOn } = this.state;

    const phoneStatus = isOn ? <PhoneOnText /> : <PhoneOffText />;
    const containerClass = `phoneContainer ${isOn ? 'on' : 'off'}`;

    return (
      <div className={containerClass}>
        <p>Phone is {color}</p>
        <p>Phone price is {price}</p>
        {phoneStatus}
        {isFavorite && <p>Phone is favorite</p>}
        <button onClick={this.handleToggle}>Switch {isOn ? 'off' : 'on'}</button>
        <button onClick={() => toggleFavorite(id)}>
          {isFavorite ? 'Remove' : 'Make'} Favorite
        </button>
      </div>
    );
  }
}

function PhoneOnText() {
  return <p>Phone is currently on</p>;
}
function PhoneOffText() {
  return <p>Phone is currently off</p>;
}

export default Phone;
