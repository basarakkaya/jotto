import React from "react";

import guessedWordsContext from "../contexts/guessedWordsContext";
import languageContext from "../contexts/languageContext";
import stringsModule from "../helpers/strings";

const GuessedWords = () => {
  const language = React.useContext(languageContext);
  const [guessedWords] = guessedWordsContext.useGuessedWords();

  return (
    <div data-test="component-guessed-words">
      {guessedWords.length === 0 ? (
        <span data-test="guess-instructions">
          {stringsModule.getStringByLanguage(language, "guessPrompt")}
        </span>
      ) : (
        <div data-test="guessed-words">
          <h3>
            {stringsModule.getStringByLanguage(language, "guessColumnHeader")}
          </h3>
          <table className="table table-sm">
            <thead className="thead-light">
              <tr>
                <th>#</th>
                <th>
                  {stringsModule.getStringByLanguage(language, "guessedWords")}
                </th>
                <th>
                  {stringsModule.getStringByLanguage(
                    language,
                    "matchingLettersColumnHeader"
                  )}
                </th>
              </tr>
            </thead>
            <tbody>
              {guessedWords.map((word, index) => (
                <tr data-test="guessed-word" key={index}>
                  <td data-test="guessed-word-index">{index + 1}</td>
                  <td>{word.guessedWord}</td>
                  <td>{word.letterMatchCount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default GuessedWords;
