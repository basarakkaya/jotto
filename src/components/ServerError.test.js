import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../test/testUtils";
import ServerError from "./ServerError";

test("renders without error", () => {
  expect(findByTestAttr(shallow(<ServerError />), "server-error").length).toBe(
    1
  );
});
