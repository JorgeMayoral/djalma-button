import PropTypes from "prop-types";
import { useState } from "react";
import Icon from "../Icon";

const proptypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  info: PropTypes.bool,
  value: PropTypes.string,
  size: PropTypes.string,
  subtext: PropTypes.object,
};

const Textfield = ({
  id,
  label,
  placeholder,
  disabled,
  info,
  value,
  size = "30rem",
  subtext = {},
}) => {
  const [inputValue, setInputValue] = useState(value);

  const handleInputChange = (ev) => {
    setInputValue(ev.target.value);
  };

  return (
    <div className={`textfield ${disabled ? "textfield--state-disabled" : ""}`}>
      <label
        htmlFor={id}
        className={`textfield__label ${
          hasError(subtext) ? "textfield__label--state-error" : ""
        } ${hasSuccess(subtext) ? "textfield__label--state-success" : ""}`}
      >
        {label}
      </label>

      <div
        style={{ width: size }}
        className={`textfield__container  ${
          hasError(subtext) ? "textfield__container--state-error" : ""
        } ${hasSuccess(subtext) ? "textfield__container--state-success" : ""}`}
      >
        <input
          id={id}
          className={`textfield__container__input ${
            hasError(subtext) ? "textfield__container__input--state-error" : ""
          } ${
            hasSuccess(subtext)
              ? "textfield__container__input--state-success"
              : ""
          }`}
          placeholder={placeholder}
          disabled={disabled}
          value={inputValue}
          onChange={handleInputChange}
        />
        {info ? (
          <Icon
            icon="icon-info textfield__container__icon"
            color="#594794"
            size="2.4rem"
          />
        ) : null}
      </div>

      {hasHelp(subtext) ? (
        <p className="textfield__subtext">{subtext.help}</p>
      ) : null}

      {hasError(subtext) ? (
        <p className="textfield__subtext textfield__subtext--state-error">
          {subtext.error}
        </p>
      ) : null}

      {hasSuccess(subtext) ? (
        <p className="textfield__subtext textfield__subtext--state-success">
          {subtext.success}
        </p>
      ) : null}
    </div>
  );
};

function hasHelp(subtext) {
  return Object.keys(subtext).includes("help");
}

function hasError(subtext) {
  return Object.keys(subtext).includes("error");
}

function hasSuccess(subtext) {
  return Object.keys(subtext).includes("success");
}

Textfield.propTypes = proptypes;

export default Textfield;
