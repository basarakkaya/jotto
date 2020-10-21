import React, { Component } from "react";
import { connect } from "react-redux";

import { giveUp, guessWord } from "../actions";

export class UnconnectedInput extends Component {
  state = {
    currentGuess: "",
  };

  submitGuessedWord = (e) => {
    e.preventDefault();

    const guessedWord = this.state.currentGuess;
    if (guessedWord && guessedWord.length > 0) {
      this.props.guessWord(guessedWord);
      this.setState({ currentGuess: "" });
    }
  };

  giveUp = (e) => {
    e.preventDefault();
    this.props.giveUp();
  };

  render() {
    return (
      <div data-test="component-input">
        {this.props.success || this.props.gaveUp ? null : (
          <form className="form-inline">
            <input
              data-test="input-box"
              className="mb-2 mx-sm-3"
              type="text"
              placeholder="Enter Guess"
              value={this.state.currentGuess}
              onChange={(e) => this.setState({ currentGuess: e.target.value })}
            />
            <button
              data-test="submit-button"
              type="submit"
              className="btn btn-primary mb-2"
              onClick={this.submitGuessedWord}
            >
              Submit
            </button>
            <button
              data-test="give-up-button"
              className="btn btn-danger mb-2"
              onClick={this.giveUp}
            >
              Give Up
            </button>
          </form>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ gaveUp, success }) => ({ gaveUp, success });

export default connect(mapStateToProps, { giveUp, guessWord })(
  UnconnectedInput
);
