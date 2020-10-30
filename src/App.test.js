import React from "react";
import { mount } from "enzyme";
import { findByTestAttr } from "../test/testUtils";
import App from "./App";

import hookActions from "./actions/hookActions";

const mockGetSecretWord = jest.fn();

/**
 * Setup function for App component
 * @param {string} secretWord - desired secretWord state value for test
 * @returns {ReactWrapper}
 */
const setup = (secretWord = "party") => {
  mockGetSecretWord.mockClear();
  hookActions.getSecretWord = mockGetSecretWord;

  const mockUseReducer = jest.fn().mockReturnValue([{ secretWord }, jest.fn()]);

  React.useReducer = mockUseReducer;

  return mount(<App />);
};

test("App renders without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-app");

  expect(component.length).toBe(1);
});

describe("getSecretWord calls", () => {
  test("getSecretWord gets called on App mount", () => {
    setup();

    expect(mockGetSecretWord).toHaveBeenCalled();
  });

  test("secretWord does not update on App update", () => {
    const wrapper = setup();
    mockGetSecretWord.mockClear();

    // to update the component - trigger the useEffect
    wrapper.setProps();

    expect(mockGetSecretWord).not.toHaveBeenCalled();
  });
});

describe("secretWord is not empty", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup("party");
  });

  test("renders app when secretWord is not empty", () => {
    const appComponent = findByTestAttr(wrapper, "component-app");

    expect(appComponent.exists()).toBe(true);
  });

  test("does not render spinner when secretWord is not empty", () => {
    const spinnerComponent = findByTestAttr(wrapper, "spinner");

    expect(spinnerComponent.exists()).toBe(false);
  });
});

describe("secretWord is empty", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup("");
  });

  test("does not render app when secretWord is empty", () => {
    const appComponent = findByTestAttr(wrapper, "component-app");

    expect(appComponent.exists()).toBe(false);
  });

  test("renders spinner when secretWord is empty", () => {
    const spinnerComponent = findByTestAttr(wrapper, "spinner");

    expect(spinnerComponent.exists()).toBe(true);
  });
});
