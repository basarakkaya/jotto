import React from "react";
import "./App.css";

import Input from "./components/Input";
import hookActions from "./actions/hookActions";

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
    default:
      throw new Error(`Invalid action type: ${action.type}`);
  }
}

function App() {
  const [state, dispatch] = React.useReducer(reducer, { secretWord: "" });

  const setSecretWord = (secretWord) =>
    dispatch({ type: "setSecretWord", payload: secretWord });

  React.useEffect(() => {
    hookActions.getSecretWord(setSecretWord);
  }, []);

  return (
    <div className="container">
      <h1>Jotto</h1>
      {state.secretWord ? (
        <div data-test="component-app">
          <Input secretWord={state.secretWord} />
        </div>
      ) : (
        <div data-test="spinner">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <p>Loading secret word</p>
        </div>
      )}
    </div>
  );
}

export default App;
