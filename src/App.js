import React, { Component } from "react";
import { connect } from "react-redux";

import Congrats from "./components/Congrats";
import GuessedWords from "./components/GuessedWords";
import Input from "./components/Input";
import TotalGuesses from "./components/TotalGuesses";
import NewWordButton from "./components/NewWordButton";
import SecretWordReveal from "./components/SecretWordReveal";
import { getSecretWord, resetAction } from "./actions";

export class UnconnectedApp extends Component {
  componentDidMount() {
    // get the secret word
    this.props.getSecretWord();
  }

  render() {
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={this.props.success} />
        <SecretWordReveal
          show={this.props.gaveUp}
          secretWord={this.props.secretWord}
        />
        <NewWordButton
          show={this.props.success || this.props.gaveUp}
          resetAction={this.props.resetAction}
        />
        <Input />
        <GuessedWords guessedWords={this.props.guessedWords} />
        <TotalGuesses />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { success, secretWord, guessedWords, gaveUp } = state;
  return { success, secretWord, guessedWords, gaveUp };
};

export default connect(mapStateToProps, { getSecretWord, resetAction })(
  UnconnectedApp
);
