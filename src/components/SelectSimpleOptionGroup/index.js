import PropTypes from "prop-types";
import SelectSimpleOption from "../SelectSimpleOption";

const proptypes = {
  options: PropTypes.array,
  onSelect: PropTypes.func,
};

const SelectSimpleOptionGroup = ({ options, onSelect }) => {
  return (
    <div className="select-simple-option-group">
      {options.map((opt) => (
        <SelectSimpleOption text={opt} onClick={onSelect} />
      ))}
    </div>
  );
};

SelectSimpleOptionGroup.propTypes = proptypes;

export default SelectSimpleOptionGroup;
