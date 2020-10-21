import { actionTypes } from "../actions";
import giveUpReducer from "./giveUpReducer";

test("returns true upon receiving an action of type GIVE_UP", () => {
  const newState = giveUpReducer(undefined, {
    type: actionTypes.GIVE_UP,
  });

  expect(newState).toEqual(true);
});

test("returns false upon receiving an action of type RESET_ACTION", () => {
  const newState = giveUpReducer(undefined, {
    type: actionTypes.RESET_ACTION,
  });

  expect(newState).toEqual(false);
});
