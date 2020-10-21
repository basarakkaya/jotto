import React from "react";
import { shallow } from "enzyme";
import { checkProps, findByTestAttr } from "../../test/testUtils";
import SecretWordReveal from "./SecretWordReveal";

const secretWord = "party";
const defaultProps = {
  secretWord,
  show: false,
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<SecretWordReveal {...setupProps} />);
};

test("renders without error when `show` is true", () => {
  const wrapper = setup({ show: true });
  const component = findByTestAttr(wrapper, "secret-word-reveal");

  expect(component.length).toBe(1);
});
test("renders reveal message that contains secret word without error when `show` is true", () => {
  const wrapper = setup({ show: true });
  const revealMessage = findByTestAttr(wrapper, "secret-word-reveal").text();

  expect(revealMessage).toContain(secretWord);
});
test("displays nothing without error when `show` is false", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "secret-word-reveal");

  expect(component.length).toBe(0);
});
test("does not throw warning with expected props", () => {
  const wrapper = setup();
  const expectedProps = defaultProps;

  const propError = checkProps(SecretWordReveal, expectedProps);

  expect(propError).toBeUndefined();
});
