import React from 'react';
import { connect } from 'react-redux';
import { decrement, increment } from '../../store/slices/counterSlice';

function Counter({ count, incrementCount, decrementCount }) {
  return (
    <div>
      <div>{count}</div>
      <button onClick={decrementCount}>-</button>
      <button onClick={incrementCount}>+</button>
    </div>
  );
}

function mapStateToProps(state) {
  return state;
}
function mapDispatchToProps(dispatch) {
  return {
    decrementCount: () => dispatch(decrement()),
    incrementCount: () => dispatch(increment()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
