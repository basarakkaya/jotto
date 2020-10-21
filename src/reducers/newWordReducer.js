import { actionTypes } from "../actions";

export default (state = null, action) => {
  switch (action.type) {
    case actionTypes.ENTERING_NEW_WORD:
      return "inProgress";
    case actionTypes.ENTERED_NEW_WORD:
      return "done";
    case actionTypes.RESET_ACTION:
      return null;
    default:
      return state;
  }
};
