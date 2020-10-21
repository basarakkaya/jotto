import React from "react";
import PropTypes from "prop-types";

export default function NewWordButton({ resetAction, show }) {
  return (
    <>
      {show ? (
        <button
          data-test="new-word-button"
          className="btn btn-primary mb-2"
          onClick={resetAction}
        >
          New Word
        </button>
      ) : null}
    </>
  );
}

NewWordButton.propTypes = {
  show: PropTypes.bool,
  resetAction: PropTypes.func,
};
