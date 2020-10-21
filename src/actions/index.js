import axios from "axios";

import { getLetterMatchCount } from "../helpers";

export const actionTypes = {
  CORRECT_GUESS: "CORRECT_GUESS",
  GUESS_WORD: "GUESS_WORD",
  SET_SECRET_WORD: "SET_SECRET_WORD",
  RESET_ACTION: "RESET_ACTION",
  GIVE_UP: "GIVE_UP",
  ENTERING_NEW_WORD: "ENTERING_NEW_WORD",
  ENTERED_NEW_WORD: "ENTERED_NEW_WORD",
};

// /**
//  * @function correctGuess
//  * @returns {object} Action object with type "CORRECT_GUESS"
//  */
// export function correctGuess() {
//   return { type: actionTypes.CORRECT_GUESS };
// }

const getSecretWordDispatch = (dispatch) => {
  return axios.get("http://localhost:3030").then((response) =>
    dispatch({
      type: actionTypes.SET_SECRET_WORD,
      payload: response.data,
    })
  );
};

/**
 * Returns Redux Thunk function that dispatches GUESS_WORD action
 * and (conditionally) CORRECT_GUESS action
 * @function guessWord
 * @param {string} guessedWord Guessed word
 * @returns {function} Redux Thunk function
 */
export const guessWord = (guessedWord) => {
  return function (dispatch, getState) {
    const secretWord = getState().secretWord;
    const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);

    dispatch({
      type: actionTypes.GUESS_WORD,
      payload: { guessedWord, letterMatchCount },
    });

    if (guessedWord === secretWord) {
      dispatch({ type: actionTypes.CORRECT_GUESS });
    }
  };
};

export const getSecretWord = () => {
  return getSecretWordDispatch;
};

export const resetAction = () => {
  return (dispatch) => {
    dispatch({ type: actionTypes.RESET_ACTION });
    return getSecretWordDispatch(dispatch);
  };
};

export const giveUp = () => {
  return { type: actionTypes.GIVE_UP };
};

export const setUserEnteringWord = () => {
  return { type: actionTypes.ENTERING_NEW_WORD };
};

export const setUserEnteredWord = (userWord) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.SET_SECRET_WORD, payload: userWord });
    dispatch({ type: actionTypes.ENTERED_NEW_WORD });
  };
};
