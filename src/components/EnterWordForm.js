import React, { Component } from "react";
import PropTypes from "prop-types";

export class UnconnectedEnterWordForm extends Component {
  state = { userSecretWord: "" };

  submitSecretWord = (e) => {
    e.preventDefault();

    this.props.submitAction(this.state.userSecretWord);
  };

  render() {
    return (
      <form data-test="enter-word-form">
        <div data-test="enter-word-instructions">
          Enter a secret word for someone else to guess
        </div>
        <input
          data-test="enter-word-input"
          placeholder="Enter your own secret word!"
          value={this.state.userSecretWord}
          onChange={(e) => this.setState({ userSecretWord: e.target.value })}
        />
        <button
          data-test="enter-word-submit"
          className="btn btn-primary mb-2"
          onClick={this.submitSecretWord}
        >
          Submit
        </button>
      </form>
    );
  }
}

export default UnconnectedEnterWordForm;

UnconnectedEnterWordForm.propTypes = {
  submitAction: PropTypes.func,
};
