import ACTION_TYPES from './actionTypes';

export const initialState = {
  count: 0,
  step: 1,
  isPositive: true,
};

function reducer (state, action) {
  switch (action.type) {
    case ACTION_TYPES.CHANGE_COUNT: {
      const delta = state.isPositive ? state.step : -state.step;
      const newState = {
        ...state,
        count: state.count + delta,
      };
      return newState;
    }

    case ACTION_TYPES.CHANGE_STEP: {
      const newState = {
        ...state,
        step: action.step,
      };
      return newState;
    }

    case ACTION_TYPES.INVERSE_STEP: {
      const newState = {
        ...state,
        isPositive: !state.isPositive,
      };
      return newState;
    }

    case ACTION_TYPES.RESET_COUNT: {
      const newState = {
        ...state,
        count: initialState.count,
      };
      return newState;
    }

    default:
      return state;
  }
}
export default reducer;
