import React, { Component } from "react";
import { connect } from "react-redux";

import Congrats from "./components/Congrats";
import GuessedWords from "./components/GuessedWords";
import Input from "./components/Input";
import { getSecretWord } from "./actions";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={this.props.success} />
        <Input />
        <GuessedWords guessedWords={this.props.guessedWords} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { success, secretWord, guessedWords } = state;
  return { success, secretWord, guessedWords };
};

export default connect(mapStateToProps, { getSecretWord })(App);
