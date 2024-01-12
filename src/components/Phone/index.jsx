import React from 'react';

class Phone extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isPhoneStateOn: false };

    // this.handleClick = this.handleClick.bind(this);
  }
  // handleClick() {
  //   // this.state.isPhoneStateOn = true;
  //   this.setState((state) => ({
  //     isPhoneStateOn: !state.isPhoneStateOn,
  //   }));
  // }
  handleToggleState = () => {
    this.setState({
      isPhoneStateOn: true,
    });
    // this.setState((state) => ({
    //   isPhoneStateOn: !state.isPhoneStateOn,
    // }));
  };

  render() {
    const { color, price } = this.props;
    const { isPhoneStateOn } = this.state;
    // prop.price -= prop.price;

    return (
      <div>
        <p>
          Phone is {color}, price = {price}
        </p>
        <p>Phone is {isPhoneStateOn ? 'On' : 'Off'}</p>
        <button onClick={this.handleToggleState}>{!isPhoneStateOn ? 'On' : 'Off'}</button>
      </div>
    );
  }
}

// function Phone({ color, price }) {
//   const [isPhoneStateOn, setIsPhoneStateOn] = useState(false);
//   function phoneStateToggle() {
//     return setIsPhoneStateOn((prevState) => !prevState);
//   }

//   return (
//     <div>
//       <p>
//         The {color.toLowerCase()} phone that costs is {price} is{' '}
//         {isPhoneStateOn ? 'On' : 'Off'}
//       </p>
//       <button onClick={phoneStateToggle}>{!isPhoneStateOn ? 'On' : 'Off'}</button>
//     </div>
//   );
// }

export default Phone;
