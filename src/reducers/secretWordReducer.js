import { actionTypes } from "../actions";

/**
 * @function secretWordsReducer
 * @param {string} state State before reducer
 * @param {object} action action to be reduced
 * @returns {string} new secretWord state
 */
export default (state = null, action) => {
  switch (action.type) {
    case actionTypes.SET_SECRET_WORD:
      return action.payload;
    default:
      return state;
  }
};
