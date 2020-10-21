import { actionTypes } from "../actions";
import serverErrorReducer from "./serverErrorReducer";

test("returns state of `true` when passed action `SERVER_ERROR`", () => {
  expect(
    serverErrorReducer(undefined, { type: actionTypes.SERVER_ERROR })
  ).toBe(true);
});

test("returns state of `false` when no action passed", () => {
  expect(serverErrorReducer(undefined, {})).toBe(false);
});
