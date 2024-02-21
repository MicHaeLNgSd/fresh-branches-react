import { combineReducers } from '@reduxjs/toolkit';
import countReducer from './slices/counterSlice';
import themeReducer from './slices/themeSlice';

const rootReduser = combineReducers({
  counter: countReducer,
  theme: themeReducer,
});

export default rootReduser;
