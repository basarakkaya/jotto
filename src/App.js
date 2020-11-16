import React from "react";
import "./App.css";

import Input from "./components/Input";
import LanguagePicker from "./components/LanguagePicker";
import Congrats from "./components/Congrats";
import GuessedWords from "./components/GuessedWords";

import hookActions from "./actions/hookActions";
import languageContext from "./contexts/languageContext";
import successContext from "./contexts/successContext";
import guessedWordsContext from "./contexts/guessedWordsContext";

/**
 * reducer to update state, called automatically by dispatch
 * @param {object} state - existing state
 * @param {object} action - contains "type" and "payload" properties for the state update
 * for example: { type: "setSecretWord", payload: "party" }
 * @returns {object} new state
 */
function reducer(state, action) {
  switch (action.type) {
    case "setSecretWord":
      return { ...state, secretWord: action.payload };
    case "setLanguage":
      return { ...state, language: action.payload };
    default:
      throw new Error(`Invalid action type: ${action.type}`);
  }
}

function App() {
  const [state, dispatch] = React.useReducer(reducer, {
    secretWord: "",
    language: "en",
  });

  const setSecretWord = (secretWord) =>
    dispatch({ type: "setSecretWord", payload: secretWord });

  const setLanguage = (language) =>
    dispatch({ type: "setLanguage", payload: language });

  React.useEffect(() => {
    hookActions.getSecretWord(setSecretWord);
  }, []);

  return (
    <div className="container">
      <languageContext.Provider value={state.language}>
        <LanguagePicker setLanguage={setLanguage} />
        <h1>Jotto</h1>
        {state.secretWord ? (
          <div data-test="component-app">
            <guessedWordsContext.GuessedWordsProvider>
              <successContext.SuccessProvider>
                <Congrats />
                <Input secretWord={state.secretWord} />
              </successContext.SuccessProvider>
              <GuessedWords />
            </guessedWordsContext.GuessedWordsProvider>
          </div>
        ) : (
          <div data-test="spinner">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
            <p>Loading secret word</p>
          </div>
        )}
      </languageContext.Provider>
    </div>
  );
}

export default App;
