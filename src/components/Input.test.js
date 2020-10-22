import React from "react";
import { shallow } from "enzyme";
import { checkProps, findByTestAttr } from "../../test/testUtils";
import Input from "./Input";

const defaultProps = {
  secretWord: "party",
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Input {...setupProps} />);
};

describe("render", () => {
  test("Input renders without error", () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "component-input");

    expect(component.length).toBe(1);
  });

  test("input box renders without error", () => {
    const wrapper = setup();
    const inputBox = findByTestAttr(wrapper, "input-box");

    expect(inputBox.length).toBe(1);
  });

  test("submit button renders without error", () => {
    const wrapper = setup();
    const inputBox = findByTestAttr(wrapper, "submit-button");

    expect(inputBox.length).toBe(1);
  });
});

test("does not throw warning with expected props", () => {
  const propsError = checkProps(Input, defaultProps);

  expect(propsError).toBeUndefined();
});

describe("state controlled input field", () => {
  let mockSetCurrentGuess = jest.fn();
  let wrapper;

  beforeEach(() => {
    mockSetCurrentGuess.mockClear();
    React.useState = jest.fn(() => ["", mockSetCurrentGuess]);
    wrapper = setup();
  });

  test("state updates with value of input box upon change", () => {
    const inputBox = findByTestAttr(wrapper, "input-box");

    const mockEvent = { target: { value: "train" } };
    inputBox.simulate("change", mockEvent);

    expect(mockSetCurrentGuess).toHaveBeenCalledWith("train");
  });

  test("field is cleared upon submit button click", () => {
    const submitButton = findByTestAttr(wrapper, "submit-button");
    submitButton.simulate("click", { preventDefault() {} });

    expect(mockSetCurrentGuess).toHaveBeenCalledWith("");
  });
});
