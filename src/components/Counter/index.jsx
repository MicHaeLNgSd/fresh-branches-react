import React from 'react';
import { connect } from 'react-redux';
import { decrement, increment, setStep } from '../../store/slices/counterSlice';

function Counter({ count, step, incrementCount, decrementCount, setNewStep }) {
  const handleStepChange = ({ target: { value } }) => {
    setNewStep(Number(value));
  };

  return (
    <div>
      <div>{count}</div>
      <button onClick={decrementCount}>-</button>
      <button onClick={incrementCount}>+</button>
      <label>
        <span>Step:</span>
        <input type="number" value={step} onChange={handleStepChange} />
      </label>
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
    setNewStep: (newStep) => dispatch(setStep(newStep)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
