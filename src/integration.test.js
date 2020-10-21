import { storeFactory } from "../test/testUtils";
import { guessWord, setUserEnteredWord } from "./actions";

describe("guessWord action dispatcher", () => {
  const secretWord = "party";
  const unsuccessfulGuess = "train";

  describe("no guessed words", () => {
    let store;
    const initialState = { secretWord };

    beforeEach(() => {
      store = storeFactory(initialState);
    });

    test("updates state correctly for unsuccessful guess", () => {
      store.dispatch(guessWord(unsuccessfulGuess));

      const newState = store.getState();
      const expectedState = {
        ...initialState,
        enteringNewWord: null,
        gaveUp: false,
        success: false,
        serverError: false,
        guessedWords: [
          {
            guessedWord: unsuccessfulGuess,
            letterMatchCount: 3,
          },
        ],
      };

      expect(newState).toEqual(expectedState);
    });

    test("updates state correctly for successful guess", () => {
      store.dispatch(guessWord(secretWord));

      const newState = store.getState();
      const expectedState = {
        ...initialState,
        enteringNewWord: null,
        gaveUp: false,
        success: true,
        serverError: false,
        guessedWords: [
          {
            guessedWord: secretWord,
            letterMatchCount: 5,
          },
        ],
      };

      expect(newState).toEqual(expectedState);
    });
  });

  describe("some guessed words", () => {
    const guessedWords = [{ guessedWord: "agile", letterMatchCount: 1 }];
    const initialState = {
      guessedWords,
      secretWord,
    };
    let store;

    beforeEach(() => {
      store = storeFactory(initialState);
    });

    test("updates state correctly for unsuccessful guess", () => {
      store.dispatch(guessWord(unsuccessfulGuess));
      const newState = store.getState();
      const expectedState = {
        secretWord,
        enteringNewWord: null,
        gaveUp: false,
        success: false,
        serverError: false,
        guessedWords: [
          ...guessedWords,
          { guessedWord: unsuccessfulGuess, letterMatchCount: 3 },
        ],
      };

      expect(newState).toEqual(expectedState);
    });

    test("updates state correctly for successful guess", () => {
      store.dispatch(guessWord(secretWord));
      const newState = store.getState();
      const expectedState = {
        secretWord,
        enteringNewWord: null,
        gaveUp: false,
        success: true,
        serverError: false,
        guessedWords: [
          ...guessedWords,
          { guessedWord: secretWord, letterMatchCount: 5 },
        ],
      };

      expect(newState).toEqual(expectedState);
    });
  });
});

describe("`setUserEnteredWord` action dispatcher", () => {
  let store;
  let newState;
  const userSecretWord = "train";
  const initialState = {
    secretWord: "party",
  };

  beforeEach(() => {
    store = storeFactory(initialState);
    store.dispatch(setUserEnteredWord(userSecretWord));
    newState = store.getState();
  });

  test("updates `secretWord` state correctly after entered Word", () => {
    expect(newState.secretWord).toBe(userSecretWord);
  });

  test("updates `enteringNewWord` state as `done` after entered Word", () => {
    expect(newState.enteringNewWord).toBe("done");
  });
});
