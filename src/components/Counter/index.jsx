import React, { useReducer } from 'react';
import reducer, { initialState } from './reducer';
import {
  actionAddCreator,
  actionResetCreator,
  actionSelectCreator,
  actionToggleCreator,
} from './actionsCreators';

function Counter () {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { step, count } = state;

  const handleClick = () => {
    const action = actionAddCreator();
    dispatch(action);
  };
  const handleSelect = ({ target: { value } }) => {
    const action = actionSelectCreator(+value);
    dispatch(action);
  };
  const handleToggleClick = () => {
    const action = actionToggleCreator();
    dispatch(action);
  };
  const handleReset = () => {
    const action = actionResetCreator();
    dispatch(action);
  };

  return (
    <div>
      <p>Counter: {count}</p>
      <select value={step} onChange={handleSelect}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
      </select>
      <button onClick={handleClick}>+</button>
      <button onClick={handleToggleClick}>+/-</button>
      <button onClick={handleReset}>0</button>
    </div>
  );
}

export default Counter;
