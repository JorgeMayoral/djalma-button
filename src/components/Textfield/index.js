import PropTypes from "prop-types";
import { useState } from "react";
import Icon from "../Icon";
import Tooltip from "../Tooltip";

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
  size = "medium",
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
        className={`textfield__label 
          textfield__label--state-${subtext.type}`}
      >
        {label}
      </label>

      <div
        className={`textfield__container
          textfield__container--state-${subtext.type}`}
      >
        <input
          id={id}
          className={`textfield__container__input
            textfield__container__input--state-${subtext.type}
            textfield__container__input--size-${size}`}
          placeholder={placeholder}
          disabled={disabled}
          value={inputValue}
          onChange={handleInputChange}
        />
        {info ? (
          <div className="textfield__container__icon">
            <Tooltip text="info">
              <Icon icon="icon-info" color="#594794" size="2.4rem" />
            </Tooltip>
          </div>
        ) : null}
      </div>

      <p
        className={`textfield__subtext
          textfield__subtext--state-${subtext.type} 
          textfield__subtext--size-${size}`}
      >
        {subtext.msg}
      </p>
    </div>
  );
};

Textfield.propTypes = proptypes;

export default Textfield;
