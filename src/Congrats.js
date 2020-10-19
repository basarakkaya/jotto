import React from "react";
import PropTypes from "prop-types";

/**
 * Functional react component for congrats message
 * @function
 * @param {object} props - React props
 * @returns {JSX.Element} - Rendered Component
 */
const Congrats = (props) => {
  return (
    <div
      data-test="component-congrats"
      className={props.success ? "alert alert-success" : ""}
    >
      {props.success && (
        <span data-test="congrats-message">
          Congratulations! You guessed the word!
        </span>
      )}
    </div>
  );
};

export default Congrats;

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
};
