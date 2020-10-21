import { actionTypes } from "../actions";

export default (state = false, action) => {
  switch (action.type) {
    case actionTypes.GIVE_UP:
      return true;
    case actionTypes.RESET_ACTION:
      return false;
    default:
      return state;
  }
};
