import React from 'react';
import './style.css';

class Phone extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isPhoneOn: false };
  }
  handleSetStateOff = () => {
    this.setState({
      isPhoneOn: false,
    });
  };
  handleSetState = () => {
    this.setState({
      isPhoneOn: true,
    });
  };
  handleToggleState = () => {
    this.setState({
      isPhoneOn: !this.state.isPhoneOn,
    });
    // this.setState((state) => ({
    //   isPhoneOn: !state.isPhoneOn,
    // }));
  };

  render() {
    const { color, price } = this.props;
    const { isPhoneOn } = this.state;

    const phoneStatus = isPhoneOn ? <PhoneOnText /> : <PhoneOffText />;
    const classDiv = isPhoneOn ? 'on' : 'off';

    return (
      <div className={classDiv}>
        <p>
          Phone is {color}, price = {price}
        </p>
        <p>Phone is {isPhoneOn ? 'On' : 'Off'}</p>
        {phoneStatus}
        <button onClick={this.handleToggleState}>{!isPhoneOn ? 'On' : 'Off'}</button>
        {/* <button onClick={this.handleSetState}>On</button>
        <button onClick={this.handleSetStateOff}>Off</button> */}
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
