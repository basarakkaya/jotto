import React, { Component } from "react";
import { connect } from "react-redux";

class Input extends Component {
  render() {
    return (
      <div data-test="component-input">
        {this.props.success ? null : (
          <form className="form-inline">
            <input
              data-test="input-box"
              className="mb-2 mx-sm-3"
              type="text"
              placeholder="Enter Guess"
            />
            <button
              data-test="submit-button"
              type="submit"
              className="btn btn-primary mb-2"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ success }) => ({ success });

export default connect(mapStateToProps)(Input);
