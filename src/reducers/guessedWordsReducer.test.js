import { actionTypes } from "../actions";
import guessedWordsReducer from "./guessedWordsReducer";

test("returns empty array upon receiving an action of type RESET_ACTION", () => {
  const newState = guessedWordsReducer(undefined, {
    type: actionTypes.RESET_ACTION,
  });

  expect(newState).toEqual([]);
});
