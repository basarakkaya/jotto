import React from "react";
import { shallow } from "enzyme";
import { checkProps, findByTestAttr } from "../../test/testUtils";
import EnterWordButton from "./EnterWordButton";

const defaultProps = {
  show: false,
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<EnterWordButton {...setupProps} />);
};

test("renders without error when `show` is true", () => {
  const wrapper = setup({ show: true });
  const component = findByTestAttr(wrapper, "enter-word-button");

  expect(component.length).toBe(1);
});

test("renders text wtihout error when `show` is true", () => {
  const wrapper = setup({ show: true });
  const buttonText = findByTestAttr(wrapper, "enter-word-button").text();

  expect(buttonText.length).not.toBe(0);
});

test("renders nothing, without error when `show` is false", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "enter-word-button");

  expect(component.length).toBe(0);
});

test("does not throw warning with expected props", () => {
  const expectedProps = { show: false, newWordAction: () => {} };
  const propError = checkProps(EnterWordButton, expectedProps);

  expect(propError).toBeUndefined();
});

test("calls newWordAction without error upon button click", () => {
  const newWordActionMock = jest.fn();
  const wrapper = setup({ show: true, newWordAction: newWordActionMock });

  const component = findByTestAttr(wrapper, "enter-word-button");
  component.simulate("click");

  const newWordActionMockCallCount = newWordActionMock.mock.calls.length;

  expect(newWordActionMockCallCount).toBe(1);
});
