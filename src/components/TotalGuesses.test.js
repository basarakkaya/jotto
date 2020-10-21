import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, storeFactory } from "../../test/testUtils";
import TotalGuesses from "./TotalGuesses";

const guessedWords = [
  { guessedWord: "train", letterMatchCount: 3 },
  { guessedWord: "agile", letterMatchCount: 1 },
  { guessedWord: "party", letterMatchCount: 5 },
];

const setup = (state = {}) => {
  const store = storeFactory(state);
  const wrapper = shallow(<TotalGuesses store={store} />)
    .dive()
    .dive();
  return wrapper;
};

describe("component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords });
  });

  test("renders without error", () => {
    const component = findByTestAttr(wrapper, "total-guesses");
    expect(component.length).toBe(1);
  });

  test("has access to 'guessedWords' state", () => {
    const guessedWordsProp = wrapper.instance().props.guessedWords;
    expect(guessedWordsProp).toBe(guessedWords);
  });

  test("displays total guess count correctly", () => {
    const totalGuessesCount = findByTestAttr(
      wrapper,
      "total-guesses-count"
    ).text();

    expect(totalGuessesCount).toBe("3");
  });
});
