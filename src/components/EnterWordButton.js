import React from "react";
import PropTypes from "prop-types";

const EnterWordButton = ({ newWordAction, show }) => {
  return (
    <>
      {show ? (
        <button
          data-test="enter-word-button"
          className="btn btn-primary mb-2"
          onClick={newWordAction}
        >
          Enter Your Own Secret Word
        </button>
      ) : null}
    </>
  );
};

export default EnterWordButton;

EnterWordButton.propTypes = {
  newWordAction: PropTypes.func,
  show: PropTypes.bool,
};
