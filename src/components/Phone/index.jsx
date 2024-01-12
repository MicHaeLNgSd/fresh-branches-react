import React from 'react';
import './style.css';

class Phone extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isPhoneOn: false, isPhoneShown: true };
  }

  handleToggleState = () => {
    this.setState({
      isPhoneOn: !this.state.isPhoneOn,
    });
    // this.setState((state) => ({
    //   isPhoneOn: !state.isPhoneOn,
    // }));
  };

  handleVisibility = () => {
    this.setState({
      isPhoneShown: !this.state.isPhoneShown,
    });
  };

  render() {
    const { color, price } = this.props;
    const { isPhoneOn, isPhoneShown } = this.state;

    const phoneStatus = isPhoneOn ? <PhoneOnText /> : <PhoneOffText />;
    const classDiv = isPhoneOn ? 'on' : 'off';

    return (
      <div className={classDiv}>
        <button onClick={this.handleVisibility}>Toggle Phones visibility</button>
        <p>
          Phone is {color}, price = {price}
        </p>
        {isPhoneShown && (
          <>
            <p>Phone is {isPhoneOn ? 'On' : 'Off'}</p>
            {phoneStatus}
          </>
        )}
        <button onClick={this.handleToggleState}>{!isPhoneOn ? 'On' : 'Off'}</button>
      </div>
    );
  }
}

function PhoneOnText() {
  return <p>Phone is currently ON</p>;
}
function PhoneOffText() {
  return <p>Phone is currently OFF</p>;
}

// function Phone({ color, price }) {
//   const [isPhoneOn, setisPhoneOn] = useState(false);
//   function phoneStateToggle() {
//     return setisPhoneOn((prevState) => !prevState);
//   }

//   return (
//     <div>
//       <p>
//         The {color.toLowerCase()} phone that costs is {price} is{' '}
//         {isPhoneOn ? 'On' : 'Off'}
//       </p>
//       <button onClick={phoneStateToggle}>{!isPhoneOn ? 'On' : 'Off'}</button>
//     </div>
//   );
// }

export default Phone;
