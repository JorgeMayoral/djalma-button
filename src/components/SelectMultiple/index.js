import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import SelectMultipleOptionGroup from "../SelectMultipleOptionGroup";
import Icon from "../Icon";
import ChipOptionSelected from "../ChipOptionSelected";

const proptypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    })
  ),
  placeholder: PropTypes.string,
  subtext: PropTypes.shape({
    type: PropTypes.string.isRequired,
    msg: PropTypes.string.isRequired,
  }),
  disabled: PropTypes.bool,
  value: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    })
  ),
  onChange: PropTypes.func,
};

const SelectMultiple = ({
  id,
  label,
  options,
  subtext = {},
  disabled = false,
  value = [],
  onChange = () => {},
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const ref = useRef();

  useEffect(() => {
    const closeOptions = (e) => {
      if (dropdownOpen && ref.current && !ref.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };

    if (dropdownOpen) {
      document.addEventListener("click", closeOptions);
    }

    return () => {
      document.removeEventListener("click", closeOptions);
    };
  }, [dropdownOpen]);

  const handleDropdownOpen = () => {
    if (!disabled) {
      setDropdownOpen((prev) => !prev);
    }
  };

  const handleSelect = (selectedValue) => {
    if (value.some((sel) => selectedValue.value === sel.value)) {
      const newValues = value.filter(
        (sel) => selectedValue.value !== sel.value
      );
      onChange(newValues);
    } else {
      const newValues = [...value, selectedValue];
      onChange(newValues);
    }
    setDropdownOpen(false);
  };

  return (
    <div className="select-multiple" ref={ref}>
      <label
        htmlFor={id}
        className={`select-multiple__label select-multiple__label--${subtext.type}`}
      >
        {label}
      </label>
      <div
        className={`select-multiple__container select-multiple__container--${subtext.type}`}
        onClick={handleDropdownOpen}
      >
        {value && value.length > 0 ? (
          <div className="select-multiple__container__text">
            {value.map((opt) => (
              <ChipOptionSelected
                key={opt.value}
                option={opt}
                onClick={handleSelect}
              />
            ))}
          </div>
        ) : (
          <p className="select-multiple__container__placeholder">
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
          className={`select-multiple__subtext select-multiple__subtext--${subtext.type}`}
        >
          {subtext.msg}
        </p>
      )}
      {dropdownOpen && (
        <SelectMultipleOptionGroup
          options={options}
          onSelect={handleSelect}
          selected={value}
        />
      )}
    </div>
  );
};

SelectMultiple.propTypes = proptypes;

export default SelectMultiple;
