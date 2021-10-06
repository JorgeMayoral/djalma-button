import PropTypes from "prop-types";
import SelectMultipleOption from "../SelectMultipleOption";

const proptypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    })
  ),
  onSelect: PropTypes.func,
  selected: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    })
  ),
};

const SelectMultipleOptionGroup = ({ options, onSelect, selected }) => {
  return (
    <div className="select-multiple-option-group">
      {options.map((opt, index) => (
        <SelectMultipleOption
          key={index}
          option={opt}
          onClick={onSelect}
          isSelected={selected.some((sel) => sel.value === opt.value)}
        />
      ))}
    </div>
  );
};

SelectMultipleOptionGroup.propTypes = proptypes;

export default SelectMultipleOptionGroup;
