import ACTION_TYPES from './actionTypes';

export function actionAddCreator() {
  const action = {
    type: ACTION_TYPES.CHANGE_COUNT,
  };
  return action;
}
export function actionSelectCreator(payload) {
  const action = {
    type: ACTION_TYPES.CHANGE_STEP,
    step: payload,
  };
  return action;
}
export function actionToggleCreator() {
  const action = {
    type: ACTION_TYPES.INVERSE_STEP,
  };
  return action;
}
export function actionResetCreator() {
  const action = {
    type: ACTION_TYPES.RESET_COUNT,
  };
  return action;
}
