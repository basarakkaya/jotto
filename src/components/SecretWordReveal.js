import React from "react";
import PropTypes from "prop-types";

const SecretWordReveal = ({ secretWord, show }) => {
  return (
    <>
      {show ? (
        <div data-test="secret-word-reveal" className="alert alert-danger">
          The secret word was "<span>{secretWord}</span>", better luck next
          time!
        </div>
      ) : null}
    </>
  );
};

export default SecretWordReveal;

SecretWordReveal.propTypes = {
  secretWord: PropTypes.string,
  show: PropTypes.bool,
};
