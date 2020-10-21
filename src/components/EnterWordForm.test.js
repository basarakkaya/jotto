import React from "react";
import { shallow } from "enzyme";
import { checkProps, findByTestAttr } from "../../test/testUtils";
import EnterWordForm, { UnconnectedEnterWordForm } from "./EnterWordForm";

const defaultProps = {
  submitAction: () => {},
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<EnterWordForm {...setupProps} />);
};

describe("render", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test("renders without error", () => {
    const component = findByTestAttr(wrapper, "enter-word-form");
    expect(component.length).toBe(1);
  });
  test("renders instructions without error", () => {
    const instructions = findByTestAttr(
      wrapper,
      "enter-word-instructions"
    ).text();
    expect(instructions.length).not.toBe(0);
  });
  test("renders submit button without error", () => {
    const submitButton = findByTestAttr(wrapper, "enter-word-submit");
    expect(submitButton.length).toBe(1);
  });
  test("renders input box without error", () => {
    const inputBox = findByTestAttr(wrapper, "enter-word-input");
    expect(inputBox.length).toBe(1);
  });
});

test("does not throw warning with expected props", () => {
  const propsError = checkProps(EnterWordForm, defaultProps);
  expect(propsError).toBeUndefined();
});

describe("submit action", () => {
  let submitActionMock;
  let wrapper;
  const userSecretWord = "party";

  beforeEach(() => {
    submitActionMock = jest.fn();

    const props = {
      submitAction: submitActionMock,
    };

    wrapper = shallow(<UnconnectedEnterWordForm {...props} />);

    wrapper.setState({ userSecretWord });

    const submitButton = findByTestAttr(wrapper, "enter-word-submit");
    submitButton.simulate("click", { preventDefault() {} });
  });

  test("`submitAction` is called once", () => {
    const submitActionMockCallCount = submitActionMock.mock.calls.length;
    expect(submitActionMockCallCount).toBe(1);
  });
  test("`submitAction` is called with input value as argument", () => {
    const submitActionArg = submitActionMock.mock.calls[0][0];
    expect(submitActionArg).toBe(userSecretWord);
  });
});
