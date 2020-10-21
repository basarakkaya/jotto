import { combineReducers } from "redux";
import gaveUp from "./giveUpReducer";
import guessedWords from "./guessedWordsReducer";
import enteringNewWord from "./newWordReducer";
import secretWord from "./secretWordReducer";
import success from "./successReducer";

export default combineReducers({
  gaveUp,
  guessedWords,
  enteringNewWord,
  secretWord,
  success,
});
