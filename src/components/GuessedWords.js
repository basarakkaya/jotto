import React from "react";
import PropTypes from "prop-types";

const GuessedWords = (props) => {
  return (
    <div data-test="component-guessed-words">
      {props.guessedWords.length === 0 ? (
        <span data-test="guess-instructions">
          Try to guess the correct word!
        </span>
      ) : (
        <div data-test="guessed-words">
          <h3>Guessed Words</h3>
          <table className="table table-sm">
            <thead className="thead-light">
              <tr>
                <th>#</th>
                <th>Guess</th>
                <th>Matching Letters</th>
              </tr>
            </thead>
            <tbody>
              {props.guessedWords.map((word, index) => (
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

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    })
  ).isRequired,
};
