import React from "react";
import PropTypes from "prop-types";

import guessedWordsContext from "../contexts/guessedWordsContext";
import languageContext from "../contexts/languageContext";
import successContext from "../contexts/successContext";
import stringsModule from "../helpers/strings";
import { getLetterMatchCount } from "../helpers";

const Input = ({ secretWord }) => {
  const language = React.useContext(languageContext);
  const [currentGuess, setCurrentGuess] = React.useState("");
  const [success, setSuccess] = successContext.useSuccess();
  const [guessedWords, setGuessedWords] = guessedWordsContext.useGuessedWords();

  const submitGuess = (e) => {
    e.preventDefault();

    // update guessedWords
    const letterMatchCount = getLetterMatchCount(currentGuess, secretWord);
    const newGuessedWords = [
      ...guessedWords,
      { guessedWord: currentGuess, letterMatchCount },
    ];

    setGuessedWords(newGuessedWords);

    // check against secretWord and update success
    if (currentGuess === secretWord) {
      setSuccess(true);
    }

    setCurrentGuess("");
  };

  if (success) {
    return null;
  }

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
