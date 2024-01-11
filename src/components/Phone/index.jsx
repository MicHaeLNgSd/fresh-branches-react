import React, { useState } from 'react';

// class Phone extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { isPhoneStateOn: false };

//     this.phoneStateToggle = this.phoneStateToggle.bind(this);
//   }

//   phoneStateToggle() {
//     this.setState((pS) => ({
//       isPhoneStateOn: !pS.isPhoneStateOn,
//     }));
//   }

//   render() {
//     const { color, price } = this.props;
//     const { isPhoneStateOn } = this.state;

//     return (
//       <div>
//         <p>
//           Phone is {color}, price = {price}
//         </p>
//         <p>Phone is {isPhoneStateOn ? 'On' : 'Off'}</p>
//         <button onClick={this.phoneStateToggle}>{isPhoneStateOn ? 'On' : 'Off'}</button>
//       </div>
//     );
//   }
// }

function Phone({ color, price }) {
  const [isPhoneStateOn, setIsPhoneStateOn] = useState(false);
  function phoneStateToggle() {
    return setIsPhoneStateOn((prevState) => !prevState);
  }

  return (
    <div>
      <p>
        The {color.toLowerCase()} phone that costs is {price} is{' '}
        {isPhoneStateOn ? 'On' : 'Off'}
      </p>
      <button onClick={phoneStateToggle}>{!isPhoneStateOn ? 'On' : 'Off'}</button>
    </div>
  );
}

export default Phone;
