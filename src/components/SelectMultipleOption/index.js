import PropTypes from "prop-types";
import { useState } from "react";
import Icon from "../Icon";

const proptypes = {
  option: PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }),
  onClick: PropTypes.func,
  isSelected: PropTypes.bool,
};

const SelectMultipleOption = ({ onClick, option }) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div
      className={`select-multiple-option ${
        isSelected ? "select-multiple-option--selected" : ""
      }`}
      onClick={() => setIsSelected((prev) => !prev)}
    >
      <span
        className={`select-multiple-option__checkbox ${
          isSelected ? "select-multiple-option__checkbox--selected" : ""
        }`}
      >
        <Icon color="#FAFAFA" size="1.6rem" icon="icon-check" />
      </span>
      {option.label}
    </div>
  );
};

SelectMultipleOption.protoTypes = proptypes;

export default SelectMultipleOption;
