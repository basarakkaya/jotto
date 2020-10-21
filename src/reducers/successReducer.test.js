import { actionTypes } from "../actions";
import successReducer from "./successReducer";

test("returns default initial state of 'false' when no action", () => {
  const newState = successReducer(undefined, {});

  expect(newState).toBe(false);
});

test("returns state of true upon receiving an action of type 'CORRECT_GUESS'", () => {
  const newState = successReducer(undefined, {
    type: actionTypes.CORRECT_GUESS,
  });

  expect(newState).toBe(true);
});

test("returns state of false upon receiving an action of type 'RESET_ACTION'", () => {
  const newState = successReducer(undefined, {
    type: actionTypes.RESET_ACTION,
  });

  expect(newState).toBe(false);
});
