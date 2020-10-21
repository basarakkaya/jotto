import React, { Component } from "react";
import { connect } from "react-redux";

class TotalGuesses extends Component {
  render() {
    return (
      <div data-test="total-guesses">
        Total guesses:{" "}
        <span data-test="total-guesses-count">
          {this.props.guessedWords.length}
        </span>
      </div>
    );
  }
}

const mapStateToProps = ({ guessedWords }) => ({
  guessedWords,
});

export default connect(mapStateToProps)(TotalGuesses);
