import PropTypes from "prop-types";
import SelectSimpleOption from "../SelectSimpleOption";

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
};

const SelectSimpleOptionGroup = ({ options, onSelect }) => {
  return (
    <div className="select-simple-option-group">
      {options.map((opt, index) => (
        <SelectSimpleOption key={index} option={opt} onClick={onSelect} />
      ))}
    </div>
  );
};

SelectSimpleOptionGroup.propTypes = proptypes;

export default SelectSimpleOptionGroup;
