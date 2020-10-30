import React from "react";
import PropTypes from "prop-types";

const LanguagePicker = ({ setLanguage }) => {
  const languages = [
    { code: "en", symbol: "🇺🇸" },
    { code: "emoji", symbol: "😊" },
  ];

  return (
    <div data-test="component-language-picker">
      {languages.map((lang) => (
        <span
          data-test="language-icon"
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
        >
          {lang.symbol}
        </span>
      ))}
    </div>
  );
};

export default LanguagePicker;

LanguagePicker.propTypes = {
  setLanguage: PropTypes.func.isRequired,
};
