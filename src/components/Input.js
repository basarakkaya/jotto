import React from "react";
import PropTypes from "prop-types";

import languageContext from "../contexts/languageContext";
import stringsModule from "../helpers/strings";

const Input = ({ secretWord }) => {
  const language = React.useContext(languageContext);
  const [currentGuess, setCurrentGuess] = React.useState("");

  const submitGuess = (e) => {
    e.preventDefault();

    // TODO: update guessedWords
    // TODO: check against secretWord and update success

    setCurrentGuess("");
  };

  return (
    <div data-test="component-input">
      <form className="form-inline">
        <input
          data-test="input-box"
          className="mb-2 mx-sm-3"
          type="text"
          placeholder={stringsModule.getStringByLanguage(
            language,
            "guessInputPlaceholder"
          )}
          value={currentGuess}
          onChange={(e) => setCurrentGuess(e.target.value)}
        />
        <button
          data-test="submit-button"
          className="btn btn-primary mb-2"
          onClick={submitGuess}
        >
          {stringsModule.getStringByLanguage(language, "submit")}
        </button>
      </form>
    </div>
  );
};

export default Input;

Input.propTypes = {
  secretWord: PropTypes.string.isRequired,
};
