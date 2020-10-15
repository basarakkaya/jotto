import React from "react";

/**
 * Functional react component for congrats message
 * @function
 * @param {object} props - React props
 * @returns {JSX.Element} - Rendered Component
 */
const Congrats = (props) => {
  return (
    <div data-test="component-congrats">
      {props.success && (
        <span data-test="congrats-message">
          Congratulations! You guessed the word!
        </span>
      )}
    </div>
  );
};

export default Congrats;
