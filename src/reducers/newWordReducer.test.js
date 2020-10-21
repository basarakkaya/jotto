import { actionTypes } from "../actions";
import newWordReducer from "./newWordReducer";

test("returns default initial state of `null` when no action is passed", () => {
  const newState = newWordReducer(undefined, {});

  expect(newState).toBeNull();
});

test("returns state of `inProgress` when action `ENTERING_NEW_WORD` is passed", () => {
  const newState = newWordReducer(undefined, {
    type: actionTypes.ENTERING_NEW_WORD,
  });

  expect(newState).toBe("inProgress");
});

test("returns state of `done` when action `ENTERED_NEW_WORD` is passed", () => {
  const newState = newWordReducer(undefined, {
    type: actionTypes.ENTERED_NEW_WORD,
  });

  expect(newState).toBe("done");
});

test("returns state of `null` when action `RESET_ACTION` is passed", () => {
  const newState = newWordReducer(undefined, {
    type: actionTypes.RESET_ACTION,
  });

  expect(newState).toBeNull();
});
