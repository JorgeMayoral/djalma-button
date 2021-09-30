import PropTypes from "prop-types";
import { useState } from "react";
import Icon from "../Icon";

const proptypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  helpText: PropTypes.string,
  errorText: PropTypes.string,
  successText: PropTypes.string,
  disabled: PropTypes.bool,
  info: PropTypes.bool,
  value: PropTypes.string,
};

const Textfield = ({
  id,
  label,
  placeholder,
  helpText,
  errorText,
  successText,
  disabled,
  info,
  value,
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
          errorText ? "textfield__label--state-error" : ""
        } ${successText ? "textfield__label--state-success" : ""}`}
      >
        {label}
      </label>
      <div
        className={`textfield__container  ${
          errorText ? "textfield__container--state-error" : ""
        } ${successText ? "textfield__container--state-success" : ""}`}
      >
        <input
          id={id}
          className={`textfield__container__input ${
            errorText ? "textfield__container__input--state-error" : ""
          } ${successText ? "textfield__container__input--state-success" : ""}`}
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
      {helpText ? <p className="textfield__subtext">{helpText}</p> : null}
      {errorText ? (
        <p className="textfield__subtext textfield__subtext--state-error">
          {errorText}
        </p>
      ) : null}
      {successText ? (
        <p className="textfield__subtext textfield__subtext--state-success">
          {successText}
        </p>
      ) : null}
    </div>
  );
};

Textfield.propTypes = proptypes;

export default Textfield;
