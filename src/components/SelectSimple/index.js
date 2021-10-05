import PropTypes from "prop-types";
import { useState } from "react";
import SelectSimpleOptionGroup from "../SelectSimpleOptionGroup";
import Icon from "../Icon";

const proptypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.array,
  placeholder: PropTypes.string,
  subtext: PropTypes.object,
  disabled: PropTypes.bool,
  value: PropTypes.any,
  onChange: PropTypes.func,
};

const SelectSimple = ({
  id,
  label,
  options,
  subtext = {},
  disabled = false,
  value = null,
  onChange = () => {},
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownOpen = () => {
    if (!disabled) {
      setDropdownOpen((prev) => !prev);
    }
  };

  const handleSelect = (selectedValue) => {
    onChange(selectedValue);
    setDropdownOpen(false);
  };

  return (
    <div className="select-simple">
      <label
        htmlFor={id}
        className={`select-simple__label select-simple__label--${subtext.type}`}
      >
        {label}
      </label>
      <div
        className={`select-simple__container select-simple__container--${subtext.type}`}
        onClick={handleDropdownOpen}
      >
        {value ? (
          <p
            className={`select-simple__container__text select-simple__container__text--${subtext.type}`}
          >
            {value}
          </p>
        ) : (
          <p className="select-simple__container__placeholder">
            Select an option
          </p>
        )}
        <Icon
          color="#594794"
          icon={dropdownOpen ? "icon-dismiss" : "icon-caret-down"}
        />
      </div>
      {subtext.msg && (
        <p
          className={`select-simple__subtext select-simple__subtext--${subtext.type}`}
        >
          {subtext.msg}
        </p>
      )}
      {dropdownOpen && (
        <SelectSimpleOptionGroup options={options} onSelect={handleSelect} />
      )}
    </div>
  );
};

SelectSimple.propTypes = proptypes;

export default SelectSimple;
