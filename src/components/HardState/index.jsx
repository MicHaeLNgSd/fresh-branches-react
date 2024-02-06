import React, { useEffect, useReducer } from 'react';

const initialArgs = {
  number: 0,
  coords: { x: 0, y: 0 },
};

function reducer(state, action) {
  switch (action.type) {
    case 'number': {
      const newState = {
        ...state,
        number: action.payload,
      };
      return newState;
    }
    case 'coords': {
      const newState = {
        ...state,
        coords: action.coords,
      };
      return newState;
    }
    default:
      return state;
  }
}

function HardState() {
  const [state, dispatch] = useReducer(reducer, initialArgs);
  const {
    number,
    coords: { clientX, clientY },
  } = state;

  // console.log(number, clientX, clientY);

  function handleChange({ target: { value } }) {
    const action = { type: 'number', payload: +value };
    dispatch(action);
  }

  function handleCoords({ clientX, clientY }) {
    const action = {
      type: 'coords',
      coords: { clientX, clientY },
    };
    dispatch(action);
  }

  useEffect(() => {
    document.body.addEventListener('mousemove', handleCoords);
    return () => {
      document.body.removeEventListener('mousemove', handleCoords);
    };
  }, []);

  return (
    <div>
      <p>X: {clientX}</p>
      <p>Y: {clientY}</p>
      <p>
        Square value of {number} is {number ** 2}
      </p>
      <label>
        <input type="number" value={number} onChange={handleChange} />
      </label>
    </div>
  );
}

export default HardState;
