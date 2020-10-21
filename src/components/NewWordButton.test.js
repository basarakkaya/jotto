import React from "react";
import { shallow } from "enzyme";
import { checkProps, findByTestAttr } from "../../test/testUtils";
import NewWordButton from "./NewWordButton";

const defaultProps = {
  show: false,
  resetAction: () => {},
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<NewWordButton {...setupProps} />);
};

describe("render", () => {
  test("renders without error when `show` is true", () => {
    const wrapper = setup({ show: true });
    const component = findByTestAttr(wrapper, "new-word-button");

    expect(component.length).toBe(1);
  });

  test("renders text within button without error when `show` is true", () => {
    const wrapper = setup({ show: true });
    const text = findByTestAttr(wrapper, "new-word-button").text();

    expect(text.length).not.toBe(0);
  });

  test("does not render anything when `show` is false", () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "new-word-button");

    expect(component.length).toBe(0);
  });
});

test("does not throw warning with expected props", () => {
  const expectedProps = { show: false, resetAction: () => {} };
  const propError = checkProps(NewWordButton, expectedProps);

  expect(propError).toBeUndefined();
});

test("calls `resetAction` when the button is clicked", () => {
  const resetActionMock = jest.fn();
  const wrapper = setup({ show: true, resetAction: resetActionMock });

  const component = findByTestAttr(wrapper, "new-word-button");
  component.simulate("click");

  const resetActionCallCount = resetActionMock.mock.calls.length;

  expect(resetActionCallCount).toBe(1);
});
